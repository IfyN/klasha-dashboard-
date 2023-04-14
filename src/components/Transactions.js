import React from "react";
import { StyledTransactions } from "./Transactions.styles";
import SearchBox from "./Search";
import { useGlobalFilter, useTable } from "react-table";

function Transactions() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Transaction ID",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "Source",
        accessor: "source",
      },
      {
        Header: "Customer name",
        accessor: "name",
      },
      {
        Header: "Customer email",
        accessor: "email",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Request date",
        accessor: "reqdate",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        id: "GB124QWERTY12346",
        source: "GTB",
        name: "Mike Owen",
        email: "0223337281",
        amount: "$230.00",
        reqdate: "24.08.2021",
        status: "Pending",
      },
      {
        id: "CB328ABCEDF23416",
        source: "UBA",
        name: "Steve O'Shassy",
        email: "0982764829",
        amount: "$480.00",
        reqdate: "22.08.2021",
        status: "Successful",
      },
      {
        id: "GB124QWERTY12346",
        source: "GTB",
        name: "Mike Owen",
        email: "0223337281",
        amount: "$230.00",
        reqdate: "24.08.2021",
        status: "Pending",
      },
      {
        id: "GB124QWERTY12346",
        source: "GTB",
        name: "Mike Owen",
        email: "0223337281",
        amount: "$230.00",
        reqdate: "24.08.2021",
        status: "Pending",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data }, useGlobalFilter);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  return (
      <StyledTransactions>
        <h3> Transaction History </h3>
        <SearchBox value={state.globalFilter} onChange={setGlobalFilter} />
        <div className="table-container">
          <table {...getTableProps()}>
            <thead>
              {
                // Loop over the header rows
                headerGroups.map((headerGroup) => (
                  // Apply the header row props
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                      // Loop over the headers in each row
                      headerGroup.headers.map((column) => (
                        // Apply the header cell props
                        <th {...column.getHeaderProps()}>
                          {
                            // Render the header
                            column.render("Header")
                          }
                        </th>
                      ))
                    }
                  </tr>
                ))
              }
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
              {
                // Loop over the table rows
                rows.map((row) => {
                  // Prepare the row for display
                  prepareRow(row);
                  return (
                    // Apply the row props
                    <tr {...row.getRowProps()}>
                      {
                        // Loop over the rows cells
                        row.cells.map((cell) => {
                          // Apply the cell props
                          return (
                            <td {...cell.getCellProps()}>
                              {
                                // Render the cell contents
                                cell.render("Cell")
                              }
                            </td>
                          );
                        })
                      }
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </StyledTransactions>
  );
}

export default Transactions;

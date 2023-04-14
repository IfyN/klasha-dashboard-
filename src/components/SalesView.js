import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { StyledSalesView } from "./SalesView.styles";
import { MiniChart } from "./MiniChart";
import { MaxChart } from "./MaxChart";

function SalesView() {
  const [select, setSelect] = useState("USD");
  const [canvas, setCanvasSize] = useState();
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const size = entry.contentBoxSize[0].inlineSize;
        setCanvasSize(size);
      }
    });

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  const handleClick = () => {};
  return (
    <StyledSalesView>
      <h3> Sales Overview </h3>
      <div className="infobox-container">
        {MiniChart.map((item, idx) => {
          return (
            <div className={`data-box ${idx === 1 ? "black" : ""}`} key={idx}>
              <p>{item.date}</p>
              <img src={item.img} alt="" />
              <p> {item.period}</p>
              <p className="cost">{item.cost}</p>
            </div>
          );
        })}
      </div>

      <div className="info-section">
        <h3> Sales</h3>
        <p className="p-days">7 days</p>
        <p>30 days</p>
        <form>
          <select placeholder="USD" defaultValue="USD">
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>

          <input type="email" value="Email" placeholder="Email" />
        </form>
      </div>
      <div className="klasha-infobox">
        <div className="klasha_chart" ref={ref}>
          <MaxChart />
        </div>
        <div className="klasha_info">
          <p className="wire-text">
            KlashaWire - send <br />
            money to businesses
            <br /> globally from Africa
          </p>
          <Link to="/wire">
            <button onClick={handleClick}> Send a Wire </button>
          </Link>
        </div>
      </div>
    </StyledSalesView>
  );
}

export default SalesView;

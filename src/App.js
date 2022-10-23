import "./App.css";
import axios from "axios";
import { useState } from "react";
function App() {
  const [quote, setQuote] = useState("Hello World!");

  const getData = async () => {
    await axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setQuote(res.data.slip.advice));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <small>ADVICE </small>

          <p>{quote}</p>

          <svg
            className="svgMobile "
            width="295"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>

          <button className="btn" onClick={getData}>
            Get Advice
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

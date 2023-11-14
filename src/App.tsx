import styled from "styled-components";
import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import "./App.css";
import { error } from "console";

function App() {
  const [bill, setBill] = useState<number | null>(null); //state ikneba an null an number
  const [people, setPeople] = useState<number | null>(null);
  const [tip, setTip] = useState<number | null>(null);
  const [peopleError, setPeopleError] = useState("");

  const allright = bill !== null && people !== null && tip !== null;
  const tipAmount = allright && ((bill * tip) / people).toFixed(2);
  const totalPerPerson = allright && ((bill * (1 + tip)) / people).toFixed(2);
  /* to fixed 2 anu amrgvalebs da wiladis mxolod or wiprs achvenebs mag 22.00 tetrebs anu  mara astringebs */
  const showTip = !(tipAmount === "NaN" || tipAmount === "Infinity");
  const showTotal = !(
    totalPerPerson === "NaN" || totalPerPerson === "Infinity"
  );
  useEffect(() => {
    if (people === 0) {
      setPeopleError("can not be zero");
    } else {
      setPeopleError("");
    }
  }, [people]);

  return (
    <Body>
      <div className="tetri">
        <div className="pirveli">
          <h1 className="bill">Bill:</h1>
          <input
            placeholder="0.00$"
            type="number" //marto number chaiwereba
            onChange={(e) => {
              setBill(e.target.valueAsNumber);
            }}
          />
          <div className="pat">
            <button
              onClick={() => {
                setTip(0.05);
              }}
            >
              5%
            </button>
            <button
              onClick={() => {
                setTip(0.1);
              }}
            >
              10%
            </button>
            <button
              onClick={() => {
                setTip(0.15);
              }}
            >
              15%
            </button>
            <br />
            <button
              onClick={() => {
                setTip(0.2);
              }}
            >
              20%
            </button>
            <button
              onClick={() => {
                setTip(0.25);
              }}
            >
              25%
            </button>
            <button
              onClick={() => {
                setTip(0.5);
              }}
            >
              50%
            </button>
            <div>
              {" "}
              <h3 className="h">{peopleError}</h3>{" "}
            </div>
            <div className="didi">
              <h1 className="bill">Number of People:</h1>
              <input
                placeholder="0"
                type="number"
                min={0}
                step={1}
                onKeyDown={(e) => {
                  if (e.key === ".") {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => {
                  console.log(e.target.valueAsNumber);
                  setPeople(Number(e.target.valueAsNumber.toFixed(0)));
                }}
              />
            </div>
          </div>
        </div>
        <div className="meore">
          <div className="divider">
            <div>
              <h6 className="tip">tip amount:</h6>{" "}
              <span className="spani">/ person</span>
            </div>
            <h1 className="per">{showTip ? tipAmount : "0.00"}</h1>
          </div>
          <div className="divider">
            <div>
              <h1 className="tip"> total:</h1>
              <span className="spani">/ person</span>
            </div>
            <h1 className="per">{showTotal ? totalPerPerson : "0.00"}</h1>
          </div>
        </div>
      </div>
    </Body>
  );
}

export default App;

const Body = styled.body`
  width: 100%;
  height: 100vh;
  font-size: 40px;
  font-weight: bolder;
  background-color: #a6e3e1;
  width: 100%;
  height: 100vh;
  font-family: monospace;
  dispaly: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10%;
`;

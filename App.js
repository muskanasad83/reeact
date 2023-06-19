import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

export default function App() {
  const [serviceList, setServiceList] = useState([
    {
      service: "",
    },
  ]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <form className="App" autoComplete="off">
          <div className="form-field">
            <lable htmlFor="service">Enter Text Here</lable>
            {serviceList.map((singleService, index) => (
              <div key={index} className="services">
                <div className="first-division">
                  <input
                    name="service"
                    type="text"
                    id="service"
                    required
                    value={singleService.service}
                    onChange={(e) => handleServiceChange(e, index)}
                  />
                  {serviceList.length - 1 === index &&
                    serviceList.length < 10 && (
                      <button
                        type="button"
                        className="add-btn"
                        onClick={handleServiceAdd}
                      >
                        <span>Done</span>
                      </button>
                    )}
                  <div className="second-division">
                    {serviceList.length > 1 && (
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => handleServiceRemove(index)}
                      >
                        <span>Cancel</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="output">
            <h2>PreView</h2>
            {serviceList.map((singleService, index) => (
              <ul key={index}>
                {singleService.service && <li>{singleService.service}</li>}
              </ul>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

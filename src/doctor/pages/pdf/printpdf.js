import React, { useRef } from "react";
import "./printpdf.scss";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";

export default function Printpdf() {
  const navigate = useNavigate();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "patient-data",
  });

  let Pro_page = () => {
    console.log("profile");
    localStorage.removeItem("observation");
    localStorage.removeItem("prescription");
    localStorage.removeItem("pressure");
    localStorage.removeItem("temp");
    localStorage.removeItem("oxyg");
    localStorage.removeItem("sugar");
    localStorage.removeItem("pat_name");
    localStorage.removeItem("pat_age");
    localStorage.removeItem("pat_email");
    localStorage.removeItem("pat_num");
    navigate("/doctor/");
  };

  let observation = localStorage.getItem("observation");
  let prescription = localStorage.getItem("prescription");
  let pressure = localStorage.getItem("pressure");
  let temp = localStorage.getItem("temp");
  let oxyg = localStorage.getItem("oxyg");
  let sugar = localStorage.getItem("sugar");
  let pat_name = localStorage.getItem("pat_name");
  let pat_age = localStorage.getItem("pat_age");
  let pat_email = localStorage.getItem("pat_email");
  let pat_num = localStorage.getItem("pat_num");
  let doc_name = localStorage.getItem("doctor_name");
  let doc_dept = localStorage.getItem("doctor_depart");
  let doc_email = localStorage.getItem("doctor_email");
  let hos_name = localStorage.getItem("hospital_name");
  let hos_addr = localStorage.getItem("hospital_addr");

  let doc_img = localStorage.getItem("doctor_img");

  let observationList = observation.split("\n");
  let prescriptionList = prescription.split("\n");

  let newRow = (e) => {
    let data = e.split(",");
    return (
      <tr>
        <td style={{ border: "none" }}>{data[0]}</td>
        <td>{data[1]}</td>
        <td>{data[2]}</td>
      </tr>
    );
  };

  return (
    <div className="total">
      <div className="print-page">
        <div className="container shadow print-page-a4" ref={componentRef}>
          <div className="print-page-head">
            <div style={{ marginTop: "10px" }} className="print-page-a4-1">
              {hos_name}
            </div>
            <div className="print-page-a4-2">{hos_addr}</div>
          </div>
          <div className="print-page-main">
            <div className="print-page-main-sect0">
              <img src={doc_img} alt="" />
              <div className="print-page-main-doc-det">
                <p className="print-page-a4-4">Name : {doc_name}</p>
                <p className="print-page-a4-4">Department : {doc_dept}</p>
                <p className="print-page-a4-4">Email : {doc_email}</p>
              </div>
            </div>
            <hr />
            <div className="print-page-main-sect1">
              <div className="doc-part">
                <h4 className="print-page-a4-4">Name : {pat_name}</h4>
                <h4 className="print-page-a4-4">Age : {pat_age}</h4>
                <h4 className="print-page-a4-4">Email : {pat_email}</h4>
                <h4 className="print-page-a4-4">Number : {pat_num}</h4>
              </div>
              <div className="bp-temp">
                <div className="print-page-a4-4">
                  Blood Pressure : {pressure} mmHg
                </div>
                <div className="print-page-a4-4">
                  Temperature : {temp} Celsius
                </div>
                <div className="print-page-a4-4">Oxygen level : {oxyg}%</div>
                <div className="print-page-a4-4">
                  Sugar level : {sugar} mg/DL
                </div>
              </div>
            </div>
            <hr />
            <div className="print-page-main-sect2">
              <h3>Observations</h3>
              <ul>
                {observationList.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <hr />
            <div className="print-page-main-sect3">
              <h3>Prescriptions</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">Dosage</th>
                    <th scope="col">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {prescriptionList.map((item) => {
                    return newRow(item);
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="button-part1">
        <button
          style={{ marginTop: "5px", borderRadius: "12px" }}
          className="submit-button1"
          onClick={() => {
            handlePrint();
          }}
        >
          Print
        </button>
        <button
          style={{ marginTop: "5px", borderRadius: "12px" }}
          className="submit-button1"
          onClick={() => {
            Pro_page();
          }}
        >
          back to Dashboard
        </button>
      </div>
    </div>
  );
}

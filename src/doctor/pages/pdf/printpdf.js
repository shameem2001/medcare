import React,{useRef} from 'react'
import "./printpdf.scss";
import { useReactToPrint } from 'react-to-print';
import { useNavigate } from 'react-router-dom';

export default function Printpdf() {

    const navigate= useNavigate();
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint( {
        content: () => componentRef.current,
        documentTitle: 'patient-data'
    })

    let Pro_page = () =>{
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
        navigate("/doctor/")
    }

   let observation= localStorage.getItem("observation");
   let prescription= localStorage.getItem("prescription");
   let pressure= localStorage.getItem("pressure");
   let temp= localStorage.getItem("temp");
   let oxyg= localStorage.getItem("oxyg");
   let sugar= localStorage.getItem("sugar");
   let pat_name= localStorage.getItem("pat_name");
   let pat_age= localStorage.getItem("pat_age");
   let pat_email= localStorage.getItem("pat_email");
   let pat_num= localStorage.getItem("pat_num");
   let doc_name= localStorage.getItem("doctor_name");
   let doc_dept= localStorage.getItem("doctor_depart");
   let doc_email= localStorage.getItem("doctor_email");
   let hos_name= localStorage.getItem("hospital_name");
   let hos_addr= localStorage.getItem("hospital_addr");

    let observationList = observation.split("\n");
    let prescriptionList = prescription.split("\n");

    let newRow = (e) => {
        let data = e.split(",");
        return (
          <tr>
            <td>{data[0]}</td> 
            <td>{data[1]}</td> 
            <td>{data[2]}</td> 
          </tr>
          
        );
      };

      let newRow1 = (e) => {
        return (
          <tr>
            <td>{e}</td>
          </tr>
        );
      };



  return (
    <div className='total'>
        <div className='print-page' ref={componentRef} style={{width:'100%' , height:'80%'}}>
            <div className='print-page-a4' >
                    <div className='print-page-head'>
                        <div className='print-page-a4-1'>
                            {hos_name}
                        </div>
                        <div className='print-page-a4-2'>
                            {hos_addr}
                        </div>
                    </div>
                    <div className='print-page-main'>
                        <div className='doc-part'>
                            <div className='print-page-a4-3'>
                                Doctor-details
                            </div>
                            <div className='print-page-a4-4'>
                                Name : {doc_name}
                            </div>
                            <div className='print-page-a4-4'>
                                Department : {doc_dept}
                            </div>
                            <div className='print-page-a4-4'>
                                Email : {doc_email}
                            </div>
                        </div>
                        <div className='patient-part'>
                            <div className='print-page-a4-3'>
                                Patient-details
                            </div>
                            <div className='print-page-a4-4'>
                                Name : {pat_name}
                            </div>
                            <div className='print-page-a4-4'>
                                Age : {pat_age}
                            </div>
                            <div className='print-page-a4-4'>
                                Email : {pat_email}
                            </div>
                            <div className='print-page-a4-4'>
                                Number : {pat_num}
                            </div>
                            <div className='forpadding'></div>
                            <div className='print-page-a4-4'>
                                Blood Pressure : {pressure}
                            </div>
                            <div className='print-page-a4-4'>
                               Temperature : {temp}
                            </div>
                            <div className='print-page-a4-4'>
                                Oxygen level : {oxyg}
                            </div>
                            <div className='print-page-a4-4'>
                                Sugar level : {sugar}
                            </div>
                            <div className='forpadding'></div>
                            <div className='print-page-a4-4'>
                                <span>Observation :</span>
                            </div>
                            <table className="table">
                                 <tbody>
                                     {observationList.map((item) => {
                                       return newRow1(item);
                                      })}
                                  </tbody>
                            </table>
                            <div className='forpadding'></div>
                            <div className='print-page-a4-4'>
                                <span>Prescription :</span>
                            </div>
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
        <div className='button-part'>
                <button
                            style={{ marginTop: "5px", borderRadius: "12px" }}
                            className="submit-button"
                            onClick={() => {
                              handlePrint();
                            }}
                          >
                            Print
                </button>
                <button
                            style={{ marginTop: "5px", borderRadius: "12px" }}
                            className="submit-button"
                            onClick={() => {
                              Pro_page();
                            }}
                          >
                            back to profile
                </button>
            </div>
    </div>
  )
}


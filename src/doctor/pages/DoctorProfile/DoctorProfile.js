import React from "react";
import { useEffect, useState } from "react";
import apis from "../../../apis";
import * as filestack from "filestack-js";
import Button from "react-bootstrap/Button";
import "./DoctorProfile.scss";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function DoctorProfile() {
  const [doctData, setDoctData] = useState({});

  const doctor_id = localStorage.getItem("doctor_id");

  useEffect(() => {
    fetch();
  }, []);
  
  let fetch = async () => {
    let results;
    await apis
      .get(`doctor/${doctor_id}`)
      .then((data) => {
        results = data.data;
        setImg(results.img);
      })
      .catch((err) => console.log(err));
    console.log(results);
    console.log(results.name);
    setDoctData(results);
  };

  const doctor_img = localStorage.getItem("doctor_img");

  const FILESTACK_APIKEY = "AR9a0fhrDRleWdYYiy68qz";
  let [file_data, setFile_data] = useState({});
  let [img_up, setImg] = useState(doctor_img);
  const client = filestack.init(FILESTACK_APIKEY);

  const fileSelectedHandler = (filedata) => {
    console.log(filedata);
    setFile_data(filedata);
    console.log("File Set");
  };
  const fileUploadHandler = async () => {
    console.log("Upload");
    if (file_data !== {}) {
      await client.upload(file_data).then(async (data) => {
        setImg(data.url);
        await apis
          .put(`doctor/${doctor_id}`, {
            img: data.url,
          })
          .then((data2) => {
            setImg(data.url);
            console.log(data);
            localStorage.setItem("doctor_img", data.url);
          })
          .catch((error) => console.log(error));
      });
    }
  };

  return (
    <section style={{ backgroundColor: "snow", height: "100vh" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="shadow-sm mb-4">
              <MDBCardBody className="mdbcardbody">
                <MDBCardImage
                  src={img_up}
                  alt=""
                  style={{
                    width: "165px",
                    height: "165px",
                    marginTop: "5px",
                    marginBottom: "15px",
                    borderRadius: "12px",
                  }}
                  fluid
                />
                <p className="text-muted mb-1">{doctData.name}</p>
                <p className="text-muted mb-4">{doctData.hospital}</p>
                <div className="mdbtool mb-2">
                  <div className="mdbbutton mb-2">
                    <Button
                      style={{backgroundColor:"cadetblue", color:"white"}}
                      className="mx-2"
                      type="button"
                      class="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalCenter"
                      active
                    >
                      Change Profile Photo
                    </Button>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="shadow-sm mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Department</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {doctData.department}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {doctData.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {doctData.phoneNumber}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {doctData.phoneNumber}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Hospital Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {doctData.hospital_address}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Experience</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {doctData.experience} Years
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Upload An Image
              </h5>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input
                type="file"
                text="Change Profile Photo"
                onChange={(e) => {
                  fileSelectedHandler(e.target.files[0]);
                }}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={fileUploadHandler}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

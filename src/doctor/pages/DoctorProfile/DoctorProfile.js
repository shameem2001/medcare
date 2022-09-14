import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apis from "../../../apis";
import * as filestack from "filestack-js";
import Button from "react-bootstrap/Button";


import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBTooltip,
} from "mdb-react-ui-kit";

export default function DoctorProfile() {
  const [doctData, setDoctData] = useState({
    name: "sugunan",
    age: "19",
    gender: "male",
    department: "physician",
    district: "kannur",
    dob: "20-20-200",
    email: "sugunan@gmail.com",
    hospital: "kims",
    phoneNumber: "098765543",
    hospital_address: "adress of hospital here",
    experience:90,
  });
  let results;
  console.log(localStorage.getItem("doctor_id"));
  useEffect(() => {
    fetch();
  }, []);
  let fetch = async () => {
    let results;
    await apis
      .get(`doctor/${localStorage.getItem("doctor_id")}`)
      .then((data) => {
        results = data.data;
        setImg(results.img);
      })
      .catch((err) => console.log(err));
    console.log(results);
    console.log(results.name);
    setDoctData(results);
   
  };

  const FILESTACK_APIKEY = "AR9a0fhrDRleWdYYiy68qz";
  let [file_data, setFile_data] = useState({});
  let [img_up, setImg] = useState("");
  const client = filestack.init(FILESTACK_APIKEY);

  const fileSelectedHandler = (filedata) => {
    console.log(filedata);
    setFile_data(filedata);
    console.log("File Set")
  };
  const fileUploadHandler = async () => {
    console.log("Upload");
    if (file_data !== {}) {
      await client.upload(file_data).then(async (data) => {
        setImg(data.url);
        await apis
          .put(`doctor/${localStorage.getItem("doctor_id")}`, {
            img: data.url,
          })
          .then((data2) => {
            setImg(data.url);
            console.log(data);
          })
          .catch((error) => console.log(error));
      });
    }
  };

  console.log(localStorage.getItem("doctor_id"));
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol></MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="mdbcardbody">
                <MDBCardImage
                  src={img_up}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px",height:"150px" }}
                  fluid
                />
                <p className="text-muted mb-1">{doctData.name}</p>
                <p className="text-muted mb-4">{doctData.hospital}</p>
                <div className="mdbtool mb-2">
                  <div className="mdbbutton mb-2">
                    {/* <MDBTooltip className="mdbButton" size="sm">
                      <MDBBtn
                        className="mx-2"
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                         size="sm"
                      >
                        Change Profile Photo
                      </MDBBtn>
                    </MDBTooltip> */}
                    <Button  className="mx-2"
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                          active>Change Profile Photo</Button>
                  </div>
                  
                </div>
              </MDBCardBody>
            </MDBCard>

            {/* <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="globe fa-lg text-warning" />
                    <MDBCardText>https://mdbootstrap.com</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="github fa-lg"
                      style={{ color: "#333333" }}
                    />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="twitter fa-lg"
                      style={{ color: "#55acee" }}
                    />
                    <MDBCardText>@mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon
                      fab
                      icon="facebook fa-lg"
                      style={{ color: "#3b5998" }}
                    />
                    <MDBCardText>mdbootstrap</MDBCardText>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard> */}
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
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
              </MDBCardBody>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  {/* <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Project Status
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                     Experience
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={doctData.experience} valuemin={0} valuemax={50} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Website Markup
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      One Page
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={50} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Mobile Template
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Backend API
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody> */}
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  {/* <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Project Status
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Web Design
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Website Markup
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      One Page
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={89} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Mobile Template
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={55} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Backend API
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={66} valuemin={0} valuemax={100} />
                    </MDBProgress>
                  </MDBCardBody> */}
                </MDBCard>
              </MDBCol>
            </MDBRow>
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
              <button type="button" class="btn btn-primary" onClick={fileUploadHandler} data-bs-dismiss="modal">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

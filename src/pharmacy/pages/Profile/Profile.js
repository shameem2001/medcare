import React, {useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import apis from "../../../apis";
import * as filestack from "filestack-js";
import "./Profile.scss";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function Profile() {

    const [pharmData, setPharmData] = useState({});

    const pharmacy_id = localStorage.getItem("pharmacy_id");

      const FILESTACK_APIKEY = "AR9a0fhrDRleWdYYiy68qz";
      let [file_data, setFile_data] = useState({});
      let [img_up, setImg] = useState("");
      const client = filestack.init(FILESTACK_APIKEY);

    useEffect(() => {
      fetch();
    }, []);

    let fetch = async () => {
      let results;
      await apis
        .get(`pharmacy/${pharmacy_id}`)
        .then((data) => {
          results = data.data;
          setImg(results.img);
        })
        .catch((err) => console.log(err));
      console.log(results);
      console.log(results.name);
      setPharmData(results);
    };

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
              .put(`pharmacy/${pharmacy_id}`, {
                img: data.url,
              })
              .then((data2) => {
                setImg(data.url);
                localStorage.setItem("pharmacy_img", data.url);
                console.log(data);
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
                <p className="text-muted mb-1">{pharmData.hospital_name}</p>
                <div className="mdbtool mb-2">
                  <div className="mdbbutton mb-2">
                    <Button
                      style={{ backgroundColor: "cadetblue", color: "white" }}
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
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {pharmData.email}
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
                      {pharmData.phoneNumber}
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
                      {pharmData.phoneNumber}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>District</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {pharmData.district}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>City</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">
                      {pharmData.city}
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

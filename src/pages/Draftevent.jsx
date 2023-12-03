
import { Nav, NavItem, NavLink } from "react-bootstrap"; // Import Bootstrap components for navigation
import { Card, Button } from "react-bootstrap";

import calender from "../assets/img/icon/calender.svg";
import time from "../assets/img/icon/time.svg";
import location from "../assets/img/icon/location (2).svg";
import plus from "../assets/img/icon/plus.svg";
import nobar from "../assets/img/icon/nobar.jpg";

const Draftevent = () => {
  const handleEditClick = () => {
    // Handle edit button click logic
    console.log("Edit button clicked!");
  };
  return (

      <div>
        
        <div>
          <div className="mt-5">
            <div className="row">
              {/* Event Card 1 */}
              <div className="col-2" style={{marginRight:'10rem',}}>
                <Card
                  style={{
                    marginLeft:"1rem",
                    width: "20rem",
                    border: "5px white solid",
                    borderRadius: "20px",
                    backgroundColor: "#F4BF96",
                    marginBottom: "1rem",
                  }}
                >
                  <Card.Body>
                    <Card.Link href="#">
                      {" "}
                      <img
                        src={plus}
                        width="90"
                        height="90"
                        alt="Profle"
                        style={{
                          display: "block",
                          marginLeft: "6rem",
                          marginTop: "9rem",
                        }}
                      />
                    </Card.Link>
                    <Card.Title
                      style={{
                        marginTop: "2rem",
                        textAlign: "center",
                        color: "#424242",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        wordWrap: "break-word",
                        marginBottom: "10rem",
                      }}
                    >
                      Buat Event Baru
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>

              {/* Event Card 2 */}
              <div className="col-md-4">
                <Card
                  style={{
                    width: "20rem",
                    border: "1px black solid",
                    borderRadius: "20px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={nobar}
                    style={{
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                  <Button
                    variant="light"
                    className="position-absolute top-0 end-0 m-2"
                    onClick={handleEditClick}
                    style={{ border: "2px #404040 solid" }}
                  >
                    Edit Event ✏️
                  </Button>
                  <Card.Body>
                    <Card.Title
                      style={{
                        color: "#424242",
                        fontSize: 20,
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      Nonton Bareng
                    </Card.Title>
                    <Card.Text>Pertandingan</Card.Text>
                  </Card.Body>
                  <div
                    style={{
                      marginLeft: "1rem",
                      width: 284.01,
                      height: 0,
                      border: "1px #33363F solid",
                    }}
                  ></div>
                  <Card.Body>
                    <Card.Title
                      style={{
                        color: "#424242",
                        fontSize: 16,
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      Tanggal & waktu
                    </Card.Title>
                    <Card.Text>
                      <img
                        src={calender}
                        width="20"
                        height="19"
                        alt="Profle"
                        style={{ marginRight: "1rem" }}
                      />
                      19 November 2023
                    </Card.Text>
                    <Card.Text>
                      <img
                        src={time}
                        width="20"
                        height="19"
                        alt="Profle"
                        style={{ marginRight: "1rem" }}
                      />
                      01.45 WIB
                    </Card.Text>
                  </Card.Body>
                  <Card.Body style={{ marginBottom: "1rem" }}>
                    <Card.Title
                      style={{
                        color: "#424242",
                        fontSize: 16,
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      Venue & Lokasi
                    </Card.Title>
                    <Card.Text>
                      <img
                        src={location}
                        width="20"
                        height="19"
                        alt="Profle"
                        style={{ marginRight: "1rem" }}
                      />
                      Lap. Adam Malik - Pematang Siantar
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className='Tampil mt-3'>
      <div className="row">
      Tampil
        <div className="col-1">
          <select className="form-select form-select-sm">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            {/* Tambahkan opsi lain sesuai kebutuhan */}
          </select>
        </div>
        Total Event : 1
      </div>
    </div>
    <br/>
          </div>
        </div>
      </div>
  );
};

export default Draftevent;

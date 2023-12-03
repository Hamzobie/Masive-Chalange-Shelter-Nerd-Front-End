import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import cosplay from "../assets/img/icon/versi1.jpg";
import calender from "../assets/img/icon/calender.svg";
import time from "../assets/img/icon/time.svg";
import location from "../assets/img/icon/location (2).svg";

const Finishevent = () => {
    return(
        <div>
      <div className="mt-3">
        <div>
          <div
            className="isiEvent"
            style={{
              fontFamily: "Poppins",
              marginTop: "2rem",
              marginLeft: "1rem",
              marginBottom: "2rem",
            }}
          >
            <Card
              style={{
                width: "20rem",
                border: "1px black solid",
                borderRadius: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={cosplay}
                style={{ height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
              />
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
                  Cosplay Festival
                </Card.Title>
                <Card.Text>Festival, Bazar</Card.Text>
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
                <Card.Text> <img
            src={calender}
            width="20"
            height="19"
            alt="Profle"
            style={{marginRight:'1rem'}}
            />24 September 2023</Card.Text>
                <Card.Text> <img
            src={time}
            width="20"
            height="19"
            alt="Profle"
            style={{marginRight:'1rem'}}
            />16.00 WIB</Card.Text>
              </Card.Body>
              <Card.Body style={{marginBottom:'1rem',}}>
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
                <Card.Text><img
            src={location}
            width="20"
            height="19"
            alt="Profle"
            style={{marginRight:'1rem'}}
            />Matandang Balara, tandang sora quezon city</Card.Text>
              </Card.Body>
            </Card>
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
          </div>
        </div>
      </div>
        </div>
    )
}
export default Finishevent;
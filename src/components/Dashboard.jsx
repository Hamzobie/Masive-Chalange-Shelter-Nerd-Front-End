// Import library yang dibutuhkan
import React from "react";
import { Card, Row, Col, ProgressBar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { IoIosPeople } from "react-icons/io";
import Navbar from "../components/Navbar";
import { MdOutlineEventAvailable } from "react-icons/md";
import { IoTicket } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { MdOutlineFactCheck } from "react-icons/md";
// Komponen untuk Card Pertama
const FirstCard = ({ data }) => {
  return (
    <Card
      style={{
        marginLeft: "5rem",
        marginRight: "2rem",
        alignItems: "center",
        justifyContent: 'space-evenly',
        width: "317px",
        height: "649px",
        boxShadow: "0px 0px 8px 2px #F4BF96",
        borderRadius: 10,
        border: "1px #F4BF96 solid",
      }}>
        <br />
      <Card
        style={{
          border: "2px rgba(203.15, 0, 22.77, 0.70) solid",
          width: "217px", height:"100px"
        }}>
        <Card.Header
          style={{
            color: "#CE5A67",
            fontSize: 17,
            fontFamily: "Poppins",
            fontWeight: "500",
            wordWrap: "break-word",
            backgroundColor: "white",
            borderBottom: '1px #424242 solid'
          }}>
          <IoIosPeople style={{ width: '32px', height: '31' }} />
          Total Pengunjung
        </Card.Header >
        <Card.Body>
          <Card.Title>{data.totalPengunjung} Orang</Card.Title>
        </Card.Body>
      </Card>
      <br />
      <Card style={{
        border: "2px rgba(203.15, 0, 22.77, 0.70) solid",
        width: "217px", height:"100px"
      }}>
        <Card.Header style={{
          color: "#CE5A67",
          fontSize: 17,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
          backgroundColor: "white",
          borderBottom: '1px #424242 solid'
        }}><MdOutlineEventAvailable style={{ width: '32px', height: '31' }}  /> Event</Card.Header>
        <Card.Body>
          <Card.Title>{data.event} Event</Card.Title>
        </Card.Body>
      </Card>
      <br />
      <Card style={{
        border: "2px rgba(203.15, 0, 22.77, 0.70) solid",
        width: "217px", height:"100px"
      }}>
        <Card.Header style={{
          color: "#CE5A67",
          fontSize: 17,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
          backgroundColor: "white",
          borderBottom: '1px #424242 solid'
        }}><IoTicket style={{ width: '32px', height: '31' }} /> Total Tiket Terjual</Card.Header>
        <Card.Body>
          <Card.Title>{data.totalTiketTerjual} Tiket</Card.Title>
        </Card.Body>
      </Card>
      <br />
      <Card style={{
        border: "2px rgba(203.15, 0, 22.77, 0.70) solid",
        width: "217px", height:"100px"
      }}>
        <Card.Header style={{
          color: "#CE5A67",
          fontSize: 17,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
          backgroundColor: "white",
          borderBottom: '1px #424242 solid'
        }}><IoWallet style={{ width: '32px', height: '31' }} /> Total Penjualan</Card.Header>
        <Card.Body>
          <Card.Title>{data.totalPenjualan}</Card.Title>
        </Card.Body>
      </Card>
      <br />
      <Card style={{
        border: "2px rgba(203.15, 0, 22.77, 0.70) solid",
        width: "217px", height:"100px"
      }}>
        <Card.Header style={{
          color: "#CE5A67",
          fontSize: 17,
          fontFamily: "Poppins",
          fontWeight: "500",
          wordWrap: "break-word",
          backgroundColor: "white",
          borderBottom: '1px #424242 solid'
        }}><MdOutlineFactCheck style={{ width: '32px', height: '31' }} /> Total Transaksi</Card.Header>
        <Card.Body>
          <Card.Title>{data.totalTransaksi}</Card.Title>
        </Card.Body>
      </Card>
      <br />
    </Card>
  );
};

// Komponen untuk Card Kedua
const SecondCard = ({ ratings }) => {
  return (
    <Card style={{width: "65%", height: "649px",boxShadow: "0px 0px 8px 2px #F4BF96",
    borderRadius: 10,
    border: "1px #F4BF96 solid", }}>
      <Card.Body>
        <Card.Title>Rating Pengguna</Card.Title>
        <Card.Text style={{display:'inline-flex',color: '#C03645'}}><h2 style={{fontFamily: 'Poppins', fontWeight: '800', wordWrap: 'break-word'}}>{ratings.ratingPengguna}</h2><p style={{fontSize:'25px',fontFamily: 'Poppins', fontWeight: '400', wordWrap: 'break-word'}}>/5</p></Card.Text>

        <Card.Text>
          {ratings.totalRating} Ratings | {ratings.totalReviews} Reviews
        </Card.Text>
        
        <Card.Title >5</Card.Title>
        <ProgressBar
          now={ratings.kelima}
          
        />

        <Card.Title>4</Card.Title>
        <ProgressBar
          now={ratings.keempat}
          
        />

        <Card.Title>3</Card.Title>
        <ProgressBar
          now={ratings.ketiga}
          
        />
        <Card.Title>2</Card.Title>
        <ProgressBar
          now={ratings.kedua}
         
        />
        <Card.Title>1</Card.Title>
        <ProgressBar
          now={ratings.kesatu}
          
        />
        <br />
        <Card.Title>Rating Shelter Nerd</Card.Title>
        <Container>
          <Row>
            <Col><div className="RatingNerd">{ratings.kualitasAcara}</div> Kualitas Acara</Col>
            <Col><div className="RatingNerd">{ratings.lokasiAcara}</div> Lokasi Acara</Col>
            <Col><div className="RatingNerd">{ratings.prosesRegistrasi}</div> Proses Registrasi</Col>
          </Row>
          <br/>
          <Row>
            <Col><div className="RatingNerd">{ratings.informasiAcara}</div> Informasi Acara</Col>
            <Col><div className="RatingNerd">{ratings.komunikasi}</div> Komunikasi</Col>
            <Col><div className="RatingNerd">{ratings.layananBantuan}</div> Layanan Bantuan</Col>
          </Row>
          <br/>
          <Row>
            <Col><div className="RatingNerd">{ratings.hargaTiket}</div> Harga Ticket</Col>
          </Row>
        </Container>

        {/* Sisanya untuk rating lainnya */}
      </Card.Body>
    </Card>
  );
};

// Komponen Utama yang menggunakan Card Pertama dan Kedua
const App = () => {
  const dataFirstCard = {
    totalPengunjung: 631,
    event: 1,
    totalTiketTerjual: 200,
    totalPenjualan: "Rp 19.000.000",
    totalTransaksi: 88,
  };

  const dataSecondCard = {
    ratingPengguna: 4.2,
    totalRating: 472,
    totalReviews: 186,
    kesatu:30,
    kedua:40,
    ketiga:60,
    keempat:85,
    kelima:68,
    kualitasAcara: 4.8,
    lokasiAcara: 4.3,
    prosesRegistrasi: 4.1,
    informasiAcara: 4.7,
    komunikasi: 4.6,
    layananBantuan: 4.5,
    hargaTiket: 4,
    // Sisanya untuk rating lainnya
  };

  return (
    <Row>
      <FirstCard data={dataFirstCard} />
      <SecondCard ratings={dataSecondCard} />
    </Row>
  );
};

export default App;

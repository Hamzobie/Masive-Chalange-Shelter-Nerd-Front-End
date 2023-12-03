import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const EventList = () => {
  return (
    <div>
      <div className="isiContent">
        <div className="isi" style={{fontFamily:'Poppins',}}>
        <div className="tombolBuat">
        <Link to='/Form'>
        <Button variant="link" style={{color: 'white'}}>+ Buat Event</Button>
        </Link>
        </div>
        <h4>Hai, Terimakasih Telah menggunakan Layanan EXT</h4>
        <p>Silahkan buat eventmu dengan klik button “ Buat Event” di atas</p>
        
        </div>
      </div>
    </div>
  );
};

export default EventList;
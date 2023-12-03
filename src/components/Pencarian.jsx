import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Cari from "../assets/img/icon/search.svg";

const SearchBar = () => {
  return (
    
    <div className="container mt-3">
      <div className="input-group">
        <input type="text" className="form-control ukuran" placeholder="Cari Event Saya" />
        <button className="icon" type="button">
        <img
            src={Cari}
            alt="Profile"
          />
        </button>
      <div className="Urutan">Urutan:</div>
      <div className='ukuran'>
     <Form.Select aria-label="Default select example" style={{paddingRight:130,}}>
     <option>Waktu Mulai (Terdekat)</option>
        <option>Waktu Mulai (Terjauh)</option>
        <option>Nama Event ( A-Z )</option>
        <option>Nama Event ( Z-A )</option>
        <option>Terbaru</option> 
    </Form.Select>
    </div>
      </div>    
    </div>
  );
};

export default SearchBar;

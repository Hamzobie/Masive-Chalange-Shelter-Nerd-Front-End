import React, { useState } from 'react';
import axios from 'axios';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/img/update logo.png";
const LoginPage = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState('');
  const [telepon, setTelepon] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPass, setConfPass] = useState('');

  const handleRegister = async () => {
    try {
      if (password === confPass) {
        const response = await axios.post('http://localhost:3000/api/v1/event-organizers', {nama, email, password, telepon});
        console.log(response.data);
        navigate("/Dashboard");
      } else {
        console.log("Password Berbeda");
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '500px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius:'20px', }}>
        <Card.Body style={{marginLeft:'2rem',marginRight:'2rem',}}>
        <Card.Title className="align-items-center justify-content-center text-center" > <img
            src={logo}
            width="76"
            height="70"
            alt="logo"
/> 
</Card.Title>
          <h3 className="text-center mb-5" style={{color:'#C03645', fontWeight: '600'}}>Experience Event Ticket</h3>
          <div style={{width: 430, textAlign: 'center', color: '#CE5A67', fontSize: 20,}}>Buat akun anda,<br/>untuk mulai menggunakan website kami.</div>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Nama Lengkap" value={nama} onChange={(e) => setNama(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label></Form.Label>
              <Form.Control type="number" placeholder="Nomor Telepon" value={telepon} onChange={(e) => setTelepon(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Alamat email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="Kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="Konfirmasi Kata sandi" value={confPass} onChange={(e) => setConfPass(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-between align-items-center mt-2">
              <Form.Check type="checkbox" label="Saya setuju dengan ketentuan" />
            </Form.Group>
           <br/>
            <Button  variant="link" style={{color:'white',background:'#C03645',textDecoration:'none', fontWeight: '600'}} className="w-100 mt-4" onClick={handleRegister}>
              Daftar Akun
            </Button>
           
          </Form>

          <div className="text-center mt-4">
            <p>Sudah punya akun? <Link to='/Login'><a style={{color:'#C03645', textDecoration:'none',fontWeight:"600",}}>Masuk</a></Link> </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;

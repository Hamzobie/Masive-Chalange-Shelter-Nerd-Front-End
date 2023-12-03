import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import logo from "../assets/img/update logo.png";
const LoginPage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card style={{fontFamily: 'Poppins', width: '500px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius:'20px', }}>
        <Card.Body style={{marginLeft:'2rem',marginRight:'2rem',}}>
        <Card.Title className="align-items-center justify-content-center text-center" > <img
            src={logo}
            width="76"
            height="70"
            alt="logo"
/> 
</Card.Title>
          <h3 className="text-center mb-5" style={{color:'#C03645', fontWeight: '600'}}>Experience Event Ticket</h3>
          <div style={{width: 430, textAlign: 'center', color: '#CE5A67', fontSize: 20, fontFamily: 'Poppins',}}>Buat akun anda,<br/>untuk mulai menggunakan website kami.</div>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Nama Lengkap" />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label></Form.Label>
              <Form.Control type="number" placeholder="Nomor Telepon" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Alamat email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="Kata sandi" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="Konfirmasi Kata sandi" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-between align-items-center mt-2">
              <Form.Check type="checkbox" label="Saya setuju dengan ketentuan" />
            </Form.Group>
           <br/>
            <Button  variant="link" style={{color:'white',background:'#C03645',textDecoration:'none', fontWeight: '600'}} type="submit" className="w-100 mt-4">
              <Link to='/Dashboard' style={{color:'white'}}>
              Daftar Akun
              </Link>
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

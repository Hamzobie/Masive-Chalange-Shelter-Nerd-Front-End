import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/event-organizers/login', { email, password });
      console.log(response.data);
      navigate("/Dashboard");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '500px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius:'20px', }}>
        <Card.Body style={{marginLeft:'2rem',marginRight:'2rem',}}>
          <h3 className="text-center mb-4" style={{color:'#C03645'}}>Halo!</h3>
          <p style={{ fontWeight: '600'}} className='text-center'>
            Silahkan  masukkan email dan kata sandi akun
            anda untuk masuk.</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="email" placeholder="Alamat email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label></Form.Label>
              <Form.Control type="password" placeholder="Kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-end align-items-right mt-2">
              <a style={{color:'#404040', textDecoration:'none',fontWeight:"600",}} href="/forgot-password">Lupa Kata Sandi?</a>
            </Form.Group>
           <br/>
            <Button variant="link" style={{color:'white',background:'#C03645',textDecoration:'none', fontWeight: '600'}} className="w-100" onClick={handleLogin}>
              Masuk
            </Button>
          </Form>

          <div className="text-center mt-3">
            <p>--- Atau ---</p>
            {/* Add your Google login button or any other authentication provider here */}
            <Button style={{color:'#C03645',textDecoration:'none',fontWeight:"600",}} variant="link" className="mr-2">
            <FcGoogle /> Login Google
            </Button>
          </div>

          <div className="text-center mt-3">
            <p>Belum punya akun?<Link to='/Register'><a style={{color:'#C03645', textDecoration:'none',fontWeight:"600",}}>Buat akun</a></Link> </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/profil.css'
import edit from '../assets/img/landing/edit1.png'
import profile from '../assets/img/landing/profil.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const ProfileContent = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <div className ="title">
            <h5>Informasi Akun.</h5>
        </div>
        <div className='paper'>
            <Row className='profile-detail'>
                <Col style={{display:'flex', flexDirection:'column', alignItems: 'Center'}}>
                <h4 style={{color:'#CE5A67'}}>Foto Profil</h4>
                <img src={profile} alt="profil" />
                <div className="ubahfotoprofil">
                    <img src={edit} alt=""/>
                    <button id="fileExplorerButton">Ubah Foto Profil</button>
                    <script src="ubahfoto.js"></script>
                </div>
                <button className="pop-trigger" onClick={handleShow}>
                    Ubah Password
                </button>
                </Col>
                <Col md={8}>
                    <Form style={{marginTop:'30px'}}>
                        <Form.Label className = 'profile-label'>Nama Organizer</Form.Label>
                        <Form.Control
                            required
                            className ='info-text'
                            type="text"
                            placeholder="Nama Organizer"
                            defaultValue="Shelter Nerd"
                        />
                        <p style={{fontSize:'10px', margin:'0px'}}>*Nama Organizer Muncul sebagai Nama Penyelenggara</p>
                        <Form.Label className = 'profile-label'>Email</Form.Label>
                        <Form.Control
                            required
                            className ='info-text'
                            type="text"
                            placeholder="Email"
                            defaultValue="shelternerd@gmail.com"
                        />
                        <Form.Label className = 'profile-label'>Nomor Telepon</Form.Label>
                        <Form.Control
                            required
                            className ='info-text'
                            type="numeric"
                            placeholder="Nomor Telepon"
                            defaultValue="(+62) 822 6543 9760"
                        />
                        <Form.Label className = 'profile-label'>Alamat</Form.Label>
                        <Form.Control
                            required
                            className ='info-text'
                            type="textarea"
                            placeholder="Alamat"
                            defaultValue="Jl. Gajah Mada Blok H2 No. 12 Kec. Nördlingen Kel. Bavaria Kota Paradise (7435 9822)"
                        />
                        <Form.Label className = 'profile-label'>Tentang Kami</Form.Label>
                        <Form.Control
                            required
                            className ='info-text'
                            type="textarea"
                            placeholder="Tentang Kami"
                            defaultValue="Penyelenggara event Jejepangan yang nyata membawa suasana jepang dengan dekorasi dan makanan khas jepang"
                        />
                        <Form.Label className = 'profile-label'>Tautan Singkat Website</Form.Label>
                        <Form.Control
                            required
                            className ='info-text'
                            type="text"
                            placeholder="Tautan Singkat Website"
                            defaultValue="https://Namawebsite/ShelterNerd"
                        />
                        <Form.Label className = 'profile-label'>First name</Form.Label>
                        <Form.Control
                            required
                            className ='info-text'
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                        />
                        <Form.Label className = 'profile-label'>Instagram</Form.Label>
                        <Form.Control
                            required
                            className ='info-text'
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                        />
                        <Form.Label className = 'profile-label'>Facebook</Form.Label>
                        <Form.Control
                            required
                            className ='info-text'
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                        />
                        <Form.Label className = 'profile-label'>X (Twitter)</Form.Label>
                        <Form.Control
                            required
                            className ='info-text'
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                        />
                        <Button style={{padding:'10px 20px', width:'20%',marginLeft:'20%', marginTop:'20px'}}>Simpan</Button>
                    </Form>
                </Col>
            </Row>
        </div>
        <Modal centered show={show} onHide={handleClose}>
            <Modal.Body>
                <Form>
                    <Form.Label className = 'profile-label'>Password Lama</Form.Label>
                    <Form.Control type="password" placeholder="Password Lama" className ='info-text' />
                    <Form.Label className = 'profile-label'>Password Baru</Form.Label>
                    <Form.Control type="password" placeholder="Password Baru" className ='info-text' />
                    <Form.Label className = 'profile-label'>Konfirmasi Password Baru</Form.Label>
                    <Form.Control type="password" placeholder="Konfirmasi Password Baru" className ='info-text'/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button>Simpan</Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ProfileContent

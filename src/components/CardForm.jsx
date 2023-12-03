import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack';
import nameIcon from '../assets/nama.svg'
import calendar from '../assets/Calendar.svg'
import time from '../assets/Time Circle.svg'
import loc from '../assets/Location.svg'
import gambar from '../assets/Plus.svg'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button'

const CardForm = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: '80%', marginLeft: '10%', borderColor: '#CE5A67', borderWidth: '2px', marginTop: '2%'}}>
        <Stack gap={2} style={{alignItems: 'center',backgroundColor: '#F4BF96', padding: '50px 20px 50px 20px'}}>
          <button style={{background: 'none', border: 'none',boxShadow : 'none'}}><img src={gambar} placeholder='img err' /></button>
          <div><h4><b>Unggah Gambar/Poster/Banner</b></h4></div>
          <div>Direkomendasikan 724 x 340 px dan tidak lebih dari 3 Mb</div>
        </Stack>
        <Card.Body style={{padding: '40px'}}>
            <Card.Title ><b className='btnCard'>Nama Event</b>*</Card.Title>
            <Card.Text>
            Pilih Kategori*
            </Card.Text>
            <hr style={{color: '#CE5A67'}}></hr>
            <Row>
              <Col>
                <b>Diselenggarakan Oleh</b>
                <Stack direction='horizontal' gap={2} style={{alignItems: 'center',marginTop: '10px'}} className='btnCard'>
                  <img src={nameIcon} placeholder='img err'/>Nama Event Organazier
                </Stack>
              </Col>
              <Col>
                <b>Tanggal & Waktu</b>
                <Stack direction='horizontal' gap={2} style={{alignItems: 'center',marginTop: '10px'}} className='btnCard' onClick={handleShow}>
                  <img src={calendar} placeholder='img err'/>Pilih Tanggal
                </Stack>
                <Stack direction='horizontal' gap={2} style={{alignItems: 'center'}} className='btnCard'onClick={handleShow}>
                  <img src={time} placeholder='img err'/>Pilih Waktu
                </Stack>
              </Col>
              <Col>
                <b>Lokasi</b>
                <Stack direction='horizontal' gap={2} style={{alignItems: 'center',marginTop: '10px'}} className='btnCard'>
                <img src={loc} placeholder='img err'/>Pilih Lokasi
              </Stack>
              </Col>
            </Row>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#CE5A67'}}>Tanggal & Waktu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="tanggal" id="justify-tab-example" variant='underline' justify>
          <Tab eventKey="tanggal" title="Tanggal Event">
          <Form>
            <Form.Label><b>Tanggal Mulai</b></Form.Label>
            <Form.Control type="date" name="dob"/>
            <Form.Label><b>Tanggal Berakhir</b></Form.Label>
            <Form.Control type="date" name="dob"/>
          </Form>
          </Tab>
          <Tab eventKey="waktu" title="Waktu Event">
            <Form>
              <Form.Group controlId="mulai">
                <Row>
                  <Col>
                  <Form.Label><b>Mulai Dari</b></Form.Label>
                    <Form.Control type='time' name='mulai'/>
                  </Col>
                  <Col>
                  <Form.Label><b>Sampai</b></Form.Label>
                    <Form.Control type='time' name='berakhir'/>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Tab>
          </Tabs>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CardForm

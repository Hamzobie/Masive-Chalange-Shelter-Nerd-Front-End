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
    const [showDate, setShowDate] = useState(false);
    const [showLoc, setShowLoc]= useState(false);
    const [showNama, setShowNama] = useState(false);

    const handleCloseNama = () => setShowNama(false);
    const handleShowNama = () => setShowNama(true);
    const handleCloseLoc = () => setShowLoc(false);
    const handleShowLoc = () => setShowLoc(true);

    const handleCloseDate = () => setShowDate(false);
    const handleShowDate = () => setShowDate(true);
  return (
    <div>
      <Card style={{ width: '80%', marginLeft: '10%', borderColor: '#CE5A67', borderWidth: '2px', marginTop: '2%'}}>
        <Stack gap={2} style={{alignItems: 'center',backgroundColor: '#F4BF96', padding: '50px 20px 50px 20px'}}>
          <button style={{background: 'none', border: 'none',boxShadow : 'none'}}><img src={gambar} placeholder='img err' /></button>
          <div><h4><b>Unggah Gambar/Poster/Banner</b></h4></div>
          <div>Direkomendasikan 724 x 340 px dan tidak lebih dari 3 Mb</div>
        </Stack>
        <Card.Body style={{padding: '40px'}}>
            <Card.Title ><b className='btnCard' onClick={handleShowNama}>Nama Event</b>*</Card.Title>
            <Card.Text onClick={handleShowNama}>
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
                <Stack direction='horizontal' gap={2} style={{alignItems: 'center',marginTop: '10px'}} className='btnCard' onClick={handleShowDate}>
                  <img src={calendar} placeholder='img err'/>Pilih Tanggal
                </Stack>
                <Stack direction='horizontal' gap={2} style={{alignItems: 'center'}} className='btnCard'onClick={handleShowDate}>
                  <img src={time} placeholder='img err'/>Pilih Waktu
                </Stack>
              </Col>
              <Col>
                <b>Lokasi</b>
                <Stack direction='horizontal' gap={2} style={{alignItems: 'center',marginTop: '10px'}} className='btnCard' onClick={handleShowLoc}>
                <img src={loc} placeholder='img err'/>Pilih Lokasi
              </Stack>
              </Col>
            </Row>
        </Card.Body>
      </Card>
      <Modal show={showDate} onHide={handleCloseDate}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#CE5A67'}}>Tanggal & Waktu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="tanggal" id="justify-tab-example" variant='underline' justify>
          <Tab eventKey="tanggal" title="Tanggal Event">
          <Form>
            <Form.Label><b>Tanggal Mulai</b></Form.Label>
            <Form.Control size="lg" type="date" name="dob"/>
            <Form.Label><b>Tanggal Berakhir</b></Form.Label>
            <Form.Control size="lg" type="date" name="dob"/>
          </Form>
          </Tab>
          <Tab eventKey="waktu" title="Waktu Event">
            <Form>
              <Form.Group controlId="mulai">
                <Row>
                  <Col>
                  <Form.Label><b>Mulai Dari</b></Form.Label>
                    <Form.Control size="lg" type='time' name='mulai'/>
                  </Col>
                  <Col>
                  <Form.Label><b>Sampai</b></Form.Label>
                    <Form.Control size="lg" type='time' name='berakhir'/>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Tab>
          </Tabs>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDate}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseDate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showLoc} onHide={handleCloseLoc}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#CE5A67'}}>Lokasi Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label><b>Alamat Venue</b></Form.Label>
            <Form.Control size="lg" type="text" name="dob"/>
            <Form.Check
              inline
              label="Online"
              name="online"
              type="radio"
              id={`inline-radio-1`}
            />
            <Form.Check
              inline
              label="Offline"
              name="online"
              type="radio"
              id={`inline-radio-2`}
              defaultChecked
            />
            <br/>
            <Form.Label><b>Link Lokasi Event</b></Form.Label>
            <Form.Control size="lg" type="text" name="dob"/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLoc}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseLoc}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showNama} onHide={handleCloseNama}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#CE5A67'}}>Nama & Kategori Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label><b>Nama Event</b></Form.Label>
            <Form.Control size="lg" type="text" name="dob"/>
            <Form.Label><b>Kategori Event</b></Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="konser">Konser</option>
              <option value="pameran">Pameran</option>
              <option value="festival">Festival</option>
              <option value="jfest">JFest</option>
              <option value="seminar">Seminar</option>
              <option></option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNama}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseNama}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CardForm

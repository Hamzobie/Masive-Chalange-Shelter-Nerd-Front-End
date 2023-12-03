import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'
import plus from '../assets/PlusBtn.svg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const MakeTicket = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Row style={{width: '78%', marginLeft: '11%'}}>
        <Col>
            <div id='addTicket'>
                <Stack direction='horizontal' style={{alignItems: 'center', justifyContent: 'center', height: '100%'}} gap={2}>
                    <div>
                        <b>Buat Tiket</b><br/>
                        <b style={{color: '#CE5A67'}}>Berbayar</b>
                    </div>
                    <button id='ticketBtn' onClick={handleShow}><img src= {plus} /></button>
                </Stack>
            </div>
        </Col>
        <Col>
            <div id='addTicket'>
            <Stack direction='horizontal' style={{alignItems: 'center', justifyContent: 'center', height: '100%'}} gap={2}>
                    <div>
                        <b>Buat Tiket</b><br/>
                        <b style={{color: '#CE5A67'}}>Bayar <br/>Sesukamu</b>
                    </div>
                    <button id='ticketBtn'><img src= {plus} /></button>
                </Stack>
            </div>
        </Col>
        <Col>
            <div id='addTicket'>
            <Stack direction='horizontal' style={{alignItems: 'center', justifyContent: 'center', height: '100%'}} gap={2}>
                    <div>
                        <b>Buat Tiket</b><br/>
                        <b style={{color: '#CE5A67'}}>Gratis</b>
                    </div>
                    <button id='ticketBtn'><img src= {plus} /></button>
                </Stack>
            </div>
        </Col>
    </Row>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'#CE5A67'}}>Buat Tiket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="detail" id="justify-tab-example" variant='underline' justify>
          <Tab className='modal-form' eventKey="detail" title="Detail Tiket">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><b>Nama Tiket</b></Form.Label>
              <Form.Control
                className='form-tiket'
                type="nama"
                autoFocus
              />  
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><b>Jumlah Tiket</b></Form.Label>
              <Form.Control
                className='form-tiket'
                type="jumlah"
              />  
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><b>Harga Tiket</b></Form.Label>
              <Form.Control 
                className='form-tiket'
                type="Harga"
              />  
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label><b>Deskripsi</b></Form.Label>
              <Form.Control className='form-tiket' as="textarea" rows={3} />
            </Form.Group>
          </Form>
          </Tab>
          <Tab className='modal-form' eventKey="tanggal" title="Tanggal Penjualan">
            <Form>
              <Form.Group controlId="mulai">
                <Form.Label><b>Tanggal Mulai</b></Form.Label>
                <Row>
                  <Col md={8}>
                    <Form.Control size='lg' type="date" name="dob"/>
                  </Col>
                  <Col>
                    <Form.Control size='lg' type='time'/>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="berakhir">
                <Form.Label><b>Tanggal Berakhir</b></Form.Label>
                <Row>
                  <Col md={8}>
                    <Form.Control size='lg' type="date" name="dob"/>
                  </Col>
                  <Col>
                    <Form.Control size='lg' type='time'/>
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
    </>
  )
}

export default MakeTicket

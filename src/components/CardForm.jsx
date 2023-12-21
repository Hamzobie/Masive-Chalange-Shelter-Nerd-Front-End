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

const CardForm = ({dataMap}) => {
    const [showDate, setShowDate] = useState(false);
    const [showLoc, setShowLoc]= useState(false);
    const [showNama, setShowNama] = useState(false);

    const handleCloseNama = () => setShowNama(false);
    const handleShowNama = () => setShowNama(true);
    const handleCloseLoc = () => setShowLoc(false);
    const handleShowLoc = () => setShowLoc(true);

    const handleCloseDate = () => setShowDate(false);
    const handleShowDate = () => setShowDate(true);

    const [dateStart, setDateStart]= useState('');
    const [dateEnd, setDateEnd]= useState('');
    const [timeStart, setTimeStart]= useState('');
    const [timeEnd, setTimeEnd]=useState('');
    const [nama, setNama]=useState('');
    const [kategori, setKategori]=useState('');
    const [lokasi, setLokasi]=useState('');
    const [isOnline, setIsOnline]=useState(false);
    const [link, setLink]=useState('');

    const updateData=() => {
      const theMap = new Map();
      theMap.set("nama", nama);
      theMap.set("kategori", kategori);
      theMap.set("lokasi_event", lokasi);
      theMap.set( "link_event", link);
      theMap.set("tanggal_event", dateStart);
      theMap.set("waktu", timeStart);
      dataMap(theMap);
      handleCloseLoc();
      console.log(theMap);
    }

  return (
    <div>
      <Card style={{ width: '80%', marginLeft: '10%', borderColor: '#CE5A67', borderWidth: '2px', marginTop: '2%'}}>
        <Stack gap={2} style={{alignItems: 'center',backgroundColor: '#F4BF96', padding: '50px 20px 50px 20px'}}>
          <button style={{background: 'none', border: 'none',boxShadow : 'none'}}><img src={gambar} placeholder='img err' /></button>
          <div><h4><b>Unggah Gambar/Poster/Banner</b></h4></div>
          <div>Direkomendasikan 724 x 340 px dan tidak lebih dari 3 Mb</div>
        </Stack>
        <Card.Body style={{padding: '40px'}}>
            <Card.Title ><b className='btnCard' onClick={handleShowNama}>{nama === "" ? "Nama Event":nama}</b>*</Card.Title>
            <Card.Text onClick={handleShowNama}>
            {kategori === "" ? "Pilih Kategori*": kategori}
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
                  <img src={calendar} placeholder='img err'/>{dateStart === '' ? "Pilih Tanggal": (dateStart+" - "+ dateEnd)}
                </Stack>
                <Stack direction='horizontal' gap={2} style={{alignItems: 'center'}} className='btnCard'onClick={handleShowDate}>
                  <img src={time} placeholder='img err'/>{timeStart === '' ? "Pilih Waktu" : (timeStart+"-"+timeEnd)}
                </Stack>
              </Col>
              <Col>
                <b>Lokasi</b>
                <Stack direction='horizontal' gap={2} style={{alignItems: 'center',marginTop: '10px'}} className='btnCard' onClick={handleShowLoc}>
                <img src={loc} placeholder='img err'/>{lokasi === ''? "Pilih Lokasi" : lokasi}
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
            <Form.Control size="lg" type="date" name="start" value={dateStart} onChange={(e)=> setDateStart(e.target.value)}/>
            <Form.Label><b>Tanggal Berakhir</b></Form.Label>
            <Form.Control size="lg" type="date" name="end" value={dateEnd} onChange={(e)=> setDateEnd(e.target.value)}/>
          </Form>
          </Tab>
          <Tab eventKey="waktu" title="Waktu Event">
            <Form>
              <Form.Group controlId="mulai">
                <Row>
                  <Col>
                  <Form.Label><b>Mulai Dari</b></Form.Label>
                    <Form.Control size="lg" type='time' name='mulai' value={timeStart} onChange={(e)=> setTimeStart(e.target.value)}/>
                  </Col>
                  <Col>
                  <Form.Label><b>Sampai</b></Form.Label>
                    <Form.Control size="lg" type='time' name='berakhir' value={timeEnd} onChange={(e)=> setTimeEnd(e.target.value)}/>
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
            <Form.Control size="lg" type="text" name="namaLoc" value={lokasi} onChange={(e)=> setLokasi(e.target.value)} />
            <Form.Check
              inline
              label="Online"
              name="online"
              type="radio"
              checked={isOnline}
              onChange={(e)=> setIsOnline(e.target.checked)}
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
            <Form.Control size="lg" type="text" name="link" value={link} onChange={(e)=> setLink(e.target.value)}/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={updateData}>
            Close
          </Button>
          <Button variant="primary" onClick={updateData}>
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
            <Form.Control size="lg" type="text" name="namaEvent" value={nama} onChange={(e)=> setNama(e.target.value)}/>
            <Form.Label><b>Kategori Event</b></Form.Label>
            <Form.Select aria-label="Default select example" value={kategori} onChange={(e)=> setKategori(e.target.value)}>
              <option value="Konser">Konser</option>
              <option value="Pameran">Pameran</option>
              <option value="Festival">Festival</option>
              <option value="JFest">JFest</option>
              <option value="Seminar">Seminar</option>
              <option value="Performance">Performance</option>
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

import React from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FormConfirm = () => {
  return (
    <Row className='justify-content-md-center'>
        <Col md="auto">
            <p><b className='clr'>Yeay</b>, Tinggal selangkah lagi dan event kamu berhasil dibuat!</p>
        </Col>
        <Col md="auto">
          <Button size='sm' className='btnlght' style={{backgroundColor: 'white', borderColor: '#CE5A67',color:'black'}}>Simpan Draft</Button>{' '}
          <Button variant="danger" size='sm'>Buat Event Sekarang</Button>{' '}
        </Col>
      </Row>
  )
}

export default FormConfirm

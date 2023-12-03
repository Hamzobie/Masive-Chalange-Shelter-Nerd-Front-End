import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import info from '../assets/Info Circle.svg'
import '../App.css';

const KategoriTiket = () => {
  return (
    <div style={{margin: '10px 11% 10px 11%', width: '78%'}}>
      <Form>
        <Row>
            <Col sm={8}>
                <h5><b>Pengaturan Tambahan</b></h5>
                <Stack direction='horizontal'>
                    <Stack>
                      <b style={{fontSize:'18px'}}>Jumlah maks. tiket per transaksi</b>
                      Jumlah maksimal tiket yang dapat dalam 1 transaksi
                    </Stack>
                    <Form.Select size='sm' style={{width: '100px', borderColor:'#CE5A67'}} >
                        <option>Jumlah</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </Form.Select>
                </Stack>
                <Stack direction= 'horizontal'>
                  <Stack>
                    <b style={{fontSize:'18px'}}>1 akun email - 1 kali transaksi</b><br/>
                    1 akun email hanya dapat melakukan 1 kali transaksi pembelian tiket
                  </Stack>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                  />
                </Stack>
                <Stack direction= 'horizontal'>
                  <Stack>
                    <b style={{fontSize:'18px'}}>1 tiket - 1 data pemesanan</b><br/>
                    1 tiket hanya dapat digunakan untuk 1 data pemesanan, data antar tiket tidak boleh sama
                  </Stack>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                  />
                </Stack>
                <div id='info'>
                  <Stack direction='horizontal' gap={3}>
                    <img src={info}/>
                    <Stack gap={0}>
                      Kamu dapat menambah data tambahan di
                      <a id='toprofile'>informasi profil</a>
                    </Stack>
                  </Stack>
                </div>
            </Col>
            <Col sm={3}>
              <h5><b>Formulir data tambahan</b></h5>
              <Form.Check label="Nama Lengkap"
                disabled 
                checked
                className="Progress-check" 
                id="checkbox-id" />
              <Form.Check label="Email" 
                disabled
                className="Progress-check" 
                id="checkbox-id" />
              <Form.Check label="Nomor Handphone" 
                disabled
                className="Progress-check" 
                id="checkbox-id" />
              <Form.Check label="Nomor KTP" 
                disabled
                className="Progress-check" 
                id="checkbox-id" />
              <Form.Check label="Alamat" 
                disabled
                className="Progress-check" 
                id="checkbox-id" />
              <Form.Check label="Tanggal Lahir" 
                disabled
                className="Progress-check" 
                id="checkbox-id" />
              <Form.Check label="Jenis Kelamin" 
                disabled
                className="Progress-check" 
                id="checkbox-id" />
            </Col>
        </Row>
      </Form>
    </div>
  )
}

export default KategoriTiket

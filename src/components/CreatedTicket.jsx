import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import time from '../assets/Time Circle.svg'

const CreatedTicket = ({data}) => {
  return (
    <Container>
      <Row>
        <Col xs={10}>
          <Stack>
            <b>{data.nama}</b>
            <Stack direction='horizontal'>
              <img src={time} placeholder='img err'/> Mulai dijual tanggal {data.date}
            </Stack>
          </Stack>
        </Col>
        <Col>
          <b>Pre-Sale</b>
          <b>{data.harga}</b>
        </Col>
        <Col xs={2}>
          <Button><img /></Button>
          <Button><img /></Button>
        </Col>
      </Row>
    </Container>
  )
}

export default CreatedTicket

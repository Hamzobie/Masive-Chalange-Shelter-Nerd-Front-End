import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'

const CreatedTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Stack direction='horizontal'>
            <b>Nama Event</b>
            
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default CreatedTicket

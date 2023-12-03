import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardForm from '../components/CardForm';
import FormConfirm from '../components/FormConfirm'
import TabBar from '../components/TabBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function FormEvent() {
  return (
    <>
      <Navbar />
      <div style={{paddingTop: 20, paddingBottom: 20, paddingLeft: 125, paddingRight: 18, background: '#CE5A67', gap: 18,}}>
        <div style={{color: '#F2F2F2', fontSize: 16, fontWeight: 'bold', wordWrap: 'break-word'}}>
          <a>Event -</a> Buat Event
        </div>
      </div>
      <CardForm />
      <TabBar />
      <hr style={{color: '#CE5A67', margin: "20px 64px 20px 64px"}}></hr>
      <FormConfirm />
      <Footer />
    </>
  )
}

export default FormEvent

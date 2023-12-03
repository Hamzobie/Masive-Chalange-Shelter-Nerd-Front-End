import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    
    <footer className="footer mt-auto py-3">
     <div className="container" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
     <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div style={{color: 'black', fontSize: 16, fontWeight: '600', wordWrap: 'break-word'}}>X  E  T  @ 2023</div>
    </div>
    <div style={{justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div style={{color: 'black', fontSize: 16, fontWeight: '600', wordWrap: 'break-word'}}>Versi 1.0</div>
    </div>
      </div>
    </footer>
  );
};

export default Footer;

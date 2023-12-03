import React, { useState } from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import KategoriTiket from './KategoriTiket';
import MakeTicket from './MakeTicket';
import DescForm from './DescForm';

const TabBar = () => {
    const [toggle, setToggle] = useState(1);
    function updateTogle(id) {
        setToggle(id);
    }
  return (
    <div>
      <ul className="nav nav-underline nav-justified nav-form">
        <li className={toggle === 1 ? "nav-item choosen":"nav-item"} onClick={()=>updateTogle(1)}>
            Tambah Tiket
        </li>
        <li className={toggle === 2 ? "nav-item choosen":"nav-item"} onClick={()=>updateTogle(2)}>
            Deskripsi Event
        </li>
      </ul>
      <div className={toggle === 1 ? "show-content":"hide-content"}>
        <MakeTicket />
        <KategoriTiket />
      </div>
      <div className={toggle === 2 ? "show-content":"hide-content"}>
        <DescForm/>
      </div>
    </div>
  )
}

export default TabBar

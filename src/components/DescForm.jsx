import React, { useState } from 'react'
import '../App.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const DescForm = () => {
  const [deskripsi, setDeskripsi] = useState('');
  const[syarat, setSyarat]= useState('');

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [ 'link', 'image', 'video', 'formula' ],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];
  const module ={
    toolbar: toolbarOptions,
  }

  return (
    <div className='descForm'>
      <ul>
        <li>
            Deskripsi Event
            <ReactQuill modules={module} theme='snow' value={deskripsi} onChange={setDeskripsi}/>
        </li>
        <li>
            Syarat & ketentuan
            <ReactQuill modules={module} theme='snow' value={syarat} onChange={setSyarat}/>
        </li>
      </ul>
    </div>
  )
}

export default DescForm

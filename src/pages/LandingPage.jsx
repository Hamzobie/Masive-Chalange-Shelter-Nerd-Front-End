import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/landingpage.css'
import { Link } from 'react-router-dom';
import logo from "../assets/img/landing/xet.png";
import yourImg from "../assets/img/landing/konten1.png"
import festifal from "../assets/img/landing/kate1.png"
import konser from "../assets/img/landing/kate2.png"
import pameran from "../assets/img/landing/kate3.png"
import jfest from "../assets/img/landing/kate4.png"
import seminar from "../assets/img/landing/kate5.png"
import mockup1 from "../assets/img/landing/mockup1.png"
import mockup2 from "../assets/img/landing/mockup2.png"
import install from "../assets/img/landing/instal.png"
import footerimg from "../assets/img/landing/xetfooter.png"
import playstore from "../assets/img/landing/playstore.png"
import appstore from "../assets/img/landing/appstore.png"


const LandingPage = () => {
    document.addEventListener("DOMContentLoaded", function() {
        // Fungsi untuk menghasilkan warna acak
        function getRandomColor() {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }
      
        // Mengatur warna acak pada setiap elemen span saat halaman dimuat
        document.querySelectorAll("a span").forEach(function(span) {
          span.style.backgroundColor = getRandomColor();
        });
      
        // Efek hover pada setiap elemen span
        document.querySelectorAll("a").forEach(function(link) {
          link.addEventListener("mouseenter", function() {
            link.querySelector("spanBtn").style.backgroundColor = "#C03645";
            link.querySelector("spanBtn").style.color = "white";
          });
      
          link.addEventListener("mouseleave", function() {
            link.querySelector("spanBtn").style.backgroundColor = getRandomColor();
            link.querySelector("spanBtn").style.color = "";
          });
        });
      });
      document.addEventListener("DOMContentLoaded", function () {
        // Array of image URLs
        const images = [
          "url(/img/beranda1.jpg)",
          "url(/img/beranda2.jpg)",
          "url(/img/beranda3.jpg)",
          "url(/img/beranda4.jpg)",
          "url(/img/beranda5.jpg)",
          // Add more image URLs as needed
        ];
      
        const backgroundContainer = document.getElementById("background-container");
      
        // Function to set a random background image
        function setRandomBackground() {
          const randomIndex = Math.floor(Math.random() * images.length);
          backgroundContainer.style.backgroundImage = images[randomIndex];
        }
      
        // Set initial background
        setRandomBackground();
        // Change background every 5 seconds (5000 milliseconds)
        setInterval(setRandomBackground, 5000);
      });
  return (
    <>
        <header>
      <div id="background-container">
        <div id="header">
          <div id="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div id="title">
            <h2>Experience Event Ticket</h2>
          </div>
          <div id="button-container">
            <Link to='/Login'>
              <button id="myButton">Masuk/Daftar</button>
            </Link>
          </div>
        </div>
        <div id="content-wrapper">
          <h1>Tempat Setiap Acara Menjadi Pengalaman</h1>
          <h2>Luar Biasa!</h2>
          <Link to="/Register"><button id="myButton">DAFTARKAN ACARAMU SEKARANG</button></Link>
        </div>
      </div>
    </header>

    <div className="container content">
      <div className="main-content">
        <img src={yourImg} alt="Your Image" />
        <div className="text-content">
          <h2>Kenapa harus di EXPERIENCE EVENT TICKET (XET) ?</h2>
          <p>
            Karena di XET dapat mengoptimalkan pengalaman penyelenggaraan acara
            Anda dengan menggunakan layanan kami! Dengan fitur lengkap dan user
            friendly, website kami menyediakan solusi terbaik untuk
            mengorganisir event Anda
          </p>
          <Link to="/Register"><button className='custButton'>DAFTAR SEKARANG!</button></Link>
        </div>
      </div>
      <div className="second-content">
        <div className="text-content">
          <h2>#Pencarian Event yang Mudah</h2>
          <p>
            XET menawarkan pencarian event yang menyesuaikan dengan kriteria dan
            keinginanan pengguna
          </p>
        </div>
        <div className="image-kategori">
          <div className="theImage">
            <img className="image" src={festifal} alt="Gambar 1"  title="Festival" />
            <div className="showText">Festival</div>
          </div>
          <div className="theImage">
            <img className="image" src={konser} alt="Gambar 2" title="Konser"/>
            <div className="showText">Konser</div>
          </div>
          <div className="theImage">
            <img className="image" src={pameran} alt="Gambar 3" />
            <div className="showText">Pameran</div>
          </div>
          <div className="theImage">
            <img className="image" src={jfest} alt="Gambar 4" />
            <div className="showText">J-Fest</div>
          </div>
          <div className="theImage">
            <img className="image" src={seminar} alt="Gambar 5" />
            <div className="showText">Seminar</div>
          </div>
        </div>
      </div>

      <div className="third-content">
        <div className="image-mockup">
          <img src={mockup1} alt="Your Image" />
          <img src={mockup2} alt="Your Image" />
        </div>
        <div className="text-content">
          <h2>Kini Hadir Di Layar Ponsel Anda</h2>
          <p>
            Dengan fitur pencarian anda dapat menjelajahi berbagai kategori
            acara, Mulai dari
            <a href="#"><span className='spanBtn'>Pertunjukan</span></a>
            <a href="#"><span className='spanBtn'>Stand-Up</span></a>
            <a href="#"><span className='spanBtn'>Cosplay</span></a>
            <a href="#"><span className='spanBtn'>Konser</span></a>
            <a href="#"><span className='spanBtn'>Musik</span></a>
            <a href="#"><span className='spanBtn'>Festival</span></a>
            <a href="#"><span className='spanBtn'>Pertandingan</span></a>
            <a href="#"><span className='spanBtn'>Pameran</span></a>
            <a href="#"><span className='spanBtn'>Seminar</span></a>
            <a href="#"><span className='spanBtn'>Workshop</span></a
            >. XET memberikan secara real-time sehingga anda tidak melewatkan
            momen seru Temukan pengalaman baru dan jadwalkan waktu Anda dengan
            lebih efisien, semua dalam genggaman ponsel Anda.
          </p>
        </div>
      </div>

      <div className="fourth-content">
        <div className="text-content">
          <h2>Instal aplikasi EXT sekarang !</h2>
          <p>
            Bergabunglah dengan kami untuk pengalaman event yang tak terlupakan!
          </p>
          <a href="#"><button className='custButton'>Install Sekarang </button></a>
        </div>
        <img src={install} alt="Your Image" style={{marginLeft : '10px'}} />
      </div>
    </div>
    <footer>
      <div className="footer1">
        <div className="logo-container">
          <div className="logofooter">
            <img src={footerimg} alt="Logo" />
            <h1>Experience Event Ticket</h1>
          </div>
        </div>

        <div className="form-container">
          <input
            type="text"
            className="input-text"
            placeholder="Masukkan Email untuk mendapat notifikasi.."
          />
          <button className="submit-button">Kirim</button>
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="footer2">
        <div className="infofooter">
          <p><b>Layanan Panggilan</b></p>
          <p>
            Kontak : +6282263238965 (Wa) | Jam Kerja : Hari Kerja @ 09.00 -
            16.00
          </p>
        </div>
        <div className="instalfooter">
          <p>Instal Sekarang!</p>
          <div>
            <a href="#"><img src={appstore} alt="appstore" /></a>
            <a href="#"><img src={playstore} alt="playstore" /></a>
          </div>
        </div>
      </div>
      <hr className="horizontal-line" />
      <p>X E T @ 2023. All rights reserved.</p>
    </footer>
    <script src="colour.js"></script>
    <script src="script.js"></script>
    </>
  )
}

export default LandingPage

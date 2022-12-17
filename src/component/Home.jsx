import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import avatar from '../img/profile.jpg'
import work from '../img/work3.jpg'

import work1 from '../img/work1.jpg'
import work2 from '../img/work2.jpg'
import work3 from '../img/work3.jpg'
import work4 from '../img/work4.jpg'
import work5 from '../img/work5.jpg'
import work6 from '../img/work6.jpg'
const Home = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a241ibo', 'template_o6vlofm', form.e, 'NuQnsm_o-JAeio3Uv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const section=()=>{
    let skills = document.querySelector(" .skills")
    let skill = document.querySelectorAll(".skills .progress span ")
    window.onscroll = function () {
      if(window.scrollY > skills.offsetTop - 400 ) {
        skill.forEach(e => {
          e.style.width = e.dataset.width
          e.style.opacity = "1"
        })
      }
    }
  }
  useEffect(_=>{ section()} , [])
  return (
    <div className='pageAll'>
    <section className="home" id="home">
      <div className="cont">
        <div className="shap">
          <span className="line"></span>
          <span className="left"></span>
          <span className="right"></span>
          <img src={avatar} alt="" />
        </div>
        <h2 data-strok="Ahmed ShTYa">Ahmed ShTYa</h2>
        <ul>
          <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100008364883535"><i className="fa-brands fa-facebook"></i></a></li>
          <li><a target="_blank" href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-solid fa-envelope"></i></a></li>
          <li><a target="_blank" href="https://wa.me/01551495772"><i className="fa-brands fa-whatsapp"></i></a></li>
          <li><a target="_blank" href="https://github.com/Shtya"><i className="fa-brands fa-github"></i></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/ahmed-abdelrhman-78bb18230/"><i className="fa-brands fa-linkedin"></i></a></li>
        </ul>
      </div>
      </section>
      <section className="about" id="about">
      <div className="container">
        <h2>
          I’m a Front-End Developer<br />
          located in Egypt. I have a serious passion for Web development.<br />
          Since beginning my journey as a Frontend developer over 1 years ago
          <br />
          and I still improve what i can do with HTML/CSS/JS <br /><br />I am
          ely on my way to finish the back end (Node Js)
        </h2>

        <div className="solar-system">
          <div className="All orbit">
            <i className="planet js fa-brands fa-js"></i>
            <i className="planet react fa-brands fa-react"></i>
            <div className="html orbit">
              <i className="planet fa-brands fa-css3"></i>
              <div className="css orbit">
                <i className="planet fa-brands fa-html5"></i>
                <i className="sun fa-solid fa-code"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="skills" id="skills">
        <div className="container">
          <div className="cover"><img src={work} alt="" /></div>
          <div className="boxs">
          <div className="box">
          <h2>HTML </h2>
          <div className="progress">
            <span  data-width="80%"></span>
          </div>
        </div>
        <div className="box">
          <h2>Css </h2>
          <div className="progress">
            <span  data-width="85%"></span>
          </div>
        </div>
        <div className="box">
          <h2>JS</h2>
          <div className="progress">
            <span  data-width="75%"></span>
          </div>
        </div>
        <div className="box">
          <h2>Pug</h2>
          <div className="progress">
            <span  data-width="90%"></span>
          </div>
        </div>
        <div className="box">
          <h2>Scss</h2>
          <div className="progress">
            <span  data-width="90%"></span>
          </div>
        </div>
        <div className="box">
          <h2>bootstrap</h2>
          <div className="progress">
            <span  data-width="85%"></span>
          </div>
        </div>
        <div className="box">
          <h2>GulpJS</h2>
          <div className="progress">
            <span  data-width="90%"></span>
          </div>
        </div>
        <div className="box">
          <h2>Unite Testing </h2>
          <div className="progress">
            <span  data-width="80%"></span>
          </div>
        </div>
        <div className="box">
          <h2>Git & Github</h2>
          <div className="progress">
            <span  data-width="80%"></span>
          </div>
        </div>
          </div>
      </div> 
      </section>
      <section className="work" id="work">

          <div className="container">
        <div className="box">
            <img src={work1} alt="" />
            <div className="content">
              <a  href="https://shtya.github.io/Dashboard/" target="_blank" className="page"><i className="fa-solid fa-eye"></i></a>
              <a className="code" target="_blank" href="https://github.com/Shtya/Dashboard"><i className="fa-brands fa-github"></i> </a>
            </div>
        </div>

        <div className="box">
            <img src={work2} alt="" />
            <div className="content">
              <a  href="https://shtya.github.io/Project-Leon/" target="_blank" className="page"><i className="fa-solid fa-eye"></i></a>
              <a className="code" target="_blank" href="https://github.com/Shtya/Project-Leon"><i className="fa-brands fa-github"></i> </a>
            </div>
        </div>

        <div className="box">
            <img src={work3} alt="" />
            <div className="content">
              <a  href="https://shtya.github.io/Dashboard/" target="_blank" className="page"><i className="fa-solid fa-eye"></i></a>
              <a className="code" target="_blank" href="https://github.com/Shtya/Dashboard"><i className="fa-brands fa-github"></i> </a>
            </div>
        </div>
        <div className="box">
            <img src={work4} alt="" />
            <div className="content">
              <a  href="https://shtya.github.io/Dashboard/" target="_blank" className="page"><i className="fa-solid fa-eye"></i></a>
              <a className="code" target="_blank" href="https://github.com/Shtya/Dashboard"><i className="fa-brands fa-github"></i> </a>
            </div>
        </div>
        <div className="box">
            <img src={work5} alt="" />
            <div className="content">
              <a  href="https://shtya.github.io/Dashboard/" target="_blank" className="page"><i className="fa-solid fa-eye"></i></a>
              <a className="code" target="_blank" href="https://github.com/Shtya/Dashboard"><i className="fa-brands fa-github"></i> </a>
            </div>
        </div>
        <div className="box">
            <img src={work6} alt="" />
            <div className="content">
              <a  href="https://shtya.github.io/Dashboard/" target="_blank" className="page"><i className="fa-solid fa-eye"></i></a>
              <a className="code" target="_blank" href="https://github.com/Shtya/Dashboard"><i className="fa-brands fa-github"></i> </a>
            </div>
        </div>

          </div>
      </section>
      <section className="contact" id="contact">
        <h2>Get in  Touch <span>Contact Me</span></h2>
        <form action="" ref={form} onSubmit={sendEmail}>
          <div className="box">
          <input type="text" name="Name" placeholder='Name'  className='Name'  />
            <label htmlFor="">Name</label></div>
          <div className="box">
          <input type="Email" name="Email" placeholder='Email'  className='Email'  />
            <label htmlFor="">Email</label></div>
          <div className="box">
          <textarea type="text" name="Message" placeholder='Message' className='Message' />
            <label htmlFor="">Message</label></div>
          <input type="submit" value="Send" className='button Submit' />
        </form>
      </section>
    </div>
  )
}

export default Home


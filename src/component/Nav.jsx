import React , {useState} from 'react'
import { useEffect } from 'react'

const Nav = () => {
  const handel = () => {
    let toggle = document.querySelector(".toggle")
    let li = document.querySelectorAll("nav ul li")
    let ul = document.querySelector("nav ul ")

    toggle.addEventListener("click", function () {ul.classList.toggle("show")})
    toggle.addEventListener("click", rotate)
    
    function rotate() {li.forEach((e) => {e.classList.toggle("rotate")})}
    li.forEach(e => {
      e.addEventListener("click", function () {
        li.forEach(e => {
          e.classList.remove('active')
          this.classList.add("active")
        })
      })
    })
  }
  useEffect(_=>{handel()} , [])
  return (
    <nav >
      <div><a href="#" className="logo">Shtya</a></div>

          <ul className="nav__list">
              <li className="active" ><a href="#home" >Home</a></li>
              <li ><a href="#about" >About</a></li>
              <li ><a href="#skills" >Skills</a></li>
              <li ><a href="#work" >Work</a></li>
              <li ><a href="#contact" >Contact</a></li>
          </ul>

      <div
        className="toggle"
      ><i className="fa-solid fa-bars"></i></div>
    </nav>
  )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUnorderedList, AiFillStar } from 'react-icons/ai'

import { Container } from '../styles/components/sidebar'

import iconImg from '../images/icon.png'

export default function Sidebar() {
  return (
    <Container>
      <aside className="app-sidebar">

        <img src={iconImg} alt="icon" />
        <Link to="/">
          <AiOutlineUnorderedList size={18} />
          <span>Lista</span>
        </Link>
        <Link to="/favorites">
          <AiFillStar size={18} />
          <span>Favoritos</span>
        </Link>
      </aside>
    </Container>
  )
}

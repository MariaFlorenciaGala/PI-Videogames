import './nav.styles.css';

//REACT
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import NewVideogame from '../../views/newVideogame/newVideogame';
//iconos
import { FaHome } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineVideogameAsset } from "react-icons/md";




const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <nav className="allNav">
        <Link to={"/"}><FaHome className='icono' /> Home</Link>
        <Link to={"/aboutMe"}><IoPersonCircleSharp className='icono'/>Sobre mi</Link>
        <Link onClick={toggleModal}><MdOutlineVideogameAsset className='icono'/>Crear videogame</Link>
      </nav>
        {
          showModal && (
            <div className="modalmask">
              <div className="modalbox">
                <button className="close" onClick={toggleModal}>X</button>
                <NewVideogame />
              </div>
            </div>
          )
        }
    </div>
  );
};

export default Nav;

import imagemFundo from '../assets/image-de-fundo.jpg';
import logo from '../assets/logo-Imperio.png'
import { useState } from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Modal from './components/modal/modalForm';
import './index.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div>
        <div className="imagemFundo">
          <img src={imagemFundo} alt="pizza no forno " />
        </div>
        <div className="divLogo">
          <img className='imagemlogo' src={logo} alt="" />

          <button
            onClick={openModal}
            className="btnPedir" >Peça já</button>

          <ul className='redeSocial'>
            <li >
              <a href="" target="_blank"><FaInstagram /></a>
            </li>

            <li>
              <a href="https://wa.me/5561998287364" target="_blank"><FaWhatsapp /></a>
            </li>
          </ul>

        </div>
      </div>


      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  )
}

export default App

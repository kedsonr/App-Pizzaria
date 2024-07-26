import imagemFundo from '../assets/image-de-fundo.jpg';
import logo from '../assets/logo-Imperio.png'
import { useState } from 'react';
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
        <img className="imagemFundo" src={imagemFundo} alt="pizza no forno " />
      </div>
      <div className="divLogo">
        <div>
          <img className='imagemlogo' src={logo} alt="" />
        </div>
        <div>
          <button
          onClick={openModal}
          className="btnPedir" >Peça já</button>

       {isModalOpen && <Modal onClose={closeModal} />}
        </div>

      </div>
    </>
  )
}

export default App

import React from 'react';
import '../modal/modal.css';

const Modal = ({ onClose }) => {
    return (
        <div className="modalOverlay">
            <div className="modalContent">
                <h2>Monte sua Pizza</h2>
                <form>
                    <div className="Tamanho">
                        <h4>
                            Escolhar um Tamanho:
                        </h4>
                        <select className="TamanhoSelect" name="TamanhoList" form="TamanhoForm">
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="G">G</option>
                            <option value="GG">GG</option>
                        </select>
                    </div>

                </form>
                <button onClick={onClose} className="closeModalBtn">Fechar Modal</button>
            </div>
        </div>
    );
};

export default Modal;
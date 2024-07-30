import React, { useState } from 'react';
import '../modal/modal.css';

const Modal = ({ onClose }) => {

    // Array de sabores disponíveis
    const flavors = ['Mussarela', 'Calabresa', 'Pepperoni', 'Quatro Queijos', 'Frango com Catupiry'];

    // Estado para armazenar os sabores escolhidos
    const [selectedFlavors, setSelectedFlavors] = useState([]);

    // Função para lidar com a seleção de sabores
    // Função para lidar com a mudança de seleção
  const handleSelectChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedFlavors(selectedOptions);
  };
  
    return (
        <div className="modal">
            <div className="modalContent">
                <h2>Monte sua Pizza</h2>
                <form>
                    <div className="Tamanho">
                        <h4>
                            Escolhar um Tamanho:
                        </h4>
                        <select className="TamanhoSelect" name="TamanhoList" >
                            <option value="P">P</option>
                            <option value="M">M</option>
                            <option value="G">G</option>
                            <option value="GG">GG</option>
                        </select>
                    </div>

                </form>
                <button onClick={onClose} className="closeModalBtn">Fechar Modal</button>

                <div>
                    <h1>Escolha seus Sabores de Pizza</h1>
                    <select multiple value={selectedFlavors} onChange={handleSelectChange} style={{ width: '200px', height: '150px' }}>
                        {flavors.map((flavor) => (
                            <option key={flavor} value={flavor}>
                                {flavor}
                            </option>
                        ))}
                    </select>
                    <div>
                        <h2>Sabores Selecionados:</h2>
                        {selectedFlavors.length === 0 ? (
                            <p>Nenhum sabor selecionado</p>
                        ) : (
                            <ul>
                                {selectedFlavors.map((flavor) => (
                                    <li key={flavor}>{flavor}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;
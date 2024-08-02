import React, { useState } from 'react';
import '../modal/modal.css';

function BtnTamanho() {
    const [tamanho, setTamanho] = useState('');
    const [sabores, setSabores] = useState([]);
    const [maxSabores, setMaxSabores] = useState(0);

    const handleChangeTamanho = (event) => {
        const tamanhoSelecionado = event.target.value;
        setTamanho(tamanhoSelecionado);

        // Define a quantidade máxima de sabores com base no tamanho
        switch (tamanhoSelecionado) {
            case 'P':
                setMaxSabores(2);
                break;
            case 'M':
                setMaxSabores(3);
                break;
            case 'G':
            case 'GG':
                setMaxSabores(4);
                break;
            default:
                setMaxSabores(0);
        }

        // Limpa os sabores selecionados ao mudar o tamanho
        setSabores([]);
    };

    const handleChangeSabores = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
        if (selectedOptions.length <= maxSabores) {
            setSabores(selectedOptions);
        } else {
            alert(`Você pode escolher até ${maxSabores} sabores.`);
        }
    };

    const saboresDisponiveis = [
        'Calabresa',
        'Marguerita',
        'Portuguesa',
        'Quatro Queijos',
        'Calabresa',
        'Marguerita',
        'Portuguesa',
        'Quatro Queijos',
        
    ];

    return (
        <div >
            <h3>Escolha o tamanho da pizza:</h3>
            <div className="tamanho" >
                <div className='inputRadio'>
                    <label htmlFor="p">P</label>
                    <span><strong>R$</strong> 45,00</span>
                    <input
                        type="radio"
                        id="p"
                        name="tamanho"
                        value="P"
                        checked={tamanho === 'P'}
                        onChange={handleChangeTamanho}
                    />
                </div>

                <div className='inputRadio'>
                    <label htmlFor="m">M</label>
                    <span><strong>R$</strong> 55,00</span>
                    <input
                        type="radio"
                        id="m"
                        name="tamanho"
                        value="M"
                        checked={tamanho === 'M'}
                        onChange={handleChangeTamanho}
                    />
                </div>

                <div className='inputRadio'>
                    <label htmlFor="g">G</label>
                    <span><strong>R$</strong>75,00</span>
                    <input
                        type="radio"
                        id="g"
                        name="tamanho"
                        value="G"
                        checked={tamanho === 'G'}
                        onChange={handleChangeTamanho}
                    />
                </div>

                <div className='inputRadio'>
                    <label htmlFor="gg">GG</label>
                    <span><strong>R$</strong> 85,00</span>
                    <input
                        type="radio"
                        id="gg"
                        name="tamanho"
                        value="GG"
                        checked={tamanho === 'GG'}
                        onChange={handleChangeTamanho}
                    />
                </div>

            </div>



            {tamanho && (
                <div>
                    <h3>Escolha até {maxSabores} sabores:</h3>
                    <select value={sabores} onChange={handleChangeSabores}>
                        {saboresDisponiveis.map((sabor) => (
                            <option key={sabor} value={sabor}>
                                {sabor}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div>
                <h4>Sabores Selecionados:</h4>
                <ul>
                    {sabores.map((sabor, index) => (
                        <li key={index}>{sabor}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

const Modal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modalContent">
                <h2>Monte sua Pizza</h2>
                <form>
                    <div>
                        <BtnTamanho />
                    </div>

                </form>
                <button onClick={onClose} className="closeModalBtn">Fechar Modal</button>


            </div>
        </div>
    );
};

export default Modal;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Formulario = () => {
    const [selectedButton, setSelectedButton] = useState('');
    const [formData, setFormData] = useState({
        nome: '',
        empresa: '',
        telefone: '',
        email: '',
        mensagem: '',
        selectedButton: '',
    });

    useEffect(() => {
        console.log("formData:", formData);
    }, [formData]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleButtonClick = (buttonName: any) => {
        setSelectedButton(buttonName);
        setFormData(prevState => ({ ...prevState, selectedButton: buttonName }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (selectedButton !== '') {
                const response = await axios.post('/api/sendMail', JSON.stringify(formData), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log("Resposta do servidor:", response.data);
            } else {
                console.log('Nenhum botão foi selecionado');
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        }
    };

    return (
        <div className="bg-suno-gray flex justify-around h-full py-14">
            <div>
                <h1 className="text-suno-acqua font-extrabold schibsted text-5xl pb-8">
                    Fale com<br/>
                    a gente.
                </h1>
                <p className="text-suno-dark-blue font-medium schibsted text-3xl pb-8">
                    Nossos especialistas<br/>
                    têm a solução certa<br/>
                    para a sua demanda.
                </p>
                <img></img>
                <p className="text-suno-dark-blue font-extrabold schibsted text-3xl">(11) 98217-2824</p>
                <p className="text-suno-dark-blue font-medium schibsted text-3xl">contato@sunobrasil.com.br</p>
            </div>
            <div className="w-1/3 flex-col">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Nome"
                        className="mb-5 p-2 w-full border-b border-suno-dark-blue focus:outline-none placeholder-suno-dark-blue bg-suno-gray font-medium schibsted text-2xl"
                    />
                    <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Empresa"
                        className="mb-5 mr-2 p-2 w-[48%] border-b border-suno-dark-blue focus:outline-none placeholder-suno-dark-blue bg-suno-gray font-medium schibsted text-2xl"
                    />
                    <input
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Telefone"
                        className="mb-5 p-2 w-1/2 border-b border-suno-dark-blue focus:outline-none placeholder-suno-dark-blue bg-suno-gray font-medium schibsted text-2xl"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="mb-5 p-2 w-full border-b border-suno-dark-blue focus:outline-none placeholder-suno-dark-blue bg-suno-gray font-medium schibsted text-2xl"
                    />

                    <p className="text-suno-dark-blue my-5 font-medium schibsted text-2xl">O que você está buscando?</p>
                    <div className="flex justify-start mb-5 gap-4 flex-wrap">
                        {['Recrutamento e Seleção', 'Hunting para TI', 'Staffing', 'Alocação', 'RPO'].map((buttonName, index) => (
                            <button
                                key={index}
                                className={`w-48 h-14 border rounded-3xl text-suno-dark-blue font-medium schibsted text-lg leading-5 text-center ${selectedButton === buttonName ? 'bg-suno-dark-blue text-white border-white' : 'bg-suno-gray border-suno-dark-blue'}`}
                                onClick={() => handleButtonClick(buttonName)}
                                type="button" // Adiciona type="button" para evitar o envio do formulário
                            >
                                {buttonName}
                            </button>
                        ))}
                    </div>
                    <textarea
                        id="more-information"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="mb-5 p-2 border rounded border-suno-dark-blue w-full h-40 my-2 bg-suno-gray resize-none"
                    />

                    <button type="submit" className="w-48 h-14 p-2 bg-suno-dark-blue text-suno-acqua rounded-3xl font-extrabold schibsted text-lg">ENVIAR</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;

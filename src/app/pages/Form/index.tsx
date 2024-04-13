"use client"

import React, { useState } from 'react';
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

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleButtonClick = (buttonName: any) => {
        setSelectedButton(buttonName);
        setFormData({ ...formData, selectedButton: buttonName });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (selectedButton !== '') {
                const response = await axios.post('/api/sendMail', formData);
                console.log(response.data);
            } else {
                console.log('Nenhum botão foi selecionado');
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        }
    };

    return (
        <div className="bg-suno-gray flex flex-col items-center justify-center h-full">
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Nome"
                        className="mb-2 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Empresa"
                        className="mb-2 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    <input
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="Telefone"
                        className="mb-2 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                    {/* <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="mb-2 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    /> */}

                    <div className="flex justify-between mb-2">
                        {['Recrutamento e Seleção', 'Hunting para TI', 'Staffing'].map((buttonName, index) => (
                            <button
                                key={index}
                                className={`w-24 p-2 ${selectedButton === buttonName ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded`}
                                onClick={() => handleButtonClick(buttonName)}
                                type="button" // Adiciona type="button" para evitar o envio do formulário
                            >
                                {buttonName}
                            </button>
                        ))}
                    </div>
                    {/* Outros botões omitidos para brevidade */}

                    <textarea
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                        placeholder="Digite aqui..."
                        className="mb-2 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />

                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;

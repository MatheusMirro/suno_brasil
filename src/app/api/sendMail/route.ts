// Import necessary modules
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Function to handle POST requests
export async function sendMail(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Extract data from the request body
        const { nome, empresa, telefone, email, mensagem } = req.body;
        console.log('Dados recebidos:', { nome, empresa, telefone, email, mensagem });

        try {
            // Configure email transport
            const transporter = nodemailer.createTransport({
                service: "gmail",
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: "imirro13@gmail.com",
                    pass: "teste"
                }
            });

            // Configure email options
            const mailOptions = {
                from: 'seu-email@gmail.com', // Your Gmail email address
                to: 'matheus.alvespaiva96@gmail.com', // Email address to receive the forms
                subject: 'Contact Form', // Email subject
                text: `
                    Name: ${nome}
                    Company: ${empresa}
                    Phone: ${telefone}
                    Email: ${email}
                    Message: ${mensagem}
                `,
            };
            console.log('Email options:', mailOptions);

            // Send email
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);

            // Respond to the request successfully
            res.status(200).json({ success: true, message: 'Email sent successfully.' });
        } catch (error) {
            // Respond to the request with an error in case of failure
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Error sending email.' });
        }
    } else {
        // If the method is not POST, respond to the request with a method not allowed error
        res.status(405).json({ success: false, message: 'Method not allowed.' });
    }
}

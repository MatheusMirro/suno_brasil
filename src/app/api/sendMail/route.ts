import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Function to handle POST requests
async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            // Parse JSON from request body
            const { nome, empresa, telefone, email, mensagem } = req.body;
            console.log('Dados recebidos:', { nome, empresa, telefone, email, mensagem });

            // Configure email transport
            const transporter = nodemailer.createTransport({
                service: process.env.SERVICE,
                host: process.env.HOST,
                port: 587,
                secure: false,
                auth: {
                    user: process.env.YOUR_EMAIL,
                    pass: process.env.YOUR_PASSWORD // (Recomendável não armazenar credenciais diretamente no código)
                }
            });

            // Configure email options
            const mailOptions = {
                from: process.env.YOUR_EMAIL,
                to: process.env.DESTINATION,
                subject: 'Teste final.',
                text: `
          Name: ${nome}
          Company: ${empresa}
          Phone: ${telefone}
          Email: ${email}
          Message: ${mensagem}
        `,
            };

            // Send email
            try {
                await transporter.sendMail(mailOptions);
                const response = {
                    success: "Email enviado com sucesso."
                };
                return new Response(JSON.stringify(response), {
                    status: 200,
                })
            } catch (error) {
                const response = {
                    failed: "Erro ao enviar o email."
                }
                return new Response(JSON.stringify(response), {
                    status: 500,
                })
            }
        } catch (error) {
            const response = {
                success: "Erro ao processar a solicitação."
            };
            return new Response(JSON.stringify(response), {
                status: 500,
            })
        }
    }
}

export { handler as POST }

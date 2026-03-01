import nodemailer from 'nodemailer';
import { config } from '../config';

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendEmail = async ({ to, subject, html }) => {
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to,
        subject,
        html,
    };
    return transporter.sendMail(mailOptions);
};
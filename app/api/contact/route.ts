import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Configure Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Provided by user in .env.local
                pass: process.env.EMAIL_PASS, // Provided by user in .env.local
            },
        });

        // Email configuration
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'sunnytyagi2004@gmail.com', // Target email
            subject: `Portfolio Contact from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Message: ${message}
            `,
            html: `
<div style="font-family: sans-serif; max-w-lg; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
    <h2 style="color: #333;">New Contact Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
    <p style="white-space: pre-wrap; color: #555;">${message}</p>
</div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ error: 'Failed to send email. Please make sure EMAIL_USER and EMAIL_PASS are correctly configured in .env.local.' }, { status: 500 });
    }
}

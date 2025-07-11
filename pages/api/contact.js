// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  // Pobierz dane z formularza
  const { name, email, phone, service, message } = req.body;

  // Utwórz transporter z wykorzystaniem danych SMTP OVH
  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,       // zmieniony port
    secure: true,    // Używamy SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Weryfikacja transportera
  transporter.verify((error) => {
    if (error) {
      console.error("Błąd weryfikacji transportera:", error);
    } else {
      console.log("Serwer SMTP gotowy do odbioru wiadomości");
    }
  });

  // Przygotuj treść maila
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email, // adres nadawcy z formularza
    subject: `Nowa wiadomość od ${name}`,
    text: `Imię: ${name}\nEmail: ${email}\nTelefon: ${phone}\nUsługa: ${service}\nWiadomość: ${message}`,
  };

  try {
    // Wysyłka maila
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Błąd wysyłki maila:", error);
    res.status(500).json({ error: error.message });
  }
}

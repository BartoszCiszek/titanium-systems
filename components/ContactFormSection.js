// components/ContactFormSection.js
import { useState } from 'react';
import { useRouter } from 'next/router';

const ContactFormSection = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formSubmitted) return;
    setFormSubmitted(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'Zapytanie z sekcji kontaktowej' }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        alert('Wystąpił błąd. Spróbuj ponownie.');
        setFormSubmitted(false);
      }
    } catch {
      alert('Wystąpił błąd. Spróbuj ponownie.');
      setFormSubmitted(false);
    }
  };

  return (
    <section className="w-full bg-[#2a2a2a] text-white py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Lewa strona: Dane kontaktowe */}
        <div className="text-center md:text-left md:pl-16 lg:pl-24">
            <h2 className="text-2xl font-bold mb-4 text-[#00bcd4]">Kontakt</h2>
                <p className="text-lg mb-2">📞 <a href="tel:+48603832422" className="hover:text-[#00bcd4] transition">+48 603 832 422</a></p>
                <p className="text-lg">📧 <a href="mailto:bartosz.ciszek@titaniumsystems.pl" className="hover:text-[#00bcd4] transition">bartosz.ciszek@titaniumsystems.pl</a></p>
        </div>

        {/* Prawa strona: Formularz */}
        <div>
          <h3 className="text-xl font-bold mb-4">Napisz, a my zajmiemy się resztą!</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Imię i nazwisko"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 rounded-md bg-[#212121] border border-gray-600 focus:border-[#00bcd4] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Adres e-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 rounded-md bg-[#212121] border border-gray-600 focus:border-[#00bcd4] outline-none"
            />
            <textarea
              name="message"
              placeholder="Twoja wiadomość..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 rounded-md bg-[#212121] border border-gray-600 focus:border-[#00bcd4] outline-none h-28"
            ></textarea>
            <button
              type="submit"
              disabled={formSubmitted}
              className="w-full bg-[#008080] text-white py-3 px-6 rounded-md hover:bg-[#00bcd4] disabled:opacity-50 transition text-lg"
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
// components/ContactFormSection.js
import { useState, useEffect } from 'react'; // Dodano import useEffect
import Link from 'next/link';
import GlareHover from './GlareHover';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'success', 'error'

  // NOWA CZĘŚĆ: Efekt do resetowania statusu formularza po 5 sekundach
  useEffect(() => {
    if (formStatus === 'success') {
      const timer = setTimeout(() => {
        setFormStatus('idle');
      }, 5000); // 5000 milisekund = 5 sekund

      // Wyczyszczenie timera, jeśli komponent zostanie odmontowany
      return () => clearTimeout(timer);
    }
  }, [formStatus]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setIsPolicyAccepted(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isPolicyAccepted || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'Zapytanie z sekcji kontaktowej' }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setIsPolicyAccepted(false);
      } else {
        throw new Error('Odpowiedź serwera nie była pomyślna.');
      }
    } catch (error) {
      console.error("Błąd wysyłania formularza:", error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formularz-kontaktowy" className="w-full text-white py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Lewa strona: Dane kontaktowe */}
        <div className="text-center md:text-left md:pl-16 lg:pl-24">
            <h2 className="text-2xl font-bold mb-4 text-[#00bcd4]">Kontakt</h2>
            <p className="text-lg mb-2">📞 <a href="tel:+48603832422" className="hover:text-[#00bcd4] transition">+48 603 832 422</a></p>
            <p className="text-lg">📧 <a href="mailto:bartosz.ciszek@titaniumsystems.pl" className="hover:text-[#00bcd4] transition">bartosz.ciszek@titaniumsystems.pl</a></p>
        </div>

        {/* Prawa strona: Formularz lub komunikat o statusie */}
        <div>
          {formStatus === 'success' ? (
            <div className="text-center p-8 bg-[#212121] rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Dziękujemy!</h3>
              <p className="text-lg text-gray-300">Twoja wiadomość została wysłana pomyślnie. Skontaktujemy się z Tobą wkrótce.</p>
            </div>
          ) : (
            <>
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
                 <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="privacy-policy"
                      name="privacy-policy"
                      checked={isPolicyAccepted}
                      onChange={handleCheckboxChange}
                      required
                      className="mr-2 accent-[#00bcd4]"
                    />
                    <label htmlFor="privacy-policy" className="text-sm text-gray-400">
                      Akceptuję <Link href="/polityka" target="_blank" rel="noopener noreferrer" className="text-[#00bcd4] hover:underline transition">Politykę Prywatności</Link>.
                    </label>
                  </div>
                <GlareHover
                  width="100%"
                  height="auto"
                  background="transparent"
                  borderRadius="0.375rem"
                  borderColor="transparent"
                  glareColor="#00bcd4"
                  glareOpacity={0.4}
                  glareSize={250}
                  glareAngle={-30}
                >
                  <button
                    type="submit"
                    disabled={!isPolicyAccepted || isSubmitting}
                    className="w-full bg-[#008080] text-white py-3 px-6 rounded-md hover:bg-[#00bcd4] disabled:opacity-50 disabled:cursor-not-allowed transition text-lg"
                  >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
                  </button>
                </GlareHover>
                {formStatus === 'error' && (
                  <p className="text-red-500 mt-4 text-center">Wystąpił błąd podczas wysyłania. Proszę spróbować ponownie.</p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
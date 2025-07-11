// pages/kontakt.js
import Head from "next/head";
import { useState, useEffect, useRef } from "react"; 
import { useRouter } from "next/router";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/legacy/image";

const Kontakt = () => {
  const router = useRouter();
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Inna usługa",
    message: "",
    privacyAccepted: false,
  });

  const [showLoader, setShowLoader] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const services = [
    "Usługi dla Komputerów Stacjonarnych",
    "Usługi dla laptopów",
    "Serwery i wirtualizacja",
    "Sieć i bezpieczeństwo",
    "Oprogramowanie i usługi chmurowe",
    "Backup, odzyskiwanie i utylizacja",
    "Usługi dla Firm",
    "Umowy serwisowe (SLA)",
    "Inna usługa",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacyAccepted) {
      alert("Musisz zaakceptować politykę prywatności!");
      return;
    }

    if (formSubmitted) return;
    setFormSubmitted(true);
    setShowLoader(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Administracja serwerów",
          message: "",
          privacyAccepted: false,
        });

        setTimeout(() => {
          setShowLoader(false);
          setShowSuccess(true);
          setTimeout(() => {
            router.push("/");
          }, 2000);
        }, 2000);
      } else {
        setFormSubmitted(false);
        alert("Wystąpił błąd przy wysyłce wiadomości. Spróbuj ponownie.");
      }
    } catch {
      setFormSubmitted(false);
      alert("Wystąpił błąd przy wysyłce wiadomości. Spróbuj ponownie.");
    }
  };

  useEffect(() => {
    if (formRef.current) {
      gsap.from(formRef.current.querySelectorAll(".form-field"), {
        duration: 0.6,
        y: 20,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out"
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#212121] text-white">
      <Head>
        <title>Kontakt – Usługi IT Poznań | Skontaktuj się | Titanium Systems</title>
        <meta
          name="description"
          content="Skontaktuj się ze mną w sprawie usług IT w Poznaniu. Oferuję pomoc informatyczną, konfigurację sieci, odzyskiwanie danych i więcej."
        />
        <meta
          name="keywords"
          content="kontakt IT Poznań, usługi informatyczne, pomoc IT, serwis komputerowy, konfiguracja sieci"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://titaniumsystems.pl/kontakt" />
      </Head>

      <main className={`flex flex-col items-center justify-center flex-grow px-4 pt-24 relative ${showLoader || showSuccess ? "blur-md" : ""}`} ref={formRef}>
        <h1 className="form-field text-2xl font-semibold text-white mb-4">Skontaktuj się z nami</h1>
        <p className="form-field text-lg text-center">
          Masz <span className="text-[#00bcd4] font-bold">pytania</span> lub{" "}
          <span className="text-[#00bcd4] font-bold">wybraną ofertę</span>? Skontaktuj się!
        </p>
        <div className="form-field text-center mt-4 text-lg">
          <p className="flex items-center justify-center gap-2">
            📞 Telefon: <span className="text-[#00bcd4] font-bold">+48 603 832 422</span>
          </p>
          <p className="flex items-center justify-center gap-2 mt-1">
            📧 E-mail:{" "}
            <a
              href="mailto:bartosz.ciszek@titaniumsystems.pl"
              className="text-[#00bcd4] font-bold"
            >
              bartosz.ciszek@titaniumsystems.pl
            </a>
          </p>
          <p className="text-center font-semibold italic mt-1">lub</p>
          <p className="flex items-center justify-center gap-2 mt-1">
            📩 Wypełnij formularz:
          </p>
        </div>
        <div className="form-field bg-[#333] p-6 rounded-lg mt-6 w-full max-w-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 font-semibold">Imię i nazwisko:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-field w-full p-2 rounded-md bg-[#212121] text-white border border-gray-600 focus:border-[#00bcd4] outline-none"
            />
            <label className="form-field block mt-4 mb-2 font-semibold">Adres e-mail:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-field w-full p-2 rounded-md bg-[#212121] text-white border border-gray-600 focus:border-[#00bcd4] outline-none"
            />
            <label className="form-field block mt-4 mb-2 font-semibold">Numer telefonu (opcjonalnie):</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-field w-full p-2 rounded-md bg-[#212121] text-white border border-gray-600 focus:border-[#00bcd4] outline-none"
            />
            <label className="form-field block mt-4 mb-2 font-semibold">Wybierz usługę:</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-field w-full p-2 rounded-md bg-[#212121] text-white border border-gray-600 focus:border-[#00bcd4] outline-none"
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <label className="form-field block mt-4 mb-2 font-semibold">Wiadomość:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-field w-full p-2 rounded-md bg-[#212121] text-white border border-gray-600 focus:border-[#00bcd4] outline-none h-24"
            ></textarea>
            <div className="form-field mt-4 flex items-center">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                className="w-4 h-4 mr-2 accent-[#00bcd4]"
              />
              <label className="text-sm">
                Akceptuję{" "}
                <Link href="/polityka" className="text-[#00bcd4]">
                  politykę prywatności
                </Link>
              </label>
            </div>
            <button 
              type="submit" 
              disabled={formSubmitted}
              className="form-field mt-5 w-full bg-[#008080] text-white py-2 px-6 rounded-md hover:bg-[#00bcd4] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Wyślij
            </button>
          </form>
        </div>
      </main>

      {showLoader && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="loader text-center"></div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-[#333] p-6 rounded-lg shadow-lg text-center">
            <Image
              src="/done.gif"
              alt="Success"
              width={64}
              height={64}
              unoptimized
              className="w-16 h-16 mx-auto mb-2"
            />
            <p className="text-lg font-semibold text-white">
              Pomyślnie wysłano wiadomość!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kontakt;
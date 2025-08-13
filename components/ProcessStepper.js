// components/ProcessStepper.js
import Stepper, { Step } from './Stepper';

const ProcessStepper = () => {
  return (
    <section id="proces" className="text-white pt-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-[#00bcd4] mb-4">
            Jak działamy?
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nasz proces jest prosty i transparentny. W 4 krokach przeprowadzimy Cię od pomysłu do gotowego, idealnie dopasowanego komputera.
          </p>
        </div>
        <Stepper>
          <Step>
            <h3>Krok 1: Konsultacja i Wycena</h3>
            <p className="text-gray-400">Omawiamy Twoje potrzeby i budżet, aby stworzyć idealną konfigurację.</p>
          </Step>
          <Step>
            <h3>Krok 2: Dobór Komponentów</h3>
            <p className="text-gray-400">Zamawiamy sprawdzone podzespoły o najlepszym stosunku ceny do wydajności.</p>
          </Step>
          <Step>
            <h3>Krok 3: Montaż i Optymalizacja</h3>
            <p className="text-gray-400">Profesjonalnie składamy i konfigurujemy Twój komputer, dbając o każdy detal.</p>
          </Step>
          <Step>
            <h3>Krok 4: Testy i Dostawa</h3>
            <p className="text-gray-400">Przeprowadzamy testy obciążeniowe i dostarczamy gotowy sprzęt do Twoich rąk.</p>
          </Step>
        </Stepper>
      </div>
    </section>
  );
};

export default ProcessStepper;

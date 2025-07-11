// data/dlaFirmBaza.js

export const servicesForFirms = [
  {
    category: "Usługi dla Firm",
    services: [
      {
        kategoria: "Sieci",
        nazwa: "Ustawienie sieci w biurze (UniFi/Ubiquiti)",
        opis: "Konfiguracja sieci LAN/Wi-Fi, routerów, switchy",
        cena: "Indywidualna wycena",
        uwagi: "Cena zależy od liczby urządzeń i stopnia konfiguracji sieci plus ewentualne koszty materiałów"
      },
      {
        kategoria: "Sieci",
        nazwa: "Konfiguracja access pointów (UniFi/Ubiquiti)",
        opis: "Ustawienie sieci Wi-Fi, VLAN, zabezpieczeń WPA2/3, sieci gościnnych",
        cena: "Indywidualna wycena",
        uwagi: "Cena zależy od liczby urządzeń i stopnia rozbudowy sieci"
      },
      {
        kategoria: "Serwery i NAS",
        nazwa: "Tworzenie i konfiguracja NAS",
        opis: "Instalacja systemu NAS (TrueNAS, Synology, QNAP), konfiguracja RAID, konta użytkowników",
        cena: "Indywidualna wycena",
        uwagi: "Cena zależy od stopnia konfiguracji"
      },
      {
        kategoria: "Wirtualizacja",
        nazwa: "Konfiguracja maszyn wirtualnych",
        opis: "Instalacja i optymalizacja (VMware, VirtualBox)",
        cena: "Indywidualna wycena",
        uwagi: "Możliwe rabaty zależne od liczby maszyn"
      }
    ]
  },
  {
    category: "Umowy serwisowe (SLA)",
    services: [
      {
        kategoria: "Pakiety serwisowe",
        nazwa: "Pakiet Basic",
        opis: "- Podstawowe doradztwo IT \n- Pomoc zdalna (ustalone godziny do 8h) \n- Limit 2 wizyt w miesiącu",
        cena: "Indywidualna wycena",
        uwagi: "W przypadku przekroczenia liczby wizyt – rozliczenie godzinne (cena ustalana indywidualnie)"
      },
      {
        kategoria: "Pakiety serwisowe",
        nazwa: "Pakiet Premium",
        opis: "- Priorytetowy czas reakcji \n- Pomoc zdalna (ustalone godziny do 12h)\n- 4 wizyty w miesiącu lub więcej",
        cena: "Indywidualna wycena",
        uwagi: "Możliwość rozszerzenia o całodobowe wsparcie 24/7 – wymaga indywidualnych ustaleń"
      },
      {
        kategoria: "Azure Virtual Desktop",
        nazwa: "Azure Virtual Desktop – Zdalne środowisko pracy",
        opis: "Wdrożenie i konfiguracja środowiska pracy opartego na Azure Virtual Desktop, które umożliwia pracownikom firm logowanie się do wirtualnych maszyn działających w chmurze. Użytkownik loguje się jak na tradycyjnym komputerze, a wszystkie dane, aplikacje i ustawienia są przechowywane centralnie, co gwarantuje ciągłość pracy nawet w przypadku awarii sprzętu lokalnego.",
        cena: "Indywidualna wycena",
        uwagi: "Idealne rozwiązanie dla firm zatrudniających dużą liczbę pracowników, zapewniające bezpieczeństwo danych i nieprzerwaną pracę dzięki zdalnemu dostępowi."
      }

    ]
  },
];

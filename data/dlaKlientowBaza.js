// data/dlaKlientowBaza.js

export const servicesForClients = [
  {
    category: "Usługi dla Komputerów",
    services: [
      {
        kategoria: "Serwis i naprawa",
        nazwa: "Diagnoza problemów sprzętowych",
        opis: "Sprawdzenie podzespołów, testy stabilności",
        cena: "od 150,00 zł",
        uwagi: "Kwota może być pomniejszona, jeśli klient zdecyduje się na serwis"
      },
      {
        kategoria: "Usunięcie blokady / hasła użytkownika",
        nazwa: "Odblokowanie dostępu",
        opis: "Reset haseł, odblokowanie kont w systemie (tylko konta lokalne)",
        cena: "od 120,00 zł",
        uwagi: "Legalne metody z zachowaniem przepisów (własność sprzętu, licencje)"
      },
      {
        kategoria: "Serwis i naprawa",
        nazwa: "Wymiana uszkodzonych części",
        opis: "Wymiana zasilacza, płyty głównej, karty graficznej itp.",
        cena: "od 150,00 zł",
        uwagi: "Do kwoty usługi trzeba doliczyć koszt części"
      },
      {
        kategoria: "Czyszczenie",
        nazwa: "Kompleksowe czyszczenie",
        opis: "Czyszczenie całego komputera",
        cena: "od 150,00 zł",
        uwagi: "Cena zależy od stopnia zabrudzenia"
      },
      {
        kategoria: "Oprogramowanie",
        nazwa: "Kompletne usuwanie oprogramowaniua",
        opis: "Usuwanie oprogramowania z komputera (wszystkie pliki które są tworzone podczas instalacji, również te w rejestrze systemu)",
        cena: "od 80,00 zł",
        uwagi: "Legalne metody z zachowaniem przepisów (własność sprzętu, licencje)"
      },
      {
        kategoria: "Optymalizacja i tuning",
        nazwa: "Podkręcanie podzespołów (CPU/GPU)",
        opis: "OC, konfiguracja BIOS/UEFI, testy stabilności",
        cena: "Indywidualna wycena",
        uwagi: "Cena w zależności od konfiguracji klienta oraz potrzeb klienta"
      },
      {
        kategoria: "Złożenie komputera",
        nazwa: "Składanie komputera od podstaw",
        opis: "Dobór części do wymagań klienta, montaż podzespołów, cable management, instalacja systemu",
        cena: "Indywidualna wycena",
        uwagi: "Cena zależna od stopnia skomplikowania (np. custom loop, liczba podzespołów)"
      },
      {
        kategoria: "Składanie i modernizacja",
        nazwa: "Modernizacja / upgrade PC / Custom loop (chłodzenie wodne)",
        opis: "Wymiana podzespołów (CPU, GPU, RAM, dysk), optymalizacja chłodzenia",
        cena: "Indywidualna wycena",
        uwagi: "W zależności od zakresu prac, ilości komponentów i czasu pracy"
      },
    ]
  },
  {
    category: "Instalacja systemów",
    services: [
      {
        kategoria: "Systemy operacyjne",
        nazwa: "Instalacja / aktualizacja Windows (PC/Serwer)",
        opis: "Instalacja systemu, sterowników, usług towarzyszących",
        cena: "od 150,00 zł",
        uwagi: "Indywidualna wycena przy bardziej zaawansowanych instalacjach (np. Windows Server)"
      },
      {
        kategoria: "Systemy operacyjne",
        nazwa: "Instalacja / aktualizacja MacOS (Macbook/iMac/Mac Mini/Mac Pro/Mac Studio)",
        opis: "Instalacja systemu, sterowników, usług towarzyszących",
        cena: "od 220,00 zł",
        uwagi: "Możlliwość instalacji najnowszego systemu na starszych modelach Macbooków, iMaców itp. (OpenCore)",
      },
      {
        kategoria: "Systemy operacyjne",
        nazwa: "Instalacja / konfiguracja Linux (desktop/serwer)",
        opis: "Ubuntu, Debian, CentOS, konfiguracja podstawowych usług",
        cena: "od 280,00 zł",
        uwagi: "Cena zależy od stopnia zaawansowania"
      }
    ]
  },
  {
    category: "Backup, odzyskiwanie i kasowanie danych",
    services: [
      {
        kategoria: "Backup",
        nazwa: "Tworzenie i konfiguracja kopii zapasowych",
        opis: "Ustalanie harmonogramu backupu lokalnego i/lub w chmurze",
        cena: "od 150,00 zł",
        uwagi: "Cena zależy od liczby urządzeń i wybranego rozwiązania"
      },
      {
        kategoria: "Odzyskiwanie danych",
        nazwa: "Przywracanie danych z dysków",
        opis: "Logiczne uszkodzenia, przypadkowe usunięcie, sformatowane partycje",
        cena: "od 300,00 zł",
        uwagi: "Poważniejsze przypadki (uszkodzenie fizyczne) wymagają współpracy z laboratorium"
      },

      {
        kategoria: "Kasowanie danych logicznie",
        nazwa: "Bezpieczne usuwanie danych bez uszkadzania dysku fizycznie",
        opis: "Nadpisywanie danych zgodnie ze standardami",
        cena: "od 120,00 zł / szt.",
        uwagi: "Dyski HDD, SSD lub pamięci pendrive. Cena może zależeć od pojemności i metody nadpisywania."
      },
      {
        kategoria: "Kasowanie danych fizycznie",
        nazwa: "Kaasowanie danych poprzez zniszczenie dysku fizycznie za pomocą nacisku 2 ton",
        opis: "Bezpieczne niszczenie danych, przygotowanie sprzętu do recyklingu",
        cena: "od 100,00 zł / szt.",
        uwagi: "Dyski HDD, SSD lub pamięci pendrive"
      }
    ]
  },
  {
    category: "Sieć i bezpieczeństwo",
    services: [
      {
        kategoria: "Sieci",
        nazwa: "Konfiguracja access pointów (Ubiquiti)",
        opis: "Ustawienie sieci Wi-Fi, VLAN, zabezpieczeń WPA2/3, sieci gościnnych",
        cena: "Indywidualna wycena",
        uwagi: "Cena zależy od liczby urządzeń i stopnia rozbudowy sieci"
      },
      {
        kategoria: "Sieci",
        nazwa: "Ustawienie sieci w domu lub w biurze (Ubiquiti)",
        opis: "Konfiguracja sieci LAN/Wi-Fi, routerów, switchy",
        cena: "Indywidualna wycena",
        uwagi: "Cena zależy od liczby urządzeń i stopnia konfiguracji sieci plus ewentualne koszty materiałów"
      },
      {
        kategoria: "Bezpieczeństwo",
        nazwa: "Konfiguracja BitLocker",
        opis: "Szyfrowanie dysków, zabezpieczenie kluczy odzyskiwania, szkolenie klienta w obsłudze",
        cena: "od 50,00 zł / szt.",
        uwagi: "Możliwość dodatkowo rozszerzenia usługi o stworzenie bazy danych kluczami i pinami"
      }
    ]
  },
  {
    category: "Serwery i wirtualizacja",
    services: [
      {
        kategoria: "Serwery i NAS",
        nazwa: "Tworzenie i konfiguracja NAS (TrueNAS, Synology, QNAP)",
        opis: "Serwer wirtualny do pracy zdalnej",
        cena: "Indywidualna wycena",
        uwagi: "Cena zależy od wielkości i stopnia zaawansowania konfiguracji"
      },
      {
        kategoria: "Serwery i NAS",
        nazwa: "Konfiguracja domeny (Cloudflare)",
        opis: "Ustawienie DNS, strefy DNS, integracja z serwerem, certyfikaty SSL itd",
        cena: "Indywidualna wycena",
        uwagi: "Usługa wykonywana zdalnie lub na miejscu, w zależności od potrzeb"
      },
      {
        kategoria: "Wirtualizacja",
        nazwa: "Konfiguracja maszyn wirtualnych",
        opis: "Instalacja, optymalizacja (np. VMware, VirtualBox, Hyper-V), tworzenie snapshotów",
        cena: "Indywidualna wycena",
        uwagi: "Cena w zależności od liczby maszyn i złożoności środowiska"
      },
      {
        kategoria: "Wirtualizacja",
        nazwa: "Serwer wirtualny do pracy zdalnej",
        opis: "Przygotowanie hosta, konfiguracja RDP, zarządzanie uprawnieniami",
        cena: "Indywidualna wycena",
        uwagi: "Indywidualne wdrożenie, może obejmować również VPN i firewall"
      }
    ]
  },
  {
    category: "Informacje dodatkowe",
    services: [
      {
        kategoria: "Usługi u klienta",
        nazwa: "Dojazd specjalisty IT",
        opis: "Dojazd specjalisty IT do klienta w celu wykonania usługi",
        cena: "1,50 zł za każdy następny kilometr",
        uwagi: "Dopłata za dojazd przekraczający 15 km od siedziby firmy obliczany według Google Maps za każdy przejechany kilometr tam i z powrotem (w dwie strony)"
      },
      {
        kategoria: "Ceny",
        nazwa: "Ceny za usługi",
        opis: "Wszystkie podane wcześniej ceny są cenami netto",
        cena: "",
        uwagi: "Wystawienie faktury VAT -> Cena netto + 23% VAT"
      }
    ]
  },
];

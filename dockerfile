# --- Etap 1: Budowanie aplikacji (builder stage) ---
FROM node:18-alpine AS builder
WORKDIR /titanium-systems

# Kopiujemy pliki zależności
COPY package*.json ./

# Instalujemy zależności
RUN npm ci --legacy-peer-deps

# Kopiujemy resztę projektu
COPY . .

# Budujemy aplikację w trybie produkcyjnym
RUN npm run build

# --- Etap 2: Uruchomienie aplikacji (runner stage) ---
FROM node:18-alpine AS runner
WORKDIR /titanium-systems

# Ustawiamy środowisko na produkcyjne
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Przyjmujemy wartości z build-argów
ARG EMAIL_USER
ARG EMAIL_PASS
ENV EMAIL_USER=$EMAIL_USER
ENV EMAIL_PASS=$EMAIL_PASS

# Kopiujemy zbudowane pliki z etapu builder
COPY --from=builder /titanium-systems/package*.json ./
COPY --from=builder /titanium-systems/node_modules ./node_modules
COPY --from=builder /titanium-systems/.next ./.next
COPY --from=builder /titanium-systems/public ./public
COPY --from=builder /titanium-systems/next.config.js ./
# Jeśli masz inne pliki konfiguracyjne, też je skopiuj

# Eksponujemy port 3000 (domyślny w Next.js)
EXPOSE 3000

# Uruchamiamy aplikację
CMD ["npm", "run", "start"]

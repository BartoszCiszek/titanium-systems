#!/bin/bash
# Skrypt usuwa zdalne repozytorium, tworzy nowe prywatne repozytorium o tej samej nazwie
# i wypycha aktualne pliki do nowego repozytorium.
# Użycie: ./reset_and_create_repo.sh
#
# Uwaga: Operacja usunie całą historię repozytorium i wymaga potwierdzenia.
# Upewnij się, że masz backup ważnych danych!

# Ustawienia – zmodyfikuj według potrzeb:
REPO="titanium-systems"
OWNER="BartoszCiszek"
FULL_REPO="$OWNER/$REPO"
# Możesz używać HTTPS lub SSH – poniżej przykład HTTPS:
NEW_REMOTE_URL="https://github.com/$FULL_REPO.git"

echo "Usuwam zdalne repozytorium $FULL_REPO na GitHub..."
# Flaga --confirm pomija interaktywną prośbę o potwierdzenie
gh repo delete "$FULL_REPO" --confirm

echo "Usuwam lokalny folder .git (całą historię) ..."
rm -rf .git

echo "Inicjuję nowe repozytorium..."
git init

echo "Dodaję wszystkie pliki do indeksu..."
git add .

echo "Tworzę pierwszy commit..."
git commit -m "Initial commit - new repository"

echo "Tworzę nowe, prywatne repozytorium $FULL_REPO na GitHub..."
# --private tworzy repozytorium jako prywatne; --confirm pomija potwierdzenie
gh repo create "$FULL_REPO" --private --confirm

echo "Ustawiam zdalny adres repozytorium na $NEW_REMOTE_URL ..."
git remote add origin "$NEW_REMOTE_URL"

echo "Wypycham zmiany do nowego repozytorium (branch master)..."
git push -u origin master

echo "Operacja zakończona. Nowe repozytorium zostało utworzone, a pliki wypchnięte."

read -p "Naciśnij ENTER, aby zakończyć..."

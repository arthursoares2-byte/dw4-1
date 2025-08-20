read -p "Digite seu nome de usuário do Git: " username

read -p "Digite seu email do Git: " email

git config --global user.name "$username"
git config --global user.email "$email"

echo "Configurações aplicadas:"
git config --global user.name
git config --global user.email
export default function currencyFormat(num) {
  return num.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

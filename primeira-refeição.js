/* Crie um programa que leia a hora que voce acordou
  e informe qual refeição vc deve fazer use condicionais
  compostas */

/* Algoritmo 
  1 - Pedir ao usuario que digite as horas que acordou
      

*/

const horas = parseInt(prompt('Que horas voce acordou ? (Use o formato 0-23h)' ));

if (horas >= 6 && horas <= 9) {
   alert(`voce acordou as ${horas} horas
         sua primeira refeição do dia será:
         Café da manhâ !`);
} else if (horas >= 10 && horas <= 14) {
   alert(`voce acordou as ${horas} horas
         sua primeira refeição do dia será:
         Almoço !`);
} else if (horas >= 15 && horas <= 18) {
   alert(`voce acordou as ${horas} horas
         sua primeira refeição do dia será:
         Lanche da Tarde !`)
} else if (horas >= 19 && horas <= 22) {
  alert(`voce acordou as ${horas} horas
        sua primeira refeição do dia será:
        Janta !`);
} else {
  alert(`voce acordou as ${horas} horas
        sua primeira refeição do dia será:
        Ceia da noite/madrugada !`);
}

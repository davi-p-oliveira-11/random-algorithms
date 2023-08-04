/* Faça um programa que leia o nome de um aluno,
       calcule sua média baseado em 4 provas e mostre se 
       ele foi aprovado ou não considerando que a média para aprovação
       é 7 e caso a nota seja entre 6.9 e 5 o aluno vai
       para recuperação, mas se for menor que 5 o aluno está reprovado*/

       
    /* Algoritimo:
      1 - Pedir para que o usuário digite o nome do aluno
       1.1- Armazenar o valor em uma variável
      2 - Pedir ao usuário que ele digite a nota da prova 1
       2.1 - Armazenar o valor em uma variável
      3 - Pedir ao usuário que ele digite a nota da prova 2
       3.1 - Armazenar o valor em uma variável
      4 - Pedir ao usuário que ele digite a nota da prova 3
       4.1 - Armazenar o valor em uma variável
      5 - Pedir ao usuário que ele digite a nota da prova 4
       5.1 - Armazenar o valor em uma variável
      6 - Calcular a média do aluno nas 4 provas
       6.1 - Armazenar o valor em uma variável
      7 - Se a média do aluno for superior a ou igual a 
          mostrar a mensagem de que o aluno passou de anp
      7 - se a média for entre 6.9 ee 5 mostrar a mensagem de
          que o aluno foi para a recuperação
      7 - se a média for menor que que 5 mostrar a mesnagem de que o aluno
         foi reprovado */
    
         const nomeAluno = prompt("Digite o nome do aluno: ");
         const nota1 = parseFloat(prompt('Digite a nota da prova 1 '));     
         const nota2 = parseFloat(prompt('Digite a nota da prova 2 '));
         const nota3 = parseFloat(prompt('Digite a nota da prova 3 '));
         const nota4 = parseFloat(prompt('Digite a nota da prova 4 '));
     
         const media = (nota1 + nota2 + nota3 + nota4) / 4;
     
         if (media >= 7) {
           alert(`Parabéns ${nomeAluno} você foi aprovado !`);
         } else if (media < 7 && media >= 5) {
           alert(` ${nomeAluno} você precisa fazer a prova de recuperação !`);
         } else {
           alert(`Sinto muito ${nomeAluno} você foi reprovado !`);
         }
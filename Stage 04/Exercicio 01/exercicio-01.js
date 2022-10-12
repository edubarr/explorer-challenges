let number01 = Number(prompt("Digite o primeiro número:"));
let number02 = Number(prompt("Digite o primeiro número:"));

soma = number01 + number02;
alert(`A soma dos dois números é: ${soma}`);

sub = number01 - number02;
alert(`A subtração dos dois números é: ${sub}`);

mult = number01 * number02;
alert(`A multiplicação dos dois números é: ${mult}`);

div = number01 / number02;
alert(`A divisão dos dois números é: ${div}`);

resto = number01 % number02;
alert(`O resto dos dois números é: ${resto}`);

if (soma % 2 == 0) {
  alert(`A soma dos dois números é par.`);
} else {
  alert(`A soma dos dois números é impar.`);
}

if (number01 === number02) {
  alert(`Os dois números são iguais.`);
} else {
  alert(`Os dois números não são iguais.`);
}

//questão1:
var _numero = 5;//Modifque o valor para saber se é positivo ou negativo.
if(_numero < 0) {
  console.log("O valor _numero é um número negativo");
} else if (_numero >= 0) {
  console.log("O valor _numero é um número positivo");
}

//questão2:
var valorA = 8; //Modifeque este valor para que a soma dos valores seja menor que a do valorB, assim verá um valor diferente.
var valorB = 2;
var valorC = 1;
var resultado1 = valorA + valorC;
if (valorA + valorC > valorB) {
  console.log("8 + 1 = " + resultado1);
} else if (valorA + valorC != valorB){
  console.log("8 + 1 = 2");
}

//questão3:
var matutino = "Bom Dia!";
var vespertino = "Boa Tarde!";
var noturno = "Boa Noite!";
var simInfo = "Valor Inválido!";
var horario = vespertino; //Modifique os horários para ver os diferentes resultados.
if(horario === matutino) {
  console.log("Bom Dia!");
} else if (horario === vespertino) {
  console.log("Boa Tarde!");
} else if (horario === noturno) {
  console.log("Boa Noite!");
} else if (horario === simInfo) {
  console.log("Valor Inválido!");
}
function QuantidadeDeBombas() {
  let nome = document.getElementById("campo-nome").value;
  //  alert(nome)
  document.getElementById("cabeçalho").innerHTML = "Olá, " + nome + "!!!";
}

function ParOuImpar() {
  let n = document.getElementById("campo-numero").value;
  if (n % 2 == 0) {
    document.getElementById("par-impar").innerHTML = "Este numero é par!";
  } else {
    document.getElementById("par-impar").innerHTML = "Este numero é impar!!";
  }
}

function MaxMin() {
  let Min = parseFloat(document.getElementById("minimo").value);
  let Max = parseFloat(document.getElementById("maximo").value);
  let quant = parseFloat(document.getElementById("quantidade").value);
  let ValAleatorio = [];
  for (let i = 0; i < quant; i++) {
    ValAleatorio.push(Math.floor(Math.random() * (Max - Min) + Min));
  }
  document.getElementById("resultado").innerHTML = ValAleatorio;
}

function Mega() {
  let jogos = parseInt(document.getElementById("c4-resultado").value);
  let numeros = [];
  let resultado = [];
  for (let i = 0; i < jogos; i++) {
    numeros.push([]);
    for (let b = 0; b < 6; b++) {
      numeros[0 + i][0 + b] = Math.floor(Math.random * 60) + 1;
    }
    resultado.push(numeros[0 + i].join("-"));
    document.getElementById("c4-resultado").innerHTML =
      "Seus jogos são " + Mega;
  }
}

function Soma() {
  let a = parseFloat(document.getElementById("c5-valor_1").value);
  let b = parseFloat(document.getElementById("c5-valor_2").value);
  let soma = a + b;
  document.getElementById("c5-resultado").innerHTML =
    "Resultado da soma: " + soma;
}
function Subtração() {
  let a = parseFloat(document.getElementById("c5-valor_1").value);
  let b = parseFloat(document.getElementById("c5-valor_2").value);
  let subtração = a - b;
  document.getElementById("c5-resultado").innerHTML =
    "Resultado da subtração: " + subtração;
}
function Divisão() {
  let a = parseFloat(document.getElementById("c5-valor_1").value);
  let b = parseFloat(document.getElementById("c5-valor_2").value);
  let divisão = a / b;
  document.getElementById("c5-resultado").innerHTML =
    "Resultado da divisão: " + divisão;
}
function Multiplicação() {
  let a = parseFloat(document.getElementById("c5-valor_1").value);
  let b = parseFloat(document.getElementById("c5-valor_2").value);
  let multiplicação = a * b;
  document.getElementById("c5-resultado").innerHTML =
    "Resultado da multiplicação: " + multiplicação;
}

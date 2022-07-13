function QuantidadeDeBombas () {
    let nome = document.getElementById("campo-nome").value 
  //  alert(nome)
  document.getElementById ("cabeçalho").innerHTML = "Olá, " + nome + "!!!"
}

function ParOuImpar () {
    let n = document.getElementById("campo-numero").value
    if (n %2==0) {
        document.getElementById ("par-impar").innerHTML = "Este numero é par!"
} else { 
    document.getElementById ("par-impar").innerHTML = "Este numero é impar!!"
}
} 

function MaxMin () {
    let Min = parseFloat (document.getElementById("minimo").value)
    let Max = parseFloat (document.getElementById("maximo").value)
    let quant = parseFloat (document.getElementById("quantidade").value)
   let ValAleatorio = []
   for ( let i=0; i < quant; i++) {
    ValAleatorio.push (Math.floor(Math.random()* (Max-Min) + Min))
   }
   document.getElementById("resultado").innerHTML= ValAleatorio
    }



    function Mega() {
        return Math.round(Math.random() * 60)
    }

    function sorteiaNumeros() {
        let megaSena = []
        let numero = 1

        while(numero <= 6) {
            let numeroAleatorio = Mega()
            let achou = false
         if(numeroAleatorio !== 0 && numeroAleatorio <= 60) {
         for(posicao = 0; posicao < megaSena.length; posicao++) {
         if(megaSena[posicao] == numeroAleatorio) {
         achou = true
         false
     }
  }
  if(achou == false) {
    megaSena.push(numeroAleatorio)
    numero++
    }
 }
        }
        document.getElementById("resultado").innerHTML= (Os números da sorte são:  + megaSena)
    }
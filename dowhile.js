// cria uma matriz que possui 5 elementos "vetor1","vetor2","vetor3","vetor4","vetor5"
var matriz =["vetor1","vetor2","vetor3","vetor4","vetor5"] 
//cria uma variavel denominada osicao com um valor de 0
var posicao = 0; 
//quando a variavel for menor do que a matriz.lenght o bloco while vai se executado
while (posicao < matriz.length) { 
    //esse codigo imprime o valor da posição 'posicao' da lista 'matriz' e toda vez que um loop for feito o valor da posição atual será impresso
    console.log(matriz[posicao]);
   //esse código adiciona 1 a variavel 'posicao'
    posicao++;
}
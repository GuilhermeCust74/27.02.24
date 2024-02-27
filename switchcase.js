//define uma função chamada sortear  usando uma função seta                                                                                                                  
const Sortear = () => {
   //declara um avariavel chamada nomes contendo 10 elementos
    let nomes = ["cristiano ronaldo.jr","procurando NEMO 2","papai Cris","miguel","gigas","gabriel","roberto gill","olha o aviaozinho do ratinho","nao encontrado","erro#1415100054198"];
    //declara uma variavel denominada h1Nome que guarda uma referencia no HTML com id "nome"
    let h1Nome = document.getElementById("nome");
    //cria uma variavel denominada achouNumero com um valor de 0
    let achouNumero = false;
    //variavel denominada numeroSorteado sem valor
    let numeroSorteado;
    //esse codigo é um loop para gerar um número aleatório de 0 a 99 até que esse numero seja menor que o array chamado 'nomes' quando a variavel 'achouNumero' é definido como verdadeiro, e o loop para
    while (achouNumero == false){
        numeroSorteado = Math.floor(Math.random() * 100);
        if (numeroSorteado < nomes.length) { 
            achouNumero = true;
        }
    }
    //é uma estrutura  de controle de fluxo que avalia a expressão e com base no valor da expressão, executa diferentes blocos fornecido pela variavel numeroSorteado
    switch (numeroSorteado) {
        // Cada case no switch verifica se numeroSorteado é igual a um determinado número e executa o bloco de código correspondente. Ele atualiza o texto do elemento h1Nome com o nome correspondente na matriz nomes.//
            case 0:
        //Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
                h1Nome.innerText = nomes[numeroSorteado];
        //A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
                break;
        //A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
            case 1:
        //Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
                h1Nome.innerText = nomes[numeroSorteado];
        //A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
                 break;
        //A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
            case 2:
        //Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
                h1Nome.innerText = nomes[numeroSorteado];
        //A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
                break;
        //A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
            case 3:
        //Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
                h1Nome.innerText = nomes[numeroSorteado];
        //A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
              break;
        //A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
            case 4:
        //Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
                h1Nome.innerText = nomes[numeroSorteado];
        //A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
                break;
        //A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
            case 5:
        //Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
                h1Nome.innerText = nomes[numeroSorteado];
        //A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
                break;
        //A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
            case 6:
        //Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
                h1Nome.innerText = nomes[numeroSorteado];
        //A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
                break;
        //A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
            case 7:
        //Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
                h1Nome.innerText = nomes[numeroSorteado];
        //A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
                break;
        //A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
            case 8:
        //Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
                h1Nome.innerText = nomes[numeroSorteado]
        //A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente. //
                break;
        //A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch.//
            case 9:
        //Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
                h1Nome.innerText = nomes[numeroSorteado];
        //A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
                break;
        //A palavra-chave case é usada em uma estrutura switch para especificar um valor ou uma condição a ser comparada com a expressão do switch. //
            case 10:
        // Este código atribui o valor de um elemento específico da matriz nomes à propriedade innerText do elemento HTML h1Nome. O índice desse elemento é determinado pelo valor da variável numeroSorteado. Em resumo, esta linha exibe o nome correspondente ao número sorteado na interface do usuário.//
                h1Nome.innerText = nomes[numeroSorteado];
        //A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente. //
                break;
        // Se numeroSorteado não corresponder a nenhum dos case, esta linha define o texto do elemento h1Nome como "nome nao esta na lista".//        
                default:
        //Este código atribui a string "nome nao esta na lista" à propriedade innerText do elemento HTML referenciado pela variável h1Nome. Essa atribuição é feita para informar ao usuário que o nome correspondente ao número sorteado não está presente na lista de nomes fornecida.//            
                    h1Nome.innerText = "nome nao esta na lista";
        //  A palavra-chave break é usada em estruturas de controle de fluxo, como loops (for, while, do-while) e estruturas condicionais (switch-case), para interromper a execução do loop ou da estrutura condicional e sair dela imediatamente.//
                    break;
            }
        // Atualiza o texto do elemento h1Nome para incluir o número sorteado.//
            h1Nome.innerText += " O NUMERO SORTEADO FOI:" + numeroSorteado;
        }
        
        
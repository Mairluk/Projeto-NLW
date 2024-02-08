    const perguntas = [
{
    pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
    respostas: [
        "let",
        "var",
        "const",
    ],
    correta: 2
},

{
    pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: [
        "push()",
        "append()",
        "addToEnd()",
    ],
    correta: 0
},

{
    pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
    respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()",
    ],
    correta: 0
},

{
    pergunta: "Como você escreve um comentário de linha única em JavaScript?",
    respostas: [
        "// Este é um comentário",
        "' Este é um comentário",
        "* Este é um comentário",
    ],
    correta: 0
},

{
    pergunta: "Qual é a função de parseInt() em JavaScript?",
    respostas: [
        "Converter uma string em um número inteiro",
        "Converter um número em uma string",
        "Converter um número em um número decimal",
    ],
    correta: 0
},

{
    pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
    respostas: [
        "==",
        "===",
        "=",
    ],
    correta: 1
},

{
    pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
    respostas: [
        "print()",
        "console.log()",
        "write()",
    ],
    correta: 1
},

{
    pergunta: "Qual método é usado para juntar os elementos de um array em uma string em JavaScript?",
    respostas: [
        "join()",
        "concat()",
        "merge()",
    ],
    correta: 0
},

{
    pergunta: "O que o método indexOf() retorna quando o elemento não é encontrado em um array?",
    respostas: [
        "-1",
        "null",
        "0",
    ],
    correta: 0
},

{
    pergunta: "Qual é a saída do seguinte código em JavaScript: console.log(typeof([]));",
    respostas: [
        "array",
        "object",
        "undefined",
    ],
    correta: 1
},

    ]

    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')

    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostrarTotal = document.querySelector('#acertos span')
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

    for(const item of perguntas) {
        const quizItem = template.content.cloneNode(true)
        quizItem.querySelector('h3').textContent = item.pergunta

        for(const resposta of item.respostas) {
            const dt = quizItem.querySelector('dl dt').cloneNode(true)
            dt.querySelector('span').textContent = resposta
            dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
            dt.querySelector('input').value = item.respostas.indexOf(resposta)

            dt.querySelector('input').onchange = (event) => {
                const estaCorreta = event.target.value == item.correta 

                corretas.delete(item)
                if (estaCorreta) {
                    corretas.add(item)
                }
                
                mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
            }

            quizItem.querySelector('dl').appendChild(dt)
        }

        quizItem.querySelector('dl dt').remove()
        quiz.appendChild(quizItem)
    }
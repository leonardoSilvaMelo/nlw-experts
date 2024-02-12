const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um banco de dados",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a função do operador '==' em JavaScript?",
      respostas: [
        "Atribuição de valor",
        "Comparação de valor e tipo de dado",
        "Concatenação de strings",
      ],
      correta: 1,
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let varNome = valor;",
        "const varNome = valor;",
        "var varNome = valor;",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é um array em JavaScript?",
      respostas: [
        "Uma função",
        "Um tipo de dado que armazena coleções ordenadas",
        "Um operador lógico",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir mensagens de erro",
        "Imprimir saída no console",
        "Criar um loop de repetição",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma biblioteca de terceiros",
        "Um modelo de objeto para representar documentos HTML/XML",
        "Um método de criptografia",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "let é usado para variáveis que não mudarão, const para variáveis mutáveis",
        "const é usado para variáveis que não mudarão, let para variáveis mutáveis",
      ],
      correta: 2,
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável que realiza uma tarefa específica",
        "Um operador condicional",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual é a sintaxe correta para um loop 'for' em JavaScript?",
      respostas: [
        "para (i = 0; i < 5; i++)",
        "loop (i = 0; i < 5; i++)",
        "for (i = 0; i < 5)",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é o conceito de escopo em JavaScript?",
      respostas: [
        "Uma medida de segurança para evitar ataques cibernéticos",
        "A área do código onde uma variável pode ser acessada",
        "Um tipo de dado que armazena valores booleanos",
      ],
      correta: 1,
    },
  ];
  
  const quiz = document.querySelector('#quiz')//Pegando o quiz do HTML e criando uma variavel
  const template = document.querySelector('template')//Pegando o template do HTML e criando uma variavel
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length//faz a somatória de todos a partir do 1
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop ou laço de repetição
  for(const item of perguntas) {//Para cada ITEM de PERGUNTAS
    const quizItem = template.content.cloneNode(true)//Criando uma variável  que vai clonar o conteudo do template(cloneNode) e seus 'filhos'(true)
    quizItem.querySelector('h3').textContent = item.pergunta//Mudando o titulo da pergunta, pegando o item 'pergunta' da variavel perguntas 
  
   for(let resposta of item.respostas){
     const dt = quizItem.querySelector('dl dt').cloneNode(true)//Criando a variável 'DT' e buscando a tag dt 'filho' (dl dt)
     dt.querySelector('span').textContent = resposta//Mudando o conteudo do span
     dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta // true
  
       corretas.delete(item)
       if(estaCorreta){
         corretas.add(item)
       }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     }
  
  
     quizItem.querySelector('dl').appendChild(dt)//Adicionando as perguntas
    }
  
   quizItem.querySelector('dl dt').remove()
   //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
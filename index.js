const perguntas = [
    {
      pergunta: "Qual espécie o alien Gigante pertence?",
      respostas: [
        "To'kustares",
        "Thalassianos",
        "Thep Khufans",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o dispositivo que Ben utiliza para se transformar em aliens?",
      respostas: [
        "Omnitrix",
        "Ultimatrix",
        "Omniverse",
      ],
      correta: 0
    },
    {
      pergunta: "Qual era a espécie dos aliens antagonistas de Ben 10: Alien Force?",
      respostas: [
        "Soberanos",
        "Anoditas",
        "Nulo-guardiões",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma verdadeira de Aggregor em Ben 10: Supremacia Alienígena?",
      respostas: [
        "Humano",
        "Acrosiano",
        "Osmosiano",
      ],
      correta: 2
  
    },
    {
      pergunta: "Qual é a espécie de Friagem?",
      respostas: [
        "Polar Manzardills",
        "Sotoragianos",
        "Necrofriggiano",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do irmão mais velho de Gwen?",
      respostas: [
        "Carl",
        "Ken",
        "Owen",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a cidade fictícia onde Ben vive?",
      respostas: [
        "Bellwood",
        "Springfield",
        "Townsville",
      ],
      correta: 0
    },
    {
      pergunta: "Qual transformação de Ben pertence a espécie Tetramandos?",
      respostas: [
        "Enormossauro",
        "Quatro Braços",
        "Macaco-Aranha",
      ],
      correta: 1
    },
    {
      pergunta: "Qual transformação pertence a espécie Sonorosiano?",
      respostas: [
        "Clone",
        "Eco Eco",
        "Mega Olhos",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do primeiro alienígena que Ben se transforma?",
      respostas: [
        "Chama",
        "Quatro Braços",
        "Diamante",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
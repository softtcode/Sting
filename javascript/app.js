const jogos = [
  {
    nome: "EA FC 25",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Viva a experiência mais realista do futebol mundial. Gerencie seu clube de coração, monte o elenco dos seus sonhos no Ultimate Team e sinta a atmosfera dos maiores estádios.",
    preco: 299.90,
    urlSteam: "https://store.steampowered.com/app/2592540/EA_SPORTS_FC_25/"
  },
  {
    nome: "GTA V",
    descricao: "Explore o vasto e vivo mundo aberto de Los Santos. Planeje golpes ambiciosos, enfrente gangues rivals e alterne entre a história de três criminosos em uma campanha lendária.",
    preco: 150.90,
    urlSteam: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
  },
  {
    nome: "Monster Hunter Wilds",
    descricao: "Uma jornada brutal em um ecossistema vivo e dinâmico. Domine armas complexas, estude o comportamento de criaturas colossais e cace monstros magníficos para sobreviver.",
    preco: 117.18,
    urlSteam: "https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/"
  },
  {
    nome: "Sons of The Forest",
    descricao: "Enviado para encontrar um bilionário desaparecido em uma ilha isolada, você descobre um inferno de canibais. Construa, fabrique ferramentas e lute para sobreviver neste terror.",
    preco: 26.69,
    urlSteam: "https://store.steampowered.com/app/1326420/Sons_of_the_Forest/"
  },
  {
    nome: "Cyberpunk 2077",
    descricao: "Torne-se V, um mercenário cibernético nas ruas perigosas de Night City. Uma megalópole obcecada por poder, modificações corporais e tecnologia onde suas escolhas mudam o futuro.",
    preco: 99.95,
    urlSteam: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
  },
  {
    nome: "Elden Ring",
    descricao: "Desvende os mistérios do Anel Pristino nas Terras Intermédias. Enfrente semideuses em combates desafiadores, explore masmorras e trace seu caminho para se tornar o Lorde Prócere.",
    preco: 229.90,
    urlSteam: "https://store.steampowered.com/app/1245620/ELDEN_RING/"
  },
  {
    nome: "Red Dead Redemption 2",
    descricao: "Acompanhe a saga de Arthur Morgan e a gangue Van der Linde no fim da era do faroeste. Um mundo aberto espetacular repleto de escolhas morais, tiroteios e uma narrativa emocionante.",
    preco: 98.96,
    urlSteam: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
  },
  {
    nome: "Hogwarts Legacy",
    descricao: "Entre no mundo bruxo dos anos 1800. Crie seu próprio estudante em Hogwarts, aprenda feitiços poderosos, prepare poções e decida o destino do universo mágico em um RPG imersivo.",
    preco: 249.99,
    urlSteam: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/"
  },
  {
    nome: "The Witcher 3: Wild Hunt",
    descricao: "Na pele de Geralt de Rívia, o lendário caçador de monstros, explore um continente devastado pela guerra para encontrar Ciri, a criança da profecia, em uma das maiores sagas dos RPGs.",
    preco: 32.49,
    urlSteam: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
  },
  {
    nome: "Resident Evil 4 Remake",
    descricao: "O agente Leon S. Kennedy viaja até uma isolada vila europeia para resgatar a filha do presidente. Enfrente o horror biológico e uma seita sinistra nesta recriação do clássico.",
    preco: 126.75,
    urlSteam: "https://store.steampowered.com/app/2050650/Resident_Evil_4/"
  },
  {
    nome: "Baldur's Gate 3",
    descricao: "Forme seu grupo e retorne aos Reinos Esquecidos em uma história de companheirismo, traição e sacrifício. Baseado nas regras de D&D, este RPG oferece liberdade absoluta de escolha.",
    preco: 199.99,
    urlSteam: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"
  },
  {
    nome: "Helldivers 2",
    descricao: "Junte-se aos Helldivers e lute pela Liberdade ao lado de amigos em uma galáxia hostil. Use armamento pesado e estratégias devastadoras contra ameaças alienígenas mortais.",
    preco: 199.50,
    urlSteam: "https://store.steampowered.com/app/553850/HELLDIVERS_2/"
  },
  {
    nome: "It Takes Two",
    descricao: "Uma aventura puramente cooperativa criada para dois jogadores. Ajude o casal Cody e May a superar desafios malucos e salvar seu relacionamento em um mundo mágico e divertido.",
    preco: 62.65,
    urlSteam: "https://store.steampowered.com/app/1426210/It_Takes_Two/"
  },
  {
    nome: "Sekiro: Shadows Die Twice",
    descricao: "Explore o Japão do final do período Sengoku como o 'lobo de um braço só'. Use ferramentas protéticas e um combate de espadas afiado para resgatar seu jovem lorde e se vingar.",
    preco: 137.00,
    urlSteam: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/"
  }
];

const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'show.html';
    })
})
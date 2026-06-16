const jogos = [
  {
    nome: "EA FC 25",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Viva a experiência mais realista do futebol mundial. Gerencie seu clube de coração, monte o elenco dos seus sonhos no Ultimate Team e sinta a atmosfera dos maiores estádios.",
    preco: 299.90,
    urlSteam: "https://store.steampowered.com/app/2669320/EA_SPORTS_FC_25/"
  },
  {
    nome: "GTA V",
    urlImagem: "https://images7.alphacoders.com/439/439636.jpg",
    descricao: "Explore o vasto e vivo mundo aberto de Los Santos. Planeje golpes ambiciosos, enfrente gangues rivals e alterne entre a história de três criminosos em uma campanha lendária.",
    preco: 150.90,
    urlSteam: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
  },
  {
    nome: "Monster Hunter Wilds",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Uma jornada brutal em um ecossistema vivo e dinâmico. Domine armas complexas, estude o comportamento de criaturas colossais e cace monstros magníficos para sobreviver.",
    preco: 117.18,
    urlSteam: "https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/"
  },
  {
    nome: "Sons of The Forest",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Enviado para encontrar um bilionário desaparecido em uma ilha isolada, você descobre um inferno de canibais. Construa, fabrique ferramentas e lute para sobreviver neste terror.",
    preco: 26.69,
    urlSteam: "https://store.steampowered.com/agecheck/app/1326470/"
  },
  {
    nome: "Cyberpunk 2077",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Torne-se V, um mercenário cibernético nas ruas perigosas de Night City. Uma megalópole obcecada por poder, modificações corporais e tecnologia onde suas escolhas mudam o futuro.",
    preco: 99.95,
    urlSteam: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
  },
  {
    nome: "Elden Ring",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Desvende os mistérios do Anel Pristino nas Terras Intermédias. Enfrente semideuses em combates desafiadores, explore masmorras e trace seu caminho para se tornar o Lorde Prócere.",
    preco: 229.90,
    urlSteam: "https://store.steampowered.com/app/1245620/ELDEN_RING/"
  },
  {
    nome: "Red Dead Redemption 2",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Acompanhe a saga de Arthur Morgan e a gangue Van der Linde no fim da era do faroeste. Um mundo aberto espetacular repleto de escolhas morais, tiroteios e uma narrativa emocionante.",
    preco: 98.96,
    urlSteam: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
  },
  {
    nome: "Hogwarts Legacy",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Entre no mundo bruxo dos anos 1800. Crie seu próprio estudante em Hogwarts, aprenda feitiços poderosos, prepare poções e decida o destino do universo mágico em um RPG imersivo.",
    preco: 249.99,
    urlSteam: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/"
  },
  {
    nome: "The Witcher 3: Wild Hunt",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Na pele de Geralt de Rívia, o lendário caçador de monstros, explore um continente devastado pela guerra para encontrar Ciri, a criança da profecia, em uma das maiores sagas dos RPGs.",
    preco: 32.49,
    urlSteam: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
  },
  {
    nome: "Resident Evil 4 Remake",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "O agente Leon S. Kennedy viaja até uma isolada vila europeia para resgatar a filha do presidente. Enfrente o horror biológico e uma seita sinistra nesta recriação do clássico.",
    preco: 126.75,
    urlSteam: "https://store.steampowered.com/app/2050650/Resident_Evil_4/"
  },
  {
    nome: "Baldur's Gate 3",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Forme seu grupo e retorne aos Reinos Esquecidos em uma história de companheirismo, traição e sacrifício. Baseado nas regras de D&D, este RPG oferece liberdade absoluta de escolha.",
    preco: 199.99,
    urlSteam: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"
  },
  {
    nome: "Helldivers 2",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Junte-se aos Helldivers e lute pela Liberdade ao lado de amigos em uma galáxia hostil. Use armamento pesado e estratégias devastadoras contra ameaças alienígenas mortais.",
    preco: 199.50,
    urlSteam: "https://store.steampowered.com/app/553850/HELLDIVERS_2/"
  },
  {
    nome: "It Takes Two",
    urlImagem: "https://wallpaperaccess.com/full/14173335.jpg",
    descricao: "Uma aventura puramente cooperativa criada para dois jogadores. Ajude o casal Cody e May a superar desafios malucos e salvar seu relacionamento em um mundo mágico e divertido.",
    preco: 62.65,
    urlSteam: "https://store.steampowered.com/app/1426210/It_Takes_Two/"
  },
  {
    nome: "Devil May Cry 2",
    urlImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2uPDQ8eOI50NIeibE05Wr5oI6qpTmPrs0Lw&s",
    descricao: "Um helicóptero zumbi... e um tanque zumbi também.",
    preco: 15.00,
    urlSteam: "https://store.steampowered.com/app/631510/Devil_May_Cry_HD_Collection/"
  },
  {
    nome: "Zelda: Ocarina of Time",
    urlImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2IOgq8bltLP6zjKKeQoNFGV96Z369TfDbw&s",
    descricao: "Um homúnculo chamado Greg",
    preco: 300.00,
    urlSteam: "https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-ocarina-of-time-switch-2/"
  }
];

const pointerButtons = document.querySelectorAll('.btn-pointer');
const buyButtons = document.querySelectorAll('.buy-btn')
console.log('uou')

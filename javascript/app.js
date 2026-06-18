// Lista de jogos que serão usados nas páginas index.html e show.html.
// Cada objeto contém nome, imagem, descrição, preço e link para loja.
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
    descricao: "Explore o vasto e vivo mundo aberto de Los Santos. Planeje golpes ambiciosos, enfrente gangues rivais e alterne entre a história de três criminosos em uma campanha lendária.",
    preco: 150.90,
    urlSteam: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
  },
  {
    nome: "Monster Hunter Wilds",
    urlImagem: "https://imgs.search.brave.com/ObN9Ok9i10oV_OwQwevorL_S1G3v_2OGfqoeLE8LGGI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMi10/ZWNodHVkby5nbGJp/bWcuY29tL2g5QlM1/M3NxdEpwMHNKYUVL/a1c3Z1FzMkN4ST0v/MHgwOjE5MjB4MTA4/MC85ODR4MC9zbWFy/dC9maWx0ZXJzOnN0/cmlwX2ljYygpL2ku/czMuZ2xiaW1nLmNv/bS92MS9BVVRIXzA4/ZmJmNDhiYzA1MjQ4/Nzc5NDNmZTg2ZTQz/MDg3ZTdhL2ludGVy/bmFsX3Bob3Rvcy9i/cy8yMDI0L0svVC9J/RjNLaEdSRWFMdUlv/RkowYVNDZy9zdWt1/cmluc2hpeW90c3V0/by0yMDI0LTEwLTI4/LTE2Mjk0Ny5wbmc",
    descricao: "Uma jornada brutal em um ecossistema vivo e dinâmico. Domine armas complexas, estude o comportamento de criaturas colossais e cace monstros magníficos para sobreviver.",
    preco: 117.18,
    urlSteam: "https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/"
  },
  {
    nome: "Sons of The Forest",
    urlImagem: "https://imgs.search.brave.com/q9hfQemsoOq-nmjnEYN1tHHJuIlxPqBlYCIl5j8bMck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93b3Rw/YWNrLnJ1L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAyL1Nv/bnMtb2YtdGhlLUZv/cmVzdC04MDB4NDUw/LmpwZw",
    descricao: "Enviado para encontrar um bilionário desaparecido em uma ilha isolada, você descobre um inferno de canibais. Construa, fabrique ferramentas e lute para sobreviver neste terror.",
    preco: 26.69,
    urlSteam: "https://store.steampowered.com/agecheck/app/1326470/"
  },
  {
    nome: "Cyberpunk 2077",
    urlImagem: "https://imgs.search.brave.com/vRdLxUiPGZYFDIxYco4scTMwemtY-ybq8JSLB0NuxFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZXVw/cy5jb20uYnIvd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDMv/Q1lCRVJQVU5LLTIw/NzcuanBlZy53ZWJw",
    descricao: "Torne-se V, um mercenário cibernético nas ruas perigosas de Night City. Uma megalópole obcecada por poder, modificações corporais e tecnologia onde suas escolhas mudam o futuro.",
    preco: 99.95,
    urlSteam: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
  },
  {
    nome: "Elden Ring",
    urlImagem: "https://imgs.search.brave.com/SURZwdns-bi9yiBN-LQxfBHwHYcXGnG0yuFaYSvD0VA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/ZWxkZW4tcmluZy1j/b3Zlci1pbnNwaXJh/dGlvbnMtdjAtN211/b3NqNnU3czRlMS5q/cGc_d2lkdGg9Mzg0/MCZmb3JtYXQ9cGpw/ZyZhdXRvPXdlYnAm/cz0yMGUwMzg3ZjVh/YmFlY2FiYjZjMTdk/ZWY0ZTY0MmNjNWNl/ZTUxNWQz",
    descricao: "Desvende os mistérios do Anel Pristino nas Terras Intermédias. Enfrente semideuses em combates desafiadores, explore masmorras e trace seu caminho para se tornar o Lorde Prócere.",
    preco: 229.90,
    urlSteam: "https://store.steampowered.com/app/1245620/ELDEN_RING/"
  },
  {
    nome: "Red Dead Redemption 2",
    urlImagem: "https://imgs.search.brave.com/bvwBo7GmTimHb6P76ulGJu8LrzsMFgr_59Zjx-JpsWw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3V0ZXJzcGFjZS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDQvcmVk/ZGVhZHJlZGVtcHRp/b24yLmpwZw",
    descricao: "Acompanhe a saga de Arthur Morgan e a gangue Van der Linde no fim da era do faroeste. Um mundo aberto espetacular repleto de escolhas morais, tiroteios e uma narrativa emocionante.",
    preco: 98.96,
    urlSteam: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
  },
  {
    nome: "Hogwarts Legacy",
    urlImagem: "https://imgs.search.brave.com/8aOPnUAEjKQJX8t41hv81lZa9Sb2-QzhLISOAnv5vu8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyMjc4/MDM0LmpwZw",
    descricao: "Entre no mundo bruxo dos anos 1800. Crie seu próprio estudante em Hogwarts, aprenda feitiços poderosos, prepare poções e decida o destino do universo mágico em um RPG imersivo.",
    preco: 249.99,
    urlSteam: "https://store.steampowered.com/app/990080/Hogwarts_Legacy/"
  },
  {
    nome: "The Witcher 3: Wild Hunt",
    urlImagem: "https://imgs.search.brave.com/Il3so9L4RGLu4__9oLKwXSZCcmCC5sGan-ksoJP1Z-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvdGhl/LXdpdGNoZXItMy1s/ZXNoeS1rd3JyZDZx/MXhxY2R5NGowLmpw/Zw",
    descricao: "Na pele de Geralt de Rívia, o lendário caçador de monstros, explore um continente devastado pela guerra para encontrar Ciri, a criança da profecia, em uma das maiores sagas dos RPGs.",
    preco: 32.49,
    urlSteam: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"
  },
  {
    nome: "Resident Evil 4 Remake",
    urlImagem: "https://imgs.search.brave.com/PHKYqiglD0gWb6uG8ORNgjrGUEWSa9h2YNGjjkfyuZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExODEy/MDAwLmpwZw",
    descricao: "O agente Leon S. Kennedy viaja até uma isolada vila europeia para resgatar a filha do presidente. Enfrente o horror biológico e uma seita sinistra nesta recriação do clássico.",
    preco: 126.75,
    urlSteam: "https://store.steampowered.com/app/2050650/Resident_Evil_4/"
  },
  {
    nome: "Baldur's Gate 3",
    urlImagem: "https://imgs.search.brave.com/8u6p2vBg2_HA_JL9k7fjPFgZl9TM7QMJejamkSjndRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZWx0/aWFzZ2FtaW5nLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wNi9CYWxkdXJz/LUdhdGUtMy1TeXN0/ZW0tUmVxdWlyZW1l/bnRzLVdpbmRvd3Mt/YW5kLU1hYy04MDB4/NDUwLmpwZw",
    descricao: "Forme seu grupo e retorne aos Reinos Esquecidos em uma história de companheirismo, traição e sacrifício. Baseado nas regras de D&D, este RPG oferece liberdade absoluta de escolha.",
    preco: 199.99,
    urlSteam: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"
  },
  {
    nome: "Helldivers 2",
    urlImagem: "https://imgs.search.brave.com/rn_C8rOporBeNvQrp-roGDHiUiUYI6YOtLEtSWJxp30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjMv/MDUvMjUvaGVsbGRp/dmVyczItMTY4NDk3/MjgzNjA3Ny5qcGc_/Y3JvcD0xOjEsc21h/cnQmZm9ybWF0PWpw/ZyZhdXRvPXdlYnAm/cXVhbGl0eT04MA",
    descricao: "Junte-se aos Helldivers e lute pela Liberdade ao lado de amigos em uma galáxia hostil. Use armamento pesado e estratégias devastadoras contra ameaças alienígenas mortais.",
    preco: 199.50,
    urlSteam: "https://store.steampowered.com/app/553850/HELLDIVERS_2/"
  },
  {
    nome: "It Takes Two",
    urlImagem: "https://imgs.search.brave.com/bbgeeakGaj8ewsmS0pgOPAmZLMNUVc_V29IkotOXSpg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtcHJkLmlnbmlt/Z3MuY29tLzIwMjEv/MDIvMTIvaXQtdGFr/ZXMtdHdvLWJ1dHRv/bi1maW4tMTYxMzA4/ODQxOTQ3MC5qcGc_/Y3JvcD0xOjEsc21h/cnQmZm9ybWF0PWpw/ZyZhdXRvPXdlYnAm/cXVhbGl0eT04MA",
    descricao: "Uma aventura puramente cooperativa criada para dois jogadores. Ajude o casal Cody e May a superar desafios malucos e salvar seu relacionamento em um mundo mágico e divertido.",
    preco: 62.65,
    urlSteam: "https://store.steampowered.com/app/1426210/It_Takes_Two/"
  },
  {
    nome: "Sekiro: Shadows Die Twice",
    urlImagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/814380/capsule_616x353.jpg?t=1762888662",
    descricao: 'Acompanhe o shinobi Lobo na sua jornada para defender seu mestre ao titulo de "Sekiro".',
    preco: 62.65,
    urlSteam: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/"
  },
  {
    nome: "Devil May Cry 2",
    urlImagem: "https://imgs.search.brave.com/m34ac49qyhGd7zgrqWpgI7fwAqw1eQ-SAd4tZCfN8U4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDg3/ODU3NC5qcGc",
    descricao: "Um helicóptero zumbi... e um tanque zumbi também.",
    preco: 15.00,
    urlSteam: "https://store.steampowered.com/app/631510/Devil_May_Cry_HD_Collection/"
  },
  {
    nome: "Zelda: Ocarina of Time Remake",
    urlImagem: "https://imgs.search.brave.com/Ak07dD99SqLfyoFBzhj3zUEvNRdpTIbLsCUvOmxjvfs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZWVk/ZWRpZ25vLmNvbS5i/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Ni8wNi96ZWxkYS1v/Y2FyaW5hLW9mLXRp/bWUtMDEtMTYtMDYt/MjYtMTAyNHg1NzYu/anBnLndlYnA",
    descricao: "Um homúnculo chamado Greg.",
    preco: 300.00,
    urlSteam: "https://www.nintendo.com/pt-br/store/products/the-legend-of-zelda-ocarina-of-time-switch-2/"
  },
  {
    nome: "Spider-Man Remastered",
    urlImagem: "https://imgs.search.brave.com/E70psvXR5muW28JacbGROK6R5bNo7PErgIM-o8jE0_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qb2dh/bmRvY2FzdWFsbWVu/dGUuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEx/L3Jldmlldy1tYXJ2/ZWxzLXNwaWRlci1t/YW4tcHM0LWNhcGEu/anBn",
    descricao: "Em Marvel's Spider-Man Remasterizado, os mundos de Peter Parker e Spider-Man entram em conflito em uma história original cheia de ação. Enfrente vilões icônicos, explore uma Nova York vibrante e experimente a sensação de ser o Homem-Aranha como nunca antes.",
    preco: 249.90,
    urlSteam: "https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/"
  },
  {
    nome: "Assassin's Creed Valhalla",
    urlImagem: "https://imgs.search.brave.com/rM62FznnUIf_G9myL4IPEfs709j-RYyH7JkuNORsZlQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYxOTY1/NzUuanBn",
    descricao: "Em Assassin's Creed Valhalla, assuma o papel de Eivor, um feroz guerreiro viking. Explore um mundo aberto vibrante, construa seu assentamento e lute para conquistar a Inglaterra em uma saga épica de conquista e sobrevivência.",
    preco: 199.99,
    urlSteam: "https://store.steampowered.com/app/2208920/Assassins_Creed_Valhalla/"
  },
  {
    nome: "God of War",
    urlImagem: "https://imgs.search.brave.com/kUUaWFDKxyLaiWiYsNKBD6henxa8B9jXT_3rmfznccA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/cy50ZWNub2Jsb2cu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAxL2dvZC1v/Zi13YXItMjAxOC0w/MDQtMTA2MHg1OTYu/anBn",
    descricao: "Kratos inicia uma nova jornada ao lado de seu filho Atreus nos reinos da mitologia nórdica. Enfrente deuses, monstros e descubra uma emocionante história de redenção.",
    preco: 199.90,
    urlSteam: "https://store.steampowered.com/app/1593500/God_of_War/"
  },
  {
    nome: "God of War Ragnarök",
    urlImagem: "https://imgs.search.brave.com/0CHSYd51ylrgjg1TC2x5CVklKcJCwiDgyVG67S1Euy4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDExNDg0/ODgzLmpwZw",
    descricao: "O fim dos tempos se aproxima. Kratos e Atreus devem enfrentar o Ragnarök em uma aventura épica repleta de ação, emoção e batalhas contra os deuses nórdicos.",
    preco: 249.90,
    urlSteam: "https://store.steampowered.com/app/2322010/God_of_War_Ragnarok/"
  },
  {
    nome: "Ghost of Tsushima Director's Cut",
    urlImagem: "https://imgs.search.brave.com/3SBpxaJv3k0muRPw4IzVzEWJxjPpfeegV8JavIuQiqo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZXVw/cy5jb20uYnIvd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDcv/R2hvc3Qtb2YtVHN1/c2hpbWEtMi5qcGcu/d2VicA",
    descricao: "Torne-se Jin Sakai e lute para libertar Tsushima da invasão mongol. Domine a espada samurai e as táticas furtivas do Fantasma.",
    preco: 249.90,
    urlSteam: "https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_DIRECTORS_CUT/"
  },
  {
    nome: "Black Myth: Wukong",
    urlImagem: "https://imgs.search.brave.com/aGbwtrEOrv5xkkkcvcrYiQPcZCgvd3mSUaR-sk95H2A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZXVw/cy5jb20uYnIvd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDgv/QmxhY2stTXl0aC1X/dWtvbmcuanBlZw",
    descricao: "Inspirado na clássica lenda chinesa Jornada ao Oeste, enfrente criaturas míticas e domine habilidades extraordinárias em um RPG de ação impressionante.",
    preco: 229.90,
    urlSteam: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/"
  },
  {
    nome: "Sekiro: Shadows Die Twice",
    urlImagem: "https://imgs.search.brave.com/t3woZ_pHuA7MqtmP8Der4dEYCqPoghZ6mBXA8T8stcg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qb2dh/bmRvY2FzdWFsbWVu/dGUuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIxLzAy/L1Nla2lyby1TaGFk/b3dzLURpZS1Ud2lj/ZS1DYXBhLTkwMHg1/MDYuanBn",
    descricao: "Assuma o papel do Lobo de Um Braço Só e trilhe um caminho de vingança no Japão feudal. Um desafio intenso focado em habilidade e precisão.",
    preco: 274.90,
    urlSteam: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/"
  },
  {
    nome: "Dark Souls III",
    urlImagem: "https://imgs.search.brave.com/Z4PZmgDXx-HVdGLa5AxtLzQJQ4UNfyf8oWx9cI4-aKQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2FtZXJzZWdhbWVz/LmNvbS5ici93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNi8wNC9E/QVJLU09VTF9mYWNl/Ym9va19taW5pLmpw/Zw",
    descricao: "Explore um mundo sombrio e decadente, enfrente chefes memoráveis e descubra os segredos do ciclo do fogo em um dos RPGs mais influentes da história.",
    preco: 257.90,
    urlSteam: "https://store.steampowered.com/app/374320/DARK_SOULS_III/"
  },
  {
    nome: "Starfield",
    urlImagem: "https://imgs.search.brave.com/7vsXcdCs76p7CY453ZSB8yNB7_bEHe9eXwFr3v0F8gY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/dWhkcGFwZXIuY29t/L3dhbGxwYXBlci9z/dGFyZmllbGQtYXN0/cm9uYXV0LXZpZGVv/LWdhbWUtNzkwQDFA/bA",
    descricao: "Aventure-se pelas estrelas em um vasto universo de exploração espacial. Personalize sua nave, descubra planetas e escreva sua própria história.",
    preco: 299.90,
    urlSteam: "https://store.steampowered.com/app/1716740/Starfield/"
  },
  {
    nome: "Forza Horizon 5",
    urlImagem: "https://imgs.search.brave.com/xZ5C5WYeWAFUMzAguUJoOMOTj1UmO_TJ_ecqDfnGcjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wMi50/cnJzZi5jb20vaW1h/Z2UvZmdldC9jZi83/NzQvMC9pbWFnZXMu/dGVycmEuY29tLzIw/MjEvMDgvMjUvZm9y/emFfZ2FtZXNjb21f/aGVyby0xLmpwZw",
    descricao: "Corra pelas paisagens vibrantes do México em um dos jogos de corrida mais aclamados dos últimos anos.",
    preco: 249.00,
    urlSteam: "https://store.steampowered.com/app/1551360/Forza_Horizon_5/"
  },
  {
    nome: "Need for Speed Unbound",
    urlImagem: "https://imgs.search.brave.com/QCmWiqQTsAfYIbyeYDDO63Lq-riDHx_ExmtZbBJulXU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvOTE4/NDg0Mi5qcGc",
    descricao: "Dispute corridas ilegais, fuja da polícia e personalize carros incríveis em um estilo visual único e moderno.",
    preco: 279.00,
    urlSteam: "https://store.steampowered.com/app/1846380/Need_for_Speed_Unbound/"
  },
  {
    nome: "DOOM Eternal",
    urlImagem: "https://imgs.search.brave.com/0OYmbcNABINmyGRyMmHQoyF7HPpeePfeSS-5CoVwDK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcXVh/cmVkLXBvdGF0by5w/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8wOS9ET09NLUV0/ZXJuYWwtQ2FwYS5q/cGc",
    descricao: "Destrua hordas demoníacas em um dos FPS mais frenéticos já criados. Velocidade, brutalidade e metal pesado definem a experiência.",
    preco: 99.90,
    urlSteam: "https://store.steampowered.com/app/782330/DOOM_Eternal/"
  },
  {
    nome: "Resident Evil Village",
    urlImagem: "https://imgs.search.brave.com/X5Ar1yu_N8_-YGwAKBg-P-_U29JWpOHLieSGmQeUfNA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDkwNTA3/NTIuanBn",
    descricao: "Ethan Winters retorna em uma jornada aterrorizante por uma vila dominada por criaturas monstruosas e mistérios perturbadores.",
    preco: 139.00,
    urlSteam: "https://store.steampowered.com/app/1196590/Resident_Evil_Village/"
  },
  {
    nome: "Dead Space Remake",
    urlImagem: "https://imgs.search.brave.com/EP1jLOZ9rXJGRStzAEmmFynH1qMVoqYBN1c3cvDVdKM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5hcGkucGxheXN0/YXRpb24uY29tL3Z1/bGNhbi9hcC9ybmQv/MjAyMjEwLzExMTYv/VlREbTlBbkFvNUJt/cmV5RG9JS1lIdWtU/LnBuZw",
    descricao: "Reviva o clássico do terror espacial completamente reconstruído com gráficos modernos e atmosfera ainda mais assustadora.",
    preco: 249.00,
    urlSteam: "https://store.steampowered.com/app/1693980/Dead_Space/"
  },
  {
    nome: "Hades",
    urlImagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg?t=1758127023",
    descricao: "Lute para escapar do submundo em um roguelike premiado que combina ação intensa, personagens memoráveis e excelente narrativa.",
    preco: 73.99,
    urlSteam: "https://store.steampowered.com/app/1145360/Hades/"
  },
  {
    nome: "Hollow Knight",
    urlImagem: "https://imgs.search.brave.com/F1oG5Ak3vqS9YZO6uRA1ZDcOPpKj-zgj-CenmCg2a8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMi10/ZWNodHVkby5nbGJp/bWcuY29tL1B2WmdK/VDZMeG9BMXY1VkU0/cVJ3YmJJeDBJST0v/MHgwOjE1MDB4MTAw/MC85ODR4MC9zbWFy/dC9maWx0ZXJzOnN0/cmlwX2ljYygpL2ku/czMuZ2xiaW1nLmNv/bS92MS9BVVRIXzA4/ZmJmNDhiYzA1MjQ4/Nzc5NDNmZTg2ZTQz/MDg3ZTdhL2ludGVy/bmFsX3Bob3Rvcy9i/cy8yMDIwLzUveS9K/S20yZEtTQk9ubXdl/Uk04cTVYQS9ob2xs/b3cta25pZ2h0LWRv/d25sb2FkLWNhcGEu/anBn",
    descricao: "Explore o reino subterrâneo de Hallownest em uma aventura metroidvania repleta de segredos, desafios e chefes incríveis.",
    preco: 46.99,
    urlSteam: "https://store.steampowered.com/app/367520/Hollow_Knight/"
  },
  {
    nome: "Terraria",
    urlImagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1769844435",
    descricao: "Cave, construa, explore e lute em um enorme mundo 2D repleto de itens, chefes e possibilidades praticamente infinitas.",
    preco: 32.99,
    urlSteam: "https://store.steampowered.com/app/105600/Terraria/"
  },
  {
    nome: "Valheim",
    urlImagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/892970/de0bdcf6c008c508a79d8e75eb91fc67f4bebd5d/header.jpg?t=1765967243",
    descricao: "Sobreviva em um mundo inspirado na mitologia nórdica, construa fortalezas e enfrente criaturas lendárias sozinho ou com amigos.",
    preco: 37.99,
    urlSteam: "https://store.steampowered.com/app/892970/Valheim/"
  },
  {
    nome: "Palworld",
    urlImagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1623730/058bd87dc17a7179e07c446aa64d0574ca43ab9d/header.jpg?t=1780702171",
    descricao: "Capture criaturas misteriosas chamadas Pals e utilize suas habilidades para explorar, construir, lutar e sobreviver.",
    preco: 88.99,
    urlSteam: "https://store.steampowered.com/app/1623730/Palworld/"
  },
  {
    nome: "Lies of P",
    urlImagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1627720/header.jpg?t=1764565054",
    descricao: "Uma releitura sombria da história de Pinóquio em um soulslike desafiador ambientado em uma cidade inspirada na Belle Époque.",
    preco: 249.90,
    urlSteam: "https://store.steampowered.com/app/1627720/Lies_of_P/"
  },
  {
    nome: "Kingdom Come: Deliverance II",
    urlImagem: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1771300/header.jpg?t=1777975568",
    descricao: "Continue a jornada de Henry em uma recriação extremamente detalhada da Europa medieval, com combate realista e narrativa profunda.",
    preco: 299.90,
    urlSteam: "https://store.steampowered.com/app/1771300/Kingdom_Come_Deliverance_II/"
  }
].map((jogo, index) => ({ // adiciona id e slug a cada jogo usando map para criar um novo array com as propriedades adicionais
  ...jogo,
  id: index, // adiciona um identificador numérico para cada jogo
  slug: gerarSlug(jogo.nome) // gera um endereço amigável para a URL de detalhes
}));

// Converte um texto em um slug de URL amigável (sem acentos e espaços).
function gerarSlug(text) {
  return text
    .toLowerCase() // transforma em minúsculas
    .normalize('NFD') // separa os caracteres acentuados em letra + acento
    .replace(/\p{Diacritic}/gu, '') // remove os acentos
    .replace(/[^a-z0-9]+/g, '-') // substitui caracteres não alfanuméricos por hífens
    .replace(/(^-|-$)/g, ''); // remove hífens do início e do fim
}

// Formata valores numéricos como preço em reais (R$).
function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const localStorageJogosKey = 'sting_jogos';

function carregarJogosSalvos() {
  const raw = localStorage.getItem(localStorageJogosKey);
  if (!raw) return;

  try {
    const salvos = JSON.parse(raw);
    if (!Array.isArray(salvos)) return;

    const existentes = new Set(jogos.map((jogo) => jogo.slug));
    const novos = salvos.filter((jogo) => jogo && jogo.slug && !existentes.has(jogo.slug));

    if (novos.length) {
      jogos.push(...novos.map((jogo) => ({
        ...jogo,
        preco: typeof jogo.preco === 'string' ? parseFloat(jogo.preco.replace(',', '.')) || 0 : jogo.preco || 0,
      })));
    }
  } catch (error) {
    console.warn('Falha ao carregar jogos salvos do navegador:', error);
  }
}

// Cria o HTML de um único card de jogo para exibição na página principal.
function criarCard(jogo) {
  return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card card-hover h-100 bg-dark text-white shadow-lg" data-slug="${jogo.slug}" style="cursor: pointer;">
        <div class="position-relative">
          <img src="${jogo.urlImagem}" class="card-img-top" alt="${jogo.nome}">
        </div>
        <div class="card-body d-flex flex-column justify-content-between">
          <div class="mb-3">
            <h5 class="card-title fw-bold text-truncate mb-1">${jogo.nome}</h5>
            <p class="card-text text-secondary small">${jogo.descricao}</p>
          </div>
          <div>
            <div class="d-flex align-items-baseline gap-2 mb-3">
              <h4 class="fw-bold m-0" style="color: #76b900;">${formatarPreco(jogo.preco)}</h4>
            </div>
            <a href="show.html?slug=${jogo.slug}" class="btn w-100 fw-bold text-uppercase border-2 btn-outline-hover-neon" style="border-color: #76b900; color: #76b900; background: transparent;">
              Ver detalhes
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Renderiza todos os cards de jogos na página inicial e adiciona os eventos de clique.
function renderJogos() {
  const lista = document.getElementById('lista-jogos');
  if (!lista) return; // Se a página não tem o container, não faz nada.

  lista.innerHTML = jogos.map(criarCard).join(''); // Gera o HTML de todos os jogos e insere no container.

  const totalJogos = document.getElementById('total-jogos');
  if (totalJogos) {
    totalJogos.textContent = `${jogos.length} Produtos encontrados`;
  }

  // Adiciona clique ao card inteiro para navegar até a página de detalhes,
  // mas mantém o link interno do botão funcionando normalmente.
  lista.querySelectorAll('[data-slug]').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('a')) return; // evita interferir no clique do botão "Ver detalhes"
      const slug = card.getAttribute('data-slug');
      if (slug) {
        window.location.href = `show.html?slug=${slug}`;
      }
    });
  });
}

// Preenche os detalhes do jogo na página show.html com base no slug da URL.
function preencherDetalhes() {
  const nomeElemento = document.getElementById('jogo-nome');
  if (!nomeElemento) return; // Se não estiver na página de detalhes, não faz nada.

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const jogo = jogos.find((item) => item.slug === slug);

  if (!jogo) {
    // Caso o jogo não seja encontrado, exibe mensagem de erro e botão de retorno.
    nomeElemento.textContent = 'Jogo não encontrado';
    document.getElementById('jogo-descricao').textContent = 'O jogo solicitado não foi encontrado. Volte para a página inicial e escolha outro título.';
    document.getElementById('jogo-preco').textContent = '';
    document.getElementById('jogo-imagem').src = 'https://via.placeholder.com/800x450?text=Jogo+n%C3%A3o+encontrado';
    document.getElementById('jogo-steam').removeAttribute('href');
    document.getElementById('jogo-steam').textContent = 'Voltar';
    document.getElementById('jogo-steam').addEventListener('click', () => {
      window.location.href = 'index.html';
    });
    return;
  }

  // Preenche a página de detalhes com as informações do jogo encontrado.
  nomeElemento.textContent = jogo.nome;
  document.getElementById('jogo-descricao').textContent = jogo.descricao;
  document.getElementById('jogo-imagem').src = jogo.urlImagem;
  document.getElementById('jogo-imagem').alt = jogo.nome;
  document.getElementById('jogo-preco').textContent = formatarPreco(jogo.preco);
  const jogoSteamLink = document.getElementById('jogo-steam');
  jogoSteamLink.href = jogo.urlSteam;
  jogoSteamLink.textContent = 'Comprar';
  document.title = `${jogo.nome} — STING STORE`;
}

// Inicializa a aplicação após o carregamento do documento.
function inicializarHamburgerMenu() {
  const btn = document.querySelector('.navbar-toggler');
  const menu = document.querySelector('#menu');
  if (!btn || !menu) return;

  const collapse = window.bootstrap?.Collapse?.getOrCreateInstance(menu, { toggle: false });

  menu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (collapse) {
        collapse.hide();
        return;
      }
      if (!menu.classList.contains('show')) return;
      menu.classList.remove('show');
      btn.classList.add('collapsed');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

function init() {
  carregarJogosSalvos();
  renderJogos();
  preencherDetalhes();
  inicializarHamburgerMenu();
}

document.addEventListener('DOMContentLoaded', init); // Garante que a função init seja chamada somente após o DOM estar completamente carregado. O JavaScript é carregado no head, ele pode tentar acessar elementos do DOM que ainda não existem, causando erros. Ao usar 'DOMContentLoaded', garantimos que o código só será executado depois que toda a estrutura HTML estiver pronta.

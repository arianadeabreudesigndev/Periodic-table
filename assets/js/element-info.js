const elementsData = {
  1: {
    name: "Hidrogênio",
    symbol: "H",
    formula: "H₂",
    description:
      "O hidrogênio é o elemento mais abundante no universo. É um gás incolor, inodoro e altamente inflamável. É usado em diversos processos industriais e como combustível limpo.",
    images: [
      "assets/img/elements/agua.webp",
      "assets/img/elements/estrelas.webp",
      "assets/img/elements/planetas.webp",
      "assets/img/elements/combustivelLimpo.webp",
    ],
  },
  2: {
    name: "Hélio",
    symbol: "He",
    formula: "He",
    description:
      "O hélio é um gás nobre, incolor, inodoro e não inflamável. É usado em balões, mergulho em águas profundas e em equipamentos de resfriamento.",
    images: [
      "assets/img/elements/estrelas.webp",
      "assets/img/elements/baloes.webp",
      "assets/img/elements/combustivel.webp",
      "assets/img/elements/criogenia.webp",
    ],
  },
  3: {
    name: "Lítio",
    symbol: "Li",
    formula: "Li",
    description:
      "O lítio é um metal alcalino, macio e prateado. É usado em baterias recarregáveis, medicamentos psiquiátricos e na produção de cerâmicas e vidros especiais.",
    images: [
      "assets/img/elements/bateriaRecarregavel.webp",
      "assets/img/elements/virdroECeramicaColorida.webp",
      "assets/img/elements/medicatimentoComIodo.webp",
      "assets/img/elements/LigasDeAlumínioItrio.webp",
    ],
  },
  4: {
    name: "Berílio",
    symbol: "Be",
    formula: "Be",
    description:
      "O berílio é um metal alcalino-terroso, duro e cinza. É usado em ligas metálicas, reatores nucleares e equipamentos aeroespaciais.",
    images: [
      "assets/img/elements/ligaDeCobre.webp",
      "assets/img/elements/janelaRaioX.webp",
      "assets/img/elements/soldaEspacial.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
    ],
  },
  5: {
    name: "Boro",
    symbol: "B",
    formula: "B",
    description:
      "O boro é um semimetal que ocorre naturalmente na forma de cristais. É usado em detergentes, fertilizantes e materiais de alta resistência.",
    images: [
      "assets/img/elements/fibraDeVidro.webp",
      "assets/img/elements/detergenteSabao.webp",
      "assets/img/elements/fertilizante.webp",
      "assets/img/elements/componentesDeFoguete.webp",
    ],
  },
  6: {
    name: "Carbono",
    symbol: "C",
    formula: "C",
    description:
      "O carbono é a base de toda a vida na Terra. Existe em várias formas alotrópicas, incluindo diamante e grafite. É essencial para a química orgânica.",
    images: [
      "assets/img/elements/dimantes.webp",
      "assets/img/elements/grafite.webp",
      "assets/img/elements/petroleo.webp",
      "assets/img/elements/seresVivos.webp",
    ],
  },
  7: {
    name: "Nitrogênio",
    symbol: "N",
    formula: "N₂",
    description:
      "O nitrogênio é um gás incolor e inodoro que compõe cerca de 78% da atmosfera terrestre. É essencial para a vida e usado em fertilizantes.",
    images: [
      "assets/img/elements/atmosferaTerrestre.webp",
      "assets/img/elements/fertilizante.webp",
      "assets/img/elements/explosivos.webp",
      "assets/img/elements/criogenia.webp",
    ],
  },
  8: {
    name: "Oxigênio",
    symbol: "O",
    formula: "O₂",
    description:
      "O oxigênio é um gás essencial para a respiração dos seres vivos. Compõe cerca de 21% da atmosfera terrestre e é vital para a combustão.",
    images: [
      "assets/img/elements/atmosferaTerrestre.webp",
      "assets/img/elements/agua.webp",
      "assets/img/elements/respiracaoCelular.webp",
      "assets/img/elements/motores.webp",
    ],
  },
  9: {
    name: "Flúor",
    symbol: "F",
    formula: "F₂",
    description:
      "O flúor é o elemento mais eletronegativo e reativo. É usado em pastas de dente, refrigerantes e na produção de materiais como o teflon.",
    images: [
      "assets/img/elements/pastaDePente.webp",
      "assets/img/elements/panelaTeflon.webp",
      "assets/img/elements/Refrigerante.webp",
      "assets/img/elements/medicinaNuclearAstato.webp",
    ],
  },
  10: {
    name: "Neônio",
    symbol: "Ne",
    formula: "Ne",
    description:
      "O neônio é um gás nobre usado em sinais luminosos e lasers. É incolor e inerte, emitindo uma luz vermelha-alaranjada quando ionizado.",
    images: [
      "assets/img/elements/lampadaNeon.webp",
      "assets/img/elements/letreiroLuminoso.webp",
      "assets/img/elements/laser.webp",
      "assets/img/elements/indicadorDigital.webp",
    ],
  },
  11: {
    name: "Sódio",
    symbol: "Na",
    formula: "Na",
    description:
      "O sódio é um metal alcalino macio e prateado. É essencial para a vida e usado em diversos processos industriais, incluindo a produção de sabão e vidro.",
    images: [
      "assets/img/elements/lampadaIodeto.webp",
      "assets/img/elements/bateriaDeSodio.webp",
      "assets/img/elements/detergenteSabao.webp",
      "assets/img/elements/sal.webp",
    ],
  },
  12: {
    name: "Magnésio",
    symbol: "Mg",
    formula: "Mg",
    description:
      "O magnésio é um metal alcalino-terroso leve e prateado. É essencial para a vida, usado em ligas metálicas e como suplemento nutricional.",
    images: [
      "assets/img/elements/fogos.webp",
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/suplementos.webp",
      "assets/img/elements/cimento.webp",
    ],
  },
  13: {
    name: "Alumínio",
    symbol: "Al",
    formula: "Al",
    description:
      "O alumínio é um metal leve, resistente à corrosão e bom condutor de eletricidade. É amplamente usado em embalagens, construção e transporte.",
    images: [
      "assets/img/elements/latasDeAlimentos.webp",
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/construcao.webp",
      "assets/img/elements/aluminio.webp",
    ],
  },
  14: {
    name: "Silício",
    symbol: "Si",
    formula: "Si",
    description:
      "O silício é um semimetal essencial para a indústria eletrônica. É o principal componente dos chips de computador e células solares.",
    images: [
      "assets/img/elements/chips.webp",
      "assets/img/elements/vidroTV.webp",
      "assets/img/elements/painelSolar.webp",
      "assets/img/elements/granito.webp",
    ],
  },
  15: {
    name: "Fósforo",
    symbol: "P",
    formula: "P",
    description:
      "O fósforo é um não-metal essencial para a vida. É usado em fertilizantes, detergentes e na produção de fósforos.",
    images: [
      "assets/img/elements/fosforo.webp",
      "assets/img/elements/fertilizante.webp",
      "assets/img/elements/dna.webp",
      "assets/img/elements/detergenteSabao.webp",
    ],
  },
  16: {
    name: "Enxofre",
    symbol: "S",
    formula: "S",
    description:
      "O enxofre é um não-metal amarelo usado na produção de ácido sulfúrico, fertilizantes e borracha vulcanizada.",
    images: [
      "assets/img/elements/vulcoes.webp",
      "assets/img/elements/pneu.webp",
      "assets/img/elements/fertilizante.webp",
      "assets/img/elements/medicinaNuclearAstato.webp",
    ],
  },
  17: {
    name: "Cloro",
    symbol: "Cl",
    formula: "Cl₂",
    description:
      "O cloro é um halogênio verde-amarelado usado para purificar água, produzir plásticos e como agente branqueador.",
    images: [
      "assets/img/elements/aguaTratada.webp",
      "assets/img/elements/sal.webp",
      "assets/img/elements/cloro.webp",
      "assets/img/elements/plastico.webp",
    ],
  },
  18: {
    name: "Argônio",
    symbol: "Ar",
    formula: "Ar",
    description:
      "O argônio é um gás nobre incolor e inerte. É usado em lâmpadas, soldagem e como gás de proteção em processos industriais.",
    images: [
      "assets/img/elements/lampadaIncandecente.webp",
      "assets/img/elements/solda.webp",
      "assets/img/elements/janelaDupla.webp",
      "assets/img/elements/atmosferaTerrestre.webp",
    ],
  },
  19: {
    name: "Potássio",
    symbol: "K",
    formula: "K",
    description:
      "O potássio é um metal alcalino essencial para a vida. É usado em fertilizantes, medicamentos e na produção de sabão.",
    images: [
      "assets/img/elements/fertilizante.webp",
      "assets/img/elements/banana.webp",
      "assets/img/elements/detergenteSabao.webp",
      "assets/img/elements/fogos.webp",
    ],
  },
  20: {
    name: "Cálcio",
    symbol: "Ca",
    formula: "Ca",
    description:
      "O cálcio é um metal alcalino-terroso essencial para ossos e dentes. É usado em suplementos nutricionais e na produção de cimento.",
    images: [
      "assets/img/elements/ossos.webp",
      "assets/img/elements/cimento.webp",
      "assets/img/elements/giz.webp",
      "assets/img/elements/produtoLacteos.webp",
    ],
  },
  21: {
    name: "Escândio",
    symbol: "Sc",
    formula: "Sc",
    description:
      "O escândio é um metal de transição leve e prateado. É usado em ligas de alumínio para aplicações aeroespaciais e em lâmpadas de alta intensidade.",
    images: [
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/lampadaIodeto.webp",
      "assets/img/elements/bicicletaProfissional.webp",
      "assets/img/elements/soldaEspacial.webp",
    ],
  },
  22: {
    name: "Titânio",
    symbol: "Ti",
    formula: "Ti",
    description:
      "O titânio é um metal de transição forte, leve e resistente à corrosão. É usado em implantes médicos, aeronaves e equipamentos esportivos.",
    images: [
      "assets/img/elements/titanio.webp",
      "assets/img/elements/carrosAvioes.webp",
      "assets/img/elements/protetorSolar.webp",
      "assets/img/elements/motorAJato.webp",
    ],
  },
  23: {
    name: "Vanádio",
    symbol: "V",
    formula: "V",
    description:
      "O vanádio é um metal de transição duro e cinza-prateado. É usado em ligas de aço para aumentar a resistência e na produção de catalisadores.",
    images: [
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/bateriasVinadio.webp",
      "assets/img/elements/catalisador.webp",
      "assets/img/elements/turbina.webp",
    ],
  },
  24: {
    name: "Cromo",
    symbol: "Cr",
    formula: "Cr",
    description:
      "O cromo é um metal de transição duro e brilhante. É usado em revestimentos decorativos, ligas de aço inoxidável e pigmentos.",
    images: [
      "assets/img/elements/soldaEspacial.webp",
      "assets/img/elements/revestimentoMetalicocromado.webp",
      "assets/img/elements/virdroECeramicaColorida.webp",
      "assets/img/elements/couroCromado.webp",
    ],
  },
  25: {
    name: "Manganês",
    symbol: "Mn",
    formula: "Mn",
    description:
      "O manganês é um metal de transição essencial para a vida. É usado em ligas de aço, baterias e como catalisador em processos químicos.",
    images: [
      "assets/img/elements/trilhos.webp",
      "assets/img/elements/pilhaAlcalina.webp",
      "assets/img/elements/fertilizante.webp",
      "assets/img/elements/imaSuperForte.webp",
    ],
  },
  26: {
    name: "Ferro",
    symbol: "Fe",
    formula: "Fe",
    description:
      "O ferro é um metal de transição essencial para a vida. É o principal componente do aço e é vital para o transporte de oxigênio no sangue.",
    images: [
      "assets/img/elements/trilhos.web",
      "assets/img/elements/hemoglobina.webp",
      "assets/img/elements/carrosAvioes.webp",
      "assets/img/elements/ima.webp",
    ],
  },
  27: {
    name: "Cobalto",
    symbol: "Co",
    formula: "Co",
    description:
      "O cobalto é um metal de transição duro e prateado. É usado em baterias recarregáveis, ligas magnéticas e pigmentos azuis.",
    images: [
      "assets/img/elements/bateriaRecarregavel.webp",
      "assets/img/elements/pigmentoCobalto.webp",
      "assets/img/elements/ligasResistentes.webp",
      "assets/img/elements/radioterapia.webp",
    ],
  },
  28: {
    name: "Níquel",
    symbol: "Ni",
    formula: "Ni",
    description:
      "O níquel é um metal de transição resistente à corrosão. É usado em moedas, baterias recarregáveis e ligas de aço inoxidável.",
    images: [
      "assets/img/elements/moedas.webp",
      "assets/img/elements/bateriaRecarregavel.webp",
      "assets/img/elements/soldaEspacial.webp",
      "assets/img/elements/anticorrosivo.webp",
    ],
  },
  29: {
    name: "Cobre",
    symbol: "Cu",
    formula: "Cu",
    description:
      "O cobre é um metal de transição excelente condutor de eletricidade. É usado em fios elétricos, moedas e tubulações.",
    images: [
      "assets/img/elements/canosAquecimento.webp",
      "assets/img/elements/fios.webp",
      "assets/img/elements/estatuaDaLiberdade.webp",
      "assets/img/elements/moedas.webp",
    ],
  },
  30: {
    name: "Zinco",
    symbol: "Zn",
    formula: "Zn",
    description:
      "O zinco é um metal de transição essencial para a vida. É usado em galvanização, baterias e como suplemento nutricional.",
    images: [
      "assets/img/elements/protetorSolar.webp",
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/anticorrosivo.webp",
      "assets/img/elements/suplementos.webp",
    ],
  },
  31: {
    name: "Gálio",
    symbol: "Ga",
    formula: "Ga",
    description:
      "O gálio é um metal macio e prateado que derrete próximo à temperatura ambiente. É usado em semicondutores e LEDs.",
    images: [
      "assets/img/elements/chips.webp",
      "assets/img/elements/termopares.webp",
      "assets/img/elements/espelho.webp",
      "assets/img/elements/monitor.webp",
    ],
  },
  32: {
    name: "Germânio",
    symbol: "Ge",
    formula: "Ge",
    description:
      "O germânio é um semimetal usado em semicondutores e fibra óptica. Foi crucial para o desenvolvimento da eletrônica moderna.",
    images: [
      "assets/img/elements/fibraOtica.webp",
      "assets/img/elements/painelSolar.webp",
      "assets/img/elements/chips.webp",
      "assets/img/elements/lenteInfravermelho.webp",
    ],
  },
  33: {
    name: "Arsênio",
    symbol: "As",
    formula: "As",
    description:
      "O arsênio é um semimetal tóxico usado em pesticidas e preservativos de madeira. Também tem aplicações em semicondutores.",
    images: [
      "assets/img/elements/capacitores.webp",
      "assets/img/elements/vidroTV.webp",
      "assets/img/elements/resina.webp",
      "assets/img/elements/medicatimentoComIodo.webp",
    ],
  },
  34: {
    name: "Selênio",
    symbol: "Se",
    formula: "Se",
    description:
      "O selênio é um não-metal essencial em pequenas quantidades. É usado em células solares, fotocopiadoras e suplementos nutricionais.",
    images: [
      "assets/img/elements/painelSolar.webp",
      "assets/img/elements/vidroTV.webp",
      "assets/img/elements/suplementos.webp",
      "assets/img/elements/pigmentoVermelho.webp",
    ],
  },
  35: {
    name: "Bromo",
    symbol: "Br",
    formula: "Br₂",
    description:
      "O bromo é um halogênio líquido vermelho-acastanhado. É usado em retardantes de chama, produtos farmacêuticos e fotografia.",
    images: [
      "assets/img/elements/fotografiasAntigas.webp",
      "assets/img/elements/medicinaNuclearAstato.webp",
      "assets/img/elements/aguaDePiscina.webp",
      "assets/img/elements/anticorrosivo.webp",
    ],
  },
  36: {
    name: "Criptônio",
    symbol: "Kr",
    formula: "Kr",
    description:
      "O criptônio é um gás nobre usado em lâmpadas, lasers e anestésicos. É incolor e inerte, emitindo luz branca quando ionizado.",
    images: [
      "assets/img/elements/lampadaFluorescente.webp",
      "assets/img/elements/laserOftalmologico.webp",
      "assets/img/elements/janelaDupla.webp",
      "assets/img/elements/flash.webp",
    ],
  },
  37: {
    name: "Rubídio",
    symbol: "Rb",
    formula: "Rb",
    description:
      "O rubídio é um metal alcalino macio e prateado. É usado em relógios atômicos, células fotoelétricas e como catalisador.",
    images: [
      "assets/img/elements/fogos.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/vidroTV.webp",
      "assets/img/elements/relogioAtomico.webp",
    ],
  },
  38: {
    name: "Estrôncio",
    symbol: "Sr",
    formula: "Sr",
    description:
      "O estrôncio é um metal alcalino-terroso usado em fogos de artifício (produz cor vermelha) e em tubos de raios catódicos.",
    images: [
      "assets/img/elements/fogos.webp",
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/vidroTV.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
    ],
  },
  39: {
    name: "Ítrio",
    symbol: "Y",
    formula: "Y",
    description:
      "O ítrio é um metal de transição usado em supercondutores, LEDs e lasers. Também é usado em ligas de alumínio e magnésio.",
    images: [
      "assets/img/elements/ledVermelho.webp",
      "assets/img/elements/lampadaFluorescente.webp",
      "assets/img/elements/LigasDeAlumínioItrio.webp",
      "assets/img/elements/ligasResistentes.webp",
    ],
  },
  40: {
    name: "Zircônio",
    symbol: "Zr",
    formula: "Zr",
    description:
      "O zircônio é um metal de transição resistente à corrosão. É usado em reatores nucleares, implantes médicos e joias.",
    images: [
      "assets/img/elements/revestimentoReatorNuclear.webp",
      "assets/img/elements/ligaResistenteCorrosao.webp",
      "assets/img/elements/instrumentosCirurgicos.webp",
      "assets/img/elements/dimantes.webp",
    ],
  },
  41: {
    name: "Nióbio",
    symbol: "Nb",
    formula: "Nb",
    description:
      "O nióbio é um metal de transição usado em supercondutores e ligas de aço. É resistente à corrosão e tem propriedades magnéticas.",
    images: [
      "assets/img/elements/titanio.webp",
      "assets/img/elements/instrumentosCirurgicos.webp",
      "assets/img/elements/turbina.webp",
      "assets/img/elements/soldaEspacial.webp",
    ],
  },
  42: {
    name: "Molibdênio",
    symbol: "Mo",
    formula: "Mo",
    description:
      "O molibdênio é um metal de transição usado em ligas de aço, lubrificantes e catalisadores. É essencial para algumas enzimas.",
    images: [
      "assets/img/elements/fornoAltaTemperatura.webp",
      "assets/img/elements/ligasResistentes.webp",
      "assets/img/elements/catalisadorPetroleo.webp",
      "assets/img/elements/ligasMetalicas.webp",
    ],
  },
  43: {
    name: "Tecnécio",
    symbol: "Tc",
    formula: "Tc",
    description:
      "O tecnécio é o primeiro elemento artificial da tabela periódica. É usado em medicina nuclear para diagnóstico e tratamento.",
    images: [
      "assets/img/elements/combustivel.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/catalisador.webp",
      "assets/img/elements/ligasMetalicas.webp",
    ],
  },
  44: {
    name: "Rutênio",
    symbol: "Ru",
    formula: "Ru",
    description:
      "O rutênio é um metal de transição usado em joias, eletrônica e como catalisador. É resistente à corrosão e tem propriedades magnéticas.",
    images: [
      "assets/img/elements/chips.webp",
      "assets/img/elements/joia.webp",
      "assets/img/elements/catalisador.webp",
      "assets/img/elements/43/componentesEletronicos.webp",
    ],
  },
  45: {
    name: "Ródio",
    symbol: "Rh",
    formula: "Rh",
    description:
      "O ródio é um metal de transição precioso usado em conversores catalíticos, joias e como catalisador em processos químicos.",
    images: [
      "assets/img/elements/joia.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
      "assets/img/elements/espelho.webp",
      "assets/img/elements/catalisador",
    ],
  },
  46: {
    name: "Paládio",
    symbol: "Pd",
    formula: "Pd",
    description:
      "O paládio é um metal de transição precioso usado em conversores catalíticos, joias e odontologia. É um excelente catalisador.",
    images: [
      "assets/img/elements/catalisador.webp",
      "assets/img/elements/joia.webp",
      "assets/img/elements/combustivelLimpo.webp",
      "assets/img/elements/placas.webp",
    ],
  },
  47: {
    name: "Prata",
    symbol: "Ag",
    formula: "Ag",
    description:
      "A prata é um metal de transição precioso usado em joias, moedas e fotografia. É o melhor condutor de eletricidade e calor.",
    images: [
      "assets/img/elements/joia.webp",
      "assets/img/elements/moedas.webp",
      "assets/img/elements/espelho.webp",
      "assets/img/elements/curativoAntibacteriano.webp",
    ],
  },
  48: {
    name: "Cádmio",
    symbol: "Cd",
    formula: "Cd",
    description:
      "O cádmio é um metal de transição usado em baterias, pigmentos e revestimentos. É tóxico e deve ser manuseado com cuidado.",
    images: [
      "assets/img/elements/bateriaNuclear.webp",
      "assets/img/elements/amarelo-cadmo.webp",
      "assets/img/elements/painelSolar.webp",
      "assets/img/elements/reatorTorio.webp",
    ],
  },
  49: {
    name: "Índio",
    symbol: "In",
    formula: "In",
    description:
      "O índio é um metal macio e prateado usado em telas de toque, painéis solares e soldas. É um componente importante da tecnologia moderna.",
    images: [
      "assets/img/elements/solda.webp",
      "assets/img/elements/espelho.webp",
      "assets/img/elements/celulasSolares.webp",
      "assets/img/elements/vidroTV.webp",
    ],
  },
  50: {
    name: "Estanho",
    symbol: "Sn",
    formula: "Sn",
    description:
      "O estanho é um metal usado em soldas, latas e ligas como o bronze. É resistente à corrosão e tem baixa toxicidade.",
    images: [
      "assets/img/elements/latasDeAlimentos.webp",
      "assets/img/elements/solda.webp",
      "assets/img/elements/Bronze.webp",
      "assets/img/elements/janelaRaioX.webp",
    ],
  },
  51: {
    name: "Antimônio",
    symbol: "Sb",
    formula: "Sb",
    description:
      "O antimônio é um semimetal usado em ligas, retardantes de chama e eletrônica. Tem propriedades tanto de metal quanto de não-metal.",
    images: [
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/virdroECeramicaColorida.webp",
      "assets/img/elements/componentesEletronicos.webp",
      "assets/img/elements/carrosAvioes.webp",
    ],
  },
  52: {
    name: "Telúrio",
    symbol: "Te",
    formula: "Te",
    description:
      "O telúrio é um semimetal usado em painéis solares, ligas metálicas e como corante. É um elemento raro na crosta terrestre.",
    images: [
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/celulasSolares.webp",
      "assets/img/elements/plastico.webp",
      "assets/img/elements/bateriasVinadio.webp",
    ],
  },
  53: {
    name: "Iodo",
    symbol: "I",
    formula: "I₂",
    description:
      "O iodo é um halogênio essencial para a vida. É usado em desinfetantes, contrastes radiológicos e suplementos nutricionais.",
    images: [
      "assets/img/elements/sal.webp",
      "assets/img/elements/fotografiasAntigas.webp",
      "assets/img/elements/plastico.webp",
      "assets/img/elements/celulasSolares.webp",
    ],
  },
  54: {
    name: "Xenônio",
    symbol: "Xe",
    formula: "Xe",
    description:
      "O xenônio é um gás nobre usado em lâmpadas, lasers e anestésicos. É incolor, inodoro e praticamente inerte.",
    images: [
      "assets/img/elements/flash.webp",
      "assets/img/elements/carrosAvioes.webp",
      "assets/img/elements/gasXeonio.webp",
      "assets/img/elements/soldaEspacial.webp",
    ],
  },
  55: {
    name: "Césio",
    symbol: "Cs",
    formula: "Cs",
    description:
      "O césio é um metal alcalino macio e dourado. É usado em relógios atômicos, células fotoelétricas e como catalisador.",
    images: [
      "assets/img/elements/relogioAtomico.webp",
      "assets/img/elements/perfuraçãoDePocoPetroleo.webp",
      "assets/img/elements/celulasSolares.webp",
      "assets/img/elements/motores.webp",
    ],
  },
  56: {
    name: "Bário",
    symbol: "Ba",
    formula: "Ba",
    description:
      "O bário é um metal alcalino-terroso usado em contrastes radiológicos, fogos de artifício e vidros especiais.",
    images: [
      "assets/img/elements/fogos.webp",
      "assets/img/elements/plastico.webp",
      "assets/img/elements/vidroTV.webp",
      "assets/img/elements/raioX.webp",
    ],
  },
  57: {
    name: "Lantânio",
    symbol: "La",
    formula: "La",
    description:
      "O lantânio é o primeiro elemento da série dos lantanídeos. É usado em baterias recarregáveis, lentes de câmera e ligas metálicas.",
    images: [
      "assets/img/elements/lenteInfravermelho.webp",
      "assets/img/elements/carrosHibridos.webp",
      "assets/img/elements/catalisadorPetroleo.webp",
      "assets/img/elements/cinema.webp",
    ],
  },
  58: {
    name: "Cério",
    symbol: "Ce",
    formula: "Ce",
    description:
      "O cério é um lantanídeo usado em catalisadores, ligas metálicas e polimento de vidros. É o mais abundante dos elementos terras raras.",
    images: [
      "assets/img/elements/catalisador.webp",
      "assets/img/elements/cerioIsqueiro.webp",
      "assets/img/elements/lampadaIncandecente.webp",
      "assets/img/elements/lentesTorio.webp",
    ],
  },
  59: {
    name: "Praseodímio",
    symbol: "Pr",
    formula: "Pr",
    description:
      "O praseodímio é um lantanídeo usado em ligas metálicas, lasers e vidros especiais. Tem propriedades magnéticas interessantes.",
    images: [
      "assets/img/elements/imaSuperForte.webp",
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/virdroECeramicaColorida.webp",
      "assets/img/elements/lampadaIncandecente.webp",
    ],
  },
  60: {
    name: "Neodímio",
    symbol: "Nd",
    formula: "Nd",
    description:
      "O neodímio é um lantanídeo usado em ímãs poderosos, lasers e vidros coloridos. É essencial para a tecnologia moderna.",
    images: [
      "assets/img/elements/janelaRaioX.webp",
      "assets/img/elements/fones.webp",
      "assets/img/elements/laserDeNeomio.webp",
      "assets/img/elements/motorImaPermanente.webp",
    ],
  },
  61: {
    name: "Promécio",
    symbol: "Pm",
    formula: "Pm",
    description:
      "O promécio é um lantanídeo radioativo usado em baterias nucleares e fontes de luz. É o único elemento radioativo entre os lantanídeos.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/marcadorLuminoso.webp",
      "assets/img/elements/bateriaNuclear.webp",
      "assets/img/elements/energiaGeotermica.webp",
    ],
  },
  62: {
    name: "Samário",
    symbol: "Sm",
    formula: "Sm",
    description:
      "O samário é um lantanídeo usado em ímãs, lasers e medicina nuclear. Tem propriedades magnéticas e luminescentes importantes.",
    images: [
      "assets/img/elements/filtroVidroLaser.webp",
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/radioterapia.webp",
      "assets/img/elements/imaSamario.webp",
    ],
  },
  63: {
    name: "Európio",
    symbol: "Eu",
    formula: "Eu",
    description:
      "O európio é um lantanídeo usado em telas de TV, lâmpadas fluorescentes e lasers. É um dos elementos mais reativos das terras raras.",
    images: [
      "assets/img/elements/vidroTV.webp",
      "assets/img/elements/dinheiro.webp",
      "assets/img/elements/lampadaFluorescente.webp",
      "assets/img/elements/europioLampadas.webp",
    ],
  },
  64: {
    name: "Gadolínio",
    symbol: "Gd",
    formula: "Gd",
    description:
      "O gadolínio é um lantanídeo usado em contrastes de ressonância magnética, ligas metálicas e reatores nucleares.",
    images: [
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/contraste.webp",
      "assets/img/elements/reatorTorio.webp",
      "assets/img/elements/monitor.webp",
    ],
  },
  65: {
    name: "Térbio",
    symbol: "Tb",
    formula: "Tb",
    description:
      "O térbio é um lantanídeo usado em telas coloridas, lasers e dispositivos de armazenamento de dados. Tem propriedades luminescentes únicas.",
    images: [
      "assets/img/elements/monitor.webp",
      "assets/img/elements/laser.webp",
      "assets/img/elements/imaSuperForte.webp",
      "assets/img/elements/lampadaFluorescente.webp",
    ],
  },
  66: {
    name: "Disprósio",
    symbol: "Dy",
    formula: "Dy",
    description:
      "O disprósio é um lantanídeo usado em ímãs poderosos, lasers e reatores nucleares. É essencial para tecnologias verdes.",
    images: [
      "assets/img/elements/lampadaIodeto.webp",
      "assets/img/elements/imaSuperForte.webp",
      "assets/img/elements/reatorTorio.webp",
      "assets/img/elements/laser.webp",
    ],
  },
  67: {
    name: "Hólmio",
    symbol: "Ho",
    formula: "Ho",
    description:
      "O hólmio é um lantanídeo usado em lasers, ímãs e controle de reatores nucleares. Tem as propriedades magnéticas mais fortes de qualquer elemento.",
    images: [
      "assets/img/elements/imaSuperForte.webp",
      "assets/img/elements/laserOftalmologico.webp",
      "assets/img/elements/criogenia.webp",
      "assets/img/elements/virdroECeramicaColorida.webp",
    ],
  },
  68: {
    name: "Érbio",
    symbol: "Er",
    formula: "Er",
    description:
      "O érbio é um lantanídeo usado em fibras ópticas, lasers e ligas metálicas. É essencial para a comunicação moderna.",
    images: [
      "assets/img/elements/fibraOtica.webp",
      "assets/img/elements/laserOftalmologico.webp",
      "assets/img/elements/reatorTorio.webp",
      "assets/img/elements/virdroECeramicaColorida.webp",
    ],
  },
  69: {
    name: "Túlio",
    symbol: "Tm",
    formula: "Tm",
    description:
      "O túlio é um lantanídeo usado em lasers, fontes de raios X portáteis e dispositivos de segurança. É um dos elementos mais raros das terras raras.",
    images: [
      "assets/img/elements/raioXPortatil.webp",
      "assets/img/elements/laserOftalmologico.webp",
      "assets/img/elements/vidroTV.webp",
      "assets/img/elements/componentesEletronicos.webp",
    ],
  },
  70: {
    name: "Itérbio",
    symbol: "Yb",
    formula: "Yb",
    description:
      "O itérbio é um lantanídeo usado em lasers, relógios atômicos e aço inoxidável. Tem propriedades ópticas e magnéticas importantes.",
    images: [
      "assets/img/elements/laserAltaPotencia.webp",
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/fibraOtica.webp",
      "assets/img/elements/relogioAtomico.webp",
    ],
  },
  71: {
    name: "Lutécio",
    symbol: "Lu",
    formula: "Lu",
    description:
      "O lutécio é o último elemento da série dos lantanídeos. É usado em catalisadores, detectores de radiação e na produção de vidros especiais.",
    images: [
      "assets/img/elements/catalisadorPetroleo.webp",
      "assets/img/elements/petScan.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/ligasMetalicas.webp",
    ],
  },
  72: {
    name: "Háfnio",
    symbol: "Hf",
    formula: "Hf",
    description:
      "O háfnio é um metal de transição usado em reatores nucleares, processadores de computador e ligas de alta resistência.",
    images: [
      "assets/img/elements/chips.webp",
      "assets/img/elements/reatorTorio.webp",
      "assets/img/elements/motorAJato.webp",
      "assets/img/elements/lampadaIncandecente.webp",
    ],
  },
  73: {
    name: "Tântalo",
    symbol: "Ta",
    formula: "Ta",
    description:
      "O tântalo é um metal de transição resistente à corrosão. É usado em capacitores eletrônicos, implantes médicos e ferramentas de corte.",
    images: [
      "assets/img/elements/titanio.webp",
      "assets/img/elements/capacitores.webp",
      "assets/img/elements/ligasMetalicas.webp",
      "assets/img/elements/instrumentosCirurgicos.webp",
    ],
  },
  74: {
    name: "Tungstênio",
    symbol: "W",
    formula: "W",
    description:
      "O tungstênio é o metal com o ponto de fusão mais alto. É usado em filamentos de lâmpadas, ferramentas de corte e blindagem contra radiação.",
    images: [
      "assets/img/elements/lampadaIncandecente.webp",
      "assets/img/elements/contrapeso.webp",
      "assets/img/elements/ferramentasPerfurantes.webp",
      "assets/img/elements/armasNucleares.webp",
    ],
  },
  75: {
    name: "Rênio",
    symbol: "Re",
    formula: "Re",
    description:
      "O rênio é um metal de transição raro usado em catalisadores, superligas e termopares. É um dos elementos mais densos da tabela periódica.",
    images: [
      "assets/img/elements/motorAJato.webp",
      "assets/img/elements/catalisadorPetroleo.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
      "assets/img/elements/ligasMetalicas.webp",
    ],
  },
  76: {
    name: "Ósmio",
    symbol: "Os",
    formula: "Os",
    description:
      "O ósmio é o elemento mais denso da tabela periódica. É usado em ligas duras, pontas de canetas e catalisadores.",
    images: [
      "assets/img/elements/canetaDeLuxo.webp",
      "assets/img/elements/bisturi.webp",
      "assets/img/elements/componentesEletronicos.webp",
      "assets/img/elements/agulhas.webp",
    ],
  },
  77: {
    name: "Irídio",
    symbol: "Ir",
    formula: "Ir",
    description:
      "O irídio é um metal de transição extremamente denso e resistente à corrosão. É usado em contatos elétricos, joias e na produção de ligas especiais.",
    images: [
      "assets/img/elements/velaIgnicao.webp",
      "assets/img/elements/cadinhoFundicao.webp",
      "assets/img/elements/joia.webp",
      "assets/img/elements/BarraDeIridio.webp",
    ],
  },
  78: {
    name: "Platina",
    symbol: "Pt",
    formula: "Pt",
    description:
      "A platina é um metal precioso usado em joias, catalisadores automotivos e equipamentos de laboratório. É resistente à corrosão e tem excelente condutividade.",
    images: [
      "assets/img/elements/7catalisador.webp",
      "assets/img/elements/joia.webp",
      "assets/img/elements/cisplatinaCancer.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
    ],
  },
  79: {
    name: "Ouro",
    symbol: "Au",
    formula: "Au",
    description:
      "O ouro é um metal precioso usado em joias, eletrônica e como reserva de valor. É altamente maleável, dúctil e resistente à corrosão.",
    images: [
      "assets/img/elements/joia.webp",
      "assets/img/elements/moedas.webp",
      "assets/img/elements/dentreRestauracao.webp",
      "assets/img/elements/componentesEletronicos.webp",
    ],
  },
  80: {
    name: "Mercúrio",
    symbol: "Hg",
    formula: "Hg",
    description:
      "O mercúrio é o único metal líquido à temperatura ambiente. É usado em termômetros, lâmpadas fluorescentes e processos industriais, mas é altamente tóxico.",
    images: [
      "assets/img/elements/mercurioRestauracao.webp",
      "assets/img/elements/lampadaFluorescente.webp",
      "assets/img/elements/barrasOuro.webp",
      "assets/img/elements/copernício.webp",
    ],
  },
  81: {
    name: "Tálio",
    symbol: "Tl",
    formula: "Tl",
    description:
      "O tálio é um metal macio e cinza usado em detectores de radiação, vidros especiais e semicondutores. É altamente tóxico e foi usado como veneno no passado.",
    images: [
      "assets/img/elements/celulasSolares.webp",
      "assets/img/elements/janelaRaioX.webp",
      "assets/img/elements/medicinaNuclearAstato.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
    ],
  },
  82: {
    name: "Chumbo",
    symbol: "Pb",
    formula: "Pb",
    description:
      "O chumbo é um metal pesado usado em baterias, blindagem contra radiação e soldas. Foi amplamente usado em tubulações e tintas, mas seu uso foi reduzido devido à toxicidade.",
    images: [
      "assets/img/elements/bateriaAutomovel.webp",
      "assets/img/elements/BlidagemRadicao.webp",
      "assets/img/elements/municao.webp",
      "assets/img/elements/tubulacaoAntiga.webp",
    ],
  },
  83: {
    name: "Bismuto",
    symbol: "Bi",
    formula: "Bi",
    description:
      "O bismuto é um metal pesado usado em medicamentos, cosméticos e ligas de baixo ponto de fusão. É o elemento natural mais diamagnético e tem baixa toxicidade.",
    images: [
      "assets/img/elements/medicinaNuclearAstato.webp",
      "assets/img/elements/ligasBaixaFusao.webp",
      "assets/img/elements/municaoEcologica.webp",
      "assets/img/elements/antiacido.webp",
    ],
  },
  84: {
    name: "Polônio",
    symbol: "Po",
    formula: "Po",
    description:
      "O polônio é um elemento radioativo extremamente raro e perigoso. Foi usado em fontes de calor para satélites e como veneno. É um dos elementos mais radioativos conhecidos.",
    images: [
      "assets/img/elements/soldaEspacial.webp",
      "assets/img/elements/pinceisAntiestaticos.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/armasNucleares.webp",
    ],
  },
  85: {
    name: "Ástato",
    symbol: "At",
    formula: "At",
    description:
      "O ástato é o halogênio mais raro e radioativo. É tão raro que sua quantidade total na crosta terrestre é estimada em menos de 1 grama. Tem aplicações limitadas em medicina nuclear.",
    images: [
      "assets/img/elements/astato.webp",
      "assets/img/elements/medicinaNuclearAstato.webp",
      "assets/img/elements/radioterapia.webp",
      "assets/img/elements/pesquisaCientifica.webp",
    ],
  },
  86: {
    name: "Radônio",
    symbol: "Rn",
    formula: "Rn",
    description:
      "O radônio é um gás nobre radioativo que ocorre naturalmente como produto do decaimento do urânio. É a segunda principal causa de câncer de pulmão após o tabagismo.",
    images: [
      "assets/img/elements/gasRandonio.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
      "assets/img/elements/randonio.webp",
    ],
  },
  87: {
    name: "Frâncio",
    symbol: "Fr",
    formula: "Fr",
    description:
      "O frâncio é o metal alcalino mais pesado e radioativo. É extremamente raro e instável, com meia-vida de apenas 22 minutos. Tem poucas aplicações práticas devido à sua raridade.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
      "assets/img/elements/francio.webp",
    ],
  },
  88: {
    name: "Rádio",
    symbol: "Ra",
    formula: "Ra",
    description:
      "O rádio é um metal alcalino-terroso radioativo que brilha no escuro. Foi usado em tintas luminosas e tratamento de câncer, mas seu uso foi reduzido devido à radioatividade.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/pinturaRadioativa.webp",
      "assets/img/elements/radioterapia.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
    ],
  },
  89: {
    name: "Actínio",
    symbol: "Ac",
    formula: "Ac",
    description:
      "O actínio é o primeiro elemento da série dos actinídeos. É radioativo e brilhante no escuro. Tem aplicações limitadas em geradores termoelétricos e fontes de nêutrons.",
    images: [
      "assets/img/elements/radioterapia.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
      "assets/img/elements/reatorTorio.webp",
    ],
  },
  90: {
    name: "Tório",
    symbol: "Th",
    formula: "Th",
    description:
      "O tório é um actinídeo radioativo usado como combustível nuclear e em ligas de magnésio. É mais abundante que o urânio e tem potencial para energia nuclear mais segura.",
    images: [
      "assets/img/elements/lentesTorio.webp",
      "assets/img/elements/ligasResistentes.webp",
      "assets/img/elements/combustivel.webp",
      "assets/img/elements/lanternasTorio.webp",
    ],
  },
  91: {
    name: "Protactínio",
    symbol: "Pa",
    formula: "Pa",
    description:
      "O protactínio é um actinídeo radioativo extremamente raro. É um dos elementos mais caros e difíceis de obter, com poucas aplicações práticas além da pesquisa científica.",
    images: [
      "assets/img/elements/revestimentoReatorNuclear.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
      "assets/img/elements/medicatimentoComIodo.webp",
    ],
  },
  92: {
    name: "Urânio",
    symbol: "U",
    formula: "U",
    description:
      "O urânio é o elemento mais conhecido dos actinídeos, usado como combustível nuclear e em armas atômicas. É radioativo e foi crucial para o desenvolvimento da energia nuclear.",
    images: [
      "assets/img/elements/blindagemPesada.webp",
      "assets/img/elements/armasNucleares.webp",
      "assets/img/elements/janelaRaioX.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
    ],
  },
  93: {
    name: "Netúnio",
    symbol: "Np",
    formula: "Np",
    description:
      "O netúnio foi o primeiro elemento transurânico sintetizado. É usado em detectores de nêutrons e como precursor para a produção de plutônio.",
    images: [
      "assets/img/elements/revestimentoReatorNuclear.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
      "assets/img/elements/bateriaNuclear.webp",
      "assets/img/elements/pesquisaCientifica.webp",
    ],
  },
  94: {
    name: "Plutônio",
    symbol: "Pu",
    formula: "Pu",
    description:
      "O plutônio é um actinídeo altamente radioativo usado em armas nucleares e como combustível em reatores. É um dos elementos mais perigosos e controlados do mundo.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/armasNucleares.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
      "assets/img/elements/soldaEspacial.webp",
    ],
  },
  95: {
    name: "Amerício",
    symbol: "Am",
    formula: "Am",
    description:
      "O amerício é um actinídeo sintético usado em detectores de fumaça e como fonte de radiação em equipamentos industriais. Foi descoberto durante o Projeto Manhattan.",
    images: [
      "assets/img/elements/detectorFumaca.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/radiologiaIndustrial.webp",
      "assets/img/elements/bateriaNuclear.webp",
    ],
  },
  96: {
    name: "Cúrio",
    symbol: "Cm",
    formula: "Cm",
    description:
      "O cúrio é um actinídeo sintético altamente radioativo. É usado em geradores termoelétricos para naves espaciais e em fontes de nêutrons para pesquisa.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/soldaEspacial.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
    ],
  },
  97: {
    name: "Berquélio",
    symbol: "Bk",
    formula: "Bk",
    description:
      "O berquélio é um actinídeo sintético extremamente raro. Tem poucas aplicações práticas e é usado principalmente em pesquisa científica.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/berkelio.webp",
      "assets/img/elements/raioX.webp",
      "assets/img/elements/radiologiaIndustrial.webp",
    ],
  },
  98: {
    name: "Califórnio",
    symbol: "Cf",
    formula: "Cf",
    description:
      "O califórnio é um actinídeo sintético usado como fonte de nêutrons em equipamentos de análise e tratamento de câncer. É um dos elementos mais caros do mundo.",
    images: [
      "assets/img/elements/radiologiaIndustrial.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
      "assets/img/elements/radioterapia.webp",
      "assets/img/elements/pesquisaCientifica.webp",
    ],
  },
  99: {
    name: "Einstênio",
    symbol: "Es",
    formula: "Es",
    description:
      "O einstênio é um actinídeo sintético extremamente raro e radioativo. Foi descoberto nos resíduos da primeira explosão de bomba de hidrogênio.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/ExplosãoEinstenio.webp",
      "assets/img/elements/einstenio.webp",
    ],
  },
  100: {
    name: "Férmio",
    symbol: "Fm",
    formula: "Fm",
    description:
      "O férmio é um elemento sintético radioativo da série dos actinídeos. Foi descoberto nos resíduos da explosão da primeira bomba de hidrogênio e tem aplicações limitadas devido à sua alta radioatividade.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/fermio.webp",
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/ExplosãoEinstenio.webp",
    ],
  },
  101: {
    name: "Mendelévio",
    symbol: "Md",
    formula: "Md",
    description:
      "O mendelévio é um elemento sintético radioativo, nomeado em homenagem a Dmitri Mendeleev. É produzido em aceleradores de partículas e tem aplicações limitadas devido à sua alta radioatividade.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
      "assets/img/elements/detectoresDeParticulas.webp",
    ],
  },
  102: {
    name: "Nobélio",
    symbol: "No",
    formula: "No",
    description:
      "O nobélio é um elemento sintético radioativo da série dos actinídeos. Foi nomeado em homenagem a Alfred Nobel e é produzido em aceleradores de partículas.",
    images: [
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/nobelio.webp",
    ],
  },
  103: {
    name: "Laurêncio",
    symbol: "Lr",
    formula: "Lr",
    description:
      "O laurêncio é um elemento sintético radioativo, o último da série dos actinídeos. Foi nomeado em homenagem a Ernest Lawrence e é produzido em aceleradores de partículas.",
    images: [
      "assets/img/elements/laurencio.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
      "assets/img/elements/reatorTorio.webp",
    ],
  },
  104: {
    name: "Rutherfórdio",
    symbol: "Rf",
    formula: "Rf",
    description:
      "O rutherfórdio é um elemento sintético radioativo, o primeiro dos elementos transactinídeos. Foi nomeado em homenagem a Ernest Rutherford e é produzido em aceleradores de partículas.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
      "assets/img/elements/reatorTorio.webp",
    ],
  },
  105: {
    name: "Dúbnio",
    symbol: "Db",
    formula: "Db",
    description:
      "O dúbnio é um elemento sintético radioativo, produzido em aceleradores de partículas. Foi nomeado em homenagem ao Instituto Conjunto de Pesquisa Nuclear em Dubna, Rússia.",
    images: [
      "assets/img/elements/revestimentoReatorNuclear.webp",
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
      "assets/img/elements/pesquisaCientifica.webp",
    ],
  },
  106: {
    name: "Seabórgio",
    symbol: "Sg",
    formula: "Sg",
    description:
      "O seabórgio é um elemento sintético radioativo, produzido em aceleradores de partículas. Foi nomeado em homenagem a Glenn T. Seaborg, um dos descobridores dos elementos transurânicos.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
      "assets/img/elements/medicatimentoComIodo.webp",
    ],
  },
  107: {
    name: "Bóhrio",
    symbol: "Bh",
    formula: "Bh",
    description:
      "O bóhrio é um elemento sintético radioativo, produzido em aceleradores de partículas. Foi nomeado em homenagem a Niels Bohr, um dos fundadores da física quântica.",
    images: [
      "assets/img/elements/bohrio.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/detectoresDeParticulas.webp",
    ],
  },
  108: {
    name: "Hássio",
    symbol: "Hs",
    formula: "Hs",
    description:
      "O hássio é um elemento sintético radioativo, produzido em aceleradores de partículas. Foi nomeado em homenagem ao estado alemão de Hesse, onde está localizado o laboratório onde foi descoberto.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/reatorTorio.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
    ],
  },
  109: {
    name: "Meitnério",
    symbol: "Mt",
    formula: "Mt",
    description:
      "O meitnério é um elemento sintético radioativo, produzido em aceleradores de partículas. Foi nomeado em homenagem a Lise Meitner, uma das descobridoras da fissão nuclear.",
    images: [
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
    ],
  },
  110: {
    name: "Darmstádio",
    symbol: "Ds",
    formula: "Ds",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem à cidade de Darmstadt, na Alemanha, onde foi descoberto.",
    images: [
      "assets/img/elements/darmstadio.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
      "assets/img/elements/medicatimentoComIodo.webp",
      "assets/img/elements/pesquisaCientifica.webp",
    ],
  },
  111: {
    name: "Roentgênio",
    symbol: "Rg",
    formula: "Rg",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao físico alemão Wilhelm Röntgen, descobridor dos raios X.",
    images: [
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
    ],
  },
  112: {
    name: "Copernício",
    symbol: "Cn",
    formula: "Cn",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao astrônomo Nicolau Copérnico.",
    images: [
      "assets/img/elements/copernício.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
    ],
  },
  113: {
    name: "Nihônio",
    symbol: "Nh",
    formula: "Nh",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao Japão (Nihon em japonês), onde foi descoberto.",
    images: [
      "assets/img/elements/Semaplicacaocomercial.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/japao.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
    ],
  },
  114: {
    name: "Fleróvio",
    symbol: "Fl",
    formula: "Fl",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao físico nuclear russo Georgy Flyorov.",
    images: [
      "assets/img/elements/flerovio.webp",
      "assets/img/elements/destectorDeRadiacao.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
    ],
  },
  115: {
    name: "Moscóvio",
    symbol: "Mc",
    formula: "Mc",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem à região de Moscou, na Rússia.",
    images: [
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
    ],
  },
  116: {
    name: "Livermório",
    symbol: "Lv",
    formula: "Lv",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao Laboratório Nacional Lawrence Livermore, nos EUA.",
    images: [
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
    ],
  },
  117: {
    name: "Tenessino",
    symbol: "Ts",
    formula: "Ts",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao estado do Tennessee, nos EUA.",
    images: [
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
    ],
  },
  118: {
    name: "Oganessônio",
    symbol: "Og",
    formula: "Og",
    description:
      "Elemento sintético superpesado, produzido em laboratório. Nomeado em homenagem ao físico nuclear russo Yuri Oganessian.",
    images: [
      "assets/img/elements/detectoresDeParticulas.webp",
      "assets/img/elements/Semaplicacaocomercial.webp",
      "assets/img/elements/pesquisaCientifica.webp",
      "assets/img/elements/revestimentoReatorNuclear.webp",
    ],
  },
};

const modal = document.getElementById("elementModal");
const closeButton = document.querySelector(".close-modal");
const elementName = document.querySelector(".element-name");
const elementSymbol = document.querySelector(".element-symbol");
const elementFormula = document.querySelector(".element-formula");
const elementDescription = document.querySelector(".element-description");
const elementImages = document.querySelectorAll(".element-image");

function lazyLoadImages(elementNumber) {
  const element = elementsData[elementNumber];
  if (!element) return;

  const modalImages = document.querySelectorAll(".element-image");
  modalImages.forEach((img, index) => {
    if (element.images[index]) {
      img.src = element.images[index];
      img.classList.remove("lazy");
    }
  });
}

function openModal(elementNumber) {
  const element = elementsData[elementNumber];
  if (!element) return;

  const modal = document.getElementById("elementModal");
  const modalContent = modal.querySelector(".modal-content");

  modal.querySelector(".element-name").textContent = element.name;
  modal.querySelector(".element-symbol").textContent = element.symbol;
  modal.querySelector(".element-formula").textContent = element.formula;
  modal.querySelector(".element-description").textContent = element.description;

  const modalImages = document.querySelectorAll(".element-image");
  modalImages.forEach((img) => {
    img.src = "";
    img.classList.add("lazy");
  });

  modal.classList.add("active");
  modalContent.style.animation = "none";
  modalContent.offsetHeight;
  modalContent.style.animation = "";

  lazyLoadImages(elementNumber);
}

// Função para fechar o modal
function closeModal() {
  modal.classList.remove("active");
}

document.querySelectorAll(".element").forEach((element) => {
  element.addEventListener("click", () => {
    const elementNumber = element.getAttribute("data-number");
    if (elementNumber && !element.classList.contains("extension")) {
      openModal(elementNumber);
    }
  });
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

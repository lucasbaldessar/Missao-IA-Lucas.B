const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");




const perguntas = [
    {
        enunciado: "Quem é o melhor jogador de futebol?",
        alternativas: [
            {
                texto: "Cristiano Ronaldo dos Santos Aveiro",
                afirmacao: " Você é uma pessoa ambiciosa e tem dedicação em tudo o que faz."

            },
            {
                texto: "Lionel Andrés Messi Cuccittini",
                afirmacao: "Você valoriza o talento, trabalho duro e nunca desiste."
            }
        ]
    },
    {
        enunciado: "Quem é o maior ídolo da seleção brasileira?",
        alternativas: [
            {
                texto: "Neymar da Silva Santos Júnior",
                afirmacao: "Você valoriza o impacto e habilidades. "
            },
            {
                texto: "Edson Arantes do Nascimento (Pelé)",
                afirmacao: "Você valoriza a história e conquistas."
            }
        ]
    },
    {
        enunciado: "Quem merece a bola de ouro 2025?",
        alternativas: [
            {
                texto: "Masour Ousmane Dembélé",
                afirmacao: "Você valoriza a criatividade e companheirismo."
            },
            {
                texto: " Raphael Dias Belloli (Raphinha)",
                afirmacao: "Você valoriza o trabalho duro e esforço."
            }
        ]
    },
    {
        enunciado: "Você prefere qual tipo de Centroavante?",
        alternativas: [
            {
                texto: "Karim Mostafa Benzema",
                afirmacao: "Você prefere um atacante que participa da jogada."
            },
            {
                texto: "Robert Lewandowski",
                afirmacao: "Você prefere um centroavante matador."
            }
        ]
    },
    {
        enunciado: "Qual melhor goleiro que já passou pelo futebol?",

        alternativas: [
            {
                texto: "Manuel Peter Neuer",
                afirmacao: "Você prioriza conquistas e como atuou no futebol."
            },
            {
                texto: "Lev Ivanovich Yashin",
                afirmacao: "Você prioriza atuações, qualidade e prêmios individuais."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){

    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement('button');
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();
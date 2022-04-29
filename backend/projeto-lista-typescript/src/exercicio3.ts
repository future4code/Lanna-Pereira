
type informacaoFilme = {
    nome: string,
    Lancamento: string | number,
    genero: string,
    duracao?: string
};
enum GENERO {
	ACAO = "ação",
	DRAMA = "drama",
	COMEDIA = "comédia",
	ROMANCE = "romance",
	TERROR = "terror",
    ANIMACAO = "Animação"
};
const Filme = (nome: string, Lancamento: string, genero: string, duracao?: string): informacaoFilme => {

    switch ( genero ) {
        case "acão":
            GENERO.ACAO;
            break
        case "drama":
            GENERO.DRAMA;
            break
        case "comédia":
            GENERO.COMEDIA;
            break
        case "romance":
            GENERO.ROMANCE;
            break
        case "terror":
            GENERO.TERROR;
            break
        case "Animação":
            GENERO.ANIMACAO
        default:
    }

    return {
        nome: nome,
        Lancamento: Lancamento,
        genero: genero,
        duracao: duracao
    };
};

 console.log(Filme(
     "O Conto Da Princesa Kaguya",
     "julho de 2015",
     GENERO.ANIMACAO,
     "2h 17min"
    )
)
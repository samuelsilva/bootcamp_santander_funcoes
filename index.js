function calculaRankingDeVitorias(quantidadeVitorias){

    let ranking;

    if (quantidadeVitorias <= 10) {
        ranking = 0;
    } else if (quantidadeVitorias >= 11 && quantidadeVitorias <= 20) {
        ranking = 1;
    } else if (quantidadeVitorias >= 21 && quantidadeVitorias <= 50) {
        ranking = 2;
    } else if (quantidadeVitorias >= 51 && quantidadeVitorias <= 80) {
        ranking = 3;
    } else if (quantidadeVitorias >= 81 && quantidadeVitorias <= 90) {
        ranking = 4;
    } else if (quantidadeVitorias >= 91 && quantidadeVitorias <= 100) {
        ranking = 5;
    } else if (quantidadeVitorias >= 101) {
        ranking = 6;
    }
    return ranking;
}


function classificaHeroi(quantidadeVitorias, quantidadeDerrotas){

    const categoria = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

    const saldoVitorias = quantidadeVitorias - quantidadeDerrotas;

    const ranking = calculaRankingDeVitorias(quantidadeVitorias);

    const nivelHeroi = categoria[ranking];

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivelHeroi}`;
}

let resultado = classificaHeroi(75,15);
console.log(resultado);

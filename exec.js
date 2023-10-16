//Requisição api para as cotações

fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,ARS-BRL,RUB-BRL,BTC-BRL,GBP-BRL`).then(response=>{
    return response.json()
}).then(dados =>{

    //Insere o valor da cotação atual em seu devido campo

    document.getElementById('valorDolar').value = dados.USDBRL.bid
    document.getElementById('valorEuro').value = dados.EURBRL.bid
    document.getElementById('valorPeso').value = dados.ARSBRL.bid
    document.getElementById('valorRublo').value = dados.RUBBRL.bid
    document.getElementById('valorBitcoin').value = dados.BTCBRL.bid
    document.getElementById('valorLibra').value = dados.GBPBRL.bid

    //Insere o valor máximo em seu devido campo

    document.getElementById('maximoDolar').value = dados.USDBRL.high
    document.getElementById('maximoEuro').value = dados.EURBRL.high
    document.getElementById('maximoPeso').value = dados.ARSBRL.high
    document.getElementById('maximoRublo').value = dados.RUBBRL.high
    document.getElementById('maximoBitcoin').value = dados.BTCBRL.high
    document.getElementById('maximoLibra').value = dados.GBPBRL.high

    //Insere o valor mínimo em seu devido campo

    document.getElementById('minimoDolar').value = dados.USDBRL.low
    document.getElementById('minimoEuro').value = dados.EURBRL.low
    document.getElementById('minimoPeso').value = dados.ARSBRL.low
    document.getElementById('minimoRublo').value = dados.RUBBRL.low
    document.getElementById('minimoBitcoin').value = dados.BTCBRL.low
    document.getElementById('minimoLibra').value = dados.GBPBRL.low

    //Insere o valor de variação em seu devido campo

    document.getElementById('variacaoDolar').value = dados.USDBRL.varBid
    //Checagem variação positiva/negativa dólar
    if(document.getElementById('variacaoDolar').value != 0 && document.getElementById('variacaoDolar').value > 0){
        document.getElementById('variacaoDolar').className = 'inputCotacoesVariacaoPositiva'
    }
    else if(document.getElementById('variacaoDolar').value != 0 && document.getElementById('variacaoDolar').value < 0){
        document.getElementById('variacaoDolar').className = 'inputCotacoesVariacaoNegativa'
    }

    document.getElementById('variacaoEuro').value = dados.EURBRL.varBid
    if(document.getElementById('variacaoEuro').value != 0 && document.getElementById('variacaoEuro').value > 0){
        document.getElementById('variacaoEuro').className = 'inputCotacoesVariacaoPositiva'
    }
    else if(document.getElementById('variacaoEuro').value != 0 && document.getElementById('variacaoEuro').value < 0){
        document.getElementById('variacaoEuro').className = 'inputCotacoesVariacaoNegativa'
    }
    document.getElementById('variacaoPeso').value = dados.ARSBRL.varBid
    if(document.getElementById('variacaoPeso').value != 0 && document.getElementById('variacaoEuro') > 0){
        document.getElementById('variacaoPeso').className = 'inputCotacoesVariacaoPositiva'
    }
    else if(document.getElementById('variacaoPeso').value != 0 && document.getElementById('variacaoPeso').value < 0){
        document.getElementById('variacaoPeso').className = 'inputCotacoesVariacaoNegativa'
    }
    document.getElementById('variacaoRublo').value = dados.RUBBRL.varBid
    if(document.getElementById('variacaoRublo').value != 0 && document.getElementById('variacaoRublo').value > 0){
        document.getElementById('variacaoRublo').className = 'inputCotacoesVariacaoPositiva'
    }
    else if(document.getElementById('variacaoRublo').value != 0 && document.getElementById('variacaoRublo').value < 0){
        document.getElementById('variacaoRublo').className = 'inputCotacoesVariacaoNegativa'
    }
    document.getElementById('variacaoBitcoin').value = dados.BTCBRL.varBid
    if(document.getElementById('variacaoBitcoin').value != 0 && document.getElementById('variacaoBitcoin').value > 0){
        document.getElementById('variacaoBitcoin').className = 'inputCotacoesVariacaoPositiva'
    }
    else if(document.getElementById('variacaoBitcoin').value != 0 && document.getElementById('variacaoBitcoin').value > 0){
        document.getElementById('variacaoBitcoin').className = 'inputCotacoesVariacaoNegativa'
    }
    document.getElementById('variacaoLibra').value = dados.GBPBRL.varBid
    if(document.getElementById('variacaoLibra').value != 0 && document.getElementById('variacaoLibra').value > 0){
        document.getElementById('variacaoLibra').className = 'inputCotecoesVariacaoPositiva'
    }
    else if(document.getElementById('variacaoLibra').value != 0 && document.getElementById('variacaoLibra').value < 0){
        document.getElementById('variacaoLibra').className = 'inputCotacoesVariacaoNegativa'
    }

    

})
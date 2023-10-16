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
    else{
        document.getElementById('variacaoDolar').className = 'inputCotacoesVariacao'
    }

    document.getElementById('variacaoEuro').value = dados.EURBRL.varBid
    if(document.getElementById('variacaoEuro').value != 0 && document.getElementById('variacaoEuro').value > 0){
        document.getElementById('variacaoEuro').className = 'inputCotacoesVariacaoPositiva'
    }
    else if(document.getElementById('variacaoEuro').value != 0 && document.getElementById('variacaoEuro').value < 0){
        document.getElementById('variacaoEuro').className = 'inputCotacoesVariacaoNegativa'
    }
    else{
        document.getElementById('varicaoEuro').className = 'inputCotacoesVariacao'
    }

    document.getElementById('variacaoPeso').value = dados.ARSBRL.varBid
    if(document.getElementById('variacaoPeso').value != 0 && document.getElementById('variacaoEuro') > 0){
        document.getElementById('variacaoPeso').className = 'inputCotacoesVariacaoPositiva'
    }
    else if(document.getElementById('variacaoPeso').value != 0 && document.getElementById('variacaoPeso').value < 0){
        document.getElementById('variacaoPeso').className = 'inputCotacoesVariacaoNegativa'
    }
    else{
        document.getElementById('variacaoPeso').className = 'inputCotacoesVariacao'
    }

    document.getElementById('variacaoRublo').value = dados.RUBBRL.varBid
    if(document.getElementById('variacaoRublo').value != 0 && document.getElementById('variacaoRublo').value > 0){
        document.getElementById('variacaoRublo').className = 'inputCotacoesVariacaoPositiva'
    }
    else if(document.getElementById('variacaoRublo').value != 0 && document.getElementById('variacaoRublo').value < 0){
        document.getElementById('variacaoRublo').className = 'inputCotacoesVariacaoNegativa'
    }
    else{
        document.getElementById('variacaoRublo').className = 'inputCotacoesVariacao'
    }

    document.getElementById('variacaoBitcoin').value = dados.BTCBRL.varBid
    if(document.getElementById('variacaoBitcoin').value != 0 && document.getElementById('variacaoBitcoin').value > 0){
        document.getElementById('variacaoBitcoin').className = 'inputCotacoesVariacaoPositiva'
    }
    else if(document.getElementById('variacaoBitcoin').value != 0 && document.getElementById('variacaoBitcoin').value > 0){
        document.getElementById('variacaoBitcoin').className = 'inputCotacoesVariacaoNegativa'
    }
    else{
        document.getElementById('variacaoBitcoin').className = 'inputCotacoesVariacao'
    }

    document.getElementById('variacaoLibra').value = dados.GBPBRL.varBid
    if(document.getElementById('variacaoLibra').value != 0 && document.getElementById('variacaoLibra').value > 0){
        document.getElementById('variacaoLibra').className = 'inputCotacoesVariacaoPositiva'
    }
    else if(document.getElementById('variacaoLibra').value != 0 && document.getElementById('variacaoLibra').value < 0){
        document.getElementById('variacaoLibra').className = 'inputCotacoesVariacaoNegativa'
    }
    else{
        document.getElementById('variacaoLibra').className = 'inputCotacoesVariacao'
    }


})

//Função altera entre modo light/dark


function alteraModo(){

    elementoBody = document.body

    inputs = document.querySelectorAll(".inputCotacoes");

    elementoBody.classList.toggle("dark-mode");

    inputs.forEach(input => {
        input.classList.toggle('inputCotacoesDark')
    });

}

// Função para cálculo e conversão


function operacaoConversao(){
    valorInput1 = document.getElementById('input1').value
    valorInput2 = document.getElementById('input2').value
    moedaSelecionada2 = document.getElementById('tipo_moeda2')

    if(valorInput1 != 0 && valorInput1 > 0){
        moedaSelecionada = document.getElementById('tipo_moeda1')

        if(moedaSelecionada.value == 0){
            //Conversão real / real
            if(moedaSelecionada2.value == 0){
                document.getElementById('input2').value = valorInput1
            }
            //Conversão real/dolar
            else if(moedaSelecionada2.value == 1){
                conversaoRealDolar = valorInput1 * document.getElementById('valorDolar').value
                document.getElementById('input2').value = conversaoRealDolar
            }
            //Conversão real/euro
            else if(moedaSelecionada2.value == 2){
                conversaoRealEuro = valorInput1 * document.getElementById('valorEuro').value
                document.getElementById('input2').value = conversaoRealEuro
            }
            //Conversão real/peso
            else if(moedaSelecionada2.value == 3){
                conversaoRealPeso = valorInput1 * document.getElementById('valorPeso').value
                document.getElementById('input2').value = conversaoRealPeso
            }
            //Conversão real/rublo
            else if(moedaSelecionada2.value == 4){
                conversaoRealRublo = valorInput1 * document.getElementById('valorRublo').value
                document.getElementById('input2').value = conversaoRealRublo
            }
            //Conversão real/bitcoin
            else if(moedaSelecionada2.value == 5){
                conversaoRealBit = valorInput1 * document.getElementById('valorBitcoin').value
                document.getElementById('input2').value = conversaoRealBit
            }
            //Conversão real/libra
            else if(moedaSelecionada2.value == 6){
                conversaoRealLibra = valorInput1 * document.getElementById('valorLibra').value
                document.getElementById('input2').value = conversaoRealLibra
            }
        }
        else if(moedaSelecionada.value == 1){

        }
        else if(moedaSelecionada.value == 2){

        }
        else if(moedaSelecionada.value == 3){

        }
        else if(moedaSelecionada.value == 4){

        }
        else if(moedaSelecionada.value == 5){

        }
        else if(moedaSelecionada.value == 6){

        }
    }
    
}

// Função alteração tipo moeda

function alteraMoeda(){

}


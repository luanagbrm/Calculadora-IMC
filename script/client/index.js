import print from './print.js'
import tabelaFoco from './actions.js';

fetch('../../../imc/script/server/return.php')
.then(response => response.text())
.then(data => {

    let dados = JSON.parse(data)
    dados.valor = dados.valor.toFixed(1)
    print(18, dados.altura, dados.valor, dados.percentual)
    tabelaFoco(18)

})
.catch(error => console.error(error));
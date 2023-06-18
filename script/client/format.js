let botaoInicio = document.querySelector('.botao');
let peso = document.querySelector('#input__peso')

botaoInicio.addEventListener("click", () => {
    peso.focus();
});


function validaNumero(valor){
    var m = valor.value;

    var filter_valor = /^[0-9]+\.?[0-9]*$/;
    if(!filter_valor.test(m)){
        valor.value = m.substring(0, m.length-1);
        return;
    }
}


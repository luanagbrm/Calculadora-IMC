export default function tabelaFoco(peso){
    if (peso < 18.5) {
        document.querySelector('.abaixo').style.backgroundcolor = "#39a05d"
    } else if (peso < 25) {
        document.querySelector('.normal').style.backgroundcolor = "#39a05d"
    } else if (peso < 30) {
        document.querySelector('.excesso').style.backgroundcolor = "#39a05d"
    } else if (peso < 35) {
        document.querySelector('.obI').style.backgroundcolor = "#39a05d"
    } else if (peso < 40) {
        document.querySelector('.obII').style.backgroundcolor = "#39a05d"
    } else {
        document.querySelector('.obIII').style.backgroundcolor = "#39a05d"
    }
}


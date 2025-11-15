function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas!</strong>`
    if (hora >= 5 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#ffc76b'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#f99126'
    } else if (hora > 18) {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#4a3552'
    } else {
        //BOA MADRUGADA!
        img.src = 'madrugada.png'
        document.body.style.background = '#001635'
    }
}

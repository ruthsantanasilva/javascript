function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada é ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'meninobebe.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            } else if (idade < 10) {
                //crianca
                img.setAttribute('src', 'meninocrianca.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'meninoadolescente.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            } else if (idade < 35) {
                //jovem
                img.setAttribute('src', 'mocojovem.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            } else {
                //idoso
                img.setAttribute('src', 'homemidoso.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'meninabebe.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            } else if (idade < 10) {
                //crianca
                img.setAttribute('src', 'meninacrianca.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', 'meninaadolescente.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            } else if (idade < 35) {
                //jovem
                img.setAttribute('src', 'mocajovem.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            } else {
                //idoso
                img.setAttribute('src', 'mulheridosa.jpg')
                img.style.width = "250px"
                img.style.borderRadius = "50%"
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}
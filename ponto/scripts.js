const zeroPad = (num, places) => String(num).padStart(places, '0')

const modal = new bootstrap.Modal('#resultModal', {
    keyboard: false
})

function definirDataEHora(inputId){
    const hora = document.getElementById(inputId).value;
    var dataHora = new Date();
    dataHora.setHours(hora.split(':')[0], hora.split(':')[1], 0, 0);
    return dataHora
}

function getHourByMiliseconds(hour){
    return hour / 3600000
}

function calcular(){
    var cargaEmMilisegundos = 0;
    const radioCarga = document.querySelector('input[name="radioCarga"]:checked').value;

    const inicioExpediente = definirDataEHora('inicioExpediente');
    const inicioAlmoco = definirDataEHora('inicioAlmoco');
    const fimAlmoco = definirDataEHora('fimAlmoco');

    if (inicioExpediente < inicioAlmoco && inicioAlmoco < fimAlmoco) {

        if (radioCarga == 'padrao') {
            cargaEmMilisegundos = 28800000
        } else {           
            if (document.getElementById('cargaHoraria').value == "") {
                return
            }
            const cargaHoraria = definirDataEHora('cargaHoraria');
            const dataZerada = new Date().setHours(0,0,0,0)
    
            cargaEmMilisegundos = cargaHoraria - dataZerada
        }


        var manhaEmMilisegundos = inicioAlmoco - inicioExpediente;
        var tardeEmMilisegundos = cargaEmMilisegundos - manhaEmMilisegundos;
        
        fimAlmoco.setMilliseconds(fimAlmoco.getMilliseconds() + tardeEmMilisegundos)

        elFimExpediente = document.getElementById("fimExpediente");

        elFimExpediente.value = `${zeroPad(fimAlmoco.getHours(), 2)}:${zeroPad(fimAlmoco.getMinutes(), 2)}`;

        elFimExpediente.removeAttribute('disabled');
        elFimExpediente.setAttribute('readonly', '');
        elFimExpediente.style.color="#0b0";

    } else {
        alert('Horários inválidos.')
    }
}



window.onload = function() {
    var championNames = ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Amumu', 'Anivia', 'Annie', 'Aphelios', 'Ashe', 'Aurelion Sol', 'Azir', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Caitlyn', 'Camille', 'Cassiopeia', 'Cho’Gath', 'Corki', 'Darius', 'Diana', 'Dr Mundo', 'Draven', 'Ekko', 'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gragas', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Illaoi', 'Irelia', 'Ivern', 'Janna', 'Jarvan IV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'Kai’Sa', 'Kalista', 'Karma', 'Karthus', 'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Kha’Zix', 'Kindred', 'Kled', 'Kog’Maw', 'LeBlanc', 'Lee Sin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai', 'Master Yi', 'Miss Fortune', 'Mordekaiser', 'Morgana', 'Nami', 'Nasus', 'Nautilus', 'Neeko', 'Nidalee', 'Nocturne', 'Nunu e Willump', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'Rek’Sai', 'Rell', 'Renata Glasc', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco', 'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Sona', 'Soraka', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'Vel’Koz', 'Vex', 'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'Xin Zhao', 'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Zac', 'Zed', 'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra']
    var randomChampionName =  championNames[Math.floor(Math.random() * championNames.length)]
    var championPicture =  $('#championPicture')
    var randomX = Math.floor(Math.random() * 84) + 8
    var randomY = Math.floor(Math.random() * 73) + 13

    $("#championName").val(randomChampionName);

    if(randomChampionName.includes(' ')){
        var arrayChampionName = randomChampionName.split(' ')
        arrayChampionName[1] = arrayChampionName[1].toLowerCase()
        randomChampionName = arrayChampionName.join('')
    }
    if(randomChampionName.includes('’')){
        var arrayChampionName = randomChampionName.split('’')
        arrayChampionName[1] = arrayChampionName[1].toLowerCase()
        randomChampionName = arrayChampionName.join('')
    }


    championPicture.attr("src","/images/" + randomChampionName +"_0.jpg");
    championPicture.on('dragstart', function(event) { event.preventDefault(); });
    championPicture.css('clip-path', 'circle(10% at ' + randomX + '% ' + randomY + '%)');

    var emptyOption = $('<option></option>').attr("value", "").text("Selecione...");
        $("#championSelect").append(emptyOption);    

    for (let i = 0; i < championNames.length; i++) {
        var option = $('<option></option>').attr("value", championNames[i]).text(championNames[i]);
        $("#championSelect").append(option);       
    }
};

function validaPalpite(){
    var selectedChampion  = $("#championSelect").val();
    if (selectedChampion == '') {
        const myModal = new bootstrap.Modal('#modalErro', {
            keyboard: true,
            focus: true,
        })
        myModal.show()
    }else{
        var randomChampionName = $("#championName").val();
        if (selectedChampion == randomChampionName) {
            $("#modalTitleFim").text("Parabéns, você acertou")
        }else{
            $("#modalTitleFim").text("Desculpe, você errou")
        }
    
        $("#modalBodyFim").text("O Campeão era: " + randomChampionName + ".");
    
        // var modal = $("#modal")
        const myModal = new bootstrap.Modal('#modalFim', {
            keyboard: true,
            focus: true,
        })
        myModal.show()
    }

}


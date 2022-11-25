let request;
let response;
const URL = "https://json.extendsclass.com/bin/54e2f709c826";
const KEY = "48dd49f9-6c3b-11ed-8b32-0242ac110002";
const groupArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

var mockObject = {
    test : 'sarpes23mocked'
}

async function updateDatabase(entity){
    entityString = JSON.stringify(entity);

    request = await fetch(URL, {
            method: 'PUT',
            headers: { 'Security-key' : KEY },
            body: entityString
        })
        .then(
            result => result.text() // .json(), .blob(), etc.
        ).then(
            result => response = result // Handle here
        );
    
    return response;
}

async function readDatabase(){
    request = await fetch(URL)
        .then(
            result => result.json() // .json(), .blob(), etc.
        ).then(
            result => response = result // Handle here
        );

    return response;
}

async function confirm(){


    let name = document.getElementById("name").value;
    if (name != '') {

        if (localStorage.done == "true") {
            alert('Você já fez sua aposta.')
            return false
        }
        let database = await readDatabase();

        if (database.some( x=> x.name == name)){
            alert('Já existe um palpite registrado para o usuário ' + name + '.')
            return false
        }


        let entity = {
            name : document.getElementById("name").value,
            date :new Date().toString(),
            groups : []
        }
    
        const positions = [];
    
        let tableElements = document.querySelectorAll("tbody");
        console.log(tableElements)
    
        for (let i = 0; i < tableElements.length; i++) {
            let group = {
                groupName : groupArray[i],
                guesses: []
            }
            for (let j = 0; j < tableElements[i].children.length; j++) {
                group.guesses.push(tableElements[i].children[j].children[1].children[1].innerHTML);          
            }    
            entity.groups.push(group)   
        }
        
        database.push(entity)

        localStorage.done = "true";

        console.log( await updateDatabase( database ) )

        

        alert('Palpite salvo com sucesso. Em breve será disponibilizado a página para o acompanhamento dos palpites. Volte outro dia.')

    }else{
        alert('Preencha o seu nome.')
    }
    
  // console.log( await readDatabase() )

}


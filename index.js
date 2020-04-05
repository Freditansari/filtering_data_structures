const axios = require('axios')
let uuid = require('uuid')

let cargos = []
let cargos_lists = []
let destinations = ["CGK", 'MDC', 'DPS', 'PNK', 'MES']


let start = new Date();
for(i = 0; i <= 1000000 ; i++){
    let weight=[];
    for(j=0 ; j <= 10; j++){
        weight.push(Math.random());
    }

    let newCargo = {
    'id': uuid.v4(),
    'owner': "John Doe",
    'destination': destinations[Math.floor(Math.random() * 4) ],
    'weight': weight,
    'isDG': Math.random() >= 0.5
    }
    
    cargos[newCargo.id]=newCargo
    cargos_lists.push(newCargo.id)
}

let end = new Date() - start;
console.log(`took %d`, end);

let mdc_cargos =cargos_lists.filter(cargo_list =>{
    if(cargos[cargo_list].destination ==='MDC'){
        return true
    }
})

mdc_cargos.forEach(mdc_cargo => console.log(cargos[mdc_cargo]))
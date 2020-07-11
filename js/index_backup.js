let disciplina;
let disciplinas = [["História", false, false, false, false, false, null, [2], [0, 1]],
["Geografia", false, false, false, false, false, null, [2], [2, 3]],
["Ciências", false, false, false, false, false, 4],
["Edf", false, false, false, false, false, 3],
["Ensino R.", false, false, false, false, false, null, [0, 1], [0, 1, 2, 3, 4]],
["Inglês", false, false, false, false, false, 0],
["Artes", false, false, false, false, false, 1],
["Português", false, false, false, false, false, 0],
["Português2", false, false, false, false, false, 0],
["Matematica", false, false, false, false, false, 3],
["Matematica2", false, false, false, false, false, 3]];
//, null, [0, 1, 2, 3, 4]
let dias = ['segunda', 'terca', 'quarta', 'quinta', 'sexta']
let turmas = [
['sixA', 2, 3, 3, 3, 1, 2, 2, 2, 3, 2, 2], 
['sixB', 2, 3, 3, 3, 1, 2, 2, 2, 3, 2, 2], 
['sevenA', 3, 2, 3, 3, 1, 2, 2, 3, 2, 2, 2], 
['sevenB', 3, 2, 3, 3, 1, 2, 2, 3, 2, 2, 2], 
['eightA', 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2], 
['nineA', 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2], 
['nineB', 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 2]
];

let aula = ['a', 'b', 'c', 'd', 'e'];

let random;
let backup;
let cont = 0;
let possible = true;
let ativity = true;

let lastAdded = false;

segunda = document.querySelector('tr.segunda');

//segunda_6B = document.querySelector('tr.segunda td.6B ul li');


for(let d = 0; d<5;d++){
    
    for(let m = 0; m < 9; m++){
        for(let r = 1; r < 6; r++){
            disciplinas[m][r] = false;
        }
    }

    for(let i = 0; i < 7; i++){
        cont = 0;
        backup = "";


        for(let j = 0; j < 5; j++){

            ativity = true;
            possible = false;
            item = document.querySelector('tr.'+dias[d]+' td.'+turmas[i][0]+' ul li.'+aula[j]);

            random = Math.floor(Math.random() * 11);
                

            if(random == backup){
                cont += 1;
                
                if(cont == 2){
                    do {
                        random = Math.floor(Math.random() * 11);
                    } while (random == backup);

                    cont = 0;
                    lastAdded = true;
                }
                console.log("cont: "+cont)
            }else{
                cont = 0;
            }


            


            disciplina = disciplinas[random];
            
            if(disciplina[8] != undefined){
                for(let l = 0; l < disciplina[8].length; l++){
                    if(disciplina[8][l] == i){
                        for(let ç = 0; ç < disciplina[7].length; ç++){
                            if(disciplina[7][ç] == d ){
                                ativity = true
                            }else{
                                ativity = false;
                            }
                        }
                    }
                }
            }

            for(let m = 0; m < 9; m++){
                if(disciplinas[m][j + 1] == false && turmas[i][m+1] > 0 && disciplinas[m][6] != d){
                        possible = true;
                        m = 1000;
                    }else{
                        possible = false;
                    }
                }
            


            if(disciplina[j + 1] == false && turmas[i][random+1] > 0 && disciplina[6] != d){
                item.innerHTML = disciplina[0]; 
                disciplina[j + 1] = true;
                lastAdded = false;
                backup = random;
                turmas[i][random+1]-= 1;
                console.log(j + 1)
                console.log(disciplina[0])

            }else{
                if(possible == true){
                    j--;
                }
            } 

            if(possible == false){
                item.innerHTML = "X"; 
            }

            
        }
    }
}

console.log(turmas)






//Aula 28/03/2022
//EXERCICIO 1: CORRIGIR ERROS DE DIGITAÇÃO

const Listadepecas = ['pecas de teste','AB','peca B']
console.log('quantidade de caracteres')
if(Listadepecas.length <=10){
    console.log('as pecas podem ser cadastradadas');
}
console.log('quantidade de caracteres')
for(let index = 0; index < Listadepecas.length; index++){
    const pecaatual = Listadepecas[index];
    if(pecaatual.length < 3){
        console.log(pecaatual +': a peça atual possui nome inferior a 3 caracteres e não podem ser cadastradadas')
    } else 
    console.log(pecaatual +' : a peça pode ser cadastrada.')
}
console.log('peso da peça')
const pesodapecaemgramas = 50
if(pesodapecaemgramas >=100){

    console.log('peso suficiente')
} else {
    console.log('valor insuficiente')
}
console.log('dia');
 

//Exercicios 2
//1*************************************************************
console.log(' ')
for (let numero = 1; numero <= 10; numero++) {
    console.log(numero);
}  
 
//2*************************************************************
console.log(' ')
for (let tab = 8; tab <= 80; tab=tab+8) {
    console.log(tab);
}
//3*************************************************************
console.log(' ')
let nome = 'heloisa';
let sobrenome = 'Nasciemento';
console.log(nome +' '+ sobrenome)
//4*************************************************************
console.log(' ')
cal1 = 15*2+10*9
console.log(cal1)
cal2 = (10+10+14)/2
console.log(cal2)
cal3 = 100/2*4/5
console.log(cal3)
//*************************************************************
console.log(' ')


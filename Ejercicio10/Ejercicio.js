/* 
10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

const colors = ["azul", "amarillo", "rojo", "verde", "rosa"]

const color = prompt('Introduce un color').toLowerCase()

if(colors.indexOf(color) !== -1){
    confirm('Tu color se encuentra en el array');
}else{
    confirm('Tu color no está definido');
}
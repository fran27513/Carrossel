//Criando da variavel contador 
let count = 1;

//Pegando o input do html pelo id e verificando se o primeiro input 
//ou seja ,se a primeira imagem esta "checked" se ela estiver na tela 
//o checked é true
document.getElementById("radio1").checked = true;

//chamando a funçao nextImage para passar a imagem e definido o
//intervalo de passar a imagem
setInterval(function(){
    nextImage();
},2000);//2000 tempo de passa imagem 

//funçao para passar a imagem, se count for maior que 4 o count volta
//pro 1
function nextImage(){
    count ++;
    if(count > 4){
        count = 1;
    }
    //Pegando o input do html pelo id radio e verificando se a imagem
    //que está no contador está "checked", se for a vez dela no 
    //carrosel será true
    document.getElementById("radio" + count).checked = true;

}

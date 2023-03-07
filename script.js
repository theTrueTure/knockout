
let chosen_KO = 0;
let currentScore = 0;

//instruktioner
document.getElementById('instr_btn').addEventListener('click', () => {
    let inst = document.getElementById('instructions');
    if(inst.innerHTML === ''){
        inst.innerHTML = 'Knock-out is a dice game were you choose a number to ' + 
        'be your knock-out number, you roll two dice and if you do not get your '+
        'KO number, your score is the two rolled dice.';
    }
    else{
        inst.innerHTML = '';
    }
});

//välj KO-siffra
let knappar = document.getElementsByClassName('KO_nr');

    //getElementByClassName get HTMLcollection,
    //därför behövs den göras om till array
    let knapps = Array.from(knappar);
    knapps.forEach(knapp =>{
        knapp.addEventListener('click', () => {
            //tar bort alla tidigare val
            knapps.forEach(knapp => {
                knapp.classList.remove('chosen');
            });

            //gör om str till int då värdet från en array är str
            knapp.classList.toggle('chosen');
            pre_KO = knapp.innerText
            chosen_KO = parseInt(pre_KO);
        });
    });
    
//rulla tärning
document.getElementById('rollButton').addEventListener('click', GameStart);
function GameStart(){

    //för att säkra att spelaren valt en siffra, annars blir KO-siffran noll, 
    //vilket är fusk!
    if(chosen_KO === 0){
        alert('välj en siffra!');
        return
    }

    //visar vad spelaren har fått för tärningsslag
    const randomDice1 = GetRandomNumbers1();
    let imageTag1 = document.getElementById('diceImage1');
    imageTag1.src = 'img/dice'+randomDice1+'.png';
    const randomDice2 = GetRandomNumbers2();
    let imageTag2 = document.getElementById('diceImage2');
    imageTag2.src = 'img/dice'+randomDice2+'.png';
    
    //räknar ihop slagen
    score = randomDice1 + randomDice2;

    //KO?
    if(score === chosen_KO){
        imageTag1.src = 'img/gameOver1.png';
        imageTag2.src = 'img/gameOver2.png';
        currentScore = 0;
    }

    //räknar ihop poängen och visar de längst ner om spelaren
    //inte blivit KO'd
    else {
        currentScore = score + currentScore;
        let highScore = document.getElementById('scoreNumber');
        highScore.innerHTML = currentScore
    }
}

//matten bakom tärningsslagen
function GetRandomNumbers1(){
    return Math.ceil(Math.random()*6);
}
function GetRandomNumbers2(){
    return Math.ceil(Math.random()*6);
}
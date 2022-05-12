const listName = ['rock__reg__oponent', 'scissors__reg__oponent', 'paper__reg__oponent'];
const listUserName = ['paper__reg__user', 'scissors__reg__user', 'rock__reg__user']
let score = 0;

/* Regular game script */
function getPostition(l){
    oponentPick(l)
    document.querySelector(".content__game__regular").classList.add("start-position");
    document.querySelector(`.${l}`).style.zIndex="5";
    setTimeout(function() {
        document.querySelector(".regular").style.background="none";
        document.querySelector(".content__game").classList.add("space-between");
        document.querySelector(".user-pick").style.opacity="1";
        document.querySelector(".oponent-pick").style.opacity = "1";
        document.querySelector(".content__result").style.display = "flex";
    }, 1900)
}

function oponentPick(h){
    let random = Math.floor(Math.random()*3);
    let oponentBlock = listName[random];
    document.querySelector(`.${oponentBlock}`).style.zIndex = '5';
    setTimeout(function() {
        resultBlock(h, oponentBlock);
    }, 2500)
    
}

function resultBlock(k, l){
    let userPick = k.split('__');
    let oponentPick = l.split('__');
    console.log([userPick[0], oponentPick[0]]);
    if(userPick[0] === oponentPick[0]){
        document.querySelector(".draw").style.display = "flex";
    }else if(userPick[0] === 'paper'){
        if(oponentPick[0] === 'scissors'){
            document.querySelector(".lose").style.display = "flex";
            scoreBlock('-1');
        }else{
            document.querySelector(".win").style.display = "flex";
            scoreBlock('+1');
        }
    }else if(userPick[0] === 'scissors'){
        if(oponentPick[0] === "rock"){
            document.querySelector(".lose").style.display = "flex";
            scoreBlock('-1');
        }else{
            document.querySelector(".win").style.display = "flex";
            scoreBlock('+1');
        }
    }else if(userPick[0] === 'rock'){
        if(oponentPick[0] === "paper"){
            document.querySelector(".lose").style.display = "flex";
            scoreBlock('-1');
        }else{
            document.querySelector(".win").style.display = "flex";
            scoreBlock('+1');
        }
    }
    document.querySelector(".content__result").style.opacity = "1";
    document.querySelector(".content__result").style.zIndex = "1";
}

function scoreBlock(o){
    if(o === '-1'){
        score--;
    }else{
        score++;
    }
    setTimeout(function(){
        document.querySelector(".score").innerHTML = `<p class="score">${score}</p>`;
    }, 800)
}

function showRulesBlock(){
    document.querySelector(".footer__rules__window").classList.add("showRules");
}

function closeRelesBlock(){
    document.querySelector(".footer__rules__window").classList.remove("showRules");
}

function playAgain(){
    document.querySelector(".content__result").style.opacity = "0";
    document.querySelector(".content__result").style.zIndex = "-2";
    setTimeout(function(){
        document.querySelector(".content__result").style.display = "none";
        document.querySelector(".win").style.display = "none";
        document.querySelector(".lose").style.display = "none";
        document.querySelector(".draw").style.display = "none";
        setTimeout(function(){
            document.querySelector(".user-pick").style.opacity="0";
            document.querySelector(".oponent-pick").style.opacity = "0";
            document.querySelector(".user-pick-bns").style.opacity="0";
            document.querySelector(".oponent-pick-bns").style.opacity = "0";
            document.querySelector(".content__game").classList.remove("space-between");
            setTimeout(function() {
                document.querySelector(".regular").style.background = "url('./images/bg-triangle.svg')";
                document.querySelector(".regular").style.backgroundRepeat = 'no-repeat';
                document.querySelector(".regular").style.backgroundPosition = 'center';
                document.querySelector('.content__game__bonus').style.background = 'url("./images/bg-pentagon.svg")';
                document.querySelector(".content__game__bonus").style.backgroundSize = '230px';
                document.querySelector(".content__game__bonus").style.backgroundRepeat = 'no-repeat';
                document.querySelector(".content__game__bonus").style.backgroundPosition = 'center';
                document.querySelector('.content__game__bonus').style.marginTop = " 6rem";
                document.querySelector('.content__game__bonus').style.marginBottom = "6rem";
                setTimeout(function() {
                    document.querySelector(".content__game__regular").classList.remove("start-position");
                    document.querySelector('.content__game__bonus').classList.remove("totheposition");
                    setTimeout(function() {
                        document.querySelector(".content__game__bonus").classList.remove("bonus-start");
                    }, 650)
                    listName.forEach((block) => {
                        document.querySelector(`.${block}`).style.zIndex = "0";
                    })
                    listUserName.forEach(name => {
                        document.querySelector(`.${name}`).style.zIndex = "1";
                    })
                    listBonusName.forEach(o => {
                        document.querySelector(`.${o}`).style.zIndex = '0';
                    })
                    listBonusUser.forEach(l => {
                        document.querySelector(`.${l}`).style.zIndex = '1';
                    })
                    document.querySelector(".whale-section").classList.remove("bonus-level");
                    if(score % 10 === 0 && score > 0){
                        bonusLevel()
                    }
                }, 300)
                
            }, 300) 
        }, 300)
    }, 650)

}

/* Bonus game Script */
const listBonusName = ['scissors__bns__oponent', , 'paper__bns__oponent', 'rock__bns__oponent', 'lizard__bns__oponent', 'spock__bns__oponent'];
const listBonusUser = ['scissors__bns__user', , 'paper__bns__user', 'rock__bns__user', 'lizard__bns__user', 'spock__bns__user'];
function bonusLevel(){
    document.querySelector(".whale-section").classList.add("bonus-level");
}

function bonusPick(o){
    oponentBonusPick(o);
    document.querySelector(".content__game__bonus").classList.add("bonus-start");
    document.querySelector(`.${o}`).style.zIndex = 2;
    setTimeout(function(){
        document.querySelector('.content__game__bonus').classList.add("totheposition");
        document.querySelector(".content__result").style.display = "flex";
    }, 650)
    setTimeout(function(){
        document.querySelector(".content__game").classList.add("space-between");
        document.querySelector('.content__game__bonus').style.background = "none";
        document.querySelector('.content__game__bonus').style.marginTop = " 2rem";
        document.querySelector('.content__game__bonus').style.marginBottom = "8rem";
        document.querySelector(".user-pick-bns").style.opacity="1";
        document.querySelector(".oponent-pick-bns").style.opacity = "1";
    }, 1900)
    
}

function oponentBonusPick(g){
    let randomNumber = Math.floor(Math.random()*5);
    let oponentBonus = listBonusName[randomNumber];
    document.querySelector(`.${oponentBonus}`).style.zIndex = '5';
    setTimeout(function(){
        resultBounsGame(g, oponentBonus);
    }, 2500)
}

function resultBounsGame(k, j){
    let userBonusPick = k.split('__');
    let oponentBonusPick = j.split('__');
    console.log([userBonusPick[0], oponentBonusPick[0]])
    if(userBonusPick[0] === oponentBonusPick[0]){
        document.querySelector(".draw").style.display = "flex";
    }else if(userBonusPick[0] === 'scissors'){
        if(oponentBonusPick[0] === 'paper' || oponentBonusPick[0] === 'lizard'){
            document.querySelector(".win").style.display = "flex";
            scoreBlock('+1');
        }else {
            document.querySelector(".lose").style.display = "flex";
            scoreBlock('-1');
        }
    }else if(userBonusPick[0] === 'paper'){
        if(oponentBonusPick[0] === 'rock' || oponentBonusPick[0] === 'spock'){
            document.querySelector(".win").style.display = "flex";
            scoreBlock('+1');
        }else {
            document.querySelector(".lose").style.display = "flex";
            scoreBlock('-1');
        }
    }else if(userBonusPick[0] === "rock"){
        if(oponentBonusPick[0] === 'scissors' || oponentBonusPick[0] === 'lizard'){
            document.querySelector(".win").style.display = "flex";
            scoreBlock('+1');
        }else {
            document.querySelector(".lose").style.display = "flex";
            scoreBlock('-1');
        }
    }else if(userBonusPick[0] === 'lizard'){
        if(oponentBonusPick[0] === 'paper' || oponentBonusPick[0] === 'spock'){
            document.querySelector(".win").style.display = "flex";
            scoreBlock('+1');
        }else {
            document.querySelector(".lose").style.display = "flex";
            scoreBlock('-1');
        }
    }else if(userBonusPick[0] === 'spock'){
        if(oponentBonusPick[0] === 'scissors' || oponentBonusPick[0] === 'rock'){
            document.querySelector(".win").style.display = "flex";
            scoreBlock('+1');
        }else {
            document.querySelector(".lose").style.display = "flex";
            scoreBlock('-1');
        }
    }
    console.log('s')
    document.querySelector(".content__result").style.opacity = "1";
    document.querySelector(".content__result").style.zIndex = "1";
}
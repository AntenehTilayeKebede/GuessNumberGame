'use strict'
const SecretNumber=Math.trunc(Math.random() * 20)+1;
document.querySelector('.number').textContent=SecretNumber;
let score=20;
document.querySelector('.btn-check').addEventListener('click',function(){
  const guess=Number(document.querySelector('.guess').value);
  if(!guess){
    document.querySelector('.message').textContent='No Number!';
  }
  else if(guess===SecretNumber){
    document.querySelector('.message').textContent='Correct Number!';
    document.querySelector(body).style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
  }
  else if(guess > SecretNumber){
    if(score>0){
      document.querySelector('.message').textContent='Too high!';
    score-- ; 
    document.querySelector('.score').textContent=score; 
    }
    else{
      document.querySelector('.message').textContent='You lost the Game';
    }
  }
  else if(guess < SecretNumber){
    document.querySelector('.message').textContent='Too low!';
    score--;
    document.querySelector('.score').textContent=score;
  }

}); 
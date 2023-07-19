"use strict";

const buttonCount = 6;
const timeout = 10000; 
const allButtons = []
const evenButtons = [];
const oddButtons = [];

for (let i = 1; i <= buttonCount; i++) {
    allButtons.push(i);
  }
for (let i = 1; i <= buttonCount; i++) {
  if (i % 2 === 0) {
    evenButtons.push(i);
  } else {
    oddButtons.push(i);
  }
}

for (let i = 1; i <= buttonCount; i++) {
  const btnEl = document.createElement("button");
  btnEl.classList.add("shadow");

  function toggleShadow() {
    if (btnEl.classList.contains("shadow")) {
      
    } else {
      btnEl.classList.add("shadow");
    }
  }

  btnEl.addEventListener("click", toggleShadow);
  btnEl.classList.remove("shadow");

  btnEl.textContent = i;
  document.body.append(btnEl);
}

const buttonElements = [...document.querySelectorAll("button")];

function chosenAllButtons() {
    const allbuttonPromises = buttonElements
   .map((btnEl) => new Promise ((resolve) => {
      btnEl.onclick = () => resolve(+btnEl.textContent) 
  }))
  
  Promise.all(allbuttonPromises).then(chosenValues => {
      if(chosenValues.length === evenButtons.length) {
          
          alert('You chose all  buttons')
      }})};
  

function chosenEvenButtons() {
    const evenbuttonPromises = buttonElements
    .filter((btnEl) => +btnEl.textContent % 2  === 0).map((btnEl) => new Promise ((resolve) => {
      btnEl.onclick = () => resolve(+btnEl.textContent) 
  }))
  
  Promise.all(evenbuttonPromises).then(chosenValues => {
      if(chosenValues.length === evenButtons.length) {
          
          alert('You chose all even buttons')
      }})};

function chosenOddButtons() {
  const oddbuttonPromises = buttonElements
  .filter((btnEl) => +btnEl.textContent % 2  !== 0).map((btnEl) => new Promise ((resolve) => {
    btnEl.onclick = () => resolve(+btnEl.textContent) 
}))

Promise.all(oddbuttonPromises).then(chosenValues => {
    if(chosenValues.length === oddButtons.length) {
        
        alert('You chose all odd buttons')
    }})};

  
  
     
      
        
                
            
                
        
        

          
         
        
chosenAllButtons();
chosenOddButtons();
chosenEvenButtons();

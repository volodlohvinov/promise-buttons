"use strict";

const buttonCount = 6;
const timeout = 10000; 
const evenButtons = [];
const oddButtons = [];
let allEvenChosen = false;
let allOddChosen = false;

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
    return new Promise(() => {
        if (allEvenChosen && allOddChosen) {
            alert("You chose all buttons!");
            
}})
}

function chosenEvenButtons() {
  const evenButtonPromises = buttonElements
    .filter((btnEl) => evenButtons.includes(+btnEl.textContent))
    .map(
      (btnEl) =>
        new Promise(() => {
          btnEl.onclick = () => {
            if (evenButtons.includes(+btnEl.textContent)) {
            const index = evenButtons.indexOf(+btnEl.textContent);
            evenButtons.splice(index, 1);

            if (evenButtons.length === 0) {
              allEvenChosen = true;
              alert("You chose all even buttons");
              chosenAllButtons();
            }
        }
           
          };
        })
    );

  
}

function chosenOddButtons() {
  const oddbuttonPromises = buttonElements.map(
    (btnEl) =>
      new Promise(() => {
        btnEl.onclick = () => {
          if (oddButtons.includes(+btnEl.textContent)) {
            const index = oddButtons.indexOf(+btnEl.textContent);
            oddButtons.splice(index, 1);

            if (oddButtons.length === 0) {
              allOddChosen = true;
              alert("You chose all odd buttons");
              chosenAllButtons();
            }
          }
         
        };
      })
  );

}

chosenOddButtons();
chosenEvenButtons();

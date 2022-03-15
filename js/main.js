let addBtn = document.getElementById("leftBtn");
let elComponents = document.getElementById("leftmodalID");
const elOutput = document.getElementById("output");
const elOnenum = document.getElementById("oneNum");
const elTwonum = document.getElementById("twoNum");
const elThreenum = document.getElementById("threeNum");
const elFouthnum = document.getElementById("fouthNum");
const elFivenum = document.getElementById("fiveNum");
const elSixnum = document.getElementById("sixNum");
const elSevennum = document.getElementById("sevenNum");
const elEightnum = document.getElementById("eightNum");
const elNinenum = document.getElementById("nineNum");
const elZeronum = document.getElementById("zeroNum");
const elResult = document.getElementById("result");
const elDeletAll = document.getElementById("deletAll");
const elDeletOne = document.getElementById("deletOne");
const elDot = document.getElementById("dot");
const elDevide = document.getElementById("devide");
const elMultiply= document.getElementById("multiply");
const elMinus= document.getElementById("minus");
const elPlus = document.getElementById("plus");
const elSin = document.getElementById("sin");
const elCos = document.getElementById("cos");
const elTan = document.getElementById("tan");
const elFactor = document.getElementById("factor");
const elPi = document.getElementById("pi");
const elLog = document.getElementById("log");
const elBracketOpen = document.getElementById("bracketOpen");
const elBracketClose = document.getElementById("bracketClose");
const elCheke = document.getElementById("chek");
const elEnum = document.getElementById("eNum");
const elpercent = document.getElementById("percent");
const elPower = document.getElementById("power");


addBtn.addEventListener("click", ()=>{
  elComponents.classList.toggle("display");
  addBtn.classList.toggle("move-button")
})


elOnenum.addEventListener("click", newNum);
elTwonum.addEventListener("click", newNum);
elThreenum.addEventListener("click", newNum);
elFouthnum.addEventListener("click", newNum);
elFivenum.addEventListener("click", newNum);
elSixnum.addEventListener("click", newNum);
elSevennum.addEventListener("click", newNum);
elEightnum.addEventListener("click", newNum);
elNinenum.addEventListener("click", newNum);
elZeronum.addEventListener("click", newNum);
elPlus.addEventListener("click", newNum);
elMinus.addEventListener("click", newNum);
elMultiply.addEventListener("click", newNum);
elBracketOpen.addEventListener("click", newNum);
elBracketClose.addEventListener("click", newNum);
elDot.addEventListener("click", newNum);
elEnum.addEventListener("click", newNum);
elDevide.addEventListener('click', newNum);
elPi.addEventListener('click', newNum);


function newNum(e) {
  elOutput.textContent += e.target.value 
}
elResult.addEventListener("click", addResult);

function addResult() {
  let output=(eval(elOutput.innerHTML));
  elOutput.textContent = output;
}

elDeletAll.addEventListener("click", () => {
  elOutput.textContent = "";
});

elDeletOne.addEventListener("click", () => {
  let num = elOutput.innerHTML.split('').pop()
  if (num == '-' || num == '+' || num == '/' || num == '*') {
    elOutput.innerHTML = "";
  }
  else if (elOutput.innerHTML < 1) {
    elOutput.innerHTML = "";
  }
  else if (elOutput.innerHTML > 1) {
    elOutput.innerHTML = (elOutput.innerHTML - num) / 10;
  }
})



elCheke.addEventListener("click" , () => {
  elOutput.innerHTML = Math.sqrt(elOutput.innerHTML);
});
elPi.addEventListener("click" , () => {
  elOutput.innerHTML = Math.pow(elOutput.innerHTML,2);
});
elSin.addEventListener("click", () => {
  elOutput.innerHTML = Math.sin(elOutput.innerHTML);
})
elCos.addEventListener("click", () => {
  elOutput.innerHTML = Math.cos(elOutput.innerHTML);
})
elLog.addEventListener("click", () => {
  elOutput.innerHTML = Math.log(elOutput.innerHTML);
})
elTan.addEventListener("click", () => {
  elOutput.innerHTML = Math.tan(elOutput.innerHTML);
})

elFactor.addEventListener("click",()=>{
  let temp = 1;
  for(let i = 1; i <= elOutput.innerHTML; i++){
    temp *= i;
  }
  elOutput.innerHTML= temp;
} )
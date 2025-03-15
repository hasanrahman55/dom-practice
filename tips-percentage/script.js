const billAmount = document.getElementById("billAmount");
const tipPercentage = document.getElementById("tipPercentage");
const numberOfPeople = document.getElementById("numberOfPeople");
const totalTip = document.getElementById("totalTip");
const tipPerPerson = document.getElementById("tipPerPerson");
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {
  const billValue = parseFloat(billAmount.value) || 0;
  const tipValue = parseFloat(tipPercentage.value) || 0;
  const numberOfPeopleValue = parseFloat(numberOfPeople.value) || 1;

  const totalTipAmount = (billValue * tipValue) / 100;
  const tipEach = totalTipAmount / numberOfPeopleValue;

  totalTip.innerText = totalTipAmount;
  tipPerPerson.innerText = tipEach;
});

document.addEventListener("DOMContentLoaded", function () {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultElement = document.getElementById("result");
  const buttons = document.querySelectorAll("button[data-operator]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const operator = button.dataset.operator;
      calculate(operator);
    });
  });

  function calculate(operator) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
      resultElement.textContent = "Please enter valid numbers.";
      resultElement.classList.add("text-red-500");
      return;
    } else {
      resultElement.classList.remove("text-red-500");
    }

    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
        break;
      default:
        result = "Invalid Operator";
    }

    resultElement.textContent = `Result: ${result}`;
  }
});

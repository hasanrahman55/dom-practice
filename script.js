document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Parse input values
  const weight = parseFloat(document.querySelector("input[name=weight]").value);
  const height = parseFloat(document.getElementById("height").value);

  // Validate inputs
  if (isNaN(weight) || isNaN(height) || height <= 0) {
    document.getElementById("result").innerText =
      "Please enter valid numeric values.";
    return;
  }

  // Calculate BMI
  const bmi = weight / (height * height);
  let comment = "";

  // Determine BMI category
  if (bmi < 18.5) {
    comment = "Underweight";
  } else if (bmi < 25) {
    comment = "Normal";
  } else if (bmi < 30) {
    comment = "Overweight";
  } else {
    comment = "Obese";
  }

  // Display result
  document.getElementById(
    "result"
  ).innerHTML = `Your Body Mass Index is <strong>${bmi.toFixed(
    2
  )}</strong>.<br>This is considered <strong>${comment}</strong>.`;
});

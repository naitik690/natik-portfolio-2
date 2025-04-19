function bmi() {
  let h = document.getElementById("h").value;
  let w = document.getElementById("w").value;
  let result = w / (h * h);
  document.getElementById("r").innerText = "Your BMI is: " + result.toFixed(2);
}
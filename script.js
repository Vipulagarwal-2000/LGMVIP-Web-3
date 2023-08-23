let result = "";

function appendToResult(value) {
  result += value;
  document.getElementById("result").value = result;
}

function calculate() {
  try {
    result = eval(result);
    document.getElementById("result").value = result;
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function clearResult() {
  result = "";
  document.getElementById("result").value = "";
}

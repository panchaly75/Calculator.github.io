console.log("hello sir");

function add() {
  let a = Number(document.getElementById("first").value);
  let b = Number(document.getElementById("second").value);
  let c = a + b;
  document.getElementById("ans").innerHTML = `Answer is ${c}`;
}

function minus() {
  let a = Number(document.getElementById("first").value);
  let b = Number(document.getElementById("second").value);
  let c = a - b;
  document.getElementById("ans").innerHTML = `Answer is ${c}`;
}

function multiply() {
  let a = Number(document.getElementById("first").value);
  let b = Number(document.getElementById("second").value);
  let c = a * b;
  document.getElementById("ans").innerHTML = `Answer is ${c}`;
}

function divide() {
  let a = Number(document.getElementById("first").value);
  let b = Number(document.getElementById("second").value);
  let c = a / b;
  document.getElementById("ans").innerHTML = `Answer is ${c}`;
}

function expo() {
  let a = Number(document.getElementById("first").value);
  let b = Number(document.getElementById("second").value);
  let c = a ** b;
  document.getElementById("ans").innerHTML = `Answer is ${c}`;
}

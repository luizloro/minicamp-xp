function start() {
  var buttomCalculateImc = document.querySelector('#button-calculate-imc');
  buttomCalculateImc.addEventListener('click', handleButtonClick);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  console.log('Cliquei')
}

start();

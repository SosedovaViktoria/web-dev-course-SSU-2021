console.log("8.1. Генератор паролей");
console.log("");

function randomLength(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

  function elementRand(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
function generatedPassword() {
    let array = [];
    let number = "0123456789";
    let upperLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerLetter = "abcdefghiklmnopqrstuvwxyz";
    const maxLength = 20;
    const minLength = 6;
   
    let lengthPassword = randomLength(minLength,maxLength);
    let password = elementRand(number) + elementRand(upperLetter) + elementRand(lowerLetter);
  
    array = array.concat(number.split(""))
                .concat(upperLetter.split(""))
                .concat(lowerLetter.split(""))
  
    while (password.length < lengthPassword) {
      password += array[randomLength(0, array.length - 1)];
    }
    return password;
  }

  console.log("Сгенерированный пароль:", generatedPassword())
console.log("8.2. Игра на выбывание");
console.log("");
function game(num, number) {

    let listPlayer = new Array(num).fill().map((e, i) => i + 1)

    for (let i = 1; listPlayer.length > 1; i++){
        let actual = listPlayer.shift();
        !(i % number == 0) 
        ? listPlayer.push(actual)
        : i = 0;
    }
    return listPlayer.shift();
}
console.log("Игра:" ,game(7,3));
console.log("Игра:", game(11,19));
console.log("Игра:", game(1,300));
console.log("Игра:", game(14,2));
console.log("Игра:", game(100,1));
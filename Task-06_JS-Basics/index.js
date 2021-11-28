console.log("6.1. Плоский массив:");

const arr1 = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
const arr2 = [];
const arr3 = [[], []];
const arr4 = [[], [1]];
const arr5 = [[1, 3, 5], [-100], [2, 4, 6]];
function FlatArrIn(arr){
   return arr.flat(Infinity).sort(( a, b ) =>  a - b);
}
console.log(FlatArrIn(arr1));
console.log(FlatArrIn(arr2));
console.log(FlatArrIn(arr3));
console.log(FlatArrIn(arr4));
console.log(FlatArrIn(arr5));

console.log("6.2. Бинарное слово:");

let str1 = 'man';
let str2 = "AB";
let str3 = "wecking";
let str4 = "Ruby";
let str5 = "Yosemite";

function BinaryWord(str){
   let array = [];
   for(let i = 0; i < str.length; i++){
      array.push("0" + str[i].charCodeAt(0).toString(2))
   }
   return array;
}
console.log(BinaryWord(str1));
console.log(BinaryWord(str2));
console.log(BinaryWord(str3));
console.log(BinaryWord(str4));
console.log(BinaryWord(str5));


console.log();
console.log("6.3. Подсчёт гласных:");

let str_1 = 'abracadabra';
let str_2 = "ABRACADABRA";
let str_3 = "o a kak ushakov lil vo kashu kakao";
let str_4 = "my pyx";

function Numb_Vls(str){
   for(let i = 0; i < str.length; i++){
     return str.split("").filter(c => "aeiouy".includes(c.toLowerCase())).length;
   }
}
console.log(str_1,":", Numb_Vls(str_1));
console.log(str_2,":", Numb_Vls(str_2));
console.log(str_3,":", Numb_Vls(str_3));
console.log(str_4,":", Numb_Vls(str_4));

console.log();
console.log("6.4. Форматирование строки:");

function formatString(str){
   var result = "";
   str = str.toLowerCase()
   for (var i = 0; i < str.length; i++) {
         let currentChar = str.charAt(i);
         result += currentChar.toUpperCase() + currentChar.toLowerCase().repeat(i);
         if (i < str.length -1) {
             result += "-";
         }
     }
   return result;
}
console.log("Строка: abcd: ", formatString("abcd"));
console.log("Строка: RqaEzty: ", formatString("RqaEzty"));
console.log("Строка: cwAt: ",formatString("cwAt") );
console.log();

console.log("6.5. Изограммы:");
function izogram(text){
   set = new Set(text.toLowerCase()).size === text.length
   return set;
}

console.log("Строка: Dermatoglyphics: ",izogram('Dermatoglyphics'));
console.log("Строка: aba: ",izogram('aba'));
console.log("Строка: moOse: ",izogram('moOse'));
console.log("Строка:  ",izogram(''));
console.log("7.1. Номер телефона")
function create_number(input) {
	if (!Array.isArray(input) || input.length != 10)
		return "Invalid input"
	for (var number of input) {
		if(!Number.isInteger(number) || number < 0 || number > 9)
			return "Invalid input"
	}
	var bildingNumber = input.join('')
	let BuildNumb =  "+7 (" + bildingNumber.slice(0,3) + ")" + bildingNumber.slice(3,6) + "-"
     + bildingNumber.slice(6,8) + "-" + bildingNumber.slice(8,10)
     return BuildNumb
}
console.log("Массив: [9, 0, 0, 1, 1, 1, 2, 2, 3, 3] :  ", create_number([9, 0, 0, 1, 1, 1, 2, 2, 3, 3]))
console.log("Массив: [9, 2, 7, 5, 5, 5, 6, 6, 9, 0] :  ", create_number([9, 2, 7, 5, 5, 5, 6, 6, 9, 0]))
console.log("Массив: [1, 2, 3, 4, 5, 6, 7, 8, 9, -11] :  ", create_number([1, 2, 3, 4, 5, 6, 7, 8, 9, -11]))
console.log("Массив: [] :  ", create_number([]))
console.log("Массив: [aw93fha=] :  ", create_number("aw93fha="))
console.log()


console.log("7.2. Форматирование строки в таблицу")
function formatStr_tabl(a, b, texts) {
    if (typeof a != "number" || typeof b != "number" || !Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
        return 'Invalid! Arguments > 0 and integer numbers!';
    }

    let table = ""

    for (let i = 0; i < a; i++) {
        table += horizontalBorder(b)
        let text = texts.substring(i * b, i * b + 4)
        table += middlePartOfRow(text, b)
    }
    return table += horizontalBorder(b)
   
}

function middleSection(char) {
    return "| " + char + " "
}

function horizontalBorder(cols) {
    let horizontalCellBorder = "+---"
    return horizontalCellBorder.repeat(cols) + "+\n"
}

function middlePartOfRow(text, cols) {
    let middle = ""
    let textLength = text.length
    if (textLength < cols) {
        for (let i = 0; i < textLength; i++) {
            middle += middleSection(text.charAt(i))
        }
        for (let i = 0; i < cols - textLength; i++) {
            middle += middleSection(" ")
        }
    } else {
        for (let i = 0; i < cols; i++) {
            middle += middleSection(text.charAt(i))
        }
    }
   return  middle += "|\n"
}

console.log(formatStr_tabl(4, 4, "Hello World!"));
console.log(formatStr_tabl(4, 3, "Nice pattern"));
console.log(formatStr_tabl(3, 4, "Nice pattern"));
console.log(formatStr_tabl(3, 3, "Nice pattern"));
console.log(formatStr_tabl(-4, 4, "Nice pattern"));
console.log(formatStr_tabl(5.5, 4, "Nice pattern"));
console.log()


console.log("7.3. Формула для (a+b)^n")

function factorial(n) 
{
    return n ? n * factorial(n - 1n) : 1n;
}

function degreeOfSum(n) {
    if (typeof n != "number" || !Number.isInteger(n) || n < -200 || n > 200) {
        return 'Invalid input';
    }

    let result = '';
    let isPositive = true;

    if (n < 0) {
        isPositive = false;
        n = Math.abs(n);
    }

    if (n == 0) {
        result = '1'
    } else {
        {
            for (var i = 0; i <= n; i++) {
                var c = factorial(BigInt(n)) / (factorial(BigInt(n - i)) * factorial(BigInt(n) - BigInt(n - i)));
                (c == 1) ? c = "" : result += c.toString();

                if (n - i == 1) {
                    result += 'a';
                }
                if (n - i > 1) {
                    result += 'a^' + (n - i);
                }
                if (i == 1) {
                    result += 'b';
                }
                if (i > 1) {
                    result += 'b^' + (i);
                }
                if (i != n) {
                    result += ' + ';
                }
            }
        }
    }

    return isPositive ? result : '1 / (' + result + ')';

}
console.log("Формула для (a+b)^n: ")
console.log("Входные данные: 0 ",degreeOfSum(0));
console.log("Входные данные: 1 ", degreeOfSum(1));
console.log("Входные данные: 2 ", degreeOfSum(2));
console.log("Входные данные: -2 ", degreeOfSum(-2));
console.log("Входные данные: 3 ", degreeOfSum(3));
console.log("Входные данные: 5 ", degreeOfSum(5));
console.log("Входные данные: 201 ",degreeOfSum(201));
console.log("Входные данные: 3.14 ", degreeOfSum(3.14));
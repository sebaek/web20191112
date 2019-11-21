// function $() {
//     console.log("달라 함수 실행");
// }
function getRandomNumber() {
    var ran = Math.floor(Math.random()*45)+1;
    return ran;
}
function showNumber(index, num) {
    var ballid = "ball" + index;
    var demoid = "demo" + index;

    if (1 <= num && num <= 9) {
        document.getElementById(ballid).style.backgroundColor = "blue";
    } else if (10 <= num && num <= 19) {
        document.getElementById(ballid).style.backgroundColor = "yellow";
    } else if (20 <= num && num <= 29) {
        document.getElementById(ballid).style.backgroundColor = "red";
    } else if (30 <= num && num <= 39) {
        document.getElementById(ballid).style.backgroundColor = "green";
    } else {
        document.getElementById(ballid).style.backgroundColor = "black";
    }

    document.getElementById(demoid).innerHTML = num;
}

function showNumbers() {
    var numbers = [0, 0, 0, 0, 0, 0];
    var count = 0;
    
    while (count < 6) {
        var ran = getRandomNumber();
        if (check(numbers, ran)) {
            numbers[count] = ran;
            count++;
        }
    }

    for (var i = 0; i < numbers.length; i++) {
        showNumber(i, numbers[i]);
    }
}

function check(array, num) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return false;
        }
    }
    return true;
}

showNumbers();



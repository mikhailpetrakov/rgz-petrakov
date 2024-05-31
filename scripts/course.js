let fromRuble = document.getElementById('input-from-ruble');
let toFunt = document.getElementById('input-to-funt');
let fromFunt = document.getElementById('input-from-funt');
let toRuble = document.getElementById('input-to-ruble');

document.getElementById('button-to').addEventListener('click', function() {
    let convertedValue = fx(fromRuble.value).from("RUB").to("GBP");
    toFunt.value = convertedValue.toFixed(2);
});

document.getElementById('button-from').addEventListener('click', function() {
    let convertedValue = fx(fromFunt.value).from("GBP").to("RUB");
    toRuble.value = convertedValue.toFixed(2);
});
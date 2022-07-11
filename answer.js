//Very Easy
function min(num1, num2){
    if (num1 < num2){
        return num1;
    }
    else{
        return num2;
    }
}

//Easy
var lastName = [ 'Henderson', 'Doe', 'Guijosa']
var firstName = ['Jose', 'John', 'Henry']
var age = [18, 19, 20];

console.log(`Hello, my name is ${firstName[1]} ${lastName[1]} and I'm ${age[1]} years old`)

//Medium
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']
var number = prompt("Please choose a number between 1 and 12!");
if(number >= 1 || number <=12){
    console.log(month[number - 1])
}
else[
    alert('Please choose a number between 1 and 12!')
]

//Hard
var tomHeight = 9;
var tomMass = 8;
var jerryHeight = 10;
var jerryMass = 45;
var tomBMI = tomMass / (tomHeight * tomHeight);
var jerryBMI = jerryMass / (jerryHeight * jerryHeight);
if (tomBMI > jerryBMI){
    var Tom = true;
}
else {
    Tom = false;
}
if (Tom){
    console.log(`Is Tom's BMI higher than Jerry's? ${Tom}`)
}
else{
    console.log(`Is Tom's BMI higher than Jerry's? ${Tom}`)
}
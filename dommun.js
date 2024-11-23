function calculateSum(){
    let num1 = parseFloat( document.getElementById('firstnumber').value);
    let num2 = parseFloat(document.getElementById('secondnumber').value);

    let sum = num1 + num2;

    document.getElementById('result').textContent ='the sum is: ' +sum;
    console.log(sum);
}
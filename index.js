// Calculator
function calculate() {
const num1 = parseFloat(document.getElementById('num1').value);
const num2= parseFloat(document.getElementById('num2').value);
const operator = document.querySelector('input[name="operator"]:checked').value;

    let result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '/':
            if(num2 == 0) {
                alert("Error: Can't divide by zero!");
                return;
            }
            result = num1 / num2;
            break;
            
        case '*':
            result = num1 * num2;
            break;
            
        default:
            alert("Invalid operator selected");
            return;    
    }

    alert("Result: " + result);
}

//Factorial Number
function calculatorFactorial() {
    const numberInput = document.getElementById('factorialNumber');

    const num = parseInt(numberInput.value);

    if (num < 0) {
        alert("Enter a positive number.")
        return false;
    }


let factorial = 1;
for (let i = 2; i <= num; i++) {
    factorial *= i;
}

alert(`${num}! = ${factorial}`);

return false;
}

//Fibonacci number
function calculateFibonacci() {
    const n = parseInt(document.getElementById('fibonacciNumber').value);
    
    if (isNaN(n) || n < 0) {
        alert("Please enter a valid positive number");
        return;
    }
    
    let result;
    if (n === 0) {
        result = 0;
    } else if (n === 1) {
        result = 1;
    } else {
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            const temp = a + b;
            a = b;
            b = temp;
        }
        result = b;
    }
    
    alert(`The ${n}${getOrdinalSuffix(n)} Fibonacci number is: ${result}`);
    
    return false;
}

function getOrdinalSuffix(n) {
    if (n > 3 && n < 21) return 'th';
    switch (n % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

//Max and Min
function analyzeNumbers() {
    const num1 = parseFloat(document.getElementById('analyzeNum1').value);
    const num2 = parseFloat(document.getElementById('analyzeNum2').value);
    const num3 = parseFloat(document.getElementById('analyzeNum3').value);
    
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Please enter valid numbers in all fields");
        return false;
    }
    
    const max = Math.max(num1, num2, num3);
    const min = Math.min(num1, num2, num3);
    const range = max - min;
    
    alert(`Results:\n
           Maximum: ${max}\n
           Minimum: ${min}\n
           Range: ${range}`);
    
    return false;
}

//Sign up form
function processSignUp() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const zipCode = document.getElementById('zipCode').value;
    
    const outputString = `
        <div class="signup-entry">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>ZIP Code:</strong> ${zipCode}</p>
            <p><strong>Sign-Up Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
    `;
    
    document.getElementById('signupResults').innerHTML += outputString;
    
    document.getElementById('mailingListForm').reset();
    
    return false;
}
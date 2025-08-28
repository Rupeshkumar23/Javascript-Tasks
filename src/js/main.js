// 1. Salary Calculator
function calculateAndDisplaySalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    if (isNaN(basicSalary) || basicSalary < 0) {
        document.getElementById('salaryResult').innerHTML = 'Please enter a valid salary amount';
        return;
    }

    const dearnessAllowance = basicSalary * 0.4;  
    const houseRentAllowance = basicSalary * 0.2; 
    const grossSalary = basicSalary + dearnessAllowance + houseRentAllowance;

    document.getElementById('salaryResult').innerHTML = `
        <h3>Salary Details:</h3>
        <p>Basic Salary: ₹${basicSalary.toFixed(2)}</p>
        <p>Dearness Allowance (40%): ₹${dearnessAllowance.toFixed(2)}</p>
        <p>House Rent Allowance (20%): ₹${houseRentAllowance.toFixed(2)}</p>
        <p>Gross Salary: ₹${grossSalary.toFixed(2)}</p>
    `;
}

// 2. Distance Converter
function convertAndDisplayDistance() {
    const kilometers = parseFloat(document.getElementById('distance').value);
    if (isNaN(kilometers) || kilometers < 0) {
        document.getElementById('distanceResult').innerHTML = 'Please enter a valid distance';
        return;
    }

    const meters = kilometers * 1000;
    const feet = kilometers * 3280.84;
    const inches = kilometers * 39370;
    const centimeters = kilometers * 100000;

    document.getElementById('distanceResult').innerHTML = `
        <h3>Distance Conversions:</h3>
        <p>Meters: ${meters.toFixed(2)} m</p>
        <p>Feet: ${feet.toFixed(2)} ft</p>
        <p>Inches: ${inches.toFixed(2)} in</p>
        <p>Centimeters: ${centimeters.toFixed(2)} cm</p>
    `;
}

// 3. Student Marks Calculator
function calculateAndDisplayMarks() {
    const marksInputs = document.getElementsByClassName('marks-input');
    const marks = [];
    
    for (let input of marksInputs) {
        const mark = parseFloat(input.value);
        if (isNaN(mark) || mark < 0 || mark > 100) {
            document.getElementById('marksResult').innerHTML = 'Please enter valid marks between 0 and 100 for all subjects';
            return;
        }
        marks.push(mark);
    }

    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (totalMarks / (marks.length * 100)) * 100;

    document.getElementById('marksResult').innerHTML = `
        <h3>Results:</h3>
        <p>Total Marks: ${totalMarks} out of ${marks.length * 100}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
    `;
}

// 4. Temperature Converter
function convertTemperature() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(fahrenheit)) {
        document.getElementById('temperatureResult').innerHTML = 'Please enter a valid temperature';
        return;
    }

    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('temperatureResult').innerHTML = `
        <h3>Temperature Conversion:</h3>
        <p>${fahrenheit}°F = ${celsius.toFixed(2)}°C</p>
    `;
}

// 5. Area & Perimeter Calculator
function calculateShapes() {
    const length = parseFloat(document.getElementById('length').value);
    const breadth = parseFloat(document.getElementById('breadth').value);
    const radius = parseFloat(document.getElementById('radius').value);
    const pi = Math.PI;

    let result = '<h3>Results:</h3>';

    if (!isNaN(length) && !isNaN(breadth)) {
        const rectangleArea = length * breadth;
        const rectanglePerimeter = 2 * (length + breadth);
        result += `
            <h4>Rectangle:</h4>
            <p>Area: ${rectangleArea.toFixed(2)} square units</p>
            <p>Perimeter: ${rectanglePerimeter.toFixed(2)} units</p>
        `;
    }

    if (!isNaN(radius)) {
        const circleArea = pi * radius * radius;
        const circleCircumference = 2 * pi * radius;
        result += `
            <h4>Circle:</h4>
            <p>Area: ${circleArea.toFixed(2)} square units</p>
            <p>Circumference: ${circleCircumference.toFixed(2)} units</p>
        `;
    }

    if (result === '<h3>Results:</h3>') {
        result = 'Please enter valid dimensions';
    }

    document.getElementById('shapesResult').innerHTML = result;
}

// 6. Number Interchange
function interchangeNumbers() {
    let c = parseFloat(document.getElementById('numberC').value);
    let d = parseFloat(document.getElementById('numberD').value);

    if (isNaN(c) || isNaN(d)) {
        document.getElementById('interchangeResult').innerHTML = 'Please enter valid numbers';
        return;
    }

    [c, d] = [d, c];

    document.getElementById('interchangeResult').innerHTML = `
        <h3>After Interchange:</h3>
        <p>C = ${c}</p>
        <p>D = ${d}</p>
    `;
}

// 7. Sum of Digits
function calculateDigitSum() {
    const number = document.getElementById('fiveDigitSum').value;
    if (number.length !== 5 || isNaN(number)) {
        document.getElementById('digitSumResult').innerHTML = 'Please enter a valid 5-digit number';
        return;
    }

    const sum = number.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    document.getElementById('digitSumResult').innerHTML = `
        <h3>Result:</h3>
        <p>Sum of digits in ${number} = ${sum}</p>
    `;
}

// 8. Reverse Number
function reverseNumber() {
    const number = document.getElementById('fiveDigitReverse').value;
    if (number.length !== 5 || isNaN(number)) {
        document.getElementById('reverseResult').innerHTML = 'Please enter a valid 5-digit number';
        return;
    }

    const reversed = number.split('').reverse().join('');
    document.getElementById('reverseResult').innerHTML = `
        <h3>Result:</h3>
        <p>Reversed number: ${reversed}</p>
    `;
}

// 9. First-Last Digit Sum
function calculateFirstLastSum() {
    const number = document.getElementById('fourDigitNumber').value;
    if (number.length !== 4 || isNaN(number)) {
        document.getElementById('firstLastSumResult').innerHTML = 'Please enter a valid 4-digit number';
        return;
    }

    const firstDigit = parseInt(number[0]);
    const lastDigit = parseInt(number[3]);
    const sum = firstDigit + lastDigit;

    document.getElementById('firstLastSumResult').innerHTML = `
        <h3>Result:</h3>
        <p>Sum of first digit (${firstDigit}) and last digit (${lastDigit}) = ${sum}</p>
    `;
}

// 10. Population Literacy Calculator
function calculateLiteracy() {
    const population = parseInt(document.getElementById('population').value);
    if (isNaN(population) || population <= 0) {
        document.getElementById('literacyResult').innerHTML = 'Please enter a valid population';
        return;
    }

    const menPercentage = 52;
    const literacyPercentage = 48;
    const literateMenPercentage = 35;

    const totalMen = (population * menPercentage) / 100;
    const totalWomen = population - totalMen;
    const totalLiterate = (population * literacyPercentage) / 100;
    const literateMen = (population * literateMenPercentage) / 100;
    const literateWomen = totalLiterate - literateMen;
    const illiterateMen = totalMen - literateMen;
    const illiterateWomen = totalWomen - literateWomen;

    document.getElementById('literacyResult').innerHTML = `
        <h3>Population Literacy Analysis:</h3>
        <p>Total Population: ${population}</p>
        <p>Illiterate Men: ${Math.round(illiterateMen)}</p>
        <p>Illiterate Women: ${Math.round(illiterateWomen)}</p>
    `;
}

// 11. Currency Denominator
function calculateDenominations() {
    const amount = parseInt(document.getElementById('amount').value);
    if (isNaN(amount) || amount < 0) {
        document.getElementById('denominationResult').innerHTML = 'Please enter a valid amount';
        return;
    }

    const notes100 = Math.floor(amount / 100);
    const remainderAfter100 = amount % 100;
    const notes50 = Math.floor(remainderAfter100 / 50);
    const remainderAfter50 = remainderAfter100 % 50;
    const notes10 = Math.floor(remainderAfter50 / 10);
    const remainderAfter10 = remainderAfter50 % 10;
    const notes5 = Math.floor(remainderAfter10 / 5);

    document.getElementById('denominationResult').innerHTML = `
        <h3>Currency Notes Required:</h3>
        <p>₹100 notes: ${notes100}</p>
        <p>₹50 notes: ${notes50}</p>
        <p>₹10 notes: ${notes10}</p>
        <p>₹5 notes: ${notes5}</p>
    `;
}

// 12. Cost Price Calculator
function calculateCostPrice() {
    const totalSellingPrice = parseFloat(document.getElementById('sellingPrice').value);
    const totalProfit = parseFloat(document.getElementById('totalProfit').value);

    if (isNaN(totalSellingPrice) || isNaN(totalProfit) || totalSellingPrice < totalProfit) {
        document.getElementById('costPriceResult').innerHTML = 'Please enter valid values';
        return;
    }

    const totalCostPrice = totalSellingPrice - totalProfit;
    const costPricePerItem = totalCostPrice / 15;

    document.getElementById('costPriceResult').innerHTML = `
        <h3>Result:</h3>
        <p>Cost Price per item: ₹${costPricePerItem.toFixed(2)}</p>
    `;
}

// 13. Add One to Digits
function addOneToDigits() {
    const number = document.getElementById('fiveDigitAdd').value;
    if (number.length !== 5 || isNaN(number)) {
        document.getElementById('addOneResult').innerHTML = 'Please enter a valid 5-digit number';
        return;
    }

    const result = number.split('')
        .map(digit => (parseInt(digit) + 1) % 10)
        .join('');

    document.getElementById('addOneResult').innerHTML = `
        <h3>Result:</h3>
        <p>Original number: ${number}</p>
        <p>New number: ${result}</p>
    `;
}

// 14. Discount Calculator
function calculateDiscount() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const pricePerItem = parseFloat(document.getElementById('pricePerItem').value);

    if (isNaN(quantity) || isNaN(pricePerItem) || quantity < 1 || pricePerItem < 0) {
        document.getElementById('discountResult').innerHTML = 'Please enter valid values';
        return;
    }

    let total = quantity * pricePerItem;
    const discount = quantity > 1000 ? total * 0.1 : 0;
    total -= discount;

    document.getElementById('discountResult').innerHTML = `
        <h3>Bill Details:</h3>
        <p>Quantity: ${quantity}</p>
        <p>Price per item: ₹${pricePerItem.toFixed(2)}</p>
        <p>Discount: ₹${discount.toFixed(2)}</p>
        <p>Total Amount: ₹${total.toFixed(2)}</p>
    `;
}

// 15. Employee Bonus Calculator
function calculateBonus() {
    const currentYear = parseInt(document.getElementById('currentYear').value);
    const joinYear = parseInt(document.getElementById('joinYear').value);

    if (isNaN(currentYear) || isNaN(joinYear) || joinYear > currentYear) {
        document.getElementById('bonusResult').innerHTML = 'Please enter valid years';
        return;
    }

    const yearsOfService = currentYear - joinYear;
    const bonus = yearsOfService > 3 ? 2500 : 0;

    document.getElementById('bonusResult').innerHTML = `
        <h3>Service Details:</h3>
        <p>Years of Service: ${yearsOfService}</p>
        <p>Bonus Amount: ₹${bonus}</p>
    `;
}

//16. Advanced Salary Calculator
function calculateAdvancedSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalaryAdv').value);

    if (isNaN(basicSalary) || basicSalary < 0) {
        document.getElementById('advSalaryResult').innerHTML = 'Please enter a valid salary';
        return;
    }

    let hra, da;
    if (basicSalary < 1500) {
        hra = basicSalary * 0.10;
        da = basicSalary * 0.90;
    } else {
        hra = 500;
        da = basicSalary * 0.98;
    }

    const grossSalary = basicSalary + hra + da;

    document.getElementById('advSalaryResult').innerHTML = `
        <h3>Salary Details:</h3>
        <p>Basic Salary: ₹${basicSalary.toFixed(2)}</p>
        <p>HRA: ₹${hra.toFixed(2)}</p>
        <p>DA: ₹${da.toFixed(2)}</p>
        <p>Gross Salary: ₹${grossSalary.toFixed(2)}</p>
    `;
}

//17.  Division Calculator
function calculateDivision() {
    const marks = Array.from(document.getElementsByClassName('division-marks'))
        .map(input => parseFloat(input.value));

    if (marks.some(mark => isNaN(mark) || mark < 0 || mark > 100)) {
        document.getElementById('divisionResult').innerHTML = 'Please enter valid marks between 0 and 100';
        return;
    }

    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (totalMarks / (marks.length * 100)) * 100;
    let division;

    if (percentage >= 60) division = 'First';
    else if (percentage >= 50) division = 'Second';
    else if (percentage >= 40) division = 'Third';
    else division = 'Fail';

    document.getElementById('divisionResult').innerHTML = `
        <h3>Result:</h3>
        <p>Total Marks: ${totalMarks}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Division: ${division}</p>
    `;
}

//18.  Insurance Eligibility Checker
function checkInsurance() {
    const maritalStatus = document.getElementById('maritalStatus').value;
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('driverAge').value);

    if (isNaN(age) || age < 18) {
        document.getElementById('insuranceResult').innerHTML = 'Please enter valid age';
        return;
    }

    let isEligible = maritalStatus === 'married' ||
        (maritalStatus === 'unmarried' && gender === 'male' && age > 30) ||
        (maritalStatus === 'unmarried' && gender === 'female' && age > 25);

    document.getElementById('insuranceResult').innerHTML = `
        <h3>Insurance Status:</h3>
        <p>${isEligible ? 'Driver is eligible for insurance' : 'Driver is not eligible for insurance'}</p>
    `;
}

//19. Employee Salary Calculator based on criteria
function calculateEmployeeSalary() {
    const gender = document.getElementById('empGender').value;
    const yearsOfService = parseInt(document.getElementById('yearsOfService').value);
    const qualification = document.getElementById('qualification').value;

    if (isNaN(yearsOfService) || yearsOfService < 0) {
        document.getElementById('empSalaryResult').innerHTML = 'Please enter valid years of service';
        return;
    }

    let salary;
    if (gender === 'male') {
        if (yearsOfService >= 10) {
            salary = qualification === 'postgraduate' ? 15000 : 10000;
        } else {
            salary = qualification === 'postgraduate' ? 10000 : 7000;
        }
    } else {
        if (yearsOfService >= 10) {
            salary = qualification === 'postgraduate' ? 12000 : 9000;
        } else {
            salary = qualification === 'postgraduate' ? 10000 : 6000;
        }
    }

    document.getElementById('empSalaryResult').innerHTML = `
        <h3>Salary Details:</h3>
        <p>Basic Salary: ₹${salary}</p>
    `;
}

//20. Profit/Loss Calculator
function calculateProfitLoss() {
    const cp = parseFloat(document.getElementById('costPrice').value);
    const sp = parseFloat(document.getElementById('sellingPrice2').value);

    if (isNaN(cp) || isNaN(sp) || cp < 0 || sp < 0) {
        document.getElementById('profitLossResult').innerHTML = 'Please enter valid prices';
        return;
    }

    const difference = sp - cp;
    const type = difference > 0 ? 'Profit' : difference < 0 ? 'Loss' : 'No Profit No Loss';

    document.getElementById('profitLossResult').innerHTML = `
        <h3>Result:</h3>
        <p>${type}: ₹${Math.abs(difference).toFixed(2)}</p>
    `;
}

//21. Even/Odd Checker
function checkEvenOdd() {
    const number = parseInt(document.getElementById('numberToCheck').value);

    if (isNaN(number)) {
        document.getElementById('evenOddResult').innerHTML = 'Please enter a valid number';
        return;
    }

    const result = number % 2 === 0 ? 'Even' : 'Odd';
    document.getElementById('evenOddResult').innerHTML = `
        <h3>Result:</h3>
        <p>${number} is ${result}</p>
    `;
}

//22. Palindrome Number Checker
function checkPalindrome() {
    const number = document.getElementById('palindromeNumber').value;
    if (number.length !== 5 || isNaN(number)) {
        document.getElementById('palindromeResult').innerHTML = 'Please enter a valid 5-digit number';
        return;
    }

    const reversed = number.split('').reverse().join('');
    const isPalindrome = number === reversed;

    document.getElementById('palindromeResult').innerHTML = `
        <h3>Result:</h3>
        <p>Original Number: ${number}</p>
        <p>Reversed Number: ${reversed}</p>
        <p>The number is ${isPalindrome ? '' : 'not '}a palindrome</p>
    `;
}

//23. Age Comparison
function findYoungest() {
    const ramAge = parseInt(document.getElementById('ageRam').value);
    const shyamAge = parseInt(document.getElementById('ageShyam').value);
    const ajayAge = parseInt(document.getElementById('ageAjay').value);

    if (isNaN(ramAge) || isNaN(shyamAge) || isNaN(ajayAge)) {
        document.getElementById('ageResult').innerHTML = 'Please enter valid ages';
        return;
    }

    let youngest = 'Ram';
    let youngestAge = ramAge;

    if (shyamAge < youngestAge) {
        youngest = 'Shyam';
        youngestAge = shyamAge;
    }
    if (ajayAge < youngestAge) {
        youngest = 'Ajay';
        youngestAge = ajayAge;
    }

    document.getElementById('ageResult').innerHTML = `
        <h3>Result:</h3>
        <p>${youngest} is the youngest at ${youngestAge} years</p>
    `;
}

//24. Triangle Validator
function validateTriangle() {
    const angle1 = parseFloat(document.getElementById('angle1').value);
    const angle2 = parseFloat(document.getElementById('angle2').value);
    const angle3 = parseFloat(document.getElementById('angle3').value);

    if (isNaN(angle1) || isNaN(angle2) || isNaN(angle3)) {
        document.getElementById('triangleResult').innerHTML = 'Please enter valid angles';
        return;
    }

    const sum = angle1 + angle2 + angle3;
    const isValid = sum === 180;

    document.getElementById('triangleResult').innerHTML = `
        <h3>Result:</h3>
        <p>Sum of angles: ${sum}°</p>
        <p>The triangle is ${isValid ? 'valid' : 'not valid'}</p>
    `;
}

//25. Absolute Value Calculator
function findAbsolute() {
    const number = parseFloat(document.getElementById('numberForAbs').value);

    if (isNaN(number)) {
        document.getElementById('absoluteResult').innerHTML = 'Please enter a valid number';
        return;
    }

    document.getElementById('absoluteResult').innerHTML = `
        <h3>Result:</h3>
        <p>Absolute value of ${number} is ${Math.abs(number)}</p>
    `;
}

//26. Rectangle Area vs Perimeter Comparison
function compareAreaPerimeter() {
    const length = parseFloat(document.getElementById('rectLength').value);
    const width = parseFloat(document.getElementById('rectWidth').value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById('rectCompareResult').innerHTML = 'Please enter valid dimensions';
        return;
    }

    const area = length * width;
    const perimeter = 2 * (length + width);

    document.getElementById('rectCompareResult').innerHTML = `
        <h3>Result:</h3>
        <p>Area: ${area} square units</p>
        <p>Perimeter: ${perimeter} units</p>
        <p>Area is ${area > perimeter ? 'greater than' : area < perimeter ? 'less than' : 'equal to'} perimeter</p>
    `;
}

//27. Leap Year Checker
function checkLeapYear() {
    const year = parseInt(document.getElementById('yearToCheck').value);

    if (isNaN(year) || year < 0) {
        document.getElementById('leapYearResult').innerHTML = 'Please enter a valid year';
        return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    document.getElementById('leapYearResult').innerHTML = `
        <h3>Result:</h3>
        <p>${year} is ${isLeap ? 'a leap year' : 'not a leap year'}</p>
    `;
}

//28. Steel Grade Calculator
function calculateSteelGrade() {
    const hardness = parseFloat(document.getElementById('hardness').value);
    const carbonContent = parseFloat(document.getElementById('carbonContent').value);
    const tensileStrength = parseFloat(document.getElementById('tensileStrength').value);

    if (isNaN(hardness) || isNaN(carbonContent) || isNaN(tensileStrength)) {
        document.getElementById('steelGradeResult').innerHTML = 'Please enter valid values';
        return;
    }

    const condition1 = hardness > 50;
    const condition2 = carbonContent < 0.7;
    const condition3 = tensileStrength > 5600;

    let grade;
    if (condition1 && condition2 && condition3) grade = 10;
    else if (condition1 && condition2) grade = 9;
    else if (condition2 && condition3) grade = 8;
    else if (condition1 && condition3) grade = 7;
    else if (condition1 || condition2 || condition3) grade = 6;
    else grade = 5;

    document.getElementById('steelGradeResult').innerHTML = `
        <h3>Result:</h3>
        <p>Steel Grade: ${grade}</p>
    `;
}

//29. Library Fine Calculator
function calculateLibraryFine() {
    const days = parseInt(document.getElementById('daysLate').value);

    if (isNaN(days) || days < 0) {
        document.getElementById('libraryFineResult').innerHTML = 'Please enter valid number of days';
        return;
    }

    let fine;
    if (days > 30) {
        document.getElementById('libraryFineResult').innerHTML = `
            <h3>Result:</h3>
            <p class="error">Membership Cancelled</p>
        `;
        return;
    } else if (days > 10) {
        fine = days * 5;
    } else if (days > 5) {
        fine = days * 1;
    } else if (days > 0) {
        fine = days * 0.5;
    } else {
        fine = 0;
    }

    document.getElementById('libraryFineResult').innerHTML = `
        <h3>Result:</h3>
        <p>Fine Amount: ₹${fine.toFixed(2)}</p>
    `;
}

//30. Worker Efficiency Calculator
function calculateEfficiency() {
    const time = parseFloat(document.getElementById('timeRequired').value);

    if (isNaN(time) || time <= 0) {
        document.getElementById('efficiencyResult').innerHTML = 'Please enter valid time';
        return;
    }

    let efficiency;
    if (time >= 2 && time <= 3) {
        efficiency = 'Highly Efficient';
    } else if (time > 3 && time <= 4) {
        efficiency = 'Improve Speed';
    } else if (time > 4 && time <= 5) {
        efficiency = 'Training Required';
    } else if (time > 5) {
        efficiency = 'Leave Company';
    } else {
        efficiency = 'Invalid Time Range';
    }

    document.getElementById('efficiencyResult').innerHTML = `
        <h3>Result:</h3>
        <p>Worker Efficiency: ${efficiency}</p>
    `;
}

// Factor Finder
function findFactors() {
    const number = parseInt(document.getElementById('factorNumber').value);
    if (isNaN(number) || number < 1) {
        document.getElementById('factorResult').innerHTML = 'Please enter a valid positive number';
        return;
    }

    const factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }

    document.getElementById('factorResult').innerHTML = `
        <h3>Factors of ${number}:</h3>
        <p>${factors.join(', ')}</p>
    `;
}

// Prime Number Checker
function checkPrime() {
    const number = parseInt(document.getElementById('primeNumber').value);
    if (isNaN(number) || number < 1) {
        document.getElementById('primeResult').innerHTML = 'Please enter a valid positive number';
        return;
    }

    let isPrime = number > 1;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    document.getElementById('primeResult').innerHTML = `
        <h3>Result:</h3>
        <p>${number} is ${isPrime ? 'a prime number' : 'not a prime number'}</p>
    `;
}

// Armstrong Number Checker
function isArmstrong(num) {
    const digits = num.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === num;
}

function checkArmstrong() {
    const number = parseInt(document.getElementById('armstrongNumber').value);
    if (isNaN(number) || number < 1) {
        document.getElementById('armstrongResult').innerHTML = 'Please enter a valid positive number';
        return;
    }

    document.getElementById('armstrongResult').innerHTML = `
        <h3>Result:</h3>
        <p>${number} is ${isArmstrong(number) ? 'an Armstrong number' : 'not an Armstrong number'}</p>
    `;
}

// Armstrong Numbers Range
function findArmstrongNumbers() {
    const armstrongNumbers = [];
    for (let i = 1; i <= 10000; i++) {
        if (isArmstrong(i)) {
            armstrongNumbers.push(i);
        }
    }

    document.getElementById('armstrongRangeResult').innerHTML = `
        <h3>Armstrong Numbers (1-10000):</h3>
        <p>${armstrongNumbers.join(', ')}</p>
    `;
}

// Odd/Even Counter
document.getElementById('numberLimit')?.addEventListener('change', function() {
    const limit = parseInt(this.value);
    const container = document.getElementById('numberInputs');
    container.innerHTML = '';

    for (let i = 0; i < limit; i++) {
        container.innerHTML += `
            <input type="number" class="number-input" placeholder="Enter number ${i + 1}">
        `;
    }
});

function countOddEven() {
    const inputs = document.getElementsByClassName('number-input');
    let evenCount = 0;
    let oddCount = 0;

    for (let input of inputs) {
        const num = parseInt(input.value);
        if (!isNaN(num)) {
            if (num % 2 === 0) evenCount++;
            else oddCount++;
        }
    }

    document.getElementById('oddEvenResult').innerHTML = `
        <h3>Results:</h3>
        <p>Even numbers: ${evenCount}</p>
        <p>Odd numbers: ${oddCount}</p>
    `;
}

// Number Reverser
function reverseNumber() {
    const number = document.getElementById('numberToReverse').value;
    if (!number) {
        document.getElementById('reverseNumberResult').innerHTML = 'Please enter a valid number';
        return;
    }

    const reversed = number.split('').reverse().join('');
    document.getElementById('reverseNumberResult').innerHTML = `
        <h3>Result:</h3>
        <p>Original number: ${number}</p>
        <p>Reversed number: ${reversed}</p>
    `;
}

// Decimal to Binary Converter
function convertToBinary() {
    const decimal = parseInt(document.getElementById('decimalNumber').value);
    if (isNaN(decimal) || decimal < 0) {
        document.getElementById('binaryResult').innerHTML = 'Please enter a valid non-negative number';
        return;
    }

    const binary = decimal.toString(2);
    document.getElementById('binaryResult').innerHTML = `
        <h3>Result:</h3>
        <p>Decimal: ${decimal}</p>
        <p>Binary: ${binary}</p>
    `;
}

// Binary to Decimal Converter
function convertToDecimal() {
    const binary = document.getElementById('binaryNumber').value;
    if (!/^[01]+$/.test(binary)) {
        document.getElementById('decimalResult').innerHTML = 'Please enter a valid binary number (0s and 1s only)';
        return;
    }

    const decimal = parseInt(binary, 2);
    document.getElementById('decimalResult').innerHTML = `
        <h3>Result:</h3>
        <p>Binary: ${binary}</p>
        <p>Decimal: ${decimal}</p>
    `;
}

// Factorial Calculator
function calculateFactorial() {
    const number = parseInt(document.getElementById('factorialNumber').value);
    if (isNaN(number) || number < 0) {
        document.getElementById('factorialResult').innerHTML = 'Please enter a valid non-negative number';
        return;
    }

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById('factorialResult').innerHTML = `
        <h3>Result:</h3>
        <p>Factorial of ${number} is: ${factorial}</p>
    `;
}

// Fibonacci Series Generator
function generateFibonacci() {
    const limit = parseInt(document.getElementById('fibLimit').value);
    if (isNaN(limit) || limit < 1) {
        document.getElementById('fibonacciResult').innerHTML = 'Please enter a valid positive number';
        return;
    }

    let series = [0, 1];
    while (series.length < limit) {
        series.push(series[series.length - 1] + series[series.length - 2]);
    }

    document.getElementById('fibonacciResult').innerHTML = `
        <h3>Fibonacci Series:</h3>
        <p>${series.join(', ')}</p>
    `;
}

// Perfect Number Checker
function isPerfect(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function checkPerfectNumber() {
    const number = parseInt(document.getElementById('perfectNumber').value);
    if (isNaN(number) || number < 1) {
        document.getElementById('perfectResult').innerHTML = 'Please enter a valid positive number';
        return;
    }

    document.getElementById('perfectResult').innerHTML = `
        <h3>Result:</h3>
        <p>${number} is ${isPerfect(number) ? 'a perfect number' : 'not a perfect number'}</p>
    `;
}

// Perfect Numbers Range
function findPerfectNumbers() {
    const perfectNumbers = [];
    for (let i = 1; i <= 1000; i++) {
        if (isPerfect(i)) {
            perfectNumbers.push(i);
        }
    }

    document.getElementById('perfectRangeResult').innerHTML = `
        <h3>Perfect Numbers (1-1000):</h3>
        <p>${perfectNumbers.join(', ')}</p>
    `;
}

// Strong Number Checker
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function checkStrongNumber() {
    const number = parseInt(document.getElementById('strongNumber').value);
    if (isNaN(number) || number < 1) {
        document.getElementById('strongResult').innerHTML = 'Please enter a valid positive number';
        return;
    }

    const sum = number.toString()
        .split('')
        .reduce((acc, digit) => acc + factorial(parseInt(digit)), 0);

    document.getElementById('strongResult').innerHTML = `
        <h3>Result:</h3>
        <p>${number} is ${sum === number ? 'a strong number' : 'not a strong number'}</p>
    `;
}

// Power Calculator
function calculatePower() {
    const base = parseFloat(document.getElementById('baseNumber').value);
    const power = parseInt(document.getElementById('powerNumber').value);

    if (isNaN(base) || isNaN(power)) {
        document.getElementById('powerResult').innerHTML = 'Please enter valid numbers';
        return;
    }

    const result = Math.pow(base, power);
    document.getElementById('powerResult').innerHTML = `
        <h3>Result:</h3>
        <p>${base} raised to power ${power} = ${result}</p>
    `;
}
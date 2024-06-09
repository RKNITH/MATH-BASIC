const num = document.getElementById('num');
const squ = document.getElementById('squ');
const cube = document.getElementById('cube');
const squareRoot = document.getElementById('squareRoot');
const cubeRoot = document.getElementById('cubeRoot');
const fact = document.getElementById('fact');


const tableBtn = document.getElementById('tableBtn');
const squareBtn = document.getElementById('squareBtn');
const cubeBtn = document.getElementById('cubeBtn');
const squareRootBtn = document.getElementById('squareRootBtn');
const cubeRootBtn = document.getElementById('cubeRootBtn');
const factBtn = document.getElementById('factBtn');


const resultContainer = document.getElementById('resultContainer');
const backButton = document.getElementById('backButton');

// Function to hide all divs except the specified one
const hideOtherDivs = (divToKeep) => {
    const allDivs = document.querySelectorAll('.container > div');
    allDivs.forEach(div => {
        if (div !== divToKeep) {
            div.style.display = 'none';
        }
    });
};

// Function to show all divs and hide the result container
const showAllDivs = () => {
    const allDivs = document.querySelectorAll('.container > div');
    allDivs.forEach(div => {
        div.style.display = 'flex';
    });
    resultContainer.style.display = 'none';
};

// Generate multiplication table
// Generate multiplication table
const generateTable = (number) => {
    let table = [];

    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= 10; j++) {
            table.push(`${i} × ${j} = ${i * j}`);
        }
        // Add a horizontal line after each table
        table.push('<hr>');
    }

    return table;
};


// Generate square
// Function to generate square
const generateSquare = (number) => {
    return `${number}  × ${number} = ${number * number}`;
};


// Generate cube
const generateCube = (number) => {
    return `${number}  × ${number}  ×${number}= ${number * number * number}`;
};

// Generate square root
const generateSquareRoot = (number) => {
    return Math.sqrt(number);
};

// Generate cube root
const generateCubeRoot = (number) => {
    return Math.cbrt(number);
};


// Function to generate factorial
const generateFactorial = (number) => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
};





// Function to display result in the result container
const displayResult = (result) => {
    resultContainer.innerHTML = result;
};

// Add event listener to table button
// Add event listener to table button
tableBtn.addEventListener('click', () => {
    const number = parseFloat(num.value);
    if (number) {
        hideOtherDivs(tableBtn.parentElement);
        const table = generateTable(number).join('<br>');
        displayResult(table);
        resultContainer.style.display = 'block';
        backButton.style.display = 'block';
    } else {
        alert('Please enter a valid number');
    }
});


// Add event listener to square button
squareBtn.addEventListener('click', () => {
    const number = parseFloat(squ.value);
    if (number) {
        let result = '';
        for (let i = 1; i <= number; i++) {
            result += `Square of ${i} is:  ${generateSquare(i)}<br>`;
        }
        displayResult(result);

        hideOtherDivs(squareBtn.parentElement);
        resultContainer.style.display = 'block';
        backButton.style.display = 'block';
    } else {
        alert('Please enter a valid number');
    }
});


// Add event listener to cube button
cubeBtn.addEventListener('click', () => {
    const number = parseFloat(cube.value);
    if (number) {
        let result = '';
        for (let i = 1; i <= number; i++) {
            result += `Cube of ${i} is:  ${generateCube(i)}<br>`;
        }
        displayResult(result);

        hideOtherDivs(cubeBtn.parentElement);
        resultContainer.style.display = 'block';
        backButton.style.display = 'block';
    } else {
        alert('Please enter a valid number');
    }
});


// Add event listener to square root button
squareRootBtn.addEventListener('click', () => {
    const number = parseFloat(squareRoot.value);
    if (number) {
        let result = '';
        for (let i = 1; i <= number; i++) {
            result += `Square root of ${i} is:  ${generateSquareRoot(i)}<br>`;
        }
        displayResult(result);

        hideOtherDivs(squareRootBtn.parentElement);
        resultContainer.style.display = 'block';
        backButton.style.display = 'block';
    } else {
        alert('Please enter a valid number');
    }
});

// Add event listener to cube root button
cubeRootBtn.addEventListener('click', () => {
    const number = parseFloat(cubeRoot.value);
    if (number) {
        let result = '';
        for (let i = 1; i <= number; i++) {
            result += `Cube root of ${i} is:  ${generateCubeRoot(i)}<br>`;
        }
        displayResult(result);

        hideOtherDivs(cubeRootBtn.parentElement);
        resultContainer.style.display = 'block';
        backButton.style.display = 'block';
    } else {
        alert('Please enter a valid number');
    }
});

// Add event listener to factorial button
factBtn.addEventListener('click', () => {
    const number = parseFloat(fact.value);
    if (number) {
        let result = '';
        for (let i = 1; i <= number; i++) {
            result += `Factorial of ${i} is:  ${generateFactorial(i)}<br>`;
        }
        displayResult(result);

        hideOtherDivs(factBtn.parentElement);
        resultContainer.style.display = 'block';
        backButton.style.display = 'block';
    } else {
        alert('Please enter a valid number');
    }
});




// Add event listener to back button
backButton.addEventListener('click', () => {
    showAllDivs();
    backButton.style.display = 'none';
});

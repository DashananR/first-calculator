let display = document.getElementById('display');

'keypress', function(event) {
    if (event.key === 'c') {
        display.value = '';
    }
};

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    const lastChar = display.value[display.value.length - 1];
    
    // Prevent repeating decimal points
    if (value === '.' && lastChar === '.') {
        return;
    }

    // Prevent consecutive operators
    const operators = ['+', '-', '*', '/', '√', '^2', '(', ')'];
    if (operators.includes(value) && operators.includes(lastChar)) {
        if (value !== '(' && lastChar !== '(') return;
    }
    
    display.value += value;
}

'keypress', function(event) {
    if (event.key === 'Enter') {
        try {
            let expression = display.value;
            
            // Replace the square root function
            expression = expression.replace(/√/g, 'Math.sqrt');
            
            // Handle square
            expression = expression.replace(/\^2/g, '**2');
    
            const result = eval(expression);
            display.value = result;
        } catch (e) {
            display.value = 'Error';
            
            };
    }
};

function calculate() {
    try {
        let expression = display.value;
        
        // Replace the square root function
        expression = expression.replace(/√/g, 'Math.sqrt');
        
        // Handle square
        expression = expression.replace(/\^2/g, '**2');

        const result = eval(expression);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
        
        };
    
};

// Handle keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (!isNaN(key) || ['+', '-', '*', '/', '(', ')', '.'].includes(key) || key === '√') {
        appendToDisplay(key === 'Enter' ? '=' : key);
    }
});
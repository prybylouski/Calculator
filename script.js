;
const numbers = document.querySelectorAll('.number'),
operations = document.querySelectorAll('.operator'),
decimalBtn = document.getElementById('decimal'),
clearBtns = document.querySelectorAll('.clear-btn'),
display = document.getElementById('display');
let MemoryCurrentNumber = 0,
MemoryNewNumber = false,
MemoryPendingOperation = "";

  

 
 for (let i = 0; i < numbers.length; i++) {
   let number = numbers[i];
   number.addEventListener('click', function (e) {
     numberPress(e.target.textContent);
   });
 };
 
 for (let i = 0; i < operations.length; i++) {
   let operationBtn = operations[i];
   operationBtn.addEventListener('click', function (e) {
     operation(e.target.textContent);
   });
 };
 
 for (let i = 0; i < clearBtns.length; i++) {
   let clearBtn = clearBtns[i];
   clearBtn.addEventListener('click', function (e) {
     clear(e.target.id);
   });
 };
 
 decimalBtn.addEventListener('click', decimal);
 
 function numberPress(num) {
   if (MemoryNewNumber) {
     display.value = num;
     MemoryNewNumber = false;
   } else {
     if (display.value === '0') {
       display.value = num;
     } else {
       display.value += num;
     }
   }
 };
 
 function operation(oper) {
   let localOperationMemory = display.value;
   if (MemoryNewNumber && MemoryPendingOperation !== '=') {
     display.value = MemoryCurrentNumber;
   } else {
     MemoryNewNumber = true;
     switch (MemoryPendingOperation) {
      case '+': MemoryCurrentNumber += parseFloat(localOperationMemory);
        break;
      case '-': MemoryCurrentNumber -= parseFloat(localOperationMemory);
         break;
      case '/':  MemoryCurrentNumber /= parseFloat(localOperationMemory);
        break;
      case '*':  MemoryCurrentNumber *= parseFloat(localOperationMemory);
        break;
      case 'xn': MemoryCurrentNumber = parseFloat(MemoryCurrentNumber)**parseFloat(localOperationMemory);
        break;
      case 'n√': MemoryCurrentNumber = MemoryCurrentNumber = parseFloat(MemoryCurrentNumber) ** (1/parseFloat(localOperationMemory));
        break;
      case 'xn': MemoryCurrentNumber = parseFloat(MemoryCurrentNumber)**parseFloat(localOperationMemory);
        break;
        default: MemoryCurrentNumber = parseFloat(localOperationMemory);
     };
     display.value = MemoryCurrentNumber;
     MemoryPendingOperation = oper;
    };
  };
    
 function decimal() {
   let localDecimalMemory = display.value;
 
   if (MemoryNewNumber) {
     localDecimalMemory = '0.';
     MemoryNewNumber = false;
   } else {
     if (localDecimalMemory.indexOf('.') === -1) {
       localDecimalMemory += '.';
     }
   }
   display.value = localDecimalMemory;
 };
 
 function clear(id) {
   if (id === 'ce') {
     display.value = '0';
     MemoryNewNumber = true;
   } else if (id === 'c') {
     display.value = '0';
     MemoryNewNumber = true;
     MemoryCurrentNumber = '0';
     MemoryPendingOperation = '';
   };
 };

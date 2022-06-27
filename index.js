// Test 1: the multipled results will equal to 62;
const num1 = 31;
const num2 = 2;
let multiply = multiply(num1, num2);

function multiply(num1, num2){
return num1 * num2;
}

//Test 2: generate a random integer greater than 0
let random = random();
function random() {
    // ensure that the number generated is larger than 0
   return Math.floor(Math.random()) + 1;
}

// Test 3: calculate an equation that has a remainder of 4
const num3 = 18;
const num4 = 7;
let mod = mod(num3, num4);

function mod(num3, num4){
    return num3 % num4;
}

// Test 4: calculate a max that will return 20 as the highest number in the set
let max = max();

function max(){
  return  Math.max(3,15,10,7,20,18,9);
}
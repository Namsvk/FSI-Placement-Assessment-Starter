// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Namitha V Kamath" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let orderTotal = 0 // Order Total

// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// SELECTING ELEMENTS FOR GiNGERBREAD
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
// selecting the element with an id of minus-gb
const gbMinusBtn = document.querySelector('#minus-gb')

// SELECTING ELEMENTS FOR CHOCOLATE CHIP
// selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector('#add-cc')
//selecting the element with ann id of minus-cc
const ccMinusBtn = document.querySelector('#minus-cc')

// SELECTING ELEMENTS FOR SUGAR SPRINKLE
// selecting the element with an id of add-sugar
const sugarPlusBtn = document.querySelector('#add-sugar')
//selecting the element with ann id of minus-sugar
const sugarMinusBtn = document.querySelector('#minus-sugar')


//SELECTING THE ELEMENTS FOR QUANTITY IN ORDER SUMMARY
// selecting the element with id of qty-gb to display gb count
let qtyGb = document.querySelector('#qty-gb')
// selecting the element with id of qty-cc to display cc count
let qtyCc = document.querySelector('#qty-cc')
// selecting the element with id of qty-sugar to display sugar count
let qtySugar = document.querySelector('#qty-sugar')
// selecting the element with id of qty-total to display total count
let qtyTotal = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

//GINGERBREAD
// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb = gb +1
    orderTotal = gb+cc+sugar
    qtyGb.textContent = gb
    qtyTotal.textContent = orderTotal
})

// Event Listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function(){
    gb =gb -1
    if(gb <= 0)
    {
        gb = 0
    }
    orderTotal=gb +cc+sugar
    qtyGb.textContent =gb
    qtyTotal.textContent = orderTotal
})

//CHOCOLATE CHIP
//Event Listener for clicks on the "+" button for Chocolate Chip
ccPlusBtn.addEventListener('click', function(){
    cc = cc+1
    orderTotal = gb + cc + sugar
    qtyCc.textContent = cc
    qtyTotal.textContent = orderTotal
})
// Event Listener for clicks on the "-" button for Chocolate Chip
ccMinusBtn.addEventListener('click', function(){
    cc = cc -1
    if(cc <= 0){
        cc = 0
    }
    orderTotal = gb+ cc+ sugar
    qtyCc.textContent = cc
    qtyTotal.textContent = orderTotal
})

//SUGAR SPRINKLE
//Event Listener for clicks on the "+" button for Sugar Sprinkle
sugarPlusBtn.addEventListener('click', function(){
    sugar = sugar + 1
    orderTotal = gb + cc + sugar
    qtySugar.textContent = sugar
    qtyTotal.textContent = orderTotal
})
////Event Listener for clicks on the "+" button for Sugar Sprinkle
sugarMinusBtn.addEventListener('click',function(){
    sugar = sugar -1
    if(sugar <= 0)
    {
        sugar = 0
    }
    orderTotal = gb + cc + sugar
    qtySugar.textContent = sugar
    qtyTotal.textContent = orderTotal
})
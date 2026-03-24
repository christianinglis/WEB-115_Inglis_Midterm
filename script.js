// User Input
const initialloan = prompt("Enter your Initial Loan Amount (numeric, no commas): ")
const downpayment = prompt("Enter Down Payment AS A PERCENTAGE: ")
const loanterm = prompt("Enter Loan term in years (must be 15 or 30): ")
const totalmonths = loanterm * 12

// Initial Calculations
    if (loanterm == 15 || loanterm == 30) {
    } else{
        alert("loan term must be 15 or 30 years, please try again.")
    }

let principleloanamount = initialloan - downpayment
let fixedinterestrate = 5.75
let monthlyinterestrate = fixedinterestrate / 12
let monthlypayment = ((monthlyinterestrate * principleloanamount) / (1 - Math.pow(1 + monthlyinterestrate, -totalmonths))).toFixed(2);

let totalinterestpaid = (monthlypayment * totalmonths) - principleloanamount
let loancost = principleloanamount + totalinterestpaid

button.addEventListener("click")
    div1.innerHTML = "The loan term is " + loanterm + "The Annual Interest Rate is " + annualinterestrate + "The Monthly Interest Rate is "
    + monthlyinterestrate + "The Principle Loan Amount is " + principleloanamount + "The Total interest paid is "
    + totalinterestpaid + "The Total Loan Cost is " + totalloancost + "The Monthly Payment is " + monthlypayment

let 
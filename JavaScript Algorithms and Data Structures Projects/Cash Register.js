//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

// On going project....

function checkCashRegister(price, cash, cid) {
    
  let cashInDrawer = parseFloat(cid.map(item => item[1])
  .reduce((acc, num) => acc + num, 0)
  .toFixed(2));
  let changeDue = cash - price;

  if((changeDue) > cashInDrawer) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }


  //console.log(test);
  console.log(cashInDrawer);
  
  
  let change;
  return change;
}

let result = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
console.log(result);

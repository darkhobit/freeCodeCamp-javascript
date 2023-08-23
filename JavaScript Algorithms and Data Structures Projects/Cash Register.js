//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

function checkCashRegister(price, cash, cid) {

  let change;    
  let cashInDrawer = parseFloat(cid.map(item => item[1])
  .reduce((acc, num) => acc + num, 0)
  .toFixed(2));
  let changeDue = cash - price;

  if((changeDue) > cashInDrawer) {
    change = {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (changeDue == cashInDrawer) {
    change = {status: "CLOSED", change: cid};
  } else if((changeDue) < cashInDrawer) {
    change = checkChangeForDue(changeDue, cid);
  }

  function checkChangeForDue(changeDue, cid) {
    let drawerArray = cid.map(item => item[1]);
    let referArray = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let dueArray = [];
    let changeDueLeft = changeDue;

    for(let i = drawerArray.length - 1; i >= 0; i--) {
      if(drawerArray[i] == 0) {
        dueArray.unshift(0);
      } else if(referArray[i] > changeDueLeft) {
        dueArray.unshift(0);
      } else if(changeDueLeft/drawerArray[i] > 1) {
        dueArray.unshift(drawerArray[i]);
        changeDueLeft = parseFloat((changeDueLeft - drawerArray[i]).toFixed(2)); 
      } else if(changeDueLeft/drawerArray[i] < 1 && referArray[i] < changeDueLeft) {
        let integerPart = Math.floor(changeDueLeft/referArray[i])*referArray[i];
        dueArray.unshift(integerPart);
        changeDueLeft = parseFloat((changeDueLeft - integerPart).toFixed(2));
      }
    }

    let cashBack = parseFloat(dueArray.reduce((acc, num) => acc + num, 0)
    .toFixed(2));
    if(cashBack < changeDue) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else {
      let cidCash = [];
      let currency = cid.map(item => item[0]);
    
      for(let j = 0; j < dueArray.length; j++) {
        if(dueArray[j] !== 0) {
          cidCash.push([currency[j], dueArray[j]]);
        }
      }
      let returnedChange = cidCash.slice().reverse();
      return {status: "OPEN", change: returnedChange}
    }
 
  }
    
  return change;
}

let result = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
console.log(result);

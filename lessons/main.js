let money=+prompt("Enter ur budget on a month?", "");
let time=prompt('Enter date YYYY-MM-DD', '');
let e1=+prompt('Enter ur expences regular','');
let e2=+prompt('Enter ur expences How much','');

let appData={};
appData.money=money;
appData.time=time;
appData.e1=e2;
appData.optionalExpenses=[e1,e2];
appData.income=[];
appData.savings=false;
alert("Ur budget on a day "+money/30);
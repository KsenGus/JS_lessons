let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
    console.log(money);
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: true
};

function chooseExpenses(){
    let i = 0;
    while(i < 2){
        let type = prompt("Введите обязательную статью расходов в этом месяце"),
        cost = prompt("Во сколько обойдется?");
        if(typeof(type) === 'string' && typeof(type) != null && typeof(cost) != null
        && (type != '') && (cost != '') && (type.length < 50)){
            console.log("Done");
            appData.expenses[type] = cost;
        } else {
            i--;
        }
        i++;
    }
}
chooseExpenses();

function chooseOptExpenses(){
    let i = 0;
    while(i < 3){
        let type = prompt("Статья необязательных расходов");
        if(typeof(type) === 'string' && typeof(type) != null
        && (type != '') && (type.length < 50)){
            console.log("Done");
            appData.optionalExpenses[i + 1] = type;
        } else {
            i--;
        }
        i++;
    }
    console.log(appData.optionalExpenses)
}
chooseOptExpenses();

function detectDayBudget() {                                            // Расчет дневного бюджета
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();


function detectLevel() {                                                // Расчет уровня достатка
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Ошибочка...!");
    }
}
detectLevel();

function checkSavings(){
    if(appData.savings == true){
        let save = prompt("Какова сумма Ваших сбережений?"),
        percent = prompt("Под какой процент?");
        appData.monthIncome = save/100/12 + percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    } 
}
checkSavings();
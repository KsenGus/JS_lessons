let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false
};

let i = 0;
while(i < 2){
    let type = prompt("Введите обязательную статью расходов в этом месяце"),
    cost = prompt("Во сколько обойдется?");
    if(typeof(type) === 'string' && typeof(type) != null && typeof(cost) != null
    && (type != '') && (cost != '') && (type.length < 50)){
        console.log("Done");
        appData.expenses[type] = cost;
    } else {
        i --;
    }
    i++;
}

appData.moneyPerDay = appData.budget / 30;


alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}
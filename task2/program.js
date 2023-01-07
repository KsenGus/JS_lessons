let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        
    },
    optionalExpenses:{

    },
    income: [],
    savings: false
};

let i = 0;
while(i < 2){
    let type = prompt("Введите обязательную статью расходов в этом месяце"),
    cost = prompt("Во сколько обойдется?");
    ((typeof(type) === 'string') && (typeof(type) != null) && (typeof(cost) === 'number') && (typeof(cost) != null)
    && (type != '') && (cost != '') && (type.length < 50)) ?
        
        appData.expenses[type] = cost :
    
        i --;
    i++
    
}

let moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + moneyPerDay);

switch(appData.moneyPerDay){
    case(appData.moneyPerDay <= 400):
        console.log("Ваш достаток ниже прожиточного минимума");
        break;
    
    case(appData.moneyPerDay > 400 && appData.moneyPerDay <= 2000):
        console.log("У Вас средний уровень достатка");
        break;
    
    case(appData.moneyPerDay > 2000):
        console.log("Вам повезло с достатком :)");
        break;
    
    default:
        console.log("Упс... Похоже возникла ошибка");
    
}
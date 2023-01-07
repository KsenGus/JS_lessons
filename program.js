let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let type = prompt("Введите обязательную статью расходов в этом месяце");
let cost = prompt("Во сколько обойдется?")
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        type : cost
    },
    optionalExpenses:{

    },
    income: [],
    savings: false
}
alert(appData.budget/30)
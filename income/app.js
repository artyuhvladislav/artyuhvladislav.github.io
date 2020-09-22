const budgetTitleMonth = document.querySelector('.budget__title--month'),
budgetIncomeValue = document.querySelector('.budget__income--value'),
budgetExpensesValue = document.querySelector('.budget__expenses--value'),
budgetExpensesPercentage = document.querySelector('.budget__expenses--percentage'),
budgetValue = document.querySelector('.budget__value'),
incomeList  = document.querySelector('.income__list'),
expensesList  = document.querySelector('.expenses__list'),
addDescription = document.querySelector('.add__description'),
addValue = document.querySelector('.add__value'),
addBtn = document.querySelector('.add__btn'),
addType = document.querySelector('.add__type'),
itemDelete = document.querySelector('.item__delete');

let currentIncome = 0,
    currentExpense = 0;


// // Initialization function
function init() {
    budgetIncomeValue.textContent = 0;
    budgetExpensesValue.textContent = 0;
    let expensesPercentage = 0;
    budgetExpensesPercentage.textContent = `${expensesPercentage}%`;
    let budgetValueSign = '';
    budgetValue.textContent = `${budgetValueSign}0`;
}
init();
// Get current month function
function getCurrentMonth() {
    const month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[new Date().getMonth()]
}

// // Get final budget function
function getFinalBudget() {
   return Number(budgetIncomeValue.textContent) - Number(budgetExpensesValue.textContent)
}

// // Create list element income/expensive
function createElement(){
   let incArray = [];
   let expArray = [];
   let element;
   if(addType.value === 'inc') {
    element  = `
        <div class="item clearfix" id="income-${currentIncome}">
            <div class="item__description">${addDescription.value}</div>
            <div class="right clearfix">
                <div class="item__value">${addValue.value}</div>
                <div class="item__delete">
                    <button class="item__delete--btn" id = "income-del-${currentIncome}">
                        delete
                    </button>
                </div>
            </div>
        </div>
     `;
    incomeList.insertAdjacentHTML('afterbegin', element);
    currentIncome++;

    budgetIncomeValue.textContent = calcSumIncome();
   } 
   else if(addType.value === 'exp') {
       element = `
       <div class="item clearfix" id="expense-${currentExpense}">
            <div class="item__description">${addDescription.value}</div>
            <div class="right clearfix">
                <div class="item__value">${addValue.value}</div>

                <div class="item__delete">
                    <button class="item__delete--btn"><i class="ion-ios-close-outline" id = "expense-del-${currentExpense}"></i></button>
                </div>
            </div>
        </div>
       `;
    expensesList.insertAdjacentHTML('afterbegin', element);
    currentExpense++;
    
    budgetExpensesValue.textContent = calcSumExpense();
   }
//  Clear description and value incomes and expenses
   addDescription.value = '';
   addValue.value = '';
}


// // Calculate sum of incomes 
function calcSumIncome() {
    let value = Number(budgetIncomeValue.textContent);
    value += Number(addValue.value);
    return value 
} 

// // Calculate sum of Expense
function calcSumExpense() {
    let value = Number(budgetExpensesValue.textContent);
    value += Number(addValue.value);
    return value 
} 

// // Remove element from income/expense list
function removeElement(element) {

        element.addEventListener('click', (e) => {
           
            let targetElement = e.target.id.split('-');
            
            if(targetElement[0] === 'income') {
                idNumber = targetElement[2];
                let number =  +e.target.closest('.right').children[0].textContent;
                let value = Number(budgetIncomeValue.textContent);
                value -= number;
                budgetIncomeValue.textContent = value;
                budgetValue.textContent = getFinalBudget(); 
                document.getElementById(`income-${idNumber}`).remove();
                currentIncome--;
               
            }
            else if(targetElement[0] === 'expense') {
                idNumber = targetElement[2];
                let number =  +e.target.closest('.right').children[0].textContent;
                let value = Number(budgetExpensesValue.textContent);
                value -= number;
                budgetExpensesValue.textContent = value;
                budgetValue.textContent = getFinalBudget(); 
                document.getElementById(`expense-${Number(idNumber)}`).remove();
    
                currentExpense--;
            }
            // e.target.closest('.item__delete').remove()

        });

}
removeElement(incomeList);
removeElement(expensesList);




// Receive month
budgetTitleMonth.textContent = getCurrentMonth();





// // ===== Handlers =====

addBtn.addEventListener('click', () => {
    
    
    createElement();


    // Get final budget
    budgetValue.textContent = getFinalBudget();       
});






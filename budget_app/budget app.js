let budgetinputEl = document.getElementById('budgetInput');
let setbudgetBtn = document.getElementById('setBudgetBtn');
let budgetAmount = document.getElementById('budgetAmount');
let budgetErrMssg = document.getElementById('budgetInputErrMsg');
let addExpenseBtn = document.getElementById("addExpenseBtn");
let budgetTitleEl = document.getElementById('expenseTitleInput');
let expenseAmountEl = document.getElementById('expenseAmountInput');
let budgetTitleErrMssg = document.getElementById('expenseTitleInputErrMsg');
let expenseErrMssg = document.getElementById('expenseAmountInputErrMsg');
let balanceAmount = document.getElementById("balanceAmount");
let expenseAmount = document.getElementById("totalExpensesAmount");
let itemsContainer = document.getElementById('expensesHistory');
let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');

let listItem1 = document.createElement("li");
listItem1.classList.add("d-flex", "flex-row", "mr-5");
itemsContainer.appendChild(listItem1)

let pEle2 = document.createElement("p");
pEle2.textContent = "Expense Title";
pEle2.classList.add("mr-5", "width", "text-left")
listItem1.appendChild(pEle2);

let pEle1 = document.createElement("p");
pEle1.textContent = "Amount Spent";
pEle1.classList.add("width", "text-left")
listItem1.appendChild(pEle1);


setbudgetBtn.addEventListener("click", function(event) {
    if (budgetinputEl.value != "") {
        console.log(budgetinputEl.value)
        console.log(balanceAmount.textContent)
        balanceValue = parseInt(budgetinputEl.value) - parseInt(budgetAmount.textContent)
        budgetAmount.textContent = budgetinputEl.value;
        console.log(balanceValue)
        balanceAmount.textContent = balanceValue + parseInt(balanceAmount.textContent)
        budgetInputErrMsg.textContent = ""
    } else {
        budgetInputErrMsg.textContent = "please Enter Value"
    }
})

addExpenseBtn.addEventListener("click", function(event) {
    if (budgetTitleEl.value != "" && expenseAmountEl.value != "") {
        expenseAmount.textContent = parseInt(expenseAmountEl.value) + parseInt(expenseAmount.textContent)
        balanceAmount.textContent = parseInt(balanceAmount.textContent) - parseInt(expenseAmountEl.value)
        budgetTitleErrMssg.textContent = "";
        expenseAmountInputErrMsg.textContent = "";

        let listItem = document.createElement("li");
        listItem.id = "expense<expenseCount>";
        listItem.classList.add("d-flex", "flex-row", "justify-content-start", "mt-4");

        let title = document.createElement("p");
        title.textContent = budgetTitleEl.value;
        title.classList.add("mr-5", "width", "text-left")
        listItem.appendChild(title);

        let amount = document.createElement("p");
        amount.textContent = expenseAmountEl.value
        amount.classList.add("error-mssg", "mr-5", "width", "text-left");
        listItem.appendChild(amount);

        let deleteIconContainer = document.createElement("div");
        deleteIconContainer.classList.add("delete-icon-container");
        listItem.appendChild(deleteIconContainer);

        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
        deleteIconContainer.appendChild(deleteIcon);

        deleteIcon.onclick = function() {
            itemsContainer.removeChild(listItem);
            balanceAmount.textContent = parseInt(balanceAmount.textContent) + parseInt(amount.textContent);
            expenseAmount.textContent = parseInt(expenseAmount.textContent) - parseInt(amount.textContent);
        };

        itemsContainer.appendChild(listItem);

    } else if (budgetTitleEl.value === "") {
        budgetTitleErrMssg.textContent = "Enter value";
        expenseAmountInputErrMsg.textContent = "";
    } else if (expenseAmountEl.value === "") {
        expenseAmountInputErrMsg.textContent = "Enter value";
        budgetTitleErrMssg.textContent = "";
    }
});

budgetinputEl.addEventListener("change", function() {
    if (budgetinputEl.value === "") {
        budgetInputErrMsg.textContent = "please Enter Value";
    } else {
        budgetInputErrMsg.textContent = "";
    }
});

budgetTitleEl.addEventListener("change", function() {
    if (budgetTitleEl.value === "") {
        budgetTitleErrMssg.textContent = "Enter value";
    } else {
        budgetTitleErrMssg.textContent = "";
    }
});

expenseAmountEl.addEventListener("change", function() {
    if (expenseAmountEl.value === "") {
        expenseAmountInputErrMsg.textContent = "Enter value";
    } else {
        expenseAmountInputErrMsg.textContent = "";
    }
});
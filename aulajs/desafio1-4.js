const user = {
    name: "Maria das Graças",
    transactions: [],
    balance: 0
};

function createTransaction(pTransaction) {
    user.transactions.push(pTransaction);
    
    if (pTransaction.type == "credit") {
        user.balance = (user.balance + pTransaction.value);
    } else {
        user.balance = (user.balance - pTransaction.value);
    }
};

function getHigherTransactionByType(transactionType) {
    let higherTransactionFounded = 0;
    let position = 0;

    for ( i = 0; i < user.transactions.length; i++ ) {
        if (user.transactions[i].type == transactionType && user.transactions[i].value > higherTransactionFounded) {
            higherTransactionFounded = user.transactions[i].value;
            position = i;
        }
    }

    return position;
}

function getAverageTransactionValue(){
    let sumTransactions = 0;

    for (let average of user.transactions){
        sumTransactions = (sumTransactions + average.value);
    }
    return (sumTransactions / user.transactions.length).toFixed(2);
}

function getTransactionsCount() {
    let creditCount = 0;
    let debitCount = 0;
    user.transactionsCount = [];
    
    for (let transaction of user.transactions){
        if (transaction.type == "credit"){
            creditCount = (creditCount + 1);
        } else {
            debitCount = (debitCount + 1);
        }
    };
    
    user.transactionsCount.push(
        {
            credit: creditCount,
            debit: debitCount
        }
    )

    return user.transactionsCount
};

const transactions = [
    {
        type: "credit",
        value: 50
    },
    {
        type: "credit",
        value: 120
    },
    {
        type: "debit",
        value: 80
    },
    {
        type: "debit",
        value: 30
    }
];

for (let transaction of transactions){
    createTransaction(transaction);
};

console.log(`Client: ${user.name}\nBalance: $${user.balance.toFixed(2)}`);
console.log(user.transactions[getHigherTransactionByType("credit")]);
console.log(user.transactions[getHigherTransactionByType("debit")]);
console.log(`The average transaction was: $${getAverageTransactionValue()}`)
console.log(getTransactionsCount());


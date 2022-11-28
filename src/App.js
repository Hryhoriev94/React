import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";
function App() {
    let data = [];
    let newData = [];
    if(window.localStorage.getItem('expenses')) {
       data = JSON.parse(window.localStorage.getItem('expenses'));
       data.forEach(el => {
           if(el.title && el.amount && el.date && el.id ) {
               newData.push({title: el.title, amount: el.amount, date: new Date(el.date), id: el.id});
           }
       })
    }


    const DUMMY_EXPENSES = newData.length > 0 ? newData : [];

    const deleteItemHandler = (element) => {
        const arr = expenses.filter(expense => expense.id !== element.id);
        setExpenses(() => arr)
        window.localStorage.setItem('expenses', JSON.stringify(arr));
    }

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpense =>  {return [expense, ...prevExpense]})
        if(JSON.parse(window.localStorage.getItem('expenses')).length > 0 ) {
            window.localStorage.setItem('expenses', JSON.stringify([expense, ...JSON.parse(window.localStorage.getItem('expenses'))]));
        } else {
            window.localStorage.setItem('expenses', JSON.stringify([expense]));
        }
    }

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses} onDeleteItemHandler={deleteItemHandler}/>
    </div>
  );
}

export default App;

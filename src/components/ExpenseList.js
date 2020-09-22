import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../redux/selectors/expenses";

//SHOW DATA
export const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    {props.expenses.length === 0 ? (
      <p>No Expense</p>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

//GET DATA FROM STATE
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

//HIGHER ORDER COMPONENT FOR REACT_REDUX
export default connect(mapStateToProps)(ExpenseList);

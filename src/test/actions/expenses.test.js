import {
  addExpense,
  editExpense,
  removeExpense,
} from "../../redux/actions/expenses";

test("should setup remove expense action object ", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup Edit expense action object ", () => {
  const action = editExpense("123abc", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New note value",
    },
  });
});

test("should setup add expense action object ", () => {
  const expenseData = {
    description: "rent",
    amount: 103343,
    createdAt: 1000,
    note: "last month rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense action object with default", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",

    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});

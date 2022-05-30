import ACTIONS from "./actions";
//计算结果
const evaluate = (state) => { 
  let { lastOperand, currentOperand, operation } = state;
  let last = parseFloat(lastOperand);
  let current = parseFloat(currentOperand);

  let res = "";
  switch (operation) {
    case "+":
      res = last + current;
      break;
    case "-":
      res = last - current;
      break;
    case "x":
      res = last * current;
      break;
    case "÷":
      res = last / current;
  }
  return res.toString();
};

const reducer = (
  state = {
    currentOperand: "",
    lastOperand: "",
    operation: "",
  },
  action
) => {
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      if (state.currentOperand === "0" && action.digit === "0") return state;
      if (state.currentOperand === "0" && action.digit !== ".")
        return {
          ...state,
          currentOperand: action.digit,
        };
      if (action.digit === "." && state.currentOperand.includes("."))
        return state;
      if (action.digit === "." && state.currentOperand === "")
        return {
          ...state,
          currentOperand: "0.",
        };
      return {
        ...state,
        currentOperand: state.currentOperand + action.digit,
      };

    case ACTIONS.DELETE_DIGIT:
      if (state.currentOperand === "") return state;
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.CHOOST_OPERATION:
      if (state.lastOperand === "" && state.currentOperand === "") return state;
      if (state.lastOperand === "")
        return {
          ...state,
          lastOperand: state.currentOperand,
          operation: action.operation,
          currentOperand: "",
        };
      if (state.currentOperand === "")
        return {
          ...state,
          operation: action.operation,
        };
      return {
        ...state,
        lastOperand: evaluate(state),
        operation: action.operation,
        currentOperand: "",
      };
    default:
      return state;
  }
};

export default reducer;

const initialState = {
  excelData: null, // Initial state for the uploaded Excel data
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_EXCEL_DATA":
      return {
        ...state,
        excelData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

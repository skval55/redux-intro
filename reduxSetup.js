const INITIAL_STATE = { mood: "(._.)" };

function moodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      return { ...state, mood: "＼(＾O＾)／" };
    case "GROSS":
      return { ...state, mood: "۞_۞" };
    case "HUNGRY":
      return { ...state, mood: "(◉۝◉)" };
    case "SHOOK":
      return { ...state, mood: "∙̆.̯∙̆" };
  }
}

const store = Redux.createStore(moodReducer);

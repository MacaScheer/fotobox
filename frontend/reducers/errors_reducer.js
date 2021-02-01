import { combineReducers } from "redux";

import session from "./session_errors_reducer";
import comment from "./comments_errors_reducer";

export default combineReducers({
  session,
  comment
});

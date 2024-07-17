import { combineReducers } from "./combineReducers";
import { dataReducers, formReducers, userReducers } from "./reducers";

export const rootReducers = combineReducers({
  formReducers,
  userReducers,
  dataReducers,
});

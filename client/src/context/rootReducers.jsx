import { combineReducers } from "./combineReducers";
import { dataReducers, formReducers, userReducers } from "./reducers";

export const rootReducers = combineReducers({
  form: formReducers,
  user: userReducers,
  data: dataReducers,
});

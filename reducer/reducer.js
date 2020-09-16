import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as films} from "./films/films.js";
import {reducer as user} from "./user/user.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.FILMS]: films,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});

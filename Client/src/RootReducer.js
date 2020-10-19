import { combineReducers } from "redux";
import filteredDataChunksReducer from "./reducers/filteredDataChunks/filteredDataChunksReducer";
import loadDataChunksReducer from "./reducers/loadDataChunks/loadDataChunksReducer";
import totalCountReducer from "./reducers/totalCount/totalCountReducer";

import raceFilterReducer from "./reducers/filters/race/raceFilterReducer";
import ageFilterReducer from "./reducers/filters/age/ageFilterReducer";
import offenseFilterReducer from "./reducers/filters/offense/offenseFilterReducer";
import yearFilterReducer from "./reducers/filters/year/yearFilterReducer";
import categoryFilterReducer from "./reducers/filters/category/categoryFilterReducer";
import sexFilterReducer from "./reducers/filters/sex/sexFilterReducer";
import boroughFilterReducer from "./reducers/filters/borough/boroughFilterReducer";
import filteredDataReducer from "./reducers/filteredData/filteredDataReducer";

const RootReducer = combineReducers({
  // General data states
  filteredDataReducer: filteredDataReducer,
  filteredDataChunksReducer: filteredDataChunksReducer,
  loadDataChunksReducer: loadDataChunksReducer,
  totalCountReducer: totalCountReducer,

  // Filters
  yearFilterReducer: yearFilterReducer,
  categoryFilterReducer: categoryFilterReducer,
  offenseFilterReducer: offenseFilterReducer,
  ageFilterReducer: ageFilterReducer,
  raceFilterReducer: raceFilterReducer,
  sexFilterReducer: sexFilterReducer,
  boroughFilterReducer: boroughFilterReducer,
});

export default RootReducer;

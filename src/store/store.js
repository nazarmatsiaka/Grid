import { createStore, combineReducers } from "redux";

import table from '../reducers/table';
import users from '../reducers/users';
import activeColumn from '../reducers/activeColumn';

import defaultStore from './defaultStore';

const rootReducer = combineReducers({
    table: table,
    users: users,
    activeColumn: activeColumn
});

export default () => createStore(rootReducer, defaultStore);

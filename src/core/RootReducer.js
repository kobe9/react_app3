import {combineReducers} from 'redux'

import app from '../components/App/redux/reducer';
import counter from '../components/Counter/redux/reducer';

export default combineReducers({
    app,
    counter,
})
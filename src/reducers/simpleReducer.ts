import { Action } from "../actions/simpleAction";

export default (state = {}, action: Action) => {
	switch (action.type) {
	 case 'SIMPLE_ACTION':
		return {
		 result: action.payload
		}
	 default:
		return state
	}
 }
import { Dispatch } from 'redux';

export const simpleAction = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action'
  });
};

export type Action = {
	type: any,
	payload: any
}
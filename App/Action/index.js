import { SERVER_URL } from '../Helpers/Constants';

export const FETCHIMAGE = 'fetchImage';
export const fetchImage = () => async (dispatch, getState, api) => {
  const res = await api.get(SERVER_URL + 'f3596a5ab644ac0c9976672f8e04312f6d243af491834b914206d3443e07d412');
  dispatch({
    type: FETCHIMAGE,
    payload: res.data
  });
};
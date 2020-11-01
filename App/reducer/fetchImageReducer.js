import { FETCHIMAGE } from '../Action';

// Reducer for fetching Current User
export default function (state = null, actions) {
  switch (actions.type) {
    case FETCHIMAGE:
      return actions.payload || false;
      default:
    return state;
  }
}

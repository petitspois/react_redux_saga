import { take, put, call, fork, select } from 'redux-saga/effects';
import { api } from '../services'
import * as actions from '../actions'
import { getUser } from '../reducers/selectors'

const { user } = actions



// resuable fetch Subroutine
// entity :  user | repo | starred | stargazers
// apiFn  : api.fetchUser | api.fetchRepo | ...
// id     : login | fullName
// url    : next page url. If not provided will use pass it to apiFn
function* fetchEntity(entity, apiFn, id, url) {
  yield put( entity.request(id) )
  const {response, error} = yield call(apiFn, url || id);
  if(response)
    yield put( entity.success(id, response) )
  else
    yield put( entity.failure(id, error) )
}


export const fetchUser = fetchEntity.bind(null, user, api.fetchUser);

// load user unless it is cached
function* loadUser(login) {
    yield call(fetchUser, login)
}

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

// Fetches data for a User : user data + starred repos
function* watchLoadUserData() {
  while(true) {
    const {login} = yield take(actions.LOAD_USER_PAGE)
    yield fork(loadUser, login)
  }
}




export default function* root() {
  yield fork(watchLoadUserData)
}
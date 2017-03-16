const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

//const
function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`
		return acc
	}, {})
}

export const USER = createRequestTypes('USER')

export const LOAD_USER_PAGE = 'LOAD_USER_PAGE'

//actions
function action(type, payload = {}) {
  return {type, ...payload}
}


export const user = {
  request: login => action(USER.REQUEST, {login}),
  success: (login, response) => action(USER.SUCCESS, {login, response}),
  failure: (login, error) => action(USER.FAILURE, {login, error}),
}


export const loadUserPage = (login) => action(LOAD_USER_PAGE, {login})
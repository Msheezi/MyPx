

import * as UserApiUtil from '../util/user_api_util'

export const RECEIVE_USERS = 'RECEIVE_USERS'

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const fetchAllUsers = () => dispatch => (
    UserApiUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
)
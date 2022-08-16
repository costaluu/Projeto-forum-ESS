import { createAction, createReducer, on, props } from '@ngrx/store'
import { User } from 'src/types'

export interface AppState {
    logged: boolean
    user: User
    newsCount: number
    usersCount: number
}

export const appInitialState: AppState = {
    logged: false,
    user: {
        id: '',
        name: '',
        type: 1,
    },
    newsCount: 0,
    usersCount: 0,
}

export const changeUserLoggedStatus = createAction('[APP] Change login status of the user', props<Boolean>())
export const changeUserInfo = createAction('[APP] Change user info', props<{ payload: User }>())

export const appReducer = createReducer(
    appInitialState,
    on(changeUserLoggedStatus, (currentState, actions) => {
        currentState = {
            ...currentState,
            logged: actions.valueOf(),
        }

        return currentState
    }),
    on(changeUserInfo, (currentState, actions) => {
        currentState = {
            ...currentState,
            user: actions.payload,
        }

        return currentState
    })
)

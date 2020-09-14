import {Map, fromJS} from 'immutable';
import {profileConfig} from '../config/profile'

const immutableProfile = fromJS(profileConfig)

const profileReducer = (state = immutableProfile, action) => {
    switch(action.type){
        case 'MODIFY':
            const updatedProfile = action.payload(state)
    }
}
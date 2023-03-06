import { exp } from "react-native-reanimated";
import createDataContext from "./createDataContext";
import trackApi from '../api/tracker'

const authReducer = (state, action) => {
 
    switch (action.type) {
        default:
            return state;
    } 
};

const signup = (dispatch) => {
    return ({email, password}) => {

        //make api sign uprequest 
         


        //if we sign up, modify our stage,and say that we are authentifiés


        //if sign up fails
    };
};

const signin = (dispatch) => {
    return ({email, password}) => {

        //try to sign in

        //handle success by updating stage

        //handle failure

    };
};

const signout = (dispatch) => {
    return() => {

    };
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup},
    {isSignedIn: false}
);
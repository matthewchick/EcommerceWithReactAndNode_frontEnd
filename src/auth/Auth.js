
import { API } from '../config';

export const signup = (user) => {
    // console.log(user.name, user.email, user.password);
    // use return before fetch otherwise TypeError: Cannot read property 'then' of undefined
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
};

export const signin = (user) => {
    console.log(user.email, user.password);
    // use return before fetch otherwise TypeError: Cannot read property 'then' of undefined
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
};
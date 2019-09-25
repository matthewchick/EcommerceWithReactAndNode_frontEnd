
import { API } from '../config';

// here next is callback function
export const authenticate = (data, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        next();
    }
}
// use next callback function to redirect to another page
export const signout = (next) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        next();
        return fetch(`${API}/signout`, {
            method: "GET"
        })
        .then(response => {
            console.log('signout', response);
        })
        .catch(err => {
            console.log(err);
        })
    }
}

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

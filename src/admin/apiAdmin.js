import { API } from '../config';

export const createCategory = (userID, token, category) => {
    // console.log(user.name, user.email, user.password);
    // use return before fetch otherwise TypeError: Cannot read property 'then' of undefined
    return fetch(`${API}/category/create/${userID}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
};

import { API } from '../config';

export const createCategory = (userId, token, category) => {
    // console.log(user.name, user.email, user.password);
    // use return before fetch otherwise TypeError: Cannot read property 'then' of undefined
    return fetch(`${API}/category/create/${userId}`, {
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

export const createProduct = (userId, token, product) => {
    // console.log(user.name, user.email, user.password);
    // use return before fetch otherwise TypeError: Cannot read property 'then' of undefined
    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product    //post form data of product
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
    .then(response => {
        //console.log('Categories', response.json());
        return response.json();
    })
    .catch(err => {
        console.log(err);
    });
};
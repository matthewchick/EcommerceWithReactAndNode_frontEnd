import { API } from '../config';

export const getProducts = (sortBy) => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    })
    .then(response => {
        //console.log('Categories', response.json());
        return response.json();
    })
    .catch(err => console.log(err));
};


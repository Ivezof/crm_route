import { getPagination } from "header-pagination";
const api_url = 'http://localhost:3000';

const getPayments = async () => {
    return fetch(api_url + "/payments")
    .then(response => response.json());
}

const getOrders = async (limit) => {
    const response = await fetch(api_url + `/orders?_limit=${limit}`);
    return await response.json();
}

const getOrdersClient = async (clientId) => {
    const response = await fetch(api_url + `/orders?client_id=${clientId}`);
    return await response.json();
}

const getClient = async (id) => {
    const response = await fetch(api_url + `/clients/${id}`);
    return await response.json();
}

const getClients = async (limit, filter, page) => {
    const response = await fetch(api_url + `/clients?_limit=${limit}&q=${filter}&_page=${page}`);
    let pagination = {first: 1, next: 1, last: 1}; 
    if (response.headers.get('Link')) {
        pagination = getPagination(response.headers);
    }
    console.log(pagination);
    const json = await response.json();
    return {clients: json, pagination: pagination};
}

const addClient = async (user) => {
    try {
        const response = await fetch(api_url + `/clients`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: user
        });
        const result = response.status;
        return result == 201 ? true: false
    } catch (error) {
        return false;
    }
    
    
}

const deleteElem = async (id, dbName) => {
    const response = await fetch(api_url + `/${dbName}/${id}`, {
        method: "DELETE",
    })
    const result = response.status;
    console.log(result);
    return result == 200 ? true: false
}

export { getPayments, getOrders, getClient, getClients, getOrdersClient, addClient, deleteElem }
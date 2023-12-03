const api_url = 'http://localhost:3000';

const getPayments = async () => {
    return fetch(api_url + "/payments")
    .then(response => response.json());
}

export { getPayments }
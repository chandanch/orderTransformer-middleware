const fetch = require('node-fetch');

const get = async (url) => {
    try {
        console.log('get called');
        const response = await fetch(url, {method: 'get'});
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw(error);
    }
}

module.exports = {
    get
}
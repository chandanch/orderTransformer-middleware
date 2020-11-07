const httpService = require('../services/http.service');

const checkHealth = async () => {
    try {
        const asyncData = await httpService.get('https://api.github.com/users/github');
        // console.log('Async data',asyncData);
    return asyncData;
    } catch (error) {
        throw(error)
    }
}

module.exports = {
    checkHealth
}
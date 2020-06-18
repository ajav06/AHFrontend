const url = 'http://192.168.0.103:8000/api/';
let token = String(Cookies.get('csrftoken'));

function loginScript(keys) {
    return axios
            .post(url + 'auth/token/login', {
                username: keys.username.toLowerCase(),
                password: keys.password
            })
};

function registerScript(keys) {
    return axios
            .post(url + 'auth/register/', {
                username: keys.username.toLowerCase(),
                password: keys.password
            })
};

var http = axios.create({
    baseURL: 'http://192.168.0.103:8000/api/',
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'Token ' + token
    }
});

export {
    http,
    loginScript,
    registerScript
}
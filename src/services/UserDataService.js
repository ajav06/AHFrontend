import {http, loginScript, registerScript } from '../assets/http-common'

class UserDataService {
    login(data){
        return loginScript(data);
    }

    logout(){
        return http.post('auth/token/logout', {});
    }

    register(data){
        return registerScript(data);
    }

    get() {
        return http.get('player/');
    }

    table(){
        return http.get('player/table/');
    }

    card(index){
        return http.get('player/card/'+index+'/');
    }
}

export default new UserDataService();
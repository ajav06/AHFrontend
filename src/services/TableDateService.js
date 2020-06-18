import {http} from '../assets/http-common'

class TableDataService {
    create(){
        return http.post('table/', {});
    }

    get(id){
        return http.get('table/'+id+'/')
    }

    update(id){
        return http.put('table/'+id+'/',{});
    }

    init(id){
        return http.get('table/init/'+id+'/');
    }

    setBlack(id){
        return http.get('table/black-card/'+id+'/');
    }

    setCads(id){
        return http.get('table/white-cards/'+id+'/');
    }
    
};

export default new TableDataService();
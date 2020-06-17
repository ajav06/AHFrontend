import {http} from '../assets/http-common'

class TableDataService {
    create(){
        return http.post('table/', {});
    }

    get(id){
        return http.get('table/'+id)
    }

    init(id){
        return http.get('table/whites-card/'+id);
    }

    update(id){
        return http.put('table/'+id+'/',{});
    }
};

export default new TableDataService();
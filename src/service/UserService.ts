import BaseService from "./BaseService";

class UserService extends BaseService {
    private tableName = ''

    constructor (tableName:string) {
        super();
        this.tableName = tableName;
    }

    public static async  insert(data:any) {
        return new Promise((resolve,reject) => {
            return resolve({
                id: 1
            })
        })
    }
}

export default UserService;


import validator from 'validator';
import Lang from './lang';

interface IerrorItem {
    field: string,
    message: string,
}

export interface validateResult {
    pass: boolean,
    errors: IerrorItem[],
    message: string
}

export interface IRule {
    field: string,
    method: 'isEmpty' | 'isMobilePhone'
}

class BaseValidator {
    protected pass = true;

    protected errors: IerrorItem[] = []


    public getPass() {
        return this.pass;
    }

    public getErrors () {
        return this.errors
    }

    public getMessage (){
        return this.errors[0].message
    }
    
    public check(data, rules: IRule[]) {
        this.pass = true;
        this.errors = [];
        
        return new Promise((resolve, reject) => {
            for (let rule of rules) {
                this[rule.method](data, rule.field)
            }
            if (this.pass) {                
                return resolve(true)
            } else {
                reject({
                    message: this.getMessage(),
                    errors: this.errors
                })
            }
        })
    }

    
    public isMobilePhone(data, field = 'phone') {
        if (!validator.isMobilePhone(data[field] ? data[field].toString() : '', 'zh-CN')) {            
            this.pass = false;
            this.errors.push({
                field: field,
                message: `${Lang[field]}校验不通过`
            })
        }
    }

    public isEmpty(data, field = 'name') {
        
        if (validator.isEmpty(data[field] ? data[field].toString() : '')) {
            this.pass = false;
            this.errors.push({
                field: field,
                message: `${Lang[field]}不能为空`
            })
        }
    }
}

export default BaseValidator;
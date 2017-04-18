export class Data {

    constructor(//personal data
                public id: number,
                public first_name: string,
                public last_name: string,
                public birthday: string,
                public gender: string,
                public doc_type: string,
                public doc_num: string,
                //patient address
                public city: string,
                public pc: string,
                public address: string,
                //contact data
                public email: string,
                public phone: string,) {
    }

}

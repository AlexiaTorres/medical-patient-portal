export class Data {

    constructor(// personal data
                public id: number,
                public first_name: string,
                public last_name: string,
                public birthday: string,
                public gender: string,
                public doc_type: string,
                public doc_num: string,
                // patient address
                public country: string,
                public city: string,
                public county: string,
                public pc: string,
                public ad1: string,
                public ad2: string,
                // contact data
                public phone_type_1: string,
                public phone_type_2: string,
                public phone_1: string,
                public phone_2: string,
                public email: string
    ) {
    }

}

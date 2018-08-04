import 'angular';

class phoneAppController {
    phones: Array<{name: string}>;
    constructor(){
        this.phones = [
            {
                name: 'MI'
            }, {
                name: 'iPhone'
            }, {
                name: 'SUMSUNG'
            }
        ];
    }
}

export default phoneAppController;
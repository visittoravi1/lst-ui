import {Analysis} from './analysis';

export class App {
    private _name: string;
    private _analysis: Analysis;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get analysis(): Analysis {
        return this._analysis;
    }

    set analysis(value: Analysis) {
        this._analysis = value;
    }
}

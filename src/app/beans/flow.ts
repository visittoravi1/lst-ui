import {App} from './app';
import {Analysis} from './analysis';
import {Timeline} from './timeline';

export class Flow {
    private _name: string;
    private _apps: App[];
    private _analysis: Analysis;
    private _timelines: Timeline[];

    constructor(name: string) {
        this._name = name;
        this._apps = [];
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get apps(): App[] {
        return this._apps;
    }

    set apps(value: App[]) {
        this._apps = value;
    }

    get analysis(): Analysis {
        return this._analysis;
    }

    set analysis(value: Analysis) {
        this._analysis = value;
    }

    get timelines(): Timeline[] {
        return this._timelines;
    }

    set timelines(value: Timeline[]) {
        this._timelines = value;
    }
}

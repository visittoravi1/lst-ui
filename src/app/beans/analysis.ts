export class Analysis {

    private _start: Date;
    private _end: Date;
    private _sum: number;
    private _min: number;
    private _max: number;
    private _average: number;
    private _count: number;

    constructor() {
        this._sum = 0;
        this._min = 0;
        this._max = 0;
        this._average = 0;
    }

    get start(): Date {
        return this._start;
    }

    set start(value: Date) {
        this._start = value;
    }

    get end(): Date {
        return this._end;
    }

    set end(value: Date) {
        this._end = value;
    }

    get sum(): number {
        return this._sum;
    }

    set sum(value: number) {
        this._sum = value;
    }

    get min(): number {
        return this._min;
    }

    set min(value: number) {
        this._min = value;
    }

    get max(): number {
        return this._max;
    }

    set max(value: number) {
        this._max = value;
    }

    get average(): number {
        return this._average;
    }

    set average(value: number) {
        this._average = value;
    }

    get count(): number {
        return this._count;
    }

    set count(value: number) {
        this._count = value;
    }
}

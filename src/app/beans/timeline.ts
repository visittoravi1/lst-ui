export class Timeline {

    private _start: Date;
    private _end: Date;
    private _timeInMillis: number;

    constructor(start: Date, end?: Date) {
        this._start = start;
        this._end = end;
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

    get timeInMillis(): number {
        return this._timeInMillis;
    }

    set timeInMillis(value: number) {
        this._timeInMillis = value;
    }

    public calculateTimeInMillis(): void {
        if (this.start && this.end) {
            this.timeInMillis = this.end.getMilliseconds() - this.start.getMilliseconds();
        }
    }
}

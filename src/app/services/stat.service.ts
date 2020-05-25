import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Timeline} from '../beans/timeline';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StatService {

    constructor(private httpClient: HttpClient) { }

    public getTimeLines(flow: string): Observable<Timeline[]> {
        return this.httpClient.get(environment.apiUrl + '/stat?flow='+flow).pipe(map(this.createTimeLines))
    }

    private createTimeLines(data: any[]): Timeline[] {
        const idMap = new Map<string, Timeline>();
        data.forEach((val) => {
            const timeline = idMap.get(val.id);
            if(timeline) {
                const receivedOn = new Date(val.receivedOn);
                if (timeline.start.getMilliseconds() > receivedOn.getMilliseconds()) {
                    timeline.start = receivedOn;
                }
                if (!timeline.end || timeline.end.getMilliseconds() < receivedOn.getMilliseconds()) {
                    timeline.end = receivedOn;
                }
                idMap.set(val.id, timeline);
            } else {
                idMap.set(val.id, new Timeline(new Date(val.receivedOn)));
            }
        });
        const timelines = Array.from(idMap.values())
        timelines.forEach((timeline) => timeline.calculateTimeInMillis());
        return timelines;
    }
}

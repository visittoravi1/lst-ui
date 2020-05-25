import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {Flow} from '../beans/flow';
import {map} from 'rxjs/operators';
import {App} from '../beans/app';
import {Analysis} from '../beans/analysis';

@Injectable({
    providedIn: 'root'
})
export class AnalysisService {

    constructor(private httpClient: HttpClient) { }

    public getAnalysis(flowName?: string): Observable<Flow[]> {
        return this.httpClient.get(environment.apiUrl + '/analysis?flow=' + (flowName ? flowName : ''))
            .pipe(map((response) => this.processFlow(response)));
    }

    private processFlow(data: any): Flow[] {
        const flows = [];
        Object.keys(data).forEach(name => {
            const flow = new Flow(name);
            Object.keys(data[name]).forEach(appName => {
                const app = new App(appName);
                app.analysis = this.createAnalysis(data[name][appName]);
                flow.apps.push(app);
            });
            this.createFlowAnalysis(flow);
            flows.push(flow);
        });
        return flows;
    }

    private createAnalysis(data: any): Analysis {
        const analysis = new Analysis();
        analysis.sum = data.sum;
        analysis.count = data.count;
        analysis.average = data.average;
        analysis.min = data.min;
        analysis.max = data.max;
        analysis.start = new Date(data.range.start);
        analysis.end = new Date(data.range.end);
        return analysis;
    }

    private createFlowAnalysis(flow: Flow): void {
        const analysis = new Analysis();
        flow.apps.map(a => a.analysis).forEach(a => {
            analysis.sum = analysis.sum + a.sum;
            analysis.average = analysis.average + a.average;
            analysis.min = analysis.min + a.min;
            analysis.max = analysis.max + a.max;
            if (!analysis.start || analysis.start.getMilliseconds() > a.start.getMilliseconds()) {
                analysis.start = a.start;
            }
            if (!analysis.end || analysis.end.getMilliseconds() < a.end.getMilliseconds()) {
                analysis.end = a.end;
            }
        });
        flow.analysis = analysis;
    }
}

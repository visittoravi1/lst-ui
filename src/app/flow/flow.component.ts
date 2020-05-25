import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AnalysisService} from '../services/analysis.service';
import {Flow} from '../beans/flow';

@Component({
    selector: 'app-flow',
    templateUrl: './flow.component.html',
    styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

    flow: Flow;

    constructor(private route: ActivatedRoute, private analysisService: AnalysisService) {
        const flowName = this.route.snapshot.paramMap.get('name');
        this.getFlowAnalysis(flowName);
    }

    ngOnInit(): void {
    }

    private getFlowAnalysis(flowName: string): void {
        this.analysisService.getAnalysis(flowName).subscribe(flows => {
           if (flows.length === 1) {
               this.flow = flows[0];
               console.log(this.flow);
           }
        });
    }

}

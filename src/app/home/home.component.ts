import { Component, OnInit } from '@angular/core';
import {Flow} from '../beans/flow';
import {AnalysisService} from '../services/analysis.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    flows: Flow[];

    constructor(private analysisService: AnalysisService, private route: Router) {
        this.flows = [];
    }

    ngOnInit(): void {
        this.analysisService.getAnalysis().subscribe(data => {
            this.flows = data;
        });
    }

    goToFlow(flowName: string) {
        this.route.navigate(['flow', flowName]);
    }

}

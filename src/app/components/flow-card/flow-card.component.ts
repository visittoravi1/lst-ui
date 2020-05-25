import {Component, Input, OnInit, Output} from '@angular/core';
import {Flow} from '../../beans/flow';
import {StatService} from '../../services/stat.service';
import {ChartType} from 'angular-google-charts';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-flow-card',
    templateUrl: './flow-card.component.html',
    styleUrls: ['./flow-card.component.scss']
})
export class FlowCardComponent implements OnInit {

    @Input() flow: Flow;
    @Output() flowClicked: Subject<string> = new Subject<string>();

    chart: any;

    constructor(private statService: StatService) { }

    ngOnInit(): void {
        this.createChart();
    }

    percent(num): string {
        return (num / (this.flow.analysis.max) * 100).toFixed();
    }

    private createChart() {
        this.statService.getTimeLines(this.flow.name).subscribe(timelines => {
            this.flow.timelines = timelines
            this.chart = {
                title: 'Events',
                type: ChartType.LineChart,
                data: this.flow.timelines.map(timeline => [timeline.start, timeline.timeInMillis]),
                options: {
                    hAxis: {
                        title: 'Timestamp',
                        format: 'mm:ss'
                    },
                    vAxis: {
                        title: 'Time in millis'
                    }
                }
            };
        });
    }

    onFlowClicked() {
        this.flowClicked.next(this.flow.name);
    }
}

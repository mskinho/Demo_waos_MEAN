import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-charts-section',
  templateUrl: './ngx-charts-section.component.html',
  styleUrls: ['./ngx-charts-section.component.scss']
})
export class NgxChartsSectionComponent implements OnInit {

  view: any[];
  width: number = 700;
  height: number = 300;
  colorScheme: any;
  schemeType: string = 'ordinal';
  gradient = false;
  tooltipDisabled = false;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  legendTitle = 'Legend';
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;


  // gauge
  gaugeMin: number = 0;
  gaugeMax: number = 100;
  gaugeLargeSegments: number = 10;
  gaugeSmallSegments: number = 5;
  gaugeTextValue: string = '';
  gaugeUnits: string = 'alerts';
  gaugeAngleSpan: number = 240;
  gaugeStartAngle: number = -120;
  gaugeShowAxis: boolean = true;
  gaugeValue: number = 50; // linear gauge value
  gaugePreviousValue: number = 70;

  // margin
  margin: boolean = false;
  marginTop: number = 40;
  marginRight: number = 40;
  marginBottom: number = 40;
  marginLeft: number = 40;

  multi = [
  {
    name: 'Germany',
    series: [
      {
        name: '2010',
        value: 40632
      },
      {
        name: '2000',
        value: 36953
      },
      {
        name: '1990',
        value: 31476
      }
    ]
  },
  {
    name: 'USA',
    series: [
      {
        name: '2010',
        value: 49737
      },
      {
        name: '2000',
        value: 45986
      },
      {
        name: '1990',
        value: 37060
      }
    ]
  },
  {
    name: 'France',
    series: [
      {
        name: '2010',
        value: 36745
      },
      {
        name: '2000',
        value: 34774
      },
      {
        name: '1990',
        value: 29476
      }
    ]
  },
  {
    name: 'United Kingdom',
    series: [
      {
        name: '2010',
        value: 36240
      },
      {
        name: '2000',
        value: 32543
      },
      {
        name: '1990',
        value: 26424
      }
    ]
  }
];

single = [
  {
    name: 'Germany',
    value: 40632
  },
  {
    name: 'USA',
    value: 49737
  },
  {
    name: 'France',
    value: 36745
  },
  {
    name: 'United Kingdom',
    value: 36240
  },
  {
    name: 'Spain',
    value: 33000
  },
  {
    name: 'Italy',
    value: 35800
  }
];


  constructor() { }

  ngOnInit() {
    this.view = [this.width, this.height];
    this.colorScheme =   {
      name: 'cool',
      selectable: true,
      group: 'Ordinal',
      domain: [
        '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
      ]
    }
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  select(data) {
    console.log('Item clicked', data);
  }

}

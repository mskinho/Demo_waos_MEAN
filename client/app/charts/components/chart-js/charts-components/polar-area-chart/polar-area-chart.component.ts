import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.scss']
})
export class PolarAreaChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.randomize();
  }

  // PolarArea
  public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend:boolean = true;

  public polarAreaChartType:string = 'polarArea';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


    public randomize():void {
    // Only Change 3 values
    setTimeout(() => {
      let index = Math.round(Math.random() * 4);
      let radomVal = Math.round(Math.random() * 300);
      let data = JSON.parse(JSON.stringify(this.polarAreaChartData));
      data[index] =  radomVal;
      this.polarAreaChartData = data;
      this.randomize();
      /**
       * (My guess), for Angular to recognize the change in the dataset
       * it has to change the dataset variable directly,
       * so one way around it, is to clone the data, change it and then
       * assign it;
       */
    },1500);
  }

}

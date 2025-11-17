import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ThemeService } from '../../services/theme.service';
import { darkTheme, lightTheme } from '../../shared/highchart-theme';


@Component({
  selector: 'app-tab-1',
  templateUrl: './tab-1.component.html',
  styleUrl: './tab-1.component.scss'
})
export class Tab1Component implements OnInit {
  Highcharts: typeof Highcharts = Highcharts; // required
  chartInstances: Highcharts.Chart[] = [];
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chart1Options: Highcharts.Options | null = null; // required
  chart2Options: Highcharts.Options | null = null; // required
  chart3Options: Highcharts.Options | null = null; // required
  chart4Options: Highcharts.Options | null = null; // required
  chart4extOptions: Highcharts.Options | null = null; // required
  chart5Options: Highcharts.Options | null = null; // required
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) { ... } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  // chart5UpdateFlag: boolean = false; // optional boolean

  chart4Series = [
          {
            name: 'Samsung',
            data: [1650, 1780, 1850, 1920]
          },
          {
            name: 'iPhone',
            data: [980, 1050, 1120, 1200]
          },
          {
            name: 'Oppo',
            data: [450, 500, 540, 580]
          },
          {
            name: 'Vivo',
            data: [520, 570, 600, 640]
          }
        ]
  chart4ExtSeries = [
    {
      name: 'Samsung',
      data: [120, 135, 150, 140, 155, 165, 160, 170, 180, 175, 190, 185]
    },
    {
      name: 'iPhone',
      data: [100, 120, 130, 145, 150, 155, 165, 172, 168, 178, 182, 195]
    },
    {
      name: 'Oppo',
      data: [80, 90, 100, 105, 110, 120, 130, 125, 140, 150, 160, 155]
    },
    {
      name: 'Vivo',
      data: [85, 95, 120, 125, 135, 145, 155, 165, 160, 170, 175, 180]
    }
  ]
  isShowingChart4Granular = false
  updateChart4Flag = false

  chart5Series = [{
    name: 'Road',
    data: [434, 290, 307]
  }, {
    name: 'Rail',
    data: [272, 153, 156]
  }, {
    name: 'Air',
    data: [13, 7, 8]
  }, {
    name: 'Sea',
    data: [55, 35, 41]
  }]
  isShowingChart5Grarnular = false
  tempChart5Series: any[] | null = null

  isChart1Loading = true
  isChart2Loading = true
  isChart3Loading = true
  isChart4Loading = true
  isChart5Loading = true

  constructor(private themeService: ThemeService){
    this.themeService.theme$.subscribe(theme => {
      Highcharts.setOptions(theme === 'dark' ? darkTheme : lightTheme);

      this.chart1Options = { ...this.chart1Options };
      this.chart2Options = { ...this.chart2Options };
      this.chart3Options = { ...this.chart3Options };
      this.chart4Options = { ...this.chart4Options };
      this.chart4extOptions = { ...this.chart4extOptions };
      this.chart5Options = { ...this.chart5Options };

      this.chartInstances.forEach(chart => {
        chart.update(theme === 'dark' ? darkTheme : lightTheme, true, true); // update, redraw, oneToOne
      });
      
      this.updateFlag = true;
    }); 
  }

  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    if (!this.chartInstances.includes(chart)) {
      this.chartInstances.push(chart);
    }
  };

  ngOnInit(): void {
    const self = this
    setTimeout(() => {
      this.chart1Options = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Corn vs wheat estimated production for 2023'
        },
        subtitle: {
          text:
            'Source: <a target="_blank" ' +
            'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>'
        },
        xAxis: {
          categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
          crosshair: true,
          accessibility: {
            description: 'Countries'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: '1000 metric tons (MT)'
          }
        },
        tooltip: {
          valueSuffix: ' (1000 MT)'
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: 'Corn',
            data: [387749, 280000, 129000, 64300, 54000, 34300]
          }
        ] as any
      }
      this.chart2Options = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Corn vs wheat estimated production for 2023'
        },
        subtitle: {
          text:
            'Source: <a target="_blank" ' +
            'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>'
        },
        xAxis: {
          categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
          crosshair: true,
          accessibility: {
            description: 'Countries'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: '1000 metric tons (MT)'
          }
        },
        tooltip: {
          valueSuffix: ' (1000 MT)'
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: 'Wheat',
            data: [45321, 140000, 10000, 140500, 19500, 113500]
          }
        ] as any
      }
      this.chart3Options = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Corn vs wheat estimated production for 2023'
        },
        subtitle: {
          text:
            'Source: <a target="_blank" ' +
            'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>'
        },
        xAxis: {
          categories: ['USA', 'China', 'Brazil', 'EU', 'Argentina', 'India'],
          crosshair: true,
          accessibility: {
            description: 'Countries'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: '1000 metric tons (MT)'
          }
        },
        tooltip: {
          valueSuffix: ' (1000 MT)'
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: 'Corn',
            data: [387749, 280000, 129000, 64300, 54000, 34300]
          },
          {
            name: 'Wheat',
            data: [45321, 140000, 10000, 140500, 19500, 113500]
          }
        ] as any
      }
      // this.chart4extOptions = {

      //   title: {
      //     text: 'U.S Solar Employment Growth',
      //     align: 'left'
      //   },

      //   subtitle: {
      //     text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
      //     align: 'left'
      //   },

      //   yAxis: {
      //     title: {
      //       text: 'Number of Employees'
      //     }
      //   },

      //   xAxis: {
      //     categories: [
      //       'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      //       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      //     ],
      //     accessibility: {
      //       rangeDescription: 'Range: Jan to Dec'
      //     }
      //   },

      //   legend: {
      //     layout: 'horizontal',
      //     align: 'center',
      //     verticalAlign: 'bottom'
      //   },

      //   plotOptions: {
      //     series: {
      //       label: {
      //         connectorAllowed: false
      //       },
      //       // pointStart: 2010
      //     }
      //   },

      //   series: this.chart4ExtSeries as any,

      //   responsive: {
      //     rules: [{
      //       condition: {
      //         maxWidth: 500
      //       },
      //       chartOptions: {
      //         legend: {
      //           layout: 'horizontal',
      //           align: 'center',
      //           verticalAlign: 'bottom'
      //         }
      //       }
      //     }]
      //   }

      // }
      this.chart4Options = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Mobile Brands Usage, Norway'
        },
        subtitle: {
          text: 'Source: <a href="https://www.ssb.no/transport-og-reiseliv/landtransport/statistikk/innenlandsk-transport">SSB</a>'
        },
        xAxis: {
          categories: ['2010', '2021', '2022', '2023'],
          labels: {
            style: {
              cursor: 'pointer'
            }
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Percent'
          }
        },
        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>' +
            ': <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
          shared: true
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: true,
              format: '{point.percentage:.0f}%'
            }
          },
          series: {
            point: {
              events: {
                click: function () {
                  console.log('Clicked year:', this.category, typeof this.category);
                  console.log('Brand:', this.series.name);
                  console.log('Value:', this.y);
                  if(![
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                  ].includes(String(this.category))){
                    self.showChart4ByMonth()
                  }
                }
              }
            }
          }
        },
        series: this.chart4Series as any,
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      };
      this.chart5Options = {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Domestic passenger transport by mode of transport, Norway'
        },
        subtitle: {
          text: 'Source: <a href="https://www.ssb.no/transport-og-reiseliv/landtransport/statistikk/innenlandsk-transport">SSB</a>'
        },
        xAxis: {
          categories: ['2019', '2020', '2021']
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Percent'
          }
        },
        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>' +
            ': <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
          shared: true
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: true,
              format: '{point.percentage:.0f}%'
            }
          },
          series: {
            point: {
              events: {
                click: function () {
                  if(['Road','Rail','Air','Sea'].includes(this.series.name)){
                    self.showChart5TransportByMode(this.series.name)
                  }
                  console.log('Clicked mode of transport:', this.series.name);
                  console.log('Year:', this.category);
                  console.log('Value (%):', this.y);
                },
              },
            },
          },
        },
        series: this.chart5Series as any
      };
      [this.isChart1Loading, this.isChart2Loading, this.isChart3Loading, this.isChart4Loading, this.isChart5Loading] = [false, false, false, false, false]
    }, 3000)
  }

  showChart5TransportByMode(mode: string) {
    this.tempChart5Series = this.chart5Series
    this.chart5Series = (() => {
      switch (mode) {
        case 'Road':
          return [{
            name: 'Bus',
            data: this.generateRandomData(100, 4)
          }, {
            name: 'Motor Cycle',
            data: this.generateRandomData(100, 4)
          }, {
            name: 'Car',
            data: this.generateRandomData(100,3)
          }, {
            name: 'Walk',
            data: this.generateRandomData(100,2)
          }];
        case 'Rail':
          return [{
            name: 'Passenger',
            data: this.generateRandomData(100, 4)
          }, {
            name: 'Express',
            data: this.generateRandomData(100, 4)
          }, {
            name: 'Vande Bharat',
            data: this.generateRandomData(100,3)
          }, {
            name: 'Tejas',
            data: this.generateRandomData(100,2)
          }];
        case 'Air':
          return [{
            name: 'Private Jet',
            data: this.generateRandomData(100, 4)
          }, {
            name: 'Boeing',
            data: this.generateRandomData(100, 4)
          }];
        case 'Sea':
          return [{
            name: 'Prvate Ships',
            data: this.generateRandomData(100, 4)
          }, {
            name: 'Titanic',
            data: this.generateRandomData(100, 4)
          }];
        default:
          return [];
      }
    })();
    this.chart5Options = {
      ...this.chart5Options,
      series: this.chart5Series as any
    };
    this.updateFlag = true;
    this.isShowingChart5Grarnular = true
  }

  exitTransportModeChart() {
    this.chart5Series = this.tempChart5Series as any
    this.chart5Options = {
      ...this.chart5Options,
      series: this.chart5Series as any
    };
    this.tempChart5Series = null
    this.updateFlag = true
    this.isShowingChart5Grarnular = false
  }

  showChart4ByMonth(){
    this.isShowingChart4Granular = true;

  const temp = JSON.parse(JSON.stringify(this.chart4Options));

  temp.chart = { type: 'line' };
  temp.xAxis = {
    categories: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ]
  };
  temp.series = this.chart4ExtSeries as any;

  this.chart4Options = temp;

  this.chartConstructor = this.chartConstructor === 'chart' ? 'stockChart' : 'chart';
  this.updateChart4Flag = true
  }

  exitChart4ByMonth() {
    this.isShowingChart4Granular = false;

    const temp = JSON.parse(JSON.stringify(this.chart4Options));

    // Explicitly override properties instead of overwriting them
    temp.chart = { type: 'column' };
    temp.xAxis = {
      categories: ['2020', '2021', '2022', '2023'],
      title: { text: 'Year' }
    };
    temp.series = this.chart4Series as any;

    this.chart4Options = temp;

    // Force re-render
    this.chartConstructor = this.chartConstructor === 'chart' ? 'stockChart' : 'chart';
    this.updateChart4Flag = true;
  }


  generateRandomData(limit: number, size: number){
    const arr = []
    for(let i=0;i<size;i++){
      arr.push(Math.floor(Math.random() * limit))
    }
    return arr;
  }
}

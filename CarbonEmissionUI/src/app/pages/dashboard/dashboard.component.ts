import {Component} from '@angular/core';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
    display = "none";
    saleData = [
      { name: "Bhopal", value: 105000 },
      { name: "Chennai", value: 55000 },
      { name: "Mumbai", value: 15000 },
      { name: "Hydrabad", value: 150000 },
      { name: "Nagpur", value: 20000 }
    ];

    areachart =[
      {
        "name": "Northern Mariana Islands",
        "series": [
          {
            "value": 2841,
            "name": "2016-09-18T10:27:07.698Z"
          },
          {
            "value": 6146,
            "name": "2016-09-22T09:37:13.703Z"
          },
          {
            "value": 6532,
            "name": "2016-09-20T19:34:46.830Z"
          },
          {
            "value": 2158,
            "name": "2016-09-20T11:32:19.679Z"
          },
          {
            "value": 3258,
            "name": "2016-09-17T19:26:51.005Z"
          },
          {
            "name": "2016-09-15T15:32:12.123Z",
            "value": 6633
          }
        ]
      },
      {
        "name": "Isle of Man",
        "series": [
          {
            "value": 2612,
            "name": "2016-09-18T10:27:07.698Z"
          },
          {
            "value": 3512,
            "name": "2016-09-22T09:37:13.703Z"
          },
          {
            "value": 5315,
            "name": "2016-09-20T19:34:46.830Z"
          },
          {
            "value": 2439,
            "name": "2016-09-20T11:32:19.679Z"
          },
          {
            "value": 2524,
            "name": "2016-09-17T19:26:51.005Z"
          },
          {
            "name": "2016-09-15T15:32:12.123Z",
            "value": 6493
          }
        ]
      },
      {
        "name": "Western Sahara",
        "series": [
          {
            "value": 4518,
            "name": "2016-09-18T10:27:07.698Z"
          },
          {
            "value": 3685,
            "name": "2016-09-22T09:37:13.703Z"
          },
          {
            "value": 3361,
            "name": "2016-09-20T19:34:46.830Z"
          },
          {
            "value": 5535,
            "name": "2016-09-20T11:32:19.679Z"
          },
          {
            "value": 3629,
            "name": "2016-09-17T19:26:51.005Z"
          },
          {
            "name": "2016-09-15T15:32:12.123Z",
            "value": 6879
          }
        ]
      },
      {
        "name": "Greenland",
        "series": [
          {
            "value": 6976,
            "name": "2016-09-18T10:27:07.698Z"
          },
          {
            "value": 5042,
            "name": "2016-09-22T09:37:13.703Z"
          },
          {
            "value": 3352,
            "name": "2016-09-20T19:34:46.830Z"
          },
          {
            "value": 3134,
            "name": "2016-09-20T11:32:19.679Z"
          },
          {
            "value": 6915,
            "name": "2016-09-17T19:26:51.005Z"
          },
          {
            "name": "2016-09-15T15:32:12.123Z",
            "value": 5313
          }
        ]
      },
      {
        "name": "Equatorial Guinea",
        "series": [
          {
            "value": 6048,
            "name": "2016-09-18T10:27:07.698Z"
          },
          {
            "value": 4080,
            "name": "2016-09-22T09:37:13.703Z"
          },
          {
            "value": 6497,
            "name": "2016-09-20T19:34:46.830Z"
          },
          {
            "value": 2872,
            "name": "2016-09-20T11:32:19.679Z"
          },
          {
            "value": 4773,
            "name": "2016-09-17T19:26:51.005Z"
          },
          {
            "name": "2016-09-15T15:32:12.123Z",
            "value": 3504
          }
        ]
      }
    ]
  ngOnInit() {
   }
openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}

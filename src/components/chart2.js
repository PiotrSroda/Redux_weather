import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const Chart2 =(props) => {
const pres = (props.data2).map(Number)
return (
  <div>
    <HighchartsReact
    highcharts={Highcharts}
    options={{
title: {
    text: ''
  },
chart: {
type: "spline",
     width: 420,
     height: 300
},
  
yAxis: {  
} ,
xAxis: { 
 min: 1,
   max: 7,
   visible: false,
},  
  
series: [{
    name: 'Cisnienie hPa',
    data: (pres),   
    
  }] ,
  
}}
  />       

  </div>
);
}
export default Chart2
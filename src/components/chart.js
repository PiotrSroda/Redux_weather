import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const Chart =(props) => {

const temp = (props.data).map(Number)
const humi = (props.data3).map(Number)

return (
  <div>
    <HighchartsReact
    highcharts={Highcharts}
    options={{
title: {
    text: ''
  },
chart: {
     width: 420,
     height: 300
},
  
yAxis: {
   min: 1,
   max: 100,
   
} ,
xAxis: {
   min: 1,
   max: 7,
   visible: false,
},

  
  series: [{
    name: 'Temperatura C',
    data: (temp),        
    
  },  
 {
    name: 'Wilgotnosc %',
    data: (humi),
    
    
  }] ,
  
}}
  />       

  </div>
);
}
export default Chart
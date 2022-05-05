import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  RadarController,
  RadialLinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Radar, Doughnut } from 'react-chartjs-2';
import {useMemo} from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  BarElement,
  RadarController,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart',
    },
  },
};

export function Chart({showAs, labels, dataIn}) {

  const normalize =(indata)=> {
    if (indata.length) {
      return indata[0].split(',').map(x => x.replace(/s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));
    }

    return [];
  }

  const data = useMemo(() => ({
    labels: normalize(labels),
    datasets: [
      {
        label: 'Entered data',
        data: normalize(dataIn),
        backgroundColor: ['blue', 'yellow', 'red', 'green', 'black', 'magenta'],
      },
    ],
  }), [dataIn, labels]);
  
  switch (showAs) {
    case 'Bar':
      return <Bar options={options} data={data} />
    case 'Liner':
      return <Line options={options} data={data} />
    case 'Radar':
      return <Radar options={options} data={data} />
    case 'Doughnut':
      return <Doughnut options={options} data={data} />
    default:
      return <Bar options={options} data={data} />

  /* 
    to add one more case you had add needed import 
    from chart.js,react-chartjs-2 
    and add its to register 
    and name the case as button named for this case.
    ////////////////////////////////////////////////
    If you add new option but didn`t add case for it
    Bar will be displayed as default 
  */
  }
}
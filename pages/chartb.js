import Page from '../components/Page';
import { Pie } from 'react-chartjs-2';

const DATA = {
  datasets: [
    {
      backgroundColor: ['red', 'yellow', 'blue'],
      data: [3, 2, 1],
    },
  ],
  labels: ['Red', 'Yellow', 'Blue'],
}; 

const ChartB = () => (
  <Page>
    <Pie data={DATA} />
  </Page>
);

export default ChartB;
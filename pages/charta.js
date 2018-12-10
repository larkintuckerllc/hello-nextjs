import Page from '../components/Page';
import { Pie } from 'react-chartjs-2';

const DATA = {
  datasets: [
    {
      backgroundColor: ['red', 'yellow', 'blue'],
      data: [1, 2, 3],
    },
  ],
  labels: ['Red', 'Yellow', 'Blue'],
}; 

const ChartA = () => (
  <Page>
    <Pie data={DATA} />
  </Page>
);

export default ChartA;
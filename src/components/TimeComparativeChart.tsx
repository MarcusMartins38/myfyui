import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TimeComparativeChart = () => {
  const transactions = useSelector((store) => store.transactionReducer.transactions);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const monthlyIncome = Array(12).fill(0);
  const monthlyOutcome = Array(12).fill(0);

  transactions.forEach((transaction) => {
    const month = new Date(transaction.date).getMonth();
    if (transaction.status === 'income') {
      monthlyIncome[month] += transaction.amount;
    } else if (transaction.status === 'outcome') {
      monthlyOutcome[month] += Math.abs(transaction.amount);
    }
  });

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Income',
        data: monthlyIncome,
        backgroundColor: '#02b15a',
      },
      {
        label: 'Outcome',
        data: monthlyOutcome,
        backgroundColor: '#E41414',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income vs Outcome',
      },
    },
  };

  return (
    <div style={{ width: '600px', height: '400px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default TimeComparativeChart;

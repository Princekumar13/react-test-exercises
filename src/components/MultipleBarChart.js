import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Options for the chart
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        // used for bars are grouped next to each other, not stacked
        stacked: false, 
      }
    }
};

const MultipleBarChart = ({ textData }) => {
    const rawData = textData.map(data => data.percentage);
    const labelsData = textData.map((_, i) => `Question ${i + 1}`);

    // Find the maximum length of data arrays to create consistent datasets
    const maxDataLength = Math.max(...rawData.map(item => item.length));

    // Generate datasets for each value in the Questions Answers
    const datasets = Array.from({ length: maxDataLength }).map((_, i) => ({
      label: `Value ${i + 1}`,
      data: rawData.map(item => item[i] || 0), // Fill missing values with 0
      backgroundColor: `rgba(${(i * 50) % 255}, ${(i * 80) % 255}, ${(i * 100) % 255}, 0.7)`,
      borderColor: `rgba(${(i * 50) % 255}, ${(i * 80) % 255}, ${(i * 100) % 255}, 1)`,
      borderWidth: 1
    }));

    // Data for the chart
    const data = {
      labels: labelsData,  // Questions
      datasets, // The datasets generated above
    };

    return (
      <>
        <Bar data={data} options={options} />
      </>
    )
}

export default MultipleBarChart;
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const youthCategoryColors = [
  '#3b82f6', // In School Youth (blue)
  '#ef4444', // Out of School Youth (red)
  '#22c55e', // Working Youth (green)
  '#eab308', // Youth w/ Specific Needs (yellow)
];

const DashboardGraphs = () => {
  // Sample data for youth classification
  const youthCategories = ['In School Youth', 'Out of School Youth', 'Working Youth', 'Youth w/ Specific Needs'];
  
  // Historical data (line graph)
  const historicalData = {
    Q1: [120, 85, 45, 30],
    Q2: [130, 90, 40, 35],
    Q3: [125, 95, 38, 42],
  };

  // Predicted data (bar graph)
  const predictedData = {
    Q1: [125, 88, 42, 32],
    Q2: [135, 92, 38, 38],
    Q3: [130, 98, 35, 45],
  };

  // Donut chart data
  const genderData = {
    labels: ['Male', 'Female'],
    datasets: [{
      data: [65, 35],
      backgroundColor: ['#3b82f6', '#ef4444'],
      borderWidth: 0,
    }]
  };

  const ageGroupData = {
    labels: ['15-17', '18-20', '21-24'],
    datasets: [{
      data: [40, 35, 25],
      backgroundColor: ['#3b82f6', '#22c55e', '#eab308'],
      borderWidth: 0,
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Youth'
        }
      },
      x: {
        ticks: {
          display: false
        },
        grid: {
          display: false
        }
      }
    }
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
      },
    },
    cutout: '70%',
  };

  const createCombinedChartData = (quarter) => ({
    labels: youthCategories,
    datasets: [
      {
        type: 'bar',
        label: 'Predicted Data',
        data: predictedData[quarter],
        backgroundColor: youthCategoryColors,
        borderColor: youthCategoryColors,
        borderWidth: 1,
      },
      {
        type: 'line',
        label: 'Historical Data',
        data: historicalData[quarter],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99,102,241,0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointBackgroundColor: '#6366f1',
        pointBorderColor: '#fff',
      },
    ],
  });

  const renderCombinedChart = (quarter, idx) => (
    <div key={quarter} className="quarter-section" style={{ flex: 1, minWidth: '300px' }}>
      <div className="quarter-label" style={{textAlign: 'center', fontWeight: 600, marginBottom: 8}}>
        {quarter === 'Q1' && 'Quarter 1'}
        {quarter === 'Q2' && 'Quarter 2'}
        {quarter === 'Q3' && 'Quarter 3'}
      </div>
      <div className="charts-container">
        <div className="chart-wrapper">
          <div style={{ height: '200px', position: 'relative' }}>
            <Bar
              data={createCombinedChartData(quarter)}
              options={chartOptions}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="youth-classification-card dashboard-graphs-container">
      <div className="dashboard-graphs-header">
        <div className="dashboard-graphs-title-container">
          <h2 className="youth-classification-title dashboard-graphs-title">Youth Classification</h2>
          <div className="dashboard-graphs-legend">
            {youthCategories.map((cat, idx) => (
              <span key={cat} className="dashboard-graphs-legend-item">
                <span 
                  className="dashboard-graphs-legend-indicator"
                  style={{ background: youthCategoryColors[idx] }}
                ></span>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-graphs-quarters">
        {['Q1', 'Q2', 'Q3'].map(renderCombinedChart)}
      </div>

      {/* Donut Charts Section */}
      <div className="dashboard-graphs-donut-container">
        <div className="dashboard-graphs-donut-card">
          <h3 className="dashboard-graphs-donut-title">Gender Distribution</h3>
          <div className="dashboard-graphs-donut-chart">
            <Doughnut data={genderData} options={donutOptions} />
          </div>
        </div>
        <div className="dashboard-graphs-donut-card">
          <h3 className="dashboard-graphs-donut-title">Age Group Distribution</h3>
          <div className="dashboard-graphs-donut-chart">
            <Doughnut data={ageGroupData} options={donutOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGraphs; 
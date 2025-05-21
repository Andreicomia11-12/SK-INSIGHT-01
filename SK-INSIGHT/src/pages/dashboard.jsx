import React from 'react';
import { useNavigate } from 'react-router-dom';
import SKlogo from '../assets/logo.png';
import '../css/Dashboard.css';
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
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const youthCategoryColors = [
  '#3b82f6', // In School Youth (blue)
  '#ef4444', // Out of School Youth (red)
  '#22c55e', // Working Youth (green)
  '#eab308'
];

const Dashboard = () => {
  const navigate = useNavigate();

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
    <div key={quarter} className="quarter-section">
      <div className="quarter-label" style={{textAlign: 'center', fontWeight: 600, marginBottom: 8}}>
        {quarter === 'Q1' && 'Quarter 1'}
        {quarter === 'Q2' && 'Quarter 2'}
        {quarter === 'Q3' && 'Quarter 3'}
      </div>
      <div className="charts-container">
        <div className="chart-wrapper">
          <div style={{ height: '300px', position: 'relative' }}>
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
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <h3 className='skb'>SANGGUNIANG KABATAAN</h3>
        <div className="nav-logo">
          <img src={SKlogo} alt="SK Logo" className="nav-logo-img" />
          <div className="logo-text">
            <h3 className='sko'>SK Official</h3>
            <span className="adds">Admin</span>
          </div>
        </div>
        
        <div className="nav-links">
          <button className={`nav-link${window.location.pathname === '/dashboard' ? ' active' : ''}`} onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button className={`nav-link${window.location.pathname === '/kk-profile' ? ' active' : ''}`} onClick={() => navigate('/kk-profile')}>KK Profile</button>
        </div>
        <div className="nav-profile">
          <button onClick={() => navigate('/')} className="logout-btn">Logout</button>
        </div>
      </nav>
      
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>A quick data overview of the demographic characteristics.</p>
        </div>

        <div className="youth-classification-card">
          <h2 className="youth-classification-title">Youth Classification</h2>
          <div className="legend-row">
            {youthCategories.map((cat, idx) => (
              <span key={cat} style={{
                display: 'inline-flex',
                alignItems: 'center',
                marginRight: 16,
                fontWeight: 500,
                fontSize: 14
              }}>
                <span style={{
                  display: 'inline-block',
                  width: 14,
                  height: 14,
                  borderRadius: 3,
                  background: youthCategoryColors[idx],
                  marginRight: 6,
                  border: '1px solid #ccc'
                }}></span>
                {cat}
              </span>
            ))}
          </div>
          <div className="quarters-row">
            {['Q1', 'Q2', 'Q3'].map(renderCombinedChart)}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 
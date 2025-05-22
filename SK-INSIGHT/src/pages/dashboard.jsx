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
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

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
  '#eab308'  // Youth w/ Specific Needs (yellow)
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

  // Donut chart data
  const youthAgeGroupData = {
    labels: ['15-17', '18-20', '21-24'],
    datasets: [{
      data: [40, 35, 25],
      backgroundColor: ['#3b82f6', '#22c55e', '#eab308'],
      borderWidth: 0,
    }]
  };

  const civilStatusData = {
    labels: ['Single', 'Married', 'Others'],
    datasets: [{
      data: [75, 20, 5],
      backgroundColor: ['#facc15', '#6366f1', '#f97316'],
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
    cutout: '70%',
    plugins: {
      legend: {
        display: false, // Hide default legend since we're using custom labels
      },
      tooltip: {
        enabled: true, // Keep tooltips
      }
    },
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

  const renderCombinedChart = (quarter) => (
    <div key={quarter} className="quarter-section">
      <div className="quarter-label" style={{ textAlign: 'center', fontWeight: 600, marginBottom: 8, color: 'black' }}>
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

  // Custom hardcoded labels for Youth Age Group chart
  const youthAgeGroupLabels = [
    { label: '15-17', color: '#3b82f6', value: 40 },
    { label: '18-20', color: '#22c55e', value: 35 },
    { label: '21-24', color: '#eab308', value: 25 },
  ];

  // Custom hardcoded labels for Civil Status chart
  const civilStatusLabels = [
    { label: 'Single', color: '#facc15', value: 75 },
    { label: 'Married', color: '#6366f1', value: 20 },
    { label: 'Others', color: '#f97316', value: 5 },
  ];

  const renderDonutChartWithLabels = (title, data, labels) => (
    <div style={{
      flex: 1,
      minWidth: '300px',
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
      marginTop: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: 'black' }}>{title}</h3>
      <div style={{ height: '280px', width: '280px', position: 'relative' }}>
        <Doughnut data={data} options={donutOptions} />
      </div>
      <div style={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        {labels.map(({ label, color, value }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              display: 'inline-block',
              width: 16,
              height: 16,
              borderRadius: 3,
              backgroundColor: color,
              border: '1px solid #ccc',
            }}></span>
            <span style={{ fontWeight: '600', color: 'black' }}>
              {label}: {value}%
            </span>
          </div>
        ))}
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
          <button className={`nav-link${window.location.pathname === '/educapplication' ? ' active' : ''}`} onClick={() => navigate('/educapplication')}>Educational Assistance</button>
          <button className={`nav-link${window.location.pathname === '/admin/announcements' ? ' active' : ''}`} onClick={() => navigate('/admin/announcements')}>Announcements</button>
        </div>
        <div className="nav-profile">
          <button onClick={() => navigate('/')} className="logout-btn">Logout</button>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p className='dblist'>A quick data overview of the demographic characteristics.</p>
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
                fontSize: 14,
                color: 'black',
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

        {/* Donut Charts with hardcoded labels */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '0rem', width: '100%' }}>
          {renderDonutChartWithLabels('Youth Age Group Distribution', youthAgeGroupData, youthAgeGroupLabels)}
          {renderDonutChartWithLabels('Civil Status Distribution', civilStatusData, civilStatusLabels)}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

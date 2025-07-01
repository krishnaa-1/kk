import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import {
  BsBuilding,
  BsCheckCircle,
  BsXCircle,
  BsPersonBadge,
  BsHourglassSplit,
  BsClipboardCheck,
  BsPatchCheck,
  BsListCheck,
  BsBarChartLine,
  BsQuestionCircle,
} from 'react-icons/bs';

// Moved outside so it's available during rendering
const statusIcons = {
  'Please Contact': <BsPersonBadge className="text-primary fs-3" />,
  'In Progress': <BsHourglassSplit className="text-warning fs-3" />,
  'Pending Contract': <BsClipboardCheck className="text-success fs-3" />,
  'Closed: Booked Business': <BsPatchCheck className="text-indigo fs-3" />,
  'Closed: Lost Business': <BsXCircle className="text-teal fs-3" />,
  'Traces Completed': <BsCheckCircle className="text-danger fs-3" />,
};

const Dashboard = () => {
  const [hotelStats, setHotelStats] = useState({ total: 0, active: 0, inactive: 0 });
  const [leadStats, setLeadStats] = useState([]);
  const [totalLeads, setTotalLeads] = useState(0);
  const chartRef = useRef(null); // useRef for the chart canvas

  useEffect(() => {
    fetchHotelData();
    fetchLeadData();
  }, []);

  const fetchHotelData = async () => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) return;

      const response = await fetch(`${import.meta.env.VITE_API_URL}/hotel/count`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (data.code === 200) {
        const { hotel_count, active_hotel, inactive_hotel } = data;
        setHotelStats({ total: hotel_count, active: active_hotel, inactive: inactive_hotel });
        renderChart(hotel_count, active_hotel, inactive_hotel);
      }
    } catch (error) {
      console.error('Error fetching hotel data:', error);
    }
  };

  const fetchLeadData = async () => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) return;

      const response = await fetch(`${import.meta.env.VITE_API_URL}/leadcount/notestatus/wise`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (result.code === 200) {
        setLeadStats(result.data);
        setTotalLeads(result.data.reduce((sum, item) => sum + item.lead_count, 0));
      }
    } catch (error) {
      console.error('Error fetching lead data:', error);
    }
  };

  const renderChart = (total, active, inactive) => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Total Hotels', 'Active Hotels', 'Inactive Hotels'],
        datasets: [
          {
            data: [total, active, inactive],
            backgroundColor: ['#007bff', '#28a745', '#dc3545'],
            borderColor: ['#0056b3', '#1e7e34', '#bd2130'],
            borderWidth: 1,
            borderRadius: 5,
            barThickness: 40,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            ticks: { font: { size: 14 }, color: '#6c757d' },
            grid: { display: false },
          },
          y: {
            ticks: { stepSize: 10, font: { size: 14 }, color: '#6c757d' },
            grid: { color: '#f0f0f0' },
          },
        },
      },
    });
  };

  return (
    <main className="container-fluid px-4 py-4">
      <div className="row">
        {/* Hotel Overview Card */}
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-4">
                <div>
                  <h5>Hotel Data Overview</h5>
                  <span className="text-muted fs-12">Overview of total, active, and inactive hotels</span>
                </div>
                <a href="/indexhotel" className="btn btn-outline-primary d-flex align-items-center gap-2">
                  <BsBarChartLine className="fs-5" />
                  <span>Hotel Details</span>
                </a>
              </div>

              <canvas ref={chartRef} style={{ width: '100%', height: '300px' }}></canvas>
              <div className="row mt-4">
                {[
                  {
                    label: 'Total Hotels',
                    count: hotelStats.total,
                    bg: 'bg-primary',
                    color: 'text-primary',
                    icon: <BsBuilding className="text-white fs-5" />,
                  },
                  {
                    label: 'Active Hotels',
                    count: hotelStats.active,
                    bg: 'bg-success',
                    color: 'text-success',
                    icon: <BsCheckCircle className="text-white fs-5" />,
                  },
                  {
                    label: 'Inactive Hotels',
                    count: hotelStats.inactive,
                    bg: 'bg-danger',
                    color: 'text-danger',
                    icon: <BsXCircle className="text-white fs-5" />,
                  },
                ].map((stat, index) => (
                  <div className="col-md-4 text-center" key={index}>
                    <div
                      className={`rounded-circle ${stat.bg} d-flex justify-content-center align-items-center`}
                      style={{ width: '40px', height: '40px' }}
                    >
                      {stat.icon}
                    </div>
                    <div className="fs-6 fw-bold text-dark mt-2">{stat.label}</div>
                    <div className={`fs-6 ${stat.color}`}>{stat.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leads Card */}
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between mb-4">
                <div>
                  <h5>Leads Data</h5>
                  <span className="fs-12 text-muted">Lead Campaign Reports</span>
                </div>
                <a href="/leadslist" className="btn btn-primary d-flex align-items-center gap-2">
                  <BsListCheck className="fs-5" />
                  <span id="total-leads">Total Leads: <strong>{totalLeads}</strong></span>
                </a>
              </div>

              <div className="row">
                {leadStats.map((item, index) => (
                  <div className="col-xxl-2 col-lg-4 col-md-6" key={index}>
                    <div className="card stretch-full border border-dashed border-gray-5">
                      <div className="card-body rounded-3 text-center">
                        {statusIcons[item.note_status_name] || <BsQuestionCircle className="text-secondary fs-3" />}
                        <div className="fs-4 fw-bolder text-dark mt-3 mb-1">{item.lead_count}</div>
                        <p className="fs-12 fw-medium text-muted text-spacing-1 mb-0">{item.note_status_name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;

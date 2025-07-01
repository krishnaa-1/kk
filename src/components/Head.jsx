import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keyword" content="" />
        <meta name="author" content="flexilecode" />
        <title>BossLite || Dashboard</title>

        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="assets/images/logo/favicon.png" />

        {/* Bootstrap & Vendors CSS */}
        <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="assets/vendors/css/vendors.min.css" />
        <link rel="stylesheet" type="text/css" href="assets/vendors/css/daterangepicker.min.css" />

        {/* Custom CSS */}
        <link rel="stylesheet" href="../assets/css/style.css" />
        <link rel="stylesheet" type="text/css" href="assets/css/theme.min.css" />

        {/* Legacy support for IE < 9 */}
        {/* These won't actually run in React but kept for reference */}
        {/* 
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> 
        */}
      </Helmet>

      {/* You can now build the rest of your dashboard content here */}
      <div className="container mt-5">
        <h1>Welcome to BossLite Dashboard</h1>
        {/* Add dashboard widgets or summaries here */}
      </div>
    </>
  );
};

export default Dashboard;

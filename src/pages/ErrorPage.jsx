import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div>
      <h1>Oooops, Page Not Found</h1>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
}

export default ErrorPage;

import React from 'react';
import './App.css';
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';
import MyTable from './MyTable';

export default function Admin() {
  return (
    <div>
      <MyTable />
      <ChartOne />
      <ChartTwo />
    </div>
  );
}

import MaterialTable from 'material-table';
import React from 'react';
import { customers } from './data.js';
import './App.css';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable 
        columns={
          [
            { title: 'Cool ID', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Last Name', field: 'last_name' },
            { title: 'Email', field: 'email' }, 
            { title: 'Computer Address Host', field: 'ip_address' }        
          ]
        }
        data={customers}
        title="My First Table"
        options={{
          headerStyle: {
            border: 'solid 3px rgb(18, 74, 17)',
            backgroundColor: 'rgba(38, 44, 33, 0.63)',
            
          }, 
          rowStyle: {
            background: 'rgba(165, 122, 42, 0.592)',
          }

        }} />
    </div>
  );
}

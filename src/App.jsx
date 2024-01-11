import { useState } from 'react'

import React from 'react';
import StudentTable from './comp/StudentTable';

const App = () => {
  return (
    <div>
      <h1>Attendora Dashboard</h1>
      <StudentTable />
    </div>
  );
};

export default App;

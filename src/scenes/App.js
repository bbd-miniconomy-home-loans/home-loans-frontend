import { ViewLoans } from './viewLoans/viewLoans';
import LeafyGreenProvider from '@leafygreen-ui/leafygreen-provider'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LeafyGreenProvider
          darkMode={true}
        >
          <ViewLoans/>
        </LeafyGreenProvider>
      </header>
    </div>
  );
}

export default App;

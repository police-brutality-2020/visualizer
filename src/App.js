import React from 'react';
import Analytics from './services/analytics';
import Map from './components/map/map';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
import useIncidents from './hooks/getIncidents';
import useTheming from './hooks/useTheming';

import './App.css';
import './constants/colors.css';

function App() {
  // Start tracking pageviews/events
  Analytics.initialize();
  Analytics.pageview('/');

  const [mapValue, setMapValue] = React.useState('');
  // Initialize the app theming.
  useTheming();

  // Fetch the latest incidents from the backend API
  const incidents = useIncidents();
  if (!incidents) return null;

  return (
    <div className="app">
      <Sidebar
        incidents={incidents}
        mapValue={mapValue}
        setMapValue={setMapValue}
      />
      <Map incidents={incidents} onCityClick={setMapValue} />
      <Footer />
    </div>
  );
}

export default App;

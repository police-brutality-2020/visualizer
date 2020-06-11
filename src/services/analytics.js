import ReactGA from 'react-ga';

const Analytics = {
  initialize: () => ReactGA.initialize('UA-169178928-1'),
  pageview: (path) => ReactGA.pageview(path),
  event: (category, action, label) =>
    ReactGA.event({ category, action, label }),
};

export default Analytics;

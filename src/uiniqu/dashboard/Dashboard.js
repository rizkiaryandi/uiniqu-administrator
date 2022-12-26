import React from 'react';
import { Col, Row } from 'react-bootstrap';
import RealTimeUsers from '../../components/dashboards/analytics/real-time-users/RealTimeUsers';
import Audience from '../../components/dashboards/analytics/audience/Audience';
import ConnectCard from '../../components/dashboards/analytics/ConnectCard';
import SessionByBrowser from '../../components/dashboards/analytics/session-by-browser/SessionByBrowser';
import {
  audienceChart,
  intelligence,
  realTimeUsers,
  sessionByBrowser,
  sessionByCountry,
  topPagesTableData
} from 'data/dashboard/analytics';
import { countryData } from 'data/countryData';
import UsersByCountry from '../../components/dashboards/analytics/users-by-country/UsersByCountry';
import Intelligence from '../../components/dashboards/analytics/Intelligence';
import ActiveUsers from '../../components/dashboards/analytics/active-users/ActiveUsers';
import CampaignPerfomance from '../../components/dashboards/analytics/campaign-perfomance/CampaignPerfomance';
import UsersAtTime from '../../components/dashboards/analytics/users-at-a-time/UsersAtTime';
import BounceRate from '../../components/dashboards/analytics/bounce-rate/BounceRate';
import TrafficSource from '../../components/dashboards/analytics/traffic-source/TrafficSource';
import Stats from '../../components/dashboards/analytics/stats/Stats';
import TopPages from '../../components/dashboards/analytics/top-pages/TopPages';

const Analytics = () => {
  return (
    <>
      <Row className="g-3 mb-3">
        <Col xxl={8}>
          <Audience chartData={audienceChart} className="mb-3" />
          <ConnectCard />
        </Col>
        <Col md={6} xxl={4}>
          <RealTimeUsers data={realTimeUsers} />
        </Col>
        <Col md={6} xxl={4}>
          <SessionByBrowser data={sessionByBrowser} />
        </Col>
      </Row>
    </>
  );
};

Analytics.propTypes = {};

export default Analytics;

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from '../components/App';
import { askForGeoLocation } from '../ducks/geoLocation';

export default withRouter(connect(
    ({app}) => ({searchIsActive: app.searchIsActive}),
    dispatch => bindActionCreators({askForGeoLocation}, dispatch)
)(App));

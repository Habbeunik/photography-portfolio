import { connect } from 'react-redux';
import Header from '../components/header';
import { openDrawer } from '../actions/drawer';

export default connect(
  () => {},
  dispatch => {
    return {
      onHireMe: () => dispatch(openDrawer())
    };
  }
)(Header);

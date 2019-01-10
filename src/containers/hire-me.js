import { connect } from 'react-redux';
import HireMe from '../components/hire-me';
import { selectDrawerState } from '../reducers/drawer';
import { closeDrawer } from '../actions/drawer';

export default connect(
  state => {
    return {
      isActive: selectDrawerState(state)
    };
  },
  dispatch => {
    return {
      onClose: () => dispatch(closeDrawer())
    };
  }
)(HireMe);

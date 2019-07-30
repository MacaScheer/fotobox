import Splash from './splash';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (
    { currentUser: state.entites.users[state.session.id] }
)

const mapDispatchToProps = (dispatch) => (
    { logout: () => dispatch(logout()) }
)

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
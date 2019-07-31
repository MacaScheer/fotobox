import Splash from './splash';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ session, entities: { users } }) => {

    return { currentUser: users[session.id] }

}

const mapDispatchToProps = (dispatch) => (
    { logout: () => dispatch(logout()) }
)

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import GuestSessionForm from './guest_session_form';


const mapDispatchToProps = dispatch => {
    return ({
        processForm: (user) => dispatch(login(user))
    })
};

export default connect(null, mapDispatchToProps)(GuestSessionForm);
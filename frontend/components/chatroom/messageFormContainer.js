import { connect } from 'react-redux';
import MessageForm from './MessageForm';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, ownProps) => {
    return {
        parentId: parseInt(ownProps.match.params.channel_id),
        senderId: state.session.id
    };
};

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));
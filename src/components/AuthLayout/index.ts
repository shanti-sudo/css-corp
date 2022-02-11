import { observer } from 'mobx-react-lite';
import AuthLayout from './AuthLayout';

export default observer(AuthLayout);
// import { RootStore } from 'configureStore';
// import { connect } from 'react-redux';
// import { RootState } from 'reducers/actionTypes';

// const mapStateToProps = (state: RootStore) => ({
//   IsUserExist: 'id' in state.user,
// });

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(AuthLayout);

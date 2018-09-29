import React from 'react';
import { connect } from 'react-redux';

import { changeNotificationVisibility } from './redux/actions';

import styled from 'styled-components';

class Notification extends React.PureComponent {
  render() {
    const { changeVisibility, message, type, isVisible } = this.props;

    const NotificationContainer = styled.div`
      display: ${isVisible ? 'block' : 'none'};
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 99999999;
    `;

    return (
      <NotificationContainer>
        <div className={`notification is-${type}`}>
          <button
            className="delete"
            onClick={() => changeVisibility({ message: '', type: 'info' })}
          />
          {message}
        </div>
      </NotificationContainer>
    );
  }
}

function mapStoreToProps(store) {
  return {
    message: store.notification.message,
    type: store.notification.type,
    isVisible: store.notification.isVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeVisibility: config => {
      dispatch(changeNotificationVisibility(config));
    },
  };
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(Notification);

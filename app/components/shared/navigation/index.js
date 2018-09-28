import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Navigation extends React.Component {
  state = {
    isMenuOpen: false,
  };

  openMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  popupMenu = () => {
    const { isMenuOpen } = this.state;
    const { changeAppMode, isAppInEditMode } = this.props.mode;

    const editModeText = isAppInEditMode ? 'Exit Edit Mode' : 'Edit Mode';

    return (
      <div className={`dropdown is-right ${isMenuOpen ? 'is-active' : ''}`}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu6"
            onClick={this.openMenu}
          >
            <span>Admin Panel</span>
            <span className="icon is-small">
              <i className="fa fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu6" role="menu">
          <div className="dropdown-content">
            <Link to="/book/new" className="dropdown-item">
              <p>Add New Book</p>
            </Link>

            <div className="dropdown-item">
              <p>Add New Category</p>
            </div>
            <div className="dropdown-item">
              <p>Add New Author</p>
            </div>
            <hr className="dropdown-divider" />
            <a onClick={changeAppMode} className="dropdown-item">
              {editModeText}
            </a>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { isAppInEditMode } = this.props.mode;

    const NavigationWrapper = styled.div`
      padding: 20px;
      background-color: ${isAppInEditMode ? '#670001' : '#333333'};
      margin-bottom: 20px;
    `;

    const Title = styled.h1`
      color: #fff;
    `;

    return (
      <NavigationWrapper>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <Link to="/">
                <Title className="title">
                  <i className="fa fa-book" /> Books Store
                </Title>
              </Link>
            </div>
          </div>
          <div className="level-right">
            <div className="columns is-mobile">
              <div className="column">
                <input
                  className="input is-rounded"
                  type="text"
                  placeholder="Rounded input"
                />
              </div>
              <div className="column">{this.popupMenu()}</div>
            </div>
          </div>
        </nav>
      </NavigationWrapper>
    );
  }
}

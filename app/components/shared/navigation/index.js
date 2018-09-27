import React from 'react';
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
            <div className="dropdown-item">
              <p>Add New Book</p>
            </div>
            <div className="dropdown-item">
              <p>Add New Category</p>
            </div>
            <div className="dropdown-item">
              <p>Add New Author</p>
            </div>
            <hr className="dropdown-divider" />
            <div className="dropdown-item">
              <p>Edit Mode</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const NavigationWrapper = styled.div`
      padding: 20px;
      background-color: bisque;
      margin-bottom: 20px;
    `;

    return (
      <NavigationWrapper>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <h1 className="title">Books Store</h1>
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

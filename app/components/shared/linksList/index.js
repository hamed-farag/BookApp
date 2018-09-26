import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.css';

class LinksList extends React.PureComponent {
  render() {
    const { title, items } = this.props;
    return (
      <div className="card margin-bot-20">
        <header className="card-header">
          <p className="card-header-title">{title}</p>
        </header>
        <div className="card-content">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

LinksList.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default LinksList;

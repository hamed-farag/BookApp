import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Books from 'containers/Books';
import Author from 'containers/Author';
import Category from 'containers/Category';
import NotFoundPage from 'containers/NotFoundPage';

import Navigation from 'components/shared/navigation';
import LinksList from 'components/shared/linksList';

export default function Home() {
  return (
    <div className="container">
      <Navigation />
      <Router>
        <Switch>
          <Route
            path="/"
            component={match => {
              return (
                <div className="columns">
                  <div className="column is-one-third">
                    <LinksList
                      title="Categories"
                      items={[
                        { title: 'Hamed', url: 'https://www.google.com' },
                        { title: 'Hamed', url: 'https://www.google.com' },
                      ]}
                    />
                    <LinksList
                      title="Authors"
                      items={[
                        { title: 'Hamed', url: 'https://www.google.com' },
                        { title: 'Hamed', url: 'https://www.google.com' },
                      ]}
                    />
                  </div>
                  <div className="column">
                    <Route exact path="/" component={Books} />
                    <Route path={`/book/:mode(new)`} component={Books} />
                    <Route path={`/book/:id/:mode(edit)?`} component={Books} />
                    <Route path={`/author/:mode(new)`} component={Author} />
                    <Route
                      path={`/author/:id/:mode(edit)?`}
                      component={Author}
                    />
                    <Route path={`/category/:mode(new)`} component={Category} />
                    <Route
                      path={`/category/:id/:mode(edit)?`}
                      component={Category}
                    />
                  </div>
                </div>
              );
            }}
          />
          <Route
            component={match => {
              return (
                <div className="columns">
                  <div className="column">
                    <NotFoundPage />
                  </div>
                </div>
              );
            }}
          />
        </Switch>
      </Router>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma</strong> by{' '}
            <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed{' '}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

/**
    <div className="container">
      <div className="navbar">navigation</div>
      <div className="columns">
        <div className="column is-one-third">
          left side containes two sections
        </div>
        <div className="column">
          <Switch>
            <Route exact path="/" component={Books} />
            <Route path={`/book/:mode(new)`} component={Books} />
            <Route path={`/book/:id/:mode(edit)?`} component={Books} />
            <Route path={`/author/:mode(new)`} component={Author} />
            <Route path={`/author/:id/:mode(edit)?`} component={Author} />
            <Route path={`/category/:mode(new)`} component={Category} />
            <Route path={`/category/:id/:mode(edit)?`} component={Category} />
          </Switch>
        </div>
      </div>
    </div>
 */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form, Text, Select, Option, TextArea } from 'informed';

import requester from '../../../utilities/api/requester';

class BookForm extends React.Component {
  state = {
    initialValues: {},
  };

  componentDidMount() {
    debugger;
    // if props.id it mean in edit mode
    // call api to get this detailed document // or check store for it first
  }

  submitForm = values => {
    console.info(values);
  };

  render() {
    const { authors, categories } = this.props;

    const categoriesList = categories.map(category => (
      <Option value={category.id} key={category.id}>
        {category.name}
      </Option>
    ));

    const authorsList = authors.map(author => (
      <Option value={author.id} key={author.id}>
        {author.name}
      </Option>
    ));

    return (
      <React.Fragment>
        <h1 className="title">Book</h1>
        <h2 className="subtitle">Add your Favourite book</h2>
        <Form
          onSubmit={submittedValues => {
            this.submitForm(submittedValues);
          }}
        >
          <div className="columns">
            <div className="column">
              <div className="field ">
                <Text
                  required
                  placeholder="Book Title"
                  className="input is-primary"
                  field="title"
                />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field is-horizontal">
                <div className="select is-primary ">
                  <Select field="category">{categoriesList}</Select>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field is-horizontal">
                <div className="select is-primary ">
                  <Select field="author">{authorsList}</Select>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field is-horizontal">
                <TextArea
                  required
                  field="description"
                  placeholder="Book Description"
                  className="textarea is-primary"
                />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field is-horizontal">
                <Text
                  required
                  placeholder="ISBN"
                  className="input is-primary"
                  field="isbn"
                />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field is-horizontal">
                <Text
                  required
                  placeholder="No. of pages"
                  className="input is-primary"
                  field="pagesNumber"
                />
              </div>
            </div>
            <div className="column">
              <div className="field is-horizontal">
                <Text
                  required
                  placeholder="Year Published"
                  className="input is-primary"
                  field="publishYear"
                />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="field is-horizontal">
                <Text
                  required
                  placeholder="Image URL"
                  className="input is-primary"
                  field="image"
                />
              </div>
            </div>
          </div>
          <input className="button is-primary" type="submit" value="Save" />
          <input className="button" type="reset" value="Cancel" />
        </Form>
      </React.Fragment>
    );
  }
}

function mapStoreToProps(store) {
  return {
    authors: store.author.items,
    categories: store.category.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(
    mapStoreToProps,
    mapDispatchToProps,
  )(BookForm),
);

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Form, Text, Select, Option, TextArea } from 'informed';
import { Field, FieldLabel, FieldBody, SelectField } from './styles';

import { addBookAPI } from '../apis';

import requester from '../../../utilities/api/requester';
import { create as createGuid } from '../../../utilities/guid';

class BookForm extends React.Component {
  state = {
    initialValues: {},
  };

  componentDidMount() {
    // if props.id it mean in edit mode
    // call api to get this detailed document // or check store for it first
  }

  submitForm = values => {
    requester(
      {
        method: 'post',
        url: addBookAPI,
        data: {
          ...values,
          id: createGuid(),
        },
      },
      response => {
        // Move to details page
      },
    );
  };

  render() {
    const { authors, categories } = this.props;

    const categoriesList = categories.map(category => (
      <Option value={category.id} key={category.id}>
        {category.name}
      </Option>
    ));

    categoriesList.unshift(
      <Option value="" disabled>
        Select Category
      </Option>,
    );

    const authorsList = authors.map(author => (
      <Option value={author.id} key={author.id}>
        {author.name}
      </Option>
    ));

    authorsList.unshift(
      <Option value="" disabled>
        Select Author
      </Option>,
    );

    return (
      <React.Fragment>
        <h1 className="title">Book</h1>
        <h2 className="subtitle">Add your Favourite book</h2>
        <hr />
        <Form
          onSubmit={submittedValues => {
            this.submitForm(submittedValues);
          }}
        >
          <div className="columns">
            <div className="column">
              <Field className="field is-horizontal">
                <FieldLabel className="field-label is-normal">
                  <label className="label">Title</label>
                </FieldLabel>
                <FieldBody className="field-body">
                  <div className="field">
                    <p className="control">
                      <Text
                        required
                        placeholder="Book Title"
                        className="input is-primary"
                        field="title"
                      />
                    </p>
                  </div>
                </FieldBody>
              </Field>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Field className="field is-horizontal">
                <FieldLabel className="field-label is-normal">
                  <label className="label">Category</label>
                </FieldLabel>
                <FieldBody>
                  <div className="field">
                    <SelectField className="select is-primary">
                      <Select required field="category">
                        {categoriesList}
                      </Select>
                    </SelectField>
                  </div>
                </FieldBody>
              </Field>
            </div>
            <div className="column">
              <Field className="field is-horizontal">
                <FieldLabel className="field-label is-normal">
                  <label className="label">Author</label>
                </FieldLabel>
                <FieldBody className="field-body">
                  <div className="field">
                    <SelectField className="select is-primary">
                      <Select required field="author">
                        {authorsList}
                      </Select>
                    </SelectField>
                  </div>
                </FieldBody>
              </Field>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Field className="field is-horizontal">
                <FieldLabel className="field-label is-normal">
                  <label className="label">Description</label>
                </FieldLabel>
                <FieldBody className="field-body">
                  <div className="field">
                    <p className="control">
                      <TextArea
                        required
                        field="description"
                        placeholder="Book Description"
                        className="textarea is-primary"
                      />
                    </p>
                  </div>
                </FieldBody>
              </Field>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Field className="field is-horizontal">
                <FieldLabel className="field-label is-normal">
                  <label className="label">ISBN</label>
                </FieldLabel>
                <FieldBody className="field-body">
                  <div className="field">
                    <p className="control">
                      <Text
                        required
                        placeholder="ISBN"
                        className="input is-primary"
                        field="isbn"
                      />
                    </p>
                  </div>
                </FieldBody>
              </Field>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Field className="field is-horizontal">
                <FieldLabel className="field-label is-normal">
                  <label className="label">No. of pages</label>
                </FieldLabel>
                <FieldBody className="field-body">
                  <div className="field">
                    <p className="control">
                      <Text
                        required
                        placeholder="No. of pages"
                        className="input is-primary"
                        field="pagesNumber"
                      />
                    </p>
                  </div>
                </FieldBody>
              </Field>
            </div>
            <div className="column">
              <Field className="field is-horizontal">
                <FieldLabel className="field-label is-normal">
                  <label className="label">Year Published</label>
                </FieldLabel>
                <FieldBody className="field-body">
                  <div className="field">
                    <p className="control">
                      <Text
                        required
                        placeholder="Year Published"
                        className="input is-primary"
                        field="publishYear"
                      />
                    </p>
                  </div>
                </FieldBody>
              </Field>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Field className="field is-horizontal">
                <FieldLabel className="field-label is-normal">
                  <label className="label">Images</label>
                </FieldLabel>
                <FieldBody className="field-body">
                  <div className="field">
                    <p className="control">
                      <Text
                        required
                        placeholder="Image URL"
                        className="input is-primary"
                        field="image"
                      />
                    </p>
                  </div>
                </FieldBody>
              </Field>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="buttons">
                <input
                  className="button is-primary"
                  type="submit"
                  value="Save"
                />
                <a
                  className="button"
                  onClick={() => this.props.history.push('/')}
                >
                  Cancel
                </a>
              </div>
            </div>
          </div>
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

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Form, Text, Select, Option, TextArea } from 'informed';
import { Field, FieldLabel, FieldBody, SelectField } from './styles';

import { addBookAPI, fetchBookByIdAPI } from '../apis';

import requester from '../../../utilities/api/requester';
import { create as createGuid } from '../../../utilities/guid';

class BookForm extends React.Component {
  constructor(props) {
    super(props);

    const {
      books,
      match: { params },
    } = props;
    const book = books.find(book => book.id === params.id) || {};

    this.state = {
      book,
    };
  }

  // This Form working with new and edit mode
  // at constructor, we check first if we have a book at store or not to load it directly without calling api
  // if not, component did mount we call api to get this book and load it normaly
  componentDidMount() {
    const { book } = this.state;
    const {
      books,
      match: { params },
    } = this.props;

    // dirty check, check if we have book object or not
    if (params.id && book.id === undefined) {
      requester(
        {
          method: 'get',
          url: fetchBookByIdAPI(params.id),
        },
        response => {
          this.formApi.setState({ values: response.data.book });
        },
      );
    }
  }

  saveApi = formApi => {
    this.formApi = formApi;
  };

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

  // scenario,
  // use navigate to a book to edit it (Form in edit mode)
  // he took a desision to click on 'Add New Book'
  // these two directly below function to reset the form with out performance issue
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.id !== prevState.book.id) {
      return { id: nextProps.id };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      // this.formApi.reset();
      this.formApi.setState({ values: {} });
    }
  }

  render() {
    const { authors, categories } = this.props;
    const { book } = this.state;

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
          getApi={this.saveApi}
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
                        initialValue={book.title}
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
                      <Select
                        required
                        field="category"
                        initialValue={book.category}
                      >
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
                      <Select
                        required
                        field="author"
                        initialValue={book.author}
                      >
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
                        initialValue={book.description}
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
                        initialValue={book.isbn}
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
                        initialValue={book.pagesNumber}
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
                        initialValue={book.publishYear}
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
                        initialValue={book.image}
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
    books: store.book.items,
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

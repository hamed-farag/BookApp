import React from 'react';
import { connect } from 'react-redux';
import { Form, Text, Select, TextArea } from 'react-form';

import requester from '../../../utilities/api/requester';

class BookForm extends React.Component {
  state = {};

  componentDidMount() {
    debugger;
    // if props.id it mean in edit mode
    // call api to get this detailed document // or check store for it first
    // get catefoty and bind it
    // get author and bind it
  }

  submitForm = (q, w, e, r, t, y) => {
    debugger;
  };

  statusOptions = [
    {
      label: 'Single',
      value: 'single',
    },
    {
      label: 'In a Relationship',
      value: 'relationship',
    },
    {
      label: "It's Complicated",
      value: 'complicated',
    },
  ];
  G;

  render() {
    const { authors, categories } = this.props;

    const authorsList = authors.map(author => ({
      label: author.name,
      value: author.id,
    }));

    const categoriesList = categories.map(category => ({
      label: category.name,
      value: category.id,
    }));

    return (
      <React.Fragment>
        <h1 class="title">Book</h1>
        <h2 class="subtitle">Add your Favourite book</h2>
        <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
          {formApi => (
            <form onSubmit={formApi.submitForm}>
              <div className="columns">
                <div className="column">
                  <div className="field ">
                    <Text
                      placeholder="Title"
                      className="input is-primary"
                      field="firstName"
                      id="firstName"
                    />
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="field is-horizontal">
                    <div className="select is-primary ">
                      <Select
                        field="status"
                        id="status"
                        options={authorsList}
                        className="mb-4"
                      />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field is-horizontal">
                    <div className="select is-primary ">
                      <Select
                        field="status"
                        id="status"
                        options={categoriesList}
                        className="mb-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="field is-horizontal">
                    <TextArea field="bio" className="textarea is-primary" />
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="field is-horizontal">
                    <Text
                      placeholder="Title"
                      className="input is-primary"
                      field="firstName"
                      id="firstName"
                    />
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="field is-horizontal">
                    <Text
                      placeholder="Title"
                      className="input is-primary"
                      field="firstName"
                      id="firstName"
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="field is-horizontal">
                    <Text
                      placeholder="Title"
                      className="input is-primary"
                      field="firstName"
                      id="firstName"
                    />
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <div className="field is-horizontal">
                    <Text
                      placeholder="Title"
                      className="input is-primary"
                      field="firstName"
                      id="firstName"
                    />
                  </div>
                </div>
              </div>
              <input className="button is-primary" type="submit" value="Save" />
              <input className="button" type="reset" value="Cancel" />
            </form>
          )}
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

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(BookForm);

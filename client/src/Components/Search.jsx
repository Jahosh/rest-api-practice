import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
const Search = (props) => {
  return (
    <div>
      <form onSubmit={props.onSumbit}>
        <FormGroup bsSize='large'>
          <FormControl type="text" placeholder="student id..." />
        </FormGroup>
      </form>
    </div>
  );
};

export default Search;
import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';

//React Components
import Header from './Header.jsx';
import Search from './Search.jsx';
import ResultsList from './ResultsList.jsx';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      loaded: false
    }
  }
  getData() {
    axios.get('http://127.0.0.1:3000/api/students')
    .then( (response) => {
      this.setState({
        data: response.data.students,
        loaded: true
      });
    console.log(this.state);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let self = this;
    axios.get('http://127.0.0.1:3000/api/teachers')
    .then( (response) => {
      let data = response.data.teachers;
      return data;
    })
    .then( (data) => {
      self.setState({
        data
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    console.log(this.state);
    return (
      <div>
        { this.state.loaded ? 
        <div>
        <Grid>
          <Row className="main">
            <Col xs={12} md={6} mdOffset={3}>
              <Header />
            </Col>
          </Row>
          <Row className="body">
            <Col xs={12} md={6} mdOffset={3}>
              <Search
                onSumbit={this.handleSubmit.bind(this)} 
              />
              <hr />
              <h2>Results</h2>
              <ResultsList
                data={this.state.data}
              />
            </Col>
          </Row>
        </Grid>
        </div> : '' }
      </div>
    );
  }
}

export default App;
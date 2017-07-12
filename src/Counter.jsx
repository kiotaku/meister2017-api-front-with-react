import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import 'whatwg-fetch';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.checkCount();
  }

  checkCount() {
    fetch(`http://localhost/counter/${this.props.id}`, { mode: 'cors' })
      .then((res) => {
        return res.json();
      }).then((obj) => {
        this.setState({ count: obj.count });
      });
  }

  increment() {
    fetch(`http://localhost/counter/${this.props.id}/increment`, { mode: 'cors' })
      .then((res) => {
        this.checkCount();
      });
  }

  decrement() {
    fetch(`http://localhost/counter/${this.props.id}/decrement`, { mode: 'cors' })
      .then((res) => {
        this.checkCount();
      });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={2}>{ this.state.count }</Col>
        </Row>
        <Row>
          <Col xs={1} md={1}><Button onClick={ this.increment.bind(this) }>増加</Button></Col>
          <Col xs={1} md={1}><Button onClick={ this.decrement.bind(this) }>減少</Button></Col>
        </Row>
      </Grid>
    )
  }
}

import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';

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
    fetch(`http://localhost/counter/#{this.props.id}`)
      .then((res) => {
        return res.json();
      }).then((obj) => {
        this.setState({ count: obj.count });
      });
  }

  increment() {
    fetch(`http://localhost/counter/#{this.props.id}/increment`)
      .then((res) => {
        this.checkCount();
      });
  }

  decrement() {
    fetch(`http://localhost/counter/#{this.props.id}/decrement`)
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

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Counter from './Counter';

export default class CounterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [1, 2]
    };
  }

  componentDidMount() {
    fetch("http://localhost/counter")
      .then((res) => {
        return res.json();
      }).then((obj) => {
        this.setState({ ids: obj.ids });
      });
  }

  newCounter() {
    fetch("http://localhost/counter/new")
      .then((res) => {
        return res.json();
      }).then((obj) => {
        this.setState({ ids: this.state.ids.concat(obj.id) });
      });
  }

  render() {
    return (
      <div>
        {
          this.state.ids.map((id) => {
            return (
              <Counter id={id} />
            );
          })
        }
        <Button onClick={ this.newCounter.bind(this) }>カウンターの追加</Button>
      </div>
    );
  }
}

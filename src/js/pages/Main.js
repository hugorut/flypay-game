import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    
    //dummy data
    this.questions = [
      {
        text: '<pre class="prettyprint lang-php">1</pre>',
        answer: "this1"
      },      {
        text: '<pre class="prettyprint lang-php">2</pre>',
        answer: "this2"
      },      {
        text: '<pre class="prettyprint lang-php">3</pre>',
        answer: "this3"
      },      {
        text: '<pre class="prettyprint lang-php">4</pre>',
        answer: "this4"
      },      {
        text: '<pre class="prettyprint lang-php">5</pre>',
        answer: "this5"
      },      {
        text: '<pre class="prettyprint lang-php">6</pre>',
        answer: "this6"
      },
    ];

    this.amount = 3;

    this.state = {
      startingQuestions: this.selectStartingQuestion(),
      current: 0,
      finished: false
    }
  }

  selectStartingQuestion() {
    let available = JSON.parse(JSON.stringify(this.questions));
    let questions = []

    for (var i = 0; i < this.amount; i++) {
      let index = this.randomBetween(available.length -1, 0)
      let selected = available[index]
      questions.push(selected)

      available.splice(index, 1);
      available = available.filter(function(){return true;});
    }
    
    return questions
  }

  randomBetween(end, start) {
    return Math.floor(Math.random() * end) + start
  }

  createMarkup(s) {
    return {__html: s};
  }

  changeCurrent() {
    if (this.state.current == this.amount -1) {
      this.setState({finished: true})
      return
    }

    this.setState({current: this.state.current+1})
  }

  reset() {
    this.setState({
      startingQuestions: this.selectStartingQuestion(),
      current: 0,
      finished: false
    })
  }

  render() {
    let content = null

    if (this.state.finished) {
      content = (
      <div>
        <div className="alert alert-success">Thanks For Playing!</div>
        <button class="btn btn-danger" onClick={this.reset.bind(this)}>Reset</button>
      </div>
      )
    } else if (this.state.startingQuestions) {
      content = (
      <div>
        <div dangerouslySetInnerHTML={this.createMarkup(this.state.startingQuestions[this.state.current].text)}></div>
        <button class="btn btn-info" onClick={this.changeCurrent.bind(this)}>Next</button>
      </div>
      )
    }
    return (
      <div className="container">
        <br/>
        <div className="jumbotron">
          {content}
        </div>
      </div>
    );
 

  }
}

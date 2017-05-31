import React from 'react';

export default class RandomWord extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      randomWord: "",
      body: ""
    }
    this.fetchRandomWord = this.fetchRandomWord.bind(this);
    this.fetchWords = this.fetchWords.bind(this);
    this.creatWord = this.createWord.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.wordForm = this.wordForm.bind(this);
  }

  createWord(text) {
    $.ajax({
      method: 'POST',
      url: '/words/',
      data: {text: text}
    })
  }

  update(e) {
    this.setState({body: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createWord(this.state.body);
    this.fetchWords();
    this.setState({body: ""});
    this.fetchWords();
    if(this.state.words.length > 1) {
      this.fetchRandomWord();
    }
  }

  fetchWords() {
    $.ajax({
      method: 'GET',
      url: '/words/',
      success: (words) => {
        this.setState({words});
        if(this.state.words.length > 1) {
          this.fetchRandomWord();
        }
      }
    })
  }

  fetchRandomWord() {
    $.ajax({
      method: 'GET',
      url: '/words/random_word/',
      success: (word) => {
        this.setState({randomWord: word});
      }
    })
  }

  componentDidMount() {
    this.fetchWords();
    this.fetchRandomWord();
  }

  wordForm() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          className="word-input"
          placeholder="Enter a word..."
          onChange={this.update}
          value={this.state.body} />
      </form>
    )
  }

  render() {
    const words = this.state.words.map(word => {
      return <li key={word.id}>{word.text}</li>
    })
    return (
      <div>
        <h3>Random Word: {this.state.randomWord}</h3>
        {this.wordForm()}
        <ul>
          {words}
        </ul>

      </div>
    )
  }
}

import React from 'react';

const WordsList = React.createClass ({
    loadWordsFromServer: function() {
      $.ajax({
        url: this.props.url,
        datatype: 'json',
        cache: false,
        success: function(data) {
          this.setState({data: data});
        }.bind(this)
      })
    },

    getInitialState: function() {
      return {data: []};
    },

    componentDidMount: function() {
      this.loadWordsFromServer();
    },

    componentWillMount: function() {
      this.loadWordsFromServer();
    },

    render: function() {
      if (this.state.data) {
          console.log('DATA!')
          var wordNodes = this.state.data.map(function(word){
              return <li> {word.text} </li>
          })
      }
      return (
          <div>
              <h1>Hello React!</h1>
              <ul>
                  {wordNodes}
              </ul>
          </div>
      )
  }
})

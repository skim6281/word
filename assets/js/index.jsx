import React from 'react';
import ReactDOM from 'react-dom';

import RandomWord from './random_word';
// import RhymingWords from './rhyming_words';

class Root extends React.Component {
  render() {
    return(
      <div>
        <RandomWord />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root'))
});

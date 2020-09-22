import React from 'react';
import { Component } from 'react';
import './DogPhoto.css';

class DogPhoto extends Component {
  constructor() {
    super()
    this.fetchNewDog = this.fetchNewDog.bind(this);
    this.loadingMessage = this.loadingMessage.bind(this)
    this.state = {
      imagePath: '',
    }
  }

fetchNewDog() {
  fetch ('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      this.setState({imagePath: json.message})}
    )
}

componentDidMount() {
  this.fetchNewDog();
}

loadingMessage() {
  return "Loading... ";
}

renderImage() {
  const { imagePath } = this.state;
  return <img src={imagePath} alt="random dog" />
}

  render() {
    const { imagePath } = this.state;
    return (
      <div className="image-container">
        {imagePath ? this.renderImage() : this.loadingMessage() }
        <button className="new-dog-fetch-button" onClick={this.fetchNewDog}>Mostrar outro doguinho =D</button>
      </div>
    );
  };
}

export default DogPhoto;
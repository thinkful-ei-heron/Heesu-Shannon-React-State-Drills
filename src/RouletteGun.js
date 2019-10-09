import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = { 
    bulletInChamber: 8, 
  }

    state = {
      chamber: null,
      spinningTheChamber: false,
  }

handleClick = () => {
  this.setState( {
    spinningTheChamber: true
  }) 
  this.timeout = setTimeout( () => {
      const newNum = Math.ceil(Math.random() * 8)
      
      this.setState({
        chamber: newNum,
        spinningTheChamber:false,
      })
    } , 2000)
}

renderParagraph() {
  if (this.state.spinningTheChamber) {
    return 'spinning the chamber and pulling the trigger!'
  } else if (this.state.chamber === this.props.bulletInChamber) {
    return 'BANG!!!'
  } else {
    return 'you\'re safe!'
  }
}

componentWillUnmount () {
  clearTimeout(this.timeout);
}

  render() {
    return (
        <div>
          <p>{this.renderParagraph()}</p>
          <button onClick={() => {
            this.handleClick();
            }}>Pull the trigger!</button>
        </div>
    )
  }
}

export default RouletteGun;
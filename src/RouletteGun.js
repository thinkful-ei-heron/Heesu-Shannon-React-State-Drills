import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = { 
    bulletInChamber: 8, 
  }

    state = {
      chamber: null,
      spinningTheChamber: false,
  }

handleClick () {
  console.log('clicked!')
  this.setState( {
    spinningTheChamber: true
  })
}
timeout () { 
  console.log('timeout');
  setTimeout(Math.ceil(Math.random() * 8), 2000) 
}


  render() {
    return (
        <div>
          <p></p>
          <button onClick={() => {
            this.handleClick();
            this.timeout()}}>Pull the trigger!</button>
        </div>
    )
  }
}

export default RouletteGun;
import React from 'react';

class Accordian extends React.Component {
    static props = {
        sections: []
    };

    handleClick() {
        console.log(e.currentTarget);
        
    }

    render() {
        return(
            <ul>
                {this.props.sections.map(item => {
                    return (
                        <li><button onClick={()=> this.handleClick()}>{item.title}</button></li>
                        
                    );  
                })}
            </ul>
        )
    }

}



export default Accordian;
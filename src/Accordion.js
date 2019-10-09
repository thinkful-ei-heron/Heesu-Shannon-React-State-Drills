import React from 'react';

class Accordian extends React.Component {
    static defaultProps = {
        sections: []
    };
    state = {
        displayToggle: null,
    }

    handleClick = (i) => { 
            this.setState({displayToggle: i})
    }

    render() {
        
        return(
            <ul>
                {(this.props.sections !== []) ? 
                (this.props.sections.map((item, i) => {
                    return (
                        <li key= {i}>
                            <button onClick={()=> this.handleClick(i)}>
                                {item.title}
                            </button>
                            {(this.state.displayToggle === i) && <p>{item.content}</p>}
                    </li> )  
                })) : ''
            }
            </ul>
        )
    }

}



export default Accordian;
import React from 'react';

class Accordian extends React.Component {
    static props = {
        section: []
    };

    // generateList = () => {
    //     this.props.section.map(item => {
    //         console.log(item.title);
    //         return 'hi'
    //         //<li><button>{item.title}</button></li>
        
    //     })
    // }

    render() {
        return(
            <ul>
                this.props.section.map((item)) => {
                    return <li><button>{item.title}</button></li>})
                {/* <li><button onClick={()=> this.handleClick()}></button></li>  */}
            </ul>
        )
    }

}



export default Accordian;
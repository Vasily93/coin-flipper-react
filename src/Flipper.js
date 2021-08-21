import React, {Component} from 'react';
import Coin from './Coin';

class Flipper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flips: 0,
            tails: 0,
            heads: 0,
            side: 1
        }
    }

    handleFlip = () => {
        let result = Math.floor(Math.random() * 2);

        this.setState({flips: this.state.flips+1});

        result ? this.setState({heads: this.state.heads+1}) : 
            this.setState({tails: this.state.tails+1});

        this.setState({side: result});
    }

    render() {
        const {flips, tails, heads} = this.state;
        return (
            <div>
                <Coin side={this.state.side}/>
                <button onClick={this.handleFlip}>Flip the Coin</button>
                <p>Out of {flips}, you got {heads} heads, and {tails} tails.</p>
            </div>
        )
    }
}

export default Flipper;
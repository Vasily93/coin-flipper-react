function Coin(props) {
    let urlSide = props.side ? 'Heads' : 'Tails';
    // let url = `https://tinyurl.com/react-coin-${urlSide}-jpg`;
    return (
        // <img src={url} alt={urlSide}/>
        <h4>{urlSide}</h4>
    )   
}

export default Coin;
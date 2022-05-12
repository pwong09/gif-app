const Gif = (props) => {
    return (
        <div className="gif-data">
            <img src={props.gif} alt={props.gif} />
        </div>
    )
}

export default Gif;
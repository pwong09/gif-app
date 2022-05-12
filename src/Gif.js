const Gif = (props) => {
    return (
        <div className="gif-data">
            <img src={props.gif.data.images.downsized_large.url} alt={props.gif.data.title} />
        </div>
    )
}

export default Gif;
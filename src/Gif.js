const Gif = ({gif}) => {
    return (
        <div className="gif-data">
            <img src={gif.url} alt={gif.title} />
        </div>
    )
}

export default Gif;
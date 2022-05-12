import React, {useState}

function Form(props) {
    const [gifSearch, setGifSearch] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <form>
                <input type="text" placeholder="type of gif" />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;
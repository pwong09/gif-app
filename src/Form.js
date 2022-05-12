import {useState} from "react";


const Form = (props) => {
    const [gifSearch, setGifSearch] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit button hit!');
    }
    const handleChange = (e) => {
        const search = e.target.value;
        setGifSearch(search);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="type of gif" 
                    value={gifSearch} 
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form;
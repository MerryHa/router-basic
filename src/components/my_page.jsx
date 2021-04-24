import React, { useRef, useState } from 'react';
import { Route, useHistory } from 'react-router';
const MyPage = (props) => {
    const [name, setName] = useState(null);
    const history = useHistory();

    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        if (!value) {
            alert('Please enter your name.');
        }
        setName(value);
        history.push(`/mypage/${value.toLowerCase()}`);

    }
    return (
        <div className='my-page'>
            <h1>My Page</h1>
            <Route path='/mypage' exact>
                {!name && <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name : </label>
                    <input ref={inputRef} id="name" type="text" />
                </form>}
                {name && <p>{`Hello, ${name}!\n This is your page.`}</p>}
            </Route>
            <Route path='/mypage/:id'>
                {name && <p>{`Hello, ${name}!\n This is your page.`}</p>}
            </Route>

        </div>

    );
}

export default MyPage;
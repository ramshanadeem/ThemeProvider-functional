import React, { createContext, useState } from 'react'
import FuntionalProps from '../comps/FunctionalProps';

/* export const BookContext = createContext();
class BookContextP extends React.Component {


    state = {
        booksstore:
            [{ name: 'htmlcss', author: 'Jon Duc' },
            { name: 'React', author: 'Dave' },
            { name: 'Js', author: 'Mark' }]
    }

    render() {
        return (
                <BookContext.Provider value={{ ...this.state }}>
                    {this.props.children}
                </BookContext.Provider>

        )
    }
}
export default BookContextP; */
export const BookContext = createContext();
function BookContextP(props) {
    const [booksstore, setBook] = useState([
        { name: 'htmlcss', author: 'Jon Duc' },
        { name: 'React', author: 'Dave' },
        { name: 'Js', author: 'Mark' }


    ])
    return (
        <>
            <BookContext.Provider value={{ booksstore }}>
                {props.children}

            </BookContext.Provider>

        </>
    );
}

export default BookContextP;

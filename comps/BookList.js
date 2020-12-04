import React, { useState, useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';
import { BookContext } from '../Context/BookContext';
function BookList() {
    const { isLight, light, dark } = useContext(ThemeContext)
    const { booksstore } = useContext(BookContext)


    console.log(booksstore)
    const ui = isLight ? light : dark;


    /*  const [books, setBook] = useState([
         { name: 'htmlcss', author: 'Jon Duc' },
         { name: 'React', author: 'Dave' },
         { name: 'Js', author: 'Mark' }
 
 
     ]) */
    return (

        <div style={{ backgroundColor: ui.bg, color: ui.text }}>

            <ul>
                {booksstore.map((item) => (

                    <li key={item.name}>{`${item.name} author is ${item.author}`}</li>


                ))}
            </ul>



        </div>

    );
}

export default BookList;

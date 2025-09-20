import { useQuery } from "@apollo/client/react";
import { getBooksQuery } from "../queries/queries";
import BookDetails  from './BookDetails';
import React, { useState  } from 'react';

function BookList() {
    const [bookData, setState] = useState({
        id: ''
    });

    const { data, error, loading } = useQuery(getBooksQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(data)
    const handleBookClick = (bookId) => {
        console.log(bookId);
        setState({...bookData, id: bookId});
        console.log(bookData.id);
    };

    var details = data.books.map(book => {
        return <div> <ul id="book-list"><li key={book.id}  onClick={(e) => handleBookClick(book.id)}>{book.name}</li></ul></div>
    }); 
    console.log({details})
    console.log(bookData.id)
    return <div> {details} {bookData.id && <BookDetails book={bookData.id}/>} </div>
}

export default BookList; 

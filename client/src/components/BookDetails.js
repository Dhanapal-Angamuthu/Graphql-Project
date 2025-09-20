import { useQuery } from "@apollo/client/react";
import { getBookQuery } from "../queries/queries";
function BookDetails(props) {
    const bookId = props.book;
    console.log(" Book Id: " + bookId);
    const { data, error, loading } = useQuery(getBookQuery, {
       variables: { id: bookId },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const bookData = data.book;
    console.log("Name: " + bookData.name);
    console.log("Genre: " + bookData.genre);
    console.log("Author: " + bookData.author.name);

   return (<div id="book-details">
    <h2> Book details</h2> 
    <p>Name: {bookData.name}</p>
    <p>Genre: {bookData.genre}</p>
    <p>Author: {bookData.author.name}</p> 
    <ul className="other-books" style={{ listStyle: 'none' }}><h3>Other books by this author :</h3> {bookData.author.books.map((book) => <li key={book.id}>{book.name}</li>)}  </ul></div>);
}

export default BookDetails;


import { useQuery, useMutation } from "@apollo/client/react";
import { getAuthorQuery, addBookMutation, getBooksQuery } from "../queries/queries";
import React, { useState  } from 'react';


function AuthorList(props) {
    const { data, error, loading } = useQuery(getAuthorQuery);
    const [formData, setFormData] = useState({
        name: '',
        genre: '',
        authorId: ''
    });
    const [addBook, { loading: mutationLoading, error: mutationError }] = useMutation(addBookMutation);
    if (loading) return <option disabled>Loading...</option>
    if (error) return <p>Error: {error.message}</p>
    console.log({mutationError});
    console.log({mutationLoading});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addBook({
            variables: {
                name: formData.name,
                genre: formData.genre,
                authorId: formData.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        })
    }


    const handleChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    return (
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select name="authorId" value={formData.authorId} onChange={handleChange} >
                    <option>Select author</option>
                    {data && data.authors.map(author => {
                        return (<option key={author.id} value={author.id}>{author.name}</option>);
                    })
                    }
                </select>
            </div>
            <button>+</button>

        </form>
    )
    }
//}

/*export default compose(
    graphql(getAuthorQuery, { name: "getAuthorQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);*/
export default AuthorList;



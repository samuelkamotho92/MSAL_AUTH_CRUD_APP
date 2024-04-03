import styles from "./NewBook.css?url";
import { LinksFunction } from '@remix-run/node';
const NewBook = () => {
    return (
        <form method="post" action="/books" id="note-form">
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
            </p>
            <p>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" name="author" required />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows="5" required />
            </p>
            <p>
                <label htmlFor="publishedDate">Published Date</label>
                <input type="datetime-local" id="publishedDate" name="publishedDate" required />
            </p>
            <div className="form-actions">
                <button>Add Book</button>
            </div>
        </form>
    )
}

export default NewBook
export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

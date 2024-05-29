import styles from "./NewBook.css?url";
import { LinksFunction } from '@remix-run/node';
import { Form, useNavigation } from "@remix-run/react";
const NewBook = ({ data }: any) => {
    const navigation = useNavigation();
    const renderErrors = (errors: any) => {
        return errors.map((error: any, index: any) => (
            <p key={index} style={{ color: 'red' }}>{error}</p>
        ))
    }
    return (
        <Form method="post" action="/books" id="note-form">
            <fieldset disabled={navigation.state === "submitting"}>
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                    {data?.Title && renderErrors(data?.Title)}
                </p>
                <p>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" required />
                    {data?.Author && renderErrors(data?.Author)}
                </p>
                <p>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" rows="5" required />
                    {data?.Description && renderErrors(data?.Description)}
                </p>
                <p>
                    <label htmlFor="publishedDate">Published Date</label>
                    <input type="datetime-local" id="publishedDate" name="publishedDate" required />
                </p>
                <div className="form-actions">
                    <button type="submit">
                        {navigation.state === "submitting" ? "Adding a book ..." : " Add book "}
                    </button>
                </div>
            </fieldset>
        </Form>
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

import { ActionFunctionArgs } from '@remix-run/node';
import NewBook, { links as newBookLinks } from '~/components/NewBook';
import BookList, { links as BookListLinks } from '~/components/BookList';
import { redirect } from '@remix-run/node';
import { createBook, getBooks } from '~/api/Book';
import { useLoaderData } from '@remix-run/react';
import { DateTime } from 'luxon';
import { AuthenticatedTemplate, UnauthenticatedTemplate, MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from "@azure/msal-browser";
import { loginRequest } from '~/authProvider/authConfig';
import { deleteBook } from '~/api/Book';
const LoadingComponent = () => {
    return <p>Authentication in progress</p>
}

const ErrorComponent = ({ error }) => {
    return <p>An Error Occured: {error}</p>
}
const books = () => {
    const books = useLoaderData();
    return (

        <div>
            <AuthenticatedTemplate
            >
                <NewBook />
                <BookList books={books} />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <p className='flex justify-center text-center  m-6'>Please sign-in to see your  Books</p>
            </UnauthenticatedTemplate>
        </div>
    )
}

export async function loader() {
    const books = await getBooks();
    return books;
}


export async function action({ request }: ActionFunctionArgs) {
    if (request.method == 'PUT') {
        console.log("updating books");
    }
    try {
        console.log(request.method);
        const formData = await request.formData();
        const title = String(formData.get('title'));
        const author = String(formData.get('author'));
        const description = String(formData.get('description'));
        const publishedDateString = formData.get('publishedDate');
        const publishedDate = publishedDateString ? DateTime.fromISO(publishedDateString.toString(), { zone: 'utc' }) : null;
        const bookData = {
            Title: title,
            Author: author,
            Description: description,
            publishedDate: publishedDate
        }
        console.log(bookData);
        await createBook(bookData);
        return redirect("/books");
    } catch (err) {
        console.error("Error creating book:", err);
        return null; // Return null in case of error
    }

}



export function links() {
    return [...newBookLinks(), ...BookListLinks()];
}

export default books


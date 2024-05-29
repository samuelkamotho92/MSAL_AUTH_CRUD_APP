import { ActionFunctionArgs } from '@remix-run/node';
import NewBook, { links as newBookLinks } from '~/components/NewBook';
import BookList, { links as BookListLinks } from '~/components/BookList';
import { redirect } from '@remix-run/node';
import { createBook, getBooks } from '~/api/Book';
import { useActionData, useLoaderData } from '@remix-run/react';
import { DateTime } from 'luxon';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
const LoadingComponent = () => {
    return <p>Authentication in progress</p>
}

const ErrorComponent = ({ error }) => {
    return <p>An Error Occured: {error}</p>
}
const books = () => {
    const books = useLoaderData();
    const resp: any = useActionData();
    return (
        <div>
            <AuthenticatedTemplate
            >
                <NewBook data={resp} />
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
        return "updating books"
    }
    try {
        const body = await request.formData();
        const title = String(body.get('title'));
        const author = String(body.get('author'));
        const description = String(body.get('description'));
        const publishedDateString = body.get('publishedDate');
        const publishedDate = publishedDateString ? DateTime.fromISO(publishedDateString.toString(), { zone: 'utc' }) : null;
        const bookData = {
            Title: title,
            Author: author,
            Description: description,
            publishedDate: publishedDate
        }
        const { data } = await createBook(bookData);
        if (data?.statusCode == 200) {
            //Toastify and
            return redirect("/books");
            // redirect 
        }
    } catch (err) {
        const error = err?.response?.data.errors;
        return error;
        // Return null in case of error
    }
}



export function links() {
    return [...newBookLinks(), ...BookListLinks()];
}

export default books


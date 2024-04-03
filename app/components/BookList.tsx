import moment from "moment";
import BookStyle from "./BookList.css?url";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Menu } from "@headlessui/react";
import MyDropdown from "./DropDown";
import { Guid } from "guid-typescript";

export const buttonLink: string[] = ["update Book", "Delete Book"];

interface BookType {
    id: Guid;
    title: string;
    author: string;
    description: string;
    publishedDate: string | null;
}
const BookList = ({ books }: any) => {
    return (
        <ul id="book-list">
            {books.map((book: BookType, index: number) => (
                <li key={index} className="book">
                    <article>
                        <header>
                            <ul className="book-meta">
                                <li>#{index + 1}</li>
                                <li>
                                    <time>
                                        {moment(book.publishedDate).format('MMMM Do YYYY, h:mm:ss a')}
                                    </time>
                                </li>
                                <li className="text-green-300">
                                    <MyDropdown id={book.id} />
                                </li>
                            </ul>
                            <h2>{book.title}</h2>
                            <h2>{book.author}</h2>
                        </header>
                        <p>{book.description}</p>
                    </article>
                </li>
            ))}
        </ul>
    )
}

export default BookList
export function links() {
    return [
        {
            rel: "stylesheet",
            href: BookStyle
        }
    ]
}

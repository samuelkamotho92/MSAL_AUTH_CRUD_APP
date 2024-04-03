import React from 'react'
import { useState } from 'react'
import { DateTime } from 'luxon';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { MdEdit } from 'react-icons/md';
import { updateBook } from '~/api/Book';
import { redirect } from '@remix-run/node';
const UpdateBook = ({ id }: any) => {
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState<string | undefined>("");
    const [author, setAuthor] = useState<string | undefined>("");
    const [description, setDescription] = useState<string | undefined>("");
    const [publishedDate, setPublishedDate] = useState<DateTime | string>(DateTime.utc());
    const onCloseModal = () => {
        setOpenModal(false);
    }
    const handleFormSubmission = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const bookDetails = { Title: title, Author: author, Description: description };
        const resp = await updateBook(id, bookDetails);
        console.log(resp);
        if (resp.status == 200) {
            alert("Book updated successfully");
            return redirect("/books");
        }
        setOpenModal(false);
        return redirect("/books");
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredDate = DateTime.fromISO(event.target.value);
        // You can perform validation here if needed
        setPublishedDate(enteredDate);
    };
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>
                <MdEdit
                    style={{
                        color: "green",
                        fontSize: "1.5rem"
                    }} />

            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup className="flex-col justify-center align-center m-auto w-[400px] py-2 bg-amber-100">
                <Modal.Header />
                <Modal.Body className='h-full w-full'>
                    <h3 className="text-center">Update Book Details</h3>
                    <form className="flex-col justify-center align-center m-auto space-y-4" onSubmit={handleFormSubmission}>
                        <div className='flex-col justify-center align-center my-3'>
                            <div className='flex justify-center align-center m-auto'>
                                <Label htmlFor="title" value="Title" className='text-black text-center font-bold'>Title</Label>
                            </div>
                            <TextInput
                                id="title"
                                placeholder="Title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                required
                                className='py-3'
                            />
                        </div>
                        <div className='flex-col justify-center align-center my-3'>
                            <div className='flex justify-center align-center m-auto'>
                                <Label htmlFor="author" value="Author" className='text-black text-center font-bold' />
                            </div>
                            <TextInput
                                id="author"
                                type="text"
                                placeholder='Author'
                                value={author}
                                onChange={(event) => setAuthor(event.target.value)}
                                className='py-3'
                                required />
                        </div>
                        <div className='flex-col justify-center align-center my-3'>
                            <div className='flex justify-center align-center m-auto'>
                                <Label htmlFor="Description" value="Description" className='text-black text-center font-bold' />
                            </div>
                            <TextInput
                                id="Description"
                                type="text"
                                placeholder='Description'
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                className='py-3'
                                required />
                        </div>
                        <button className='flex justify-center align-center  m-auto bg-green-400 p-3 rounded-md'>
                            Update Book
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default UpdateBook

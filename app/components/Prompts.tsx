import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdDelete, MdEdit } from "react-icons/md";
import { Guid } from "guid-typescript";
import { deleteBook } from "~/api/Book";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
const Prompts = ({ id }: any) => {
    const [openModal, setOpenModal] = useState(false);
    const openMyBook = async () => {
        setOpenModal(true);
    }
    const handleFormSubmission = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setOpenModal(false);
        const data = await deleteBook(id);
        if (data?.statusCode == 204) {
            alert("Book deleted successfully");
        }
        return redirect("/books");
    }
    return (
        <>
            <Button onClick={() => openMyBook()} className="flex">
                <MdDelete style={{
                    color: "red",
                    fontSize: "1.5rem"
                }} />
            </Button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup className="flex justify-center align-center m-auto w-1/2 py-2">
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this Book?
                        </h3>
                        <div className="flex justify-center gap-4 mb-4">
                            <Form method="delete" action={'/books'} onSubmit={handleFormSubmission}>
                                <button className="bg-red-400 p-2 rounded-md">
                                    {"Yes, I'm sure"}
                                </button>
                            </Form>
                            <button className="bg-sky-400 p-2 rounded-md" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Prompts

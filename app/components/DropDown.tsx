import { Dropdown } from "flowbite-react"
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import Prompts from "./Prompts";
import { Guid } from "guid-typescript";
import UpdateBook from "./UpdateBook";
function MyDropdown({ id }: any) {
    return (
        <div className="flex-col justify-around">
            <UpdateBook id={id} />
            <Prompts id={id} />
        </div>
    )
}
export default MyDropdown
import React from 'react'
import { useParams } from '@remix-run/react'
const Book = () => {
    const { id } = useParams();
    console.log(id);
  return (
    <div>
      <p>My book {id}</p>
    </div>
  )
}

export default Book

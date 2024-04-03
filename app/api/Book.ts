// import React from 'react';
import axios, { AxiosResponse } from 'axios';
import https from 'https';
import { Guid } from 'guid-typescript';

interface BookType {
    Title: string | undefined;
    Author: string | undefined;
    Description: string | undefined;
    publishedDate: DateTime | undefined;
}

interface UserType {
    Email: string | undefined;
    FullNames: string | undefined;
    Oid: string | undefined;
    SubOid: string | undefined;
}

export const createBook = async (book: BookType): Promise<void> => {
    const resp = await axios.post('https://localhost:7051/api/Book', book,
        {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        });
}

export const getBooks = async (): Promise<void> => {
    const books: any = await axios.get('https://localhost:7051/api/Book', {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });
    const { result } = books.data;
    return result;
}
export const deleteBook = async (id: string | null): Promise<void> => {
    console.log(`deleting ${id}`);
    const resp: any = await axios.delete(`https://localhost:7051/api/Book/${id}`);
    console.log(resp);
    return resp.data;
}
export const getBook = async (id: Guid): Promise<void> => {
    const book = await axios.get(`https://localhost:7051/api/Book/${id}`, {
        httpsAgent: new https.Agent({
            rejectUnauthorized: false
        })
    });
    const { result } = book.data;
    return result;
}
export const updateBook = async (id: Guid, bookDetails: any): Promise<void> => {
    const book: any = await axios.put(`https://localhost:7051/api/Book/${id}`,
        {
            Title: bookDetails.Title,
            Author: bookDetails.Author,
            Description: bookDetails.Description,
        }
    );
    return book;
};
export const createUser = async (Email: string, FullNames: string | undefined, Oid: string | undefined, SubOid: string | undefined): Promise<void> => {
    const newUser: any = await axios.post(`https://localhost:7003/api/Auth/RegisterUser`, {
        Email,
        FullNames,
        Oid,
        SubOid
    }
    );
    return newUser;
};
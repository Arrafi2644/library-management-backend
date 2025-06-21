
import express, { Request, Response } from 'express'
import { Book } from '../models/books.model';

const booksRoutes = express.Router();

booksRoutes.post('/', async (req: Request, res: Response) => {

    try {
        const bookBody = req.body;
        console.log(req.body, "req.body theke ");

        const book = await Book.create(bookBody);

        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book
        })

        console.log("book body ", bookBody);
        console.log("book created  ", book);
    } catch (error: any) {
     res.status(201).json({
            success: false,
            message: error.message,
            error: error
        })
    }



})

export default booksRoutes;
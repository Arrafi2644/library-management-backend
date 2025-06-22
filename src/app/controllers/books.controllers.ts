
import express, { Request, Response } from 'express'
import { Book } from '../models/books.model';

const booksRoutes = express.Router();

// create book 

booksRoutes.post('/', async (req: Request, res: Response) => {

    try {
        const bookBody = req.body;

        const book = await Book.create(bookBody);

        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: book
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error
        })
    }

})

// get all books 
booksRoutes.get('/', async (req: Request, res: Response) => {
    try {
        const filter = req.query.filter as string || "";
        const sortBy = req.query.sortBy as string || "createdAT"
        const sort = req.query.sort === "asc" ? 1 : -1;
        const limit = parseInt(req.query.limit as string) || 10;
        const query = { genre: filter }
        const books = await Book.find(query)
            .sort({ [sortBy]: sort })
            .limit(limit)

        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: books
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error
        })
    }
})

export default booksRoutes;
import mongoose, { Schema } from "mongoose";
import { IBook } from "../interfaces/books.interface";

const bookSchema = new Schema<IBook>({
title: {
        type: String,
        required: [true, "Title is required but got {VALUE}"]
    },
    author:{
        type: String,
        required: [true, "Author is required but got {VALUE}"]
    },
    genre: {
        type: String,
        enum: ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
        required: [true, "Genre is required and must be between FICTION, NON_FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY."]
    },
    isbn: {
        type: String,
        required: [true, "Isbn is required"],
        unique: [true, "Isbn must be unique, this isbn used before"]
    },
    description: {
        type: String,
        default: ""
    },
    copies: {
        type: Number,
        required: [true, "Copies number required"],
        min: [0, "Copies number cannot be less than 0."]
    },
    available: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
}

)

export const Book = mongoose.model('Book', bookSchema)
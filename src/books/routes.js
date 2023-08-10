const { Router } = require("express")
const bookRouter = Router()

const { addBook, getAllBooks } = require("./controllers")

bookRouter.post("/books/addBook", addBook)
bookRouter.get("/books/getBooks", getAllBooks)


module.exports = bookRouter
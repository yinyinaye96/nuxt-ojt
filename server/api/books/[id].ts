import { deleteBook, updateBook, editBook } from '~/repositories/books'

export default defineEventHandler(async (event) => {
    const { id } = getRouterParams(event)
    if (isMethod(event, 'GET')) {
        const book = await editBook(event, id)
        return book
    }
    if (isMethod(event, 'POST')) {
        const book = getQuery(event);
        const success = await updateBook(event, book, id);
        return success
    }
    // throw createError({ message: 'Not Found', statusCode: 404 }) // show in server
})
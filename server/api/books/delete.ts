import { deleteBook } from '~/repositories/books'

export default defineEventHandler(async (event) => {
    const { id } = await readBody(event)
    if (isMethod(event, 'POST')) {
        const success = await deleteBook(event, id)
        return success
    }
    return false;
})
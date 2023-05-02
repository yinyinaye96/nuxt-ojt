import { getBooks } from '~/repositories/books'

export default defineEventHandler(async (event) => {
  const method = getMethod(event, 'GET')
  if (method != 'GET') {
    throw createError({ message: 'HTTP method is not allowed.', statusCode: 405 }) // show in server
  }
  const books = await getBooks(event)
  return books

})
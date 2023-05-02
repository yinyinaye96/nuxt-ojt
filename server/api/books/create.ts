import { setBook } from '~/repositories/books'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    var sessionData: any =  getCookie(event, 'books') || [];
    if (sessionData.length > 0) {
        sessionData = JSON.parse(sessionData);
    }
    const book = await setBook(event, body, sessionData);
    return { book }
})
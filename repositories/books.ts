export async function getBooks(event: any) {
    var books: any = getCookie(event, 'books') || []
    if (books.length > 0) {
        books = JSON.parse(books)
    }
    return books;
}

export async function setBook(event: any, book: object, books: Array<object>) {
    books.push(book)
    setCookie(event, 'books', JSON.stringify(books))
    return books
}

export async function deleteBook(event: any, id: number) {
    var books: any = getCookie(event, 'books') || []
    if (books.length > 0) {
        books = JSON.parse(books)
        var index = books.map((x: any) => {
            return x.id
        }).indexOf(id)
        books.splice(index, 1);
        setCookie(event, 'books', JSON.stringify(books))
        return true
    }
    return false
}

export async function editBook(event: any, id: number) {
    var books: any = getCookie(event, 'books') || [];
    if (books.length > 0) {
        books = JSON.parse(books)
        return books.find(book => book.id == id);
    }
    throw createError({ message: 'Not Found', statusCode: 404 }) // show in server
}

export async function updateBook(event: any, book: any, id: number) {
    var books: any = getCookie(event, 'books') || []
    if (books.length > 0) {
        books = JSON.parse(books)
        var index = books.map((x: any) => {
            return x.id
        }).indexOf(id)
        books[index].name = book.name;
        books[index].author = book.author;
        books[index].price = book.price;
        books[index].date = book.date;
        setCookie(event, 'books', JSON.stringify(books))
        return true;
    }
}
function bookConstructor(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.bookRead = read;
    this.info = function() {
        return this.bookTitle + " by " + this.bookAuthor + ", " + this.bookPages + " pages, " + this.bookRead;
    }
  
}

const hobbitDetails = new bookConstructor("The Hobbit", "J. R. R. Tolkien", "295", "not read yet");


console.log(hobbitDetails.info());


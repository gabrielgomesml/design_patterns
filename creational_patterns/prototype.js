class Book {
    constructor(code, title, genre, author) {
        this.code = code;
        this.title = title;
        this.genre = genre;
        this.author = author;
    }

    clone() {
        let classCopy = Object.getPrototypeOf(this);
        let instance = Object.create(classCopy);

        instance.code = this.code;
        instance.title = this.title;
        instance.genre = this.genre;
        instance.author = this.author;

        return instance;
    }
};

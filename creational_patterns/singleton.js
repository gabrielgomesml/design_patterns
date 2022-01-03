class Book {
    constructor(code, title, genre, author) {
        if (Book.instance == null) {
            this.code = code;
            this.title = title;
            this.genre = genre;
            this.author = author;
            Book.instance = this;
            return this;
        };

        console.log("It's a Singleton!");
        return Book.instance;
    }
};

// Anti-pattern está muito ligado à má práticas de programação para resolver problemas
// e o singleton é considerado por muitos um anti pattern pois está diretamente relacionado
// ao conceito de variável global, pois ele permite apenas uma instancia de uma classe. Porém
// acredito que é saber quando utilizar, pois certamente esse padrão deve trazer benefícios
// em alguns casos.
class Iterator {
    constructor(elements) {
        this.index = 0;
        this.elements = elements;
    };

    next() {
        return this.elements[this.index++];
    };

    hasNext() {
        return this.index <= this.elements.length;
    };

    first() {
        this.index = 0;
        return this.next();
    };
}

const iterate =  () => {
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const iter = new Iterator(items);
    for (let i = iter.first(); iter.hasNext(); i = iter.next()) {
        console.log(i);
    };
};

iterate();

class Doll {
    interaction(action) {
        switch(action) {
            case 'salutation':
                console.log("Hello, I'm your lovely doll, and I promise to love you forever!");
                return true;
            case 'hungry':
                console.log("I'm hungry... i need some food.");
                return true;
            case 'sleepy':
                console.log("I wanna go to bed.");
                return true;
            default:
                console.log("Hi, i'm your dolly :)");
                return true;
        };
    };
};

class DollNewGeneration {
    salutation() {
        console.log("Hello, I'm your lovely doll, and I promise to love you forever!");
        return true;
    };

    hungry() {
        console.log("I'm hungry... i need some food.");
        return true;
    };

    sleepy() {
        console.log("I wanna go to bed.");
        return true;
    };

    speak() {
        console.log("Hi, i'm your dolly :)");
        return true;
    };
};

class DollAdapter {
    constructor() {
        this.doll = new DollNewGeneration();
    };

    interaction(action) {
        switch(action) {
            case 'salutation':
                return this.doll.salutation();
            case 'hungry':
                return this.doll.hungry();
            case 'sleepy':
                return this.doll.sleepy();
            default:
                return this.doll.speak();
        };
    };
};

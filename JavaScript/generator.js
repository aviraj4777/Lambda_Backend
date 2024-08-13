function *fetchNextElement() {
    const x = 10;
    yield 11;
    console.log("Entering after a yield");
    const y = x + (yield 30);
    console.log("Value of y is", y);
}

const itr = fetchNextElement();

console.log("first", itr.next());
console.log("second", itr.next());
console.log("third", itr.next(17));
console.log("fourth", itr.next());
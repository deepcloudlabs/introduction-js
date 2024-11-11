async function fun() {
    if (Math.random() < 0.5) {
        throw "something is wrong!";
    }
    return 42;
}

let user = {
    fn: "Dakota",
    ln: "Brown",
    name: function () {
        return this.fn + " " + this.ln;
    },
    testOBJ: {
        value: "this",
        obj: {
            value2: "Test",
            value3: user.testOBJ.obj.value2
        }
    }
};

console.log(user.name());
console.log(user.testOBJ.obj.value3);

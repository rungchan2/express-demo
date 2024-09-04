const arr = ["jack", "tom", "rose"];

arr.forEach((a,b,c) => {
    console.log("forEach : " + c);
});

arr.map((a,b,c) => {
    console.log("map : " + c);
})
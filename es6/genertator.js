function generator(array) {
    var nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ? {
                value: array[nextIndex++],
                done: false
            } : {
                done: true
            };
        }
    };
}

function* generator(array){
    for( var value in array)
    {
        yield value;
    }
}

function* fibonacci()
{
    var fn1 =0;
    var fn2 =1;
    while(true){
        var current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        var reset = yield current;
        if(reset)
        {
            fn1 = 0;
            fn2 = 1;
        }
    }
}

var sequence = fibonacci();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
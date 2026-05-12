
function operator (op) {
    let ops = {
    '+': (a,b) => a+b,
    '-': (a,b) => a-b,
    '*': (a,b) => a*b,
    '/': (a,b) => a/b
    };
    return ops[op];
}

function calcDecimal(a, op, b) {
    let r = operator(op)(parseInt(a), parseInt(b));
    return r;
}

export {calcDecimal, operator};

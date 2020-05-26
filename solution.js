// return masked string
function maskify(cc) {
    let final= cc.replace(/.(?=.{4,}$)/g,'#');
    return final;
}

let cc = 'bruce wayne is batman';
console.log(maskify(cc));
    
let name = new String("shubham     ");

name.prototype.trueLength = function()
{
    let newStr = this.name.trim();
    return newStr.length;
}

console.log(name.trueLength());
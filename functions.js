const mathFunc = {
    "acosh(":String.raw`acosh\(\d+(?:\.\d+)?\)`,
    "asinh(":String.raw`asinh\(\d+(?:\.\d+)?\)`,
    "atanh(":String.raw`atanh\(\d+(?:\.\d+)?\)`,

    "acos(":String.raw`acos\(\d+(?:\.\d+)?\)`,
    "asin(":String.raw`asin\(\d+(?:\.\d+)?\)`,
    "atan(":String.raw`atan\(\d+(?:\.\d+)?\)`,
    
    "cosh(":String.raw`cosh\(\d+(?:\.\d+)?\)`,
    "sinh(":String.raw`sinh\(\d+(?:\.\d+)?\)`,
    "tanh(":String.raw`tanh\(\d+(?:\.\d+)?\)`,

    "cos(":String.raw`cos\(\d+(?:\.\d+)?\)`,
    "sin(":String.raw`sin\(\d+(?:\.\d+)?\)`,
    "tan(":String.raw`tan\(\d+(?:\.\d+)?\)`,

}
const replacements = {
    "pi":Math.PI,
}

function calc(){
    try{
        Calculate()
    }catch(err){
        console.log(err)
    }
}

function Calculate(){
    let x = ("f"+document.getElementById("equation").value).toLowerCase()
    // use while loop then for loop
    let count = 0
    const keys = Object.keys(mathFunc)
    while (count < keys.length){
        count = 0
        for (var obj of keys){
            if (x.includes(obj)){
                var res = x.match(mathFunc[obj])
                if (res){
                    x=x.replace(res, eval("Math."+res))
                }else{
                    document.getElementById("value").innerHTML = "Error"
                }
            }else{
                count+=1
            }
        }
    }
    console.log(x.substring(1))
    for (var rep of Object.keys(replacements)){
        x=x.replace(rep, replacements[rep])
    }
    document.getElementById("value").innerHTML = eval(x.substring(1))
}
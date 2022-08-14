let displayItem=document.getElementById("display")

function display(number){
    displayItem.innerHTML+=number
}

let calculate
let solved
function solve(){
    
    calculate=displayItem.innerHTML
    solved=eval(calculate)
    displayItem.innerHTML=solved
}

function clearButton(){
    displayItem.innerHTML=" "
}

function keypad(event){
    if (event.key==="1"){
        display('1')
    }
    if (event.key==="2"){
        display('2')
    }
    if (event.key==="3"){
        display('3')
    }
    if (event.key==="4"){
        display('4')
    }
    if (event.key==="5"){
        display('5')
    }
    if (event.key==="6"){
        display('6')
    }
    if (event.key==="7"){
        display('7')
    }
    if (event.key==="8"){
        display('8')
    }
    if (event.key==="9"){
        display('9')
    }
    if (event.key==="+"){
        display('+')
    }
    if (event.key==="-"){
        display('-')
    }
    if (event.key==="/"){
        display('/')
    }
    if (event.key==="*"){
        display('*')
    }
    if (event.key==="."){
        display('.')
    }
    if (event.key==="0"){
        display('0')
    }
    if (event.key==="c"){
        clearButton()
    }
    if (event.key==="Enter"){
        solve()
    }
    
}

window.addEventListener('keydown',keypad)

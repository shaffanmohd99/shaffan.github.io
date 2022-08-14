
let shoppingListBox=document.getElementById("box")
let calcBox=document.getElementsByClassName("entry-box")
let calcPrice=document.getElementsByClassName("calc-price")
let calcQuantity=document.getElementsByClassName("calc-quantity")
let calcDisplay=document.getElementsByClassName("calc-display")
let calcGrandTotal=document.getElementById("totalPriceForAll")
let t=document.getElementById("totalPriceItem")

// function calcualte (){
//     let dispay=Math(price*quantity)
//     shoppingListBox.value=dispay
// }

function addLine(){
    
    let clone=calcBox[0].cloneNode(true)
    document.getElementById("myList").appendChild(clone)

    calcPrice[calcPrice.length-1].value=""
    calcQuantity[calcQuantity.length-1].value=""
    calcDisplay[calcDisplay.length-1].value=""
}

function calculate(){
    let sum=0
    let grand=[]
    for (i=0;i<calcPrice.length;i++){
        let price= calcPrice[i].value;
        let quantity=calcQuantity[i].value
        let solved=eval(price*quantity)
        calcDisplay[i].value ="RM "+solved
        grand[i]=solved
    }

    for (j=0;j<calcPrice.length;j++){
        sum+=grand[j]
        calcGrandTotal.innerHTML= "RM "+sum
    }
    // let test=document.getElementsByClassName("calc-display")
    // test[0].value="testing"
    // document.getElementById("totalPriceItem").value="RM "+ solved

    
}
// for (i=0;i<calcPrice.length;i++){

// }
        
       

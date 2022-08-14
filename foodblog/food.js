let mainFood =document.getElementById("mainFoodPic")
let title=document.getElementById("foodTitle")
let origin=document.getElementById("origin")
let desc=document.getElementById("description")

let pictureList={
    0:"./assets/food.jpg",
    1:"./assets/photo_6325672196722242023_y.jpg",
    2:"./assets/photo_6325672196722242024_y.jpg",
    3:"./assets/photo_6325672196722242025_y.jpg",
    4:"./assets/photo_6325672196722242026_y.jpg",
    5:"./assets/photo_6325672196722242029_y.jpg"
}
let foodTitle={
    0: "Tomahawk Steak",
    1:"Chicken Katsu Curry",
    2:"Braised Short Ribs",
    3:"Kung Pao Chicken",
    4:"Pad Thai",
    5:"Ramen"
}
let foodOrigin={
    0: "Western Countries",
    1:"Japan",
    2:"Western Countries",
    3:"China",
    4:"Thailand",
    5:"Japan"
}
let foodDescription={
    0: "An expensive food at restaurant but very easy to make.      Seasoned the steaks overnight and using a reverse-sear method to cook it. If you have a thermometer, you can't go wrong.",
    1:"Slightly different than the curry we are used to. The curry is super thick and mild in flavor. This dish is serve with a deep fried chicken cutlet coated with japanese breadcrumbs called panko",
    2:"Braising is a cooking technique where the meat is cook within a liquid inside an oven.To achieve fork-tender meat, the short ribs was cooked in the oven for 3 hours with the braising liquid made out of pomegranate juice",
    3:"A classic chinese dish made with dried chillies, peanuts, scallion.The chicken was deepfriend with a light coating of cornstarch and then it is coated with the kung pao sauce",
    4:"The national dish of Thailand.It might look like a normal char kuey teow, but the flavor profile is different. The 3 main ingredient to make this dish are fish sauce, tamarind paste and palm sugar",
    5:"One of the most time comsuming dishes to make. The broth consist of two way of cooking.First we need to create a chicken stock which will be the based on the ramen. To add layers of flavors to the broth, we add another broth made from umami-rich ingredient such as dried mushroom, anchovies and kombu"
}

function picSwitch(index){
    switch(index){
        case 0:
            mainFood.src=pictureList[0]
            title.innerHTML=foodTitle[0]
            origin.innerHTML=foodOrigin[0]
            desc.innerHTML=foodDescription[0]
            break
         case 1:
            mainFood.src=pictureList[1]
            title.innerHTML=foodTitle[1]
            origin.innerHTML=foodOrigin[1]
            desc.innerHTML=foodDescription[1]
            break
         case 2:
            mainFood.src=pictureList[2]
            title.innerHTML=foodTitle[2]
            origin.innerHTML=foodOrigin[2]
            desc.innerHTML=foodDescription[2]
            break
         case 3:
            mainFood.src=pictureList[3]
            title.innerHTML=foodTitle[3]
            origin.innerHTML=foodOrigin[3]
            desc.innerHTML=foodDescription[3]
            break
         case 4:
            mainFood.src=pictureList[4]
            title.innerHTML=foodTitle[4]
            origin.innerHTML=foodOrigin[4]
            desc.innerHTML=foodDescription[4]
            break
         case 5:
            mainFood.src=pictureList[5]
            title.innerHTML=foodTitle[5]
            origin.innerHTML=foodOrigin[5]
            desc.innerHTML=foodDescription[5]
            break
            
    }
}
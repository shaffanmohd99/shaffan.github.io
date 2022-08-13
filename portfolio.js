function navbarMobile(){
    let navList=document.getElementById("navbarList")
    if(navList.style.display==='none'){
        navList.style.display='flex'
        navList.style.flexDirection='column'
    }
}
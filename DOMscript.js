function addParagraph() {
    const para = document.createElement("p");
    para.innerHTML="<b>This is a new paragraph</b>";
    para.style.color ="blue";

    const parent = document.querySelector('#root')
    parent.appendChild(para);
}
function removeParagraph() {
    const para = document.querySelector('p')
    const parent = document.getElementById("root")
    parent.removeChild(para);
}
function removeAllParagraph() {
    const para = document.querySelectorAll("p")
    const parent = document.querySelector("#root")
    // for(i of para) {
    //parent.removeChild(i);
//    }
    para.forEach((i)=>{
        parent.removeChild(i);
    })


}
const bookData = [
    {image: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UF1000,1000_QL80_.jpg", price: "₹465"},
    {image: "https://d2sofvawe08yqg.cloudfront.net/reactjs-documentation-pdf/s_hero?1620645510&1620645510", price: "₹599"},
    {image: "https://avatars.githubusercontent.com/u/32949016?s=280&v=4", price: "₹399"},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqbRblGS-9lwfKFSpZGMChU9hWTOs2umBr1V9_gTjIWQ&s",price:"₹499"},
];
function Book(props) {
   


    const div = document.createElement("div");
    div.setAttribute("class", "card");

    const image = document.createElement("img");
    image.setAttribute("src", props.image || "");
    image.setAttribute("width", "100px");
    image.setAttribute("height", "100px");

    const h2 = document.createElement("h2");
    h2.innerText = "Price: ₹465";

    const btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.onclick =()=>{addToCart(props)};

    div.appendChild(image);
    div.appendChild(h2);
    div.appendChild(btn);
    return div;
}
const cart = [];
function addToCart(data) {
    cart.push(data);
    console.log(data,"Data added successfully");
}
const bookStore = bookData.map((i) => {
    return Book(i);
});

const parent = document.getElementById("root");
if (parent) {
    bookStore.forEach((book) => parent.appendChild(book));
}
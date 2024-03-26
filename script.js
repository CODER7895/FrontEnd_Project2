var products = [
    { name: "Gamers Assemble", headline: "The Real Love For Gamers", price: "$25.6 Lakh", image: "https://images.unsplash.com/photo-1573053986275-840ffc7cc685?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "The Set-Up", headline: "Heaven For Gamers", price: "$52.9 Lakh", image: "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Steroids For Gamers", headline: "This is Heart Of Gamers", price: "$18.7 Lakh", image: "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Gaming World", headline: "World Of Gamers", price: "$34.9 Lakh", image: "https://images.unsplash.com/photo-1636489953081-c4ebbd50fa3a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Best Trio", headline: "Trio Of Gamers", price: "$4.9 Lakh", image: "https://images.unsplash.com/photo-1636489941333-dce15613fd9b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Heart Of Gamers", headline: "Love For Gamers", price: "$37.6 Lakh", image: "https://images.unsplash.com/photo-1602837385569-08ac19ec83af?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Nervous Sytem Of Gamers", headline: "This is Power For Gamers", price: "$53.4 Lakh", image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Boosting With Asus", headline: "ASUS Is Only For Gamers", price: "$70.4 Lakh", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

var popular = [
    { name: "Gaming KeyBoard", headline: "Feeling For Gamers", price: "$20 k", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Gaming HeadPhone", headline: "Listening With Gamers", price: "$1.2 lakh", image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Blue Ocean For Gamers", headline: "Feel With Gamers", price: "$2.5 lakh", image: "https://images.unsplash.com/photo-1581351123004-757df051db8e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Tri for Gamers", headline: "Love of Gamers", price: "$12.3 lakh", image: "https://images.unsplash.com/photo-1636489941333-dce15613fd9b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

var cart = [];

function addProducts() {
    let clutter = "";
    products.forEach((product, index) => {
        clutter += `  <div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
        <img class="w-full h-full object-cover" src="${product.image}" alt="">
    </div>
    <div class="data w-full px-2 py-5">
        <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
        <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                <h4 class="font-semibold mt-2">${product.price}</h4>
            </div>
            <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                    class="ri-add-line"></i></button>
        </div>
    </div>
</div>`;
    });
    document.getElementById("products").innerHTML = clutter;
}

function addPopularProducts() {
    let popularClutter = ""
    popular.forEach((popular) => {
        popularClutter += `  <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
        <img class="w-full h-full object-cover"
            src="${popular.image}"
            alt="">
    </div>
    <div class="data py-2 w-full">
        <h1 class="leading-none font-semibold">${popular.name}</h1>
        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popular.headline}</h4>
        <h4 class="mt-3 font-semibold text-zinc-500">${popular.price}</h4>
    </div>
</div>`
    });
    document.getElementById("populars").innerHTML = popularClutter;
}

function addToCart() {
    document.getElementById("products").addEventListener("click", (details) => {
        if (details.target.classList.contains('add')) {
            cart.push(products[details.target.dataset.index])
            console.log(cart);
        }
    });
};

function showCart() {
    document.getElementById("carticon").addEventListener("click", () => {
        document.getElementById("cartexpnd").style.display = "block";
        var clutter = '';
        cart.forEach((prod, index) => {
            clutter += `  <div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
                <img class="w-full h-full object-cover" src="${prod.image}"/>
            </div>
            <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
            </div>
        </div>`
        });
        document.getElementById("cartexpnd").innerHTML = clutter;
    });
};

showCart();
addToCart();
addProducts();
addPopularProducts();
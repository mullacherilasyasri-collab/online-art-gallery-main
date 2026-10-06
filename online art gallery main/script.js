function openGallery() {
    window.location.href = "signup.html";
}


function openCategory(category) {

    if (category === "nature") {
        window.location.href = "nature.html";
    }

    else if (category === "abstract") {
        window.location.href = "abstract.html";
    }

    else if (category === "portrait") {
        window.location.href = "portrait.html";
    }

    else if (category === "traditional") {
        window.location.href = "traditional.html";
    }

}


function viewPainting(paintingName) {

    localStorage.setItem("selectedPainting", paintingName);

    window.location.href = "painting-details.html";

}


function contactArtist() {

    alert(
        "Thank you for your interest in this artwork!\n\n" +
        "An ArtVista representative will contact you soon."
    );

}


function goBack() {

    window.history.back();

}


/* ALL PAINTINGS */

const paintings = {

    /* NATURE */

    "Mountain Serenity": {
        category: "NATURE COLLECTION",
        artist: "Elena Morris",
        price: "₹18,500",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
        description: "A peaceful landscape capturing the beauty of mountains surrounded by soft morning light."
    },

    "Whispering Forest": {
        category: "NATURE COLLECTION",
        artist: "Daniel Carter",
        price: "₹15,000",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
        description: "A deep forest scene portraying the calmness and mystery of nature."
    },

    "Ocean Dreams": {
        category: "NATURE COLLECTION",
        artist: "Sophia Reed",
        price: "₹21,000",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
        description: "A serene ocean landscape inspired by the endless movement and calm of the sea."
    },

    "Golden Valley": {
        category: "NATURE COLLECTION",
        artist: "William Blake",
        price: "₹16,500",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
        description: "Warm golden tones bring a peaceful valley landscape to life."
    },

    "Lake Reflection": {
        category: "NATURE COLLECTION",
        artist: "Olivia James",
        price: "₹19,800",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
        description: "Mountains reflected across a quiet lake create a peaceful natural composition."
    },

    "Green Escape": {
        category: "NATURE COLLECTION",
        artist: "James Anderson",
        price: "₹14,500",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85",
        description: "A lush green landscape celebrating the peaceful beauty of untouched nature."
    },


    /* ABSTRACT */

    "Colour Symphony": {
        category: "ABSTRACT COLLECTION",
        artist: "Emma Wilson",
        price: "₹17,500",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
        description: "A vibrant composition where bold colours come together to create a sense of movement."
    },

    "Fragments of Emotion": {
        category: "ABSTRACT COLLECTION",
        artist: "Lucas Martin",
        price: "₹22,000",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=85",
        description: "An expressive artwork representing different emotions through layered shapes and colours."
    },

    "Silent Movement": {
        category: "ABSTRACT COLLECTION",
        artist: "Isabella Moore",
        price: "₹19,500",
        image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1200&q=85",
        description: "Soft forms and contrasting tones create a peaceful yet mysterious visual experience."
    },

    "Dream in Motion": {
        category: "ABSTRACT COLLECTION",
        artist: "Oliver Smith",
        price: "₹24,000",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
        description: "A creative exploration of imagination, movement and colourful artistic expression."
    },


    /* PORTRAIT */

    "The Thoughtful Gaze": {
        category: "PORTRAIT COLLECTION",
        artist: "Amelia Rose",
        price: "₹20,500",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
        description: "A graceful portrait capturing a quiet moment of thought and natural expression."
    },

    "Quiet Confidence": {
        category: "PORTRAIT COLLECTION",
        artist: "Henry Carter",
        price: "₹18,000",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85",
        description: "A contemporary portrait focused on expression, character and subtle emotion."
    },

    "Timeless Expression": {
        category: "PORTRAIT COLLECTION",
        artist: "Sophia Bennett",
        price: "₹23,500",
        image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=85",
        description: "A carefully composed portrait exploring personality through light and expression."
    },

    "Eyes of a Story": {
        category: "PORTRAIT COLLECTION",
        artist: "Daniel Evans",
        price: "₹21,500",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1200&q=85",
        description: "A striking portrait where expression becomes the central focus of the artwork."
    },


    /* TRADITIONAL */

    "Heritage in Colour": {
        category: "TRADITIONAL COLLECTION",
        artist: "Ananya Rao",
        price: "₹26,000",
        image: "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1200&q=85",
        description: "A colourful artwork inspired by the rich traditions and cultural heritage of India."
    },

    "Colours of Tradition": {
        category: "TRADITIONAL COLLECTION",
        artist: "Meera Sharma",
        price: "₹24,500",
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=85",
        description: "A detailed composition celebrating traditional patterns, colours and artistic expression."
    },

    "Stories of India": {
        category: "TRADITIONAL COLLECTION",
        artist: "Arjun Kapoor",
        price: "₹28,000",
        image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85",
        description: "An artistic representation inspired by India's stories, culture and heritage."
    },

    "Timeless Heritage": {
        category: "TRADITIONAL COLLECTION",
        artist: "Kavya Menon",
        price: "₹25,500",
        image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1200&q=85",
        description: "A traditional artwork reflecting the beauty of cultural heritage passed through generations."
    }

};


/* LOAD SELECTED PAINTING */

const selectedPainting =
    localStorage.getItem("selectedPainting");


if (
    selectedPainting &&
    paintings[selectedPainting] &&
    document.getElementById("detailTitle")
) {

    const painting = paintings[selectedPainting];


    document.getElementById("detailTitle").innerText =
        selectedPainting;


    document.getElementById("detailArtist").innerText =
        painting.artist;


    document.getElementById("detailDescription").innerText =
        painting.description;


    document.querySelector(".detail-price").innerText =
        painting.price;


    document.getElementById("detailImage").src =
        painting.image;


    document.querySelector(".painting-category").innerText =
        painting.category;

}
/* SIGNUP */

function signupUser(event) {

    event.preventDefault();

    const name =
        document.getElementById("signupName").value;

    const email =
        document.getElementById("signupEmail").value;

    const password =
        document.getElementById("signupPassword").value;


    const user = {
        name: name,
        email: email,
        password: password
    };


    localStorage.setItem(
        "artVistaUser",
        JSON.stringify(user)
    );


    alert("Account created successfully!");


    window.location.href = "login.html";
}
/* LOGIN */

function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;


    const savedUser =
        JSON.parse(localStorage.getItem("artVistaUser"));


    if (!savedUser) {

        alert("No account found. Please sign up first.");

        return;
    }


    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        localStorage.setItem("loggedIn", "true");

        alert("Login successful!");

        window.location.href = "index.html";

    }

    else {

        alert("Invalid email or password.");

    }

}
/* USER DASHBOARD */

const dashboardName =
    document.getElementById("userName");

if (dashboardName) {

    const savedUser =
        JSON.parse(localStorage.getItem("artVistaUser"));

    if (savedUser) {

        dashboardName.innerText =
            savedUser.name;

    }

}


/* LOGOUT */

function logoutUser() {

    localStorage.removeItem("loggedIn");

    alert("You have been logged out.");

    window.location.href = "user-dashboard.html";

}
/* ADD TO CART */

function addToCart(paintingName) {

    const painting = paintings[paintingName];

    if (!painting) {
        return;
    }

    let cart =
        JSON.parse(localStorage.getItem("artVistaCart")) || [];


    const alreadyAdded =
        cart.some(item => item.name === paintingName);


    if (alreadyAdded) {

        alert("This artwork is already in your cart.");

        return;
    }


    cart.push({
        name: paintingName,
        artist: painting.artist,
        price: painting.price,
        image: painting.image,
        category: painting.category
    });


    localStorage.setItem(
        "artVistaCart",
        JSON.stringify(cart)
    );


    alert("Artwork added to your cart!");

}


/* OPEN CART */

function openCart() {

    window.location.href = "cart.html";

}


/* DISPLAY CART */

function displayCart() {

    const cartContainer =
        document.getElementById("cartItems");

    const totalContainer =
        document.getElementById("cartTotal");


    if (!cartContainer) {
        return;
    }


    const cart =
        JSON.parse(localStorage.getItem("artVistaCart")) || [];


    if (cart.length === 0) {

        cartContainer.innerHTML =
            `<div class="empty-cart">
                Your cart is empty.<br><br>
                Explore the gallery and add an artwork.
            </div>`;

        totalContainer.innerHTML = "";

        return;
    }


    cartContainer.innerHTML = "";


    let total = 0;


    cart.forEach((item, index) => {

        const priceNumber =
            Number(
                item.price
                .replace("₹", "")
                .replace(",", "")
            );


        total += priceNumber;


        cartContainer.innerHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div>

                    <h2>${item.name}</h2>

                    <p>
                        ${item.category}
                    </p>

                    <p>
                        Artist: ${item.artist}
                    </p>

                    <span class="cart-price">
                        ${item.price}
                    </span>

                </div>


                <button
                    class="remove-button"
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>

        `;

    });


    totalContainer.innerHTML =
        "Total: ₹" + total.toLocaleString("en-IN");

}


/* REMOVE FROM CART */

function removeFromCart(index) {

    let cart =
        JSON.parse(localStorage.getItem("artVistaCart")) || [];


    cart.splice(index, 1);


    localStorage.setItem(
        "artVistaCart",
        JSON.stringify(cart)
    );


    displayCart();

}


/* LOAD CART PAGE */

displayCart();
function addSelectedPaintingToCart() {

    const selected =
        localStorage.getItem("selectedPainting");

    if (selected) {

        addToCart(selected);

    }

}
function adminLogin(event) {

    event.preventDefault();

    const username = document.getElementById("adminUsername").value;
    const password = document.getElementById("adminPassword").value;

    if (username === "admin" && password === "admin123") {

        localStorage.setItem("adminLoggedIn", "true");

        alert("Admin login successful!");

        window.location.href = "admin-dashboard.html";

    } else {

        alert("Invalid admin username or password.");

    }
}
function addPainting(event) {

    event.preventDefault();

    const name = document.getElementById("paintingName").value;
    const artist = document.getElementById("paintingArtist").value;
    const category = document.getElementById("paintingCategory").value;
    const price = document.getElementById("paintingPrice").value;
    const image = document.getElementById("paintingImage").value;
    const description = document.getElementById("paintingDescription").value;

    const newPainting = {
        name: name,
        artist: artist,
        category: category,
        price: "₹" + Number(price).toLocaleString("en-IN"),
        image: image,
        description: description
    };

    let adminPaintings =
        JSON.parse(localStorage.getItem("adminPaintings")) || [];

    adminPaintings.push(newPainting);

    localStorage.setItem(
        "adminPaintings",
        JSON.stringify(adminPaintings)
    );

    alert("Painting added successfully!");

    document.querySelector("form").reset();

}
function displayAdminPaintings() {

    const container = document.getElementById("adminPaintingList");

    if (!container) return;

    const adminPaintings =
        JSON.parse(localStorage.getItem("adminPaintings")) || [];

    if (adminPaintings.length === 0) {

        container.innerHTML = `
            <div class="empty-cart">
                No paintings have been added yet.
            </div>
        `;

        return;
    }

    container.innerHTML = "";

    adminPaintings.forEach((painting, index) => {

        container.innerHTML += `

            <div class="painting-card">

                <img
                    src="${painting.image}"
                    alt="${painting.name}"
                >

                <div class="painting-info">

                    <p class="painting-category">
                        ${painting.category}
                    </p>

                    <h2>${painting.name}</h2>

                    <p class="painting-description">
                        ${painting.description}
                    </p>

                    <p class="artist">
                        Artist: ${painting.artist}
                    </p>

                    <div class="painting-bottom">

                        <span class="price">
                            ${painting.price}
                        </span>

                        <button
                            onclick="deletePainting(${index})">
                            Delete
                        </button>

                    </div>

                </div>

            </div>
        `;
    });
}


function deletePainting(index) {

    let adminPaintings =
        JSON.parse(localStorage.getItem("adminPaintings")) || [];

    adminPaintings.splice(index, 1);

    localStorage.setItem(
        "adminPaintings",
        JSON.stringify(adminPaintings)
    );

    alert("Painting deleted successfully!");

    displayAdminPaintings();
}


displayAdminPaintings();
function displayPublicAdminPaintings() {

    const container =
        document.getElementById("publicAdminPaintings");

    if (!container) return;

    const adminPaintings =
        JSON.parse(localStorage.getItem("adminPaintings")) || [];

    if (adminPaintings.length === 0) {

        container.innerHTML = `
            <p style="text-align:center; grid-column:1/-1;">
                No new artworks added yet.
            </p>
        `;

        return;
    }

    container.innerHTML = "";

    adminPaintings.forEach((painting) => {

        container.innerHTML += `

            <div class="painting-card">

                <img
                    src="${painting.image}"
                    alt="${painting.name}"
                >

                <div class="painting-info">

                    <p class="painting-category">
                        ${painting.category}
                    </p>

                    <h2>${painting.name}</h2>

                    <p class="painting-description">
                        ${painting.description}
                    </p>

                    <p class="artist">
                        Artist: ${painting.artist}
                    </p>

                    <div class="painting-bottom">

                        <span class="price">
                            ${painting.price}
                        </span>

                    </div>

                </div>

            </div>

        `;
    });
}

displayPublicAdminPaintings();
function adminLogout() {

    localStorage.removeItem("adminLoggedIn");

    alert("Admin logged out successfully!");

    window.location.href = "admin-login.html";
}
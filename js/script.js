function signup() {
    //1. Récupération des données
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var mobile = document.getElementById("mobile").value;

    //2. Validation des données

    //First Name must have minimum 3 caractères
    var isFirstNameValid = checkLength(firstName, 3);
    if (!isFirstNameValid) {
        showError("firstNameError", "First name must have at least 3 caracters. ");

    } else {
        clearError("firstNameError");
    }
    //Last Name must have minimum 4 caractères
    var isLastNameValid = checkLength(lastName, 4);
    if (!isLastNameValid) {
        showError("lastNameError", "Last name must have at least 4 caracters.");
    } else {
        clearError("lastNameError");
    }
    //Format email
    var isEmailValid = checkEmail(email)
    if (!isEmailValid) {
        showError("EmailError", "Invalid email format.");
    } else {
        clearError("EmailError");
    }
    //password must have min 5 caracters
    var isPasswordValid = checkLength(password, 5);
    if (!isPasswordValid) {
        showError("PasswordError", "Password must have at least 5 caracters.");
    } else {
        clearError("PasswordError");
    }
    //confirm password
    var isConfirmPasswordValid = checkPassword(confirmPassword, password);
    if (!isConfirmPasswordValid) {
        showError("confirmPasswordError", "Passwords do not match.");
    } else {
        clearError("confirmPasswordError");
    }
    //phone contain 8 caracters
    var isPhone = checkPhone(mobile);
    if (!isPhone) {
        showError("PhoneError", "Phone must have 8 caracters.");
    } else {
        clearError("PhoneError");
    }
    // Vérifier si l'email existe déja
    var isEmailUnique = checkEmailExists(email);
    if (isEmailUnique) {
        showError("EmailUniqueError", "Email must be unique");
    } else {
        clearError("EmailUniqueError");
    }

    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isPhone && isConfirmPasswordValid && !isEmailUnique) {
        var usersTab = JSON.parse(localStorage.getItem("users")) || [];

        //3. Création JSON
        var user = {
            id: generateId(usersTab),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            mobile: mobile,
            role: "client"
        }
        console.log(user);

        //ajouter un nouveau utilisateur
        usersTab.push(user);

        //4.Stockage dans local
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace("login.html");
    }
}
function signupStore() {
    //1. Récupération des données
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var mobile = document.getElementById("mobile").value;
    var storeName = document.getElementById("StoreName").value;
    var storeAdress = document.getElementById("StoreAddress").value;

    //2. Validation des données

    //First Name must have minimum 3 caractères
    var isFirstNameValid = checkLength(firstName, 3);
    if (!isFirstNameValid) {
        showError("firstNameError", "First name must have at least 3 caracters. ");

    } else {
        clearError("firstNameError");
    }
    //Last Name must have minimum 4 caractères
    var isLastNameValid = checkLength(lastName, 4);
    if (!isLastNameValid) {
        showError("lastNameError", "Last name must have at least 4 caracters.");
    } else {
        clearError("lastNameError");
    }
    //Format email
    var isEmailValid = checkEmail(email)
    if (!isEmailValid) {
        showError("EmailError", "Invalid email format.");
    } else {
        clearError("EmailError");
    }
    //password must have min 5 caracters
    var isPasswordValid = checkLength(password, 5);
    if (!isPasswordValid) {
        showError("PasswordError", "Password must have at least 5 caracters.");
    } else {
        clearError("PasswordError");
    }
    //confirm password
    var isConfirmPasswordValid = checkPassword(confirmPassword, password);
    if (!isConfirmPasswordValid) {
        showError("confirmPasswordError", "Passwords do not match.");
    } else {
        clearError("confirmPasswordError");
    }
    //phone contain 8 caracters
    var isPhone = checkPhone(mobile);
    if (!isPhone) {
        showError("PhoneError", "Phone must have 8 caracters.");
    } else {
        clearError("PhoneError");
    }
    // Vérifier si l'email existe déja
    var isEmailUnique = checkEmailExists(email);
    if (isEmailUnique) {
        showError("EmailUniqueError", "Email must be unique");
    } else {
        clearError("EmailUniqueError");
    }
    //store name doit avoir min 3 caractères 
    var isStoreNameValid = checkLength(storeName, 3);
    if (!isStoreNameValid) {
        showError("StoreNameError", "store name must have at least 3 caracters. ");
    } else {
        clearError("StoreNameError");
    }

    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && isPhone && isConfirmPasswordValid && !isEmailUnique && isStoreNameValid) {
        var usersTab = JSON.parse(localStorage.getItem("users")) || [];

        //3. Création JSON
        var user = {
            id: generateId(usersTab),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            mobile: mobile,
            storeName: storeName,
            storeAdress: storeAdress,
            role: "store",
            status: "notValidated"
        }
        console.log(user);

        //ajouter un nouveau utilisateur
        usersTab.push(user);

        //4.Stockage dans local
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace("login.html");
    }
}
function signupAdmin() {
    //1. Récupération des données
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    //2. Validation des données

    //First Name must have minimum 3 caractères
    var isFirstNameValid = checkLength(firstName, 3);
    if (!isFirstNameValid) {
        showError("firstNameError", "First name must have at least 3 caracters. ");

    } else {
        clearError("firstNameError");
    }
    //Last Name must have minimum 4 caractères
    var isLastNameValid = checkLength(lastName, 4);
    if (!isLastNameValid) {
        showError("lastNameError", "Last name must have at least 4 caracters.");
    } else {
        clearError("lastNameError");
    }
    //Format email
    var isEmailValid = checkEmail(email)
    if (!isEmailValid) {
        showError("EmailError", "Invalid email format.");
    } else {
        clearError("EmailError");
    }
    //password must have min 5 caracters
    var isPasswordValid = checkLength(password, 5);
    if (!isPasswordValid) {
        showError("PasswordError", "Password must have at least 5 caracters.");
    } else {
        clearError("PasswordError");
    }
    // Vérifier si l'email existe déja
    var isEmailUnique = checkEmailExists(email);
    if (isEmailUnique) {
        showError("EmailUniqueError", "Email must be unique");
    } else {
        clearError("EmailUniqueError");
    }

    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && !isEmailUnique) {
        var usersTab = JSON.parse(localStorage.getItem("users")) || [];

        //3. Création JSON
        var user = {
            id: generateId(usersTab),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: "admin"
        }
        console.log(user);

        //ajouter un nouveau utilisateur
        usersTab.push(user);

        //4.Stockage dans local
        localStorage.setItem("users", JSON.stringify(usersTab));
        location.replace("login.html");
    }
}
// fonction longueur chaine de caractères
function checkLength(ch, x) {
    return ch.length >= x;
}
function checkPhone(phone) {
    return phone.length == 8;
}
function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
//fonction pour afficher les erreurs
function showError(id, message) {
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.color = "red";
}
function clearError(id) {
    document.getElementById(id).innerHTML = "";
}
function checkPassword(pwd, cPwd) {
    return (pwd === cPwd);

}
function checkEmailExists(email) {
    //récupération des utilisateurs
    var userTab = JSON.parse(localStorage.getItem("users")) || [];
    for (let i = 0; i < userTab.length; i++) {
        if (userTab[i].email === email) {
            return true;
        }
    }
    return false;
}
function togglePassword(id, btn) {
    var input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
        btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        input.type = "password";
        btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
}

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var foundedUser = {};
    var usersTab = JSON.parse(localStorage.getItem("users")) || [];
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email === email && usersTab[i].password === password) {
            foundedUser = usersTab[i];
            break;
        }
    }
    if (foundedUser) {
        if (foundedUser.role === "client") {
            localStorage.setItem("connectedUserId", JSON.stringify(foundedUser.id));
            location.replace("products.html");
        } else if (foundedUser.role === "store") {
            if (foundedUser.status === "notValidated") {
                showError("loginError", "Your account is not validated yet. Please wait for the admin approval.");
            } else {
                localStorage.setItem("connectedUserId", JSON.stringify(foundedUser.id));
                location.replace("store.html");
            }
        } else {
            localStorage.setItem("connectedUserId", JSON.stringify(foundedUser.id));
            location.replace("admin.html");
        }
    } else {
        showError("loginError", "Invalid email or password.");
    }
}
function addProduct() {
    //1. Récupération des données
    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var stock = document.getElementById("stock").value;
    var category = document.getElementById("category").value;
    console.log(name, price, stock, category);

    //2. Validation des données
    // name min 4 caracters
    var nameValid = checkLength(name, 4);
    if (!nameValid) {
        showError("nameError", "Name must have at least 4 caracters.");
    } else {
        clearError("nameError");
    }
    //price > 0
    var priceValid = checkNumber(price);
    if (!priceValid) {
        showError("priceError", "Price must be greater than 0.");
    } else {
        clearError("priceError");
    }
    //Stock > 0
    var stockValid = checkNumber(stock);
    if (!stockValid) {
        showError("stockError", "Stock must be greater than 0.")
    }
    //Category
    var categoryValid = checkCategory(category);
    if (!categoryValid) {
        showError("categoryError", "Please select a category.");
    } else {
        clearError("categoryError");
    }
    //3. Création JSON
    if (nameValid && priceValid && stockValid && categoryValid) {

        var productsTab = JSON.parse(localStorage.getItem("products")) || [];
        var connectedUserId = localStorage.getItem("connectedUserId");

        var product = {
            id: generateId(productsTab),
            name: name,
            price: price,
            stock: stock,
            category: category,
            storeId: connectedUserId
        }
        console.log(product);
        //4. Sauvegarde BD      
        productsTab.push(product);
        localStorage.setItem("products", JSON.stringify(productsTab));

    }
}
function checkNumber(nb) {
    return nb > 0;
}
function checkCategory(category) {
    return category !== "";
}
function displayProduct(params) {
    var productsTab = JSON.parse(localStorage.getItem("products")) || [];
    var content = "";
    for (let i = 0; i < productsTab.length; i++) {
        content = content + `<div class="col-lg-4 col-md-6">
			<div class="single-product">
				<img class="img-fluid" src="img/product/p1.jpg" alt="">
					<div class="product-details">
						<h6>${productsTab[i].name}</h6>
							<div class="price">
								<h6>${productsTab[i].price} DT
                        </h6>
                        <div class="product-action">
                            <button type="button" class="primary-btn detail-btn" onclick="goToDisplay(${productsTab[i].id})"> Voir détails</button>
                        </div>
					</div>
			</div>
			</div>
		</div>`

    }
    document.getElementById("content").innerHTML = content;

}
function generateId(Tab) {

    var max;
    if (Tab.length == 0) {
        max = 0;
    } else {
        var max = Tab[0].id;
        for (let i = 0; i < Tab.length; i++) {
            if (Tab[i].id > max) {
                max = Tab[i].id;
            }
        }

    }
    return (max + 1);
}
function goToDisplay(id) {
    var productId = JSON.stringify(localStorage.setItem("displayProductId", id));
    window.location.href = " detail-product.html";
}
function displayProductDetails() {
    var productTab = JSON.parse(localStorage.getItem("products")) || [];
    var productId = JSON.parse(localStorage.getItem("displayProductId"));
    var foundedProduct = {};
    for (let i = 0; i < productTab.length; i++) {
        if (productTab[i].id == productId) {
            foundedProduct = productTab[i];
            break;
        }
    }
    document.getElementById("name").innerHTML = foundedProduct.name;
    console.log(foundedProduct.name);
    document.getElementById("price").innerHTML = foundedProduct.price + "DT";
    document.getElementById("category").innerHTML = foundedProduct.category;
    document.getElementById("stockProduct").innerHTML = foundedProduct.stock;
    if (foundedProduct.stock > 0) {
        document.getElementById("stock").innerHTML = "IN_Stock";
        document.getElementById("stock").style.color = "green";
    } else {
        document.getElementById("stock").innerHTML = "Out_Stock";
        document.getElementById("stock").style.color = "red";
    }

}
function addToCart() {
    //récupération des données depuis localStorage
    var productId = JSON.parse(localStorage.getItem("displayProductId"));
    var userId = JSON.parse(localStorage.getItem("connectedUserId"));

    //récupération des données depuis html
    var qty = Number(document.getElementById("sst").value);

    //Recherche du produit
    var foundedProduct = findObjectByKeyAndId("products", productId);

    if (qty > 0 && Number(foundedProduct.stock) >= qty) {

        //Création JSON
        var OrdersTab = JSON.parse(localStorage.getItem("orders")) || [];
        var order = {
            id: generateId(OrdersTab),
            userId: userId,
            productId: productId,
            qty: qty
        }
        //Sauvegarde BD  
        OrdersTab.push(order);
        localStorage.setItem("orders", JSON.stringify(OrdersTab));
        updateStock(productId, qty);
        console.log("updateStock called:", productId, qty);
    } else {
        document.getElementById("stockP").innerHTML = "Not enough stock";
        document.getElementById("stockP").style.color = "red";
    }
}
function displayMyBasket() {
    var userId = JSON.parse(localStorage.getItem("connectedUserId"));
    var ordersTab = JSON.parse(localStorage.getItem("orders")) || [];
    var content = "";

    for (let i = 0; i < ordersTab.length; i++) {
        content = content + `<tr>
                                <td>
                                    ${ordersTab[i].id}
                                </td>
                                <td>
                                    ${ordersTab[i].userId}
                                </td>
                                <td>
                                    ${findObjectByKeyAndId("users", ordersTab[i].userId).firstName} 
                                    ${findObjectByKeyAndId("users", ordersTab[i].userId).lastName}
                                </td>
                                <td>
                                    ${findObjectByKeyAndId("users", ordersTab[i].userId).mobile}
                                </td>
                                <td>
                                    ${findObjectByKeyAndId("users", ordersTab[i].userId).email}
                                </td>
                                <td>
                                   ${ordersTab[i].productId}
                                </td>
                                <td>
                                    ${findObjectByKeyAndId("products", ordersTab[i].productId).name}
                                </td>
                                <td>
                                    ${findObjectByKeyAndId("products", ordersTab[i].productId).price}
                                </td>
                                <td>
                                    ${ordersTab[i].qty}
                                </td>
                                 <td>
                                    ${Number(findObjectByKeyAndId("products", ordersTab[i].productId).price) * Number(ordersTab[i].qty)}
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" onclick="deleteOrder(${ordersTab[i].id})">Delete</button>
                                </td>
                            </tr>`
    }
    document.getElementById("orders").innerHTML = content;
}
//fonction générique pour trouver un objet dans un tableau selon une clé et une valeur
function findObjectByKeyAndId(key, id) {
    var Tab = JSON.parse(localStorage.getItem(key)) || [];
    var findObj = {};
    for (let i = 0; i < Tab.length; i++) {
        if (Tab[i].id === id) {
            findObj = Tab[i];
            break;
        }
    }
    return findObj;
}
function updateStock(productId, qty) {
    var productsTab = JSON.parse(localStorage.getItem("products")) || [];

    for (let i = 0; i < productsTab.length; i++) {
        if (Number(productsTab[i].id) === Number(productId)) {
            productsTab[i].stock = Number(productsTab[i].stock) - Number(qty);
            break;
        }
    }

    localStorage.setItem("products", JSON.stringify(productsTab));
}
function deleteOrder(orderId) {
    var ordersTab = JSON.parse(localStorage.getItem("orders")) || [];
    var position;
    for (let i = 0; i < ordersTab.length; i++) {
        if (Number(ordersTab[i].id) === Number(orderId)) {
            position = i;
            break;
        }
    }
    updateStockDeleteOrder(orderId);

    ordersTab.splice(position, 1);

    localStorage.setItem("orders", JSON.stringify(ordersTab));

    location.reload();

}
function updateStockDeleteOrder(orderId) {
    //Récupération de tableau from localStorage
    var productTab = JSON.parse(localStorage.getItem("products")) || [];
    //Récupération objet order avec l'id du produit
    var order = findObjectByKeyAndId("orders", orderId);
    for (let i = 0; i < productTab.length; i++) {
        if (productTab[i].id == order.productId) {
            productTab[i].stock = Number(productTab[i].stock) + Number(order.qty);
        }

    }
    localStorage.setItem("products", JSON.stringify(productTab));
}

function displayMyBasketForUserConnected() {
    var userId = localStorage.getItem("connectedUserId");
    var ordersTab = JSON.parse(localStorage.getItem("orders")) || [];
    var content = "";
    var s = 0;

    for (let i = 0; i < ordersTab.length; i++) {
        if (ordersTab[i].userId == userId) {

            s = s + Number(findObjectByKeyAndId("products", ordersTab[i].productId).price) * Number(ordersTab[i].qty);

            content = content + `<tr>
                                <td>
                                    ${ordersTab[i].id}
                                </td>
                                <td>
                                   ${ordersTab[i].productId}
                                </td>
                                <td>
                                    ${findObjectByKeyAndId("products", ordersTab[i].productId).name}
                                </td>
                                <td>
                                    ${findObjectByKeyAndId("products", ordersTab[i].productId).price}
                                </td>
                                <td>
                                    ${ordersTab[i].qty}
                                </td>
                                 <td>
                                    ${Number(findObjectByKeyAndId("products", ordersTab[i].productId).price) * Number(ordersTab[i].qty)}
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" onclick="deleteOrder(${ordersTab[i].id})">Delete</button>
                                </td>
                            </tr>`

        }
    }
    document.getElementById("orders").innerHTML = content + `<tr>
                                                                <td colspan="6" style="text-align:right;font-weight:bold;">Total</td>
                                                                <td >${s} DT</td>
                                                                <td></td>
                                                            </tr>`;
}
function displayAllProducts() {
    var productsTab = JSON.parse(localStorage.getItem("products")) || [];
    var content = "";
    for (let i = 0; i < productsTab.length; i++) {
        content = content + `<tr>
                                <td>
                                    ${productsTab[i].id}
                                </td>
                                <td>
                                   ${productsTab[i].name}
                                </td>
                                <td>
                                    ${productsTab[i].price}
                                </td>
                                <td>
                                    ${productsTab[i].stock}
                                </td>
                                <td>
                                  ${productsTab[i].category}                               
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" onclick="deleteProduct(${productsTab[i].id})">Delete</button>
                                </td>
                            </tr>`
    }
    document.getElementById("allProducts").innerHTML = content;
}
function deleteProduct(productId) {
    var productsTab = JSON.parse(localStorage.getItem("products")) || [];
    var position;
    for (let i = 0; i < productsTab.length; i++) {
        if (Number(productsTab[i].id) == productId) {
            position = i;
            break;
        }
    }
    productsTab.splice(position, 1);
    localStorage.setItem("products", JSON.stringify(productsTab));
    displayAllProducts();
}
function displayAllUsers() {
    var usersTab = JSON.parse(localStorage.getItem("users")) || [];
    var content = "";
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].role !== "admin") {
            if (usersTab[i].role == "store" && usersTab[i].status == "notValidated") {
                content = content + `<tr>
                                        <td>
                                            ${usersTab[i].id}
                                        </td>
                                        <td>
                                            ${usersTab[i].firstName}
                                        </td>
                                        <td>
                                            ${usersTab[i].lastName}
                                        </td>
                                        <td>
                                            ${usersTab[i].storeName}
                                        </td>
                                        <td>
                                            ${usersTab[i].role}
                                        </td>
                                        <td>
                                            ${usersTab[i].status}
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-success" onclick="validateStore(${usersTab[i].id})">Validate</button>
                                            <button type="button" class="btn btn-danger" onclick="deleteUser(${usersTab[i].id})">Delete</button>
                                        </td>
                                    </tr>`;
            } else {
                content = content + `<tr>
                                        <td>
                                            ${usersTab[i].id}
                                        </td>
                                        <td>
                                            ${usersTab[i].firstName}
                                        </td>
                                        <td>
                                            ${usersTab[i].lastName}
                                        </td>
                                        <td>
                                            ${usersTab[i].storeName}
                                        </td>
                                        <td>
                                            ${usersTab[i].role}
                                        </td>
                                        <td>
                                            ${usersTab[i].status}
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-danger" onclick="deleteUser(${usersTab[i].id})">Delete</button>
                                        </td>
                                    </tr>`
            }
        }

    }
    document.getElementById("usersList").innerHTML = content;
}
function deleteUser(userId) {
    var usersTab = JSON.parse(localStorage.getItem("users")) || [];
    var position;
    for (let i=0; i < usersTab.length; i++) {
        if (Number(usersTab[i].id) == userId) {
            position = i;
            break;
        }
    }
    usersTab.splice(position, 1);
    localStorage.setItem("users", JSON.stringify(usersTab));
    displayAllUsers();
}
function validateStore(userId) {
    var usersTab = JSON.parse(localStorage.getItem("users")) || [];
    for(let i=0; i<usersTab.length; i++) {
        if(Number(usersTab[i].id == userId)) {
            usersTab[i].status = "validated";
            break;
        }
    }
    localStorage.setItem("users" , JSON.stringify(usersTab));
    displayAllUsers();
}
function displayAllProductsStore(){
    var connectedUser = localStorage.getItem("connectedUserId");
    var productsTab = JSON.parse(localStorage.getItem("products")) || [] ;
    var content = "";
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].storeId == connectedUser) {
            content = content + `<tr>
                                <td>
                                    ${productsTab[i].id}
                                </td>
                                <td>
                                   ${productsTab[i].name}
                                </td>
                                <td>
                                    ${productsTab[i].price}
                                </td>
                                <td>
                                    ${productsTab[i].stock}
                                </td>
                                <td>
                                    ${productsTab[i].category}
                                </td>
                                <td>
                                    <button type="button" class="btn btn-danger" onclick="deleteProduct(${productsTab[i].id})">Delete</button>
                                    <button type="button" class="btn btn-primary" >Edit</button>

                                </td>
                            </tr>` 
        }
        
    }
    document.getElementById("productsListStore").innerHTML = content;
}

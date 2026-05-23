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

        //3. Création JSON
        var user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            mobile: mobile
        }
        console.log(user);

        //4. Sauvegarde BD
        var usersTab = JSON.parse(localStorage.getItem("users")) || [];

        //ajouter un nouveau utilisateur
        usersTab.push(user);

        //4.Stockage dans local
        localStorage.setItem("users", JSON.stringify(usersTab));
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
    var usersTab = JSON.parse(localStorage.getItem("users")) || [];
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email === email && usersTab[i].password === password) {
            console.log("login succesufuly !");
            break;
        } else {
            showError("loginError", "Invalid email or password.")
        }
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

        var product = {
            id: generateId(productsTab),
            name: name,
            price: price,
            stock: stock,
            category: category
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




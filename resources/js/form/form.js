function ShowHidePassword(iconPassword) {
  let password = iconPassword.previousElementSibling;
  if (password.type == "password") {
    password.type = "text";
    iconPassword.setAttribute("src", "./images/registro/eye-none.svg");
  } else {
    password.type = "password";
    iconPassword.setAttribute("src", "./images/registro/eye.svg");
  }
}

function validateEmail(inputEmail, messageError) {
  let email = inputEmail.val();
  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email.length == 0) {
    messageError
      .css("color", "red")
      .text("Debes ingresar un correo electrónico");
    return false;
  } else if (!filter.test(email)) {
    messageError
      .css("color", "red")
      .text("El correo electrónico no tiene un formato válido");

    return false;
  } else {
    return true;
  }
}

function validateKeyUpEmail(
  inputEmail,
  filter,
  imageError = null,
  emailWarning
) {
  let email = inputEmail.val();

  if (!filter.test(email)) {
    inputEmail.css("border-bottom", "1px solid red");
    emailWarning.text("Correo válido").css("color", "red");

    $(".error").css("display", "block");
    $(".error").attr(
      "src",
      "http://www.claronetworks.openofficedospuntocero.info/images/registro/alerta.svg"
    );
  } else if (filter.test(email)) {
    inputEmail.css("border-bottom", "1px solid green");
    emailWarning.text("Correo válido").css("color", "green");
    $(".error").css("display", "block");
    $(".error").attr(
      "src",
      "http://www.claronetworks.openofficedospuntocero.info/images/registro/listo.svg"
    );
  } else if (inputCorreo.val().length == 0) {
    //ImagenError.css("display", "none");
    emailWarning.css("color", "#666262");
  }
}

function validateNewPassword(inputPassword, inputPasswordConfirm) {
  let password = inputPassword.val();
  let passwordConfirm = inputPasswordConfirm.val();
  let warningPassword = $("#error-new-password");
  let warningPasswordConfirm = $("#error-password-confirm");
  if (password.length == 0) {
    warningPassword
      .addClass("invalid-email")
      .text("Debes ingresar una nueva contraseña");
    return false;
  } else if (password.length < 8) {
    warningPassword
      .addClass("invalid-email")
      .text("La contraseña debe tener mínimo 8 caracteres");
    return false;
  } else if (passwordConfirm == 0) {
    warningPasswordConfirm
      .addClass("invalid-email")
      .text("Debes ingresar de nuevo la contraseña");
    return false;
  } else if (password !== passwordConfirm) {
    warningPasswordConfirm
      .addClass("invalid-email")
      .text("Las contraseñas deben de coincidir");

    return false;
  } else {
    return true;
  }
}

function validateKeyUpPassword(input, messageError) {
  let password = input.val();
  let numCharacters = password.length;
  let listo = $(".listo");
  if (numCharacters < 8) {
    input.css("border-bottom", "solid 1px red");
    messageError.css("color", "red");
    listo.css("display", "block");
    listo.attr(
      "src",
      "http://www.claronetworks.openofficedospuntocero.info/images/registro/alerta.svg"
    );
  } else {
    input.css("border-bottom", "solid 1px green");
    messageError.css("color", "green");
    listo.css("display", "block");
    listo.attr(
      "src",
      "http://www.claronetworks.openofficedospuntocero.info/images/registro/listo.svg"
    );
  }
}

function validatePassword(inputPassword, messageError) {
  let password = inputPassword.val();
  if (password === "") {
    messageError.css("color", "red").text("Debes ingresar una contraseña");
    inputPassword.addClass("input-border-red");
    return false;
  } else if (password.length < 8) {
    messageError
      .css("color", "red")
      .text("La contraseña debe tener al menos 8 caractéres");
    inputPassword.addClass("input-border-red");
    return false;
  } else {
    return true;
  }
}

function validateUser(inputUser, messageError) {
  let user = inputUser.val();
  if (user.length == 0) {
    let message = `
    <img
    src="./images/registro/alerta.svg">
    Debes ingresar un nombre
    `;
    messageError.addClass("invalid-email").html(message);
    return false;
  } else {
    return true;
  }
}

function validateToken(token) {
  $.ajax({
    type: "POST",
    data: token,
    url:
      "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/user/verify",
    success: function (result) {
      console.log("succes", result);
      if (result.data != null) {
        localStorage.setItem("session", 1);
        localStorage.setItem("id", result.data.id);
        localStorage.setItem("name", result.data.name);
        let name = result.data.name;
        let nameUser = $("#cuenta-confirmada-name-user");
        nameUser.html(name);
      }
    },
  });
}

export {
  ShowHidePassword,
  validateEmail,
  validateNewPassword,
  validateKeyUpEmail,
  validatePassword,
  validateUser,
  validateToken,
  validateKeyUpPassword,
};

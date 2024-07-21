


var exampleInputEmail1 = document.getElementById("exampleInputEmail1");
var exampleInputPassword1 = document.getElementById("exampleInputPassword1");
var exampleInputname = document.getElementById("exampleInputname")
var exampleInputEmailUp = document.getElementById("exampleInputEmailUp")
var exampleInputPasswordUp = document.getElementById("exampleInputPasswordUp")

var allInput;


if (localStorage.getItem("inputs") == null) {
    allInput = [];
}
else {
    allInput = JSON.parse(localStorage.getItem("inputs"))
}










function addInput() {
    if (!checkIsEmpty()) {

        if (testInput() && tesiinpt() == true) {
            if (exist() == false) {
                exampleInputEmailUp.classList.add("is-invalid");
                displayExist();
              
            } else {
                var inputs = {
                    name: exampleInputname.value,
                    email: exampleInputEmailUp.value,
                    pass: exampleInputPasswordUp.value
                }
                allInput.push(inputs);
                localStorage.setItem("inputs", JSON.stringify(allInput))

                clearForm()
                displaySucess()
                location.replace("index.html");
            }
        }
    }


    else {
        displayRequired();
    }

}










function exist() {
    for (var i = 0; i < allInput.length; i++) {
        if (allInput[i].email.toLowerCase() == exampleInputEmailUp.value.toLowerCase()) {
            exampleInputEmailUp.classList.add("is-invalid")
            return false;
        }
    }

}

function clearForm() {
    exampleInputname.value = null;
    exampleInputEmailUp.value = null;
    exampleInputPasswordUp.value = null;


}


function checkIsEmptySign() {
    if (exampleInputEmail1.value == "" || exampleInputPassword1.value == "") {
        return false
    }
    else {
        return true
    }
}


function checkInput() {
    if (checkIsEmptySign() == false) {
        displayRequiredSign()
        return false
    }

    for (i = 0; i < allInput.length; i++) {
        if (allInput[i].email == exampleInputEmail1.value && allInput[i].pass == exampleInputPassword1.value) {
            var name = allInput[i].name;
            localStorage.setItem("homeList", JSON.stringify(name));

            location.replace("output.html");
            return true;
        }
        else {
            displayIncorrect()
        }
    }

}







var userid = JSON.parse(localStorage.getItem("homeList"))
if (userid) {
    var x = userid.split(" ").slice(0, 1).join(" ")
    document.getElementById('mid-div').innerHTML = "Welcome " + x
}






function logout() {
    localStorage.removeItem('homeList')
}



function checkIsEmpty() {

    if (exampleInputname.value != "" && exampleInputPasswordUp.value != "" && exampleInputEmailUp.value != "") {
        return false;
    }
    else {
        return true;
    }
}



function testInput() {
    var regex = /^.{2,10}(\@yahoo\.com|\@gmail\.com)$/;

    var fir = exampleInputEmailUp.value;

    if (regex.test(fir) == true) {

        exampleInputEmailUp.classList.add("is-valid");
        exampleInputEmailUp.classList.remove("is-invalid");

        return true
    }
    else {
        exampleInputEmailUp.classList.add("is-invalid")
        exampleInputEmailUp.classList.remove("is-valid")
        displayunSucessemail()
        return false


    }

}

function tesiinpt() {
    var regexpass = /^.{6,}$/
    var sec = exampleInputPasswordUp.value;
    if (regexpass.test(sec) == true) {

        exampleInputPasswordUp.classList.add("is-valid");
        exampleInputPasswordUp.classList.remove("is-invalid");
        return true;
    }
    else {
        exampleInputPasswordUp.classList.remove("is-valid")
        exampleInputPasswordUp.classList.add("is-invalid")
        displayunSucesspass()

        return false
    }
}













function displayRequired() {
    document.getElementById("required").innerHTML = `<span class=' text-danger'>All inputs is required</span>`;
};
function displayExist() {
    document.getElementById("required").innerHTML = `<span class=' text-danger'>email already exists</span>`;

};

function displaySucess() {
    document.getElementById("required").innerHTML = `<span class=' text-success'>Success</span>`;
};
function displayunSucessemail() {
    document.getElementById("required").innerHTML = `<span class=' text-danger'>in email enter anything and @(yahoo or gmail).com</span>`;
};
function displayunSucesspass() {
    document.getElementById("required").innerHTML = `<span class=' text-danger'>in password enter number above 6 number</span>`;
};

function displayIncorrect() {
    document.getElementById("result-sign").innerHTML = `<span class=' text-danger'>email or password is incorrect </span>`;
};
function displayRequiredSign() {
    document.getElementById("result-sign").innerHTML = `<span class=' text-danger'>All inputs is required</span>`;
};
















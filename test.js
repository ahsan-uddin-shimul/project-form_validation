// On Load Execution START
function onLoad(){
    document.getElementById('input_name').focus();
}
// On Load Execution END

// Input-Name START
function nameChangeFunc() {
    document.getElementById('taken_name').innerHTML = "";
}

function nameFunc(){
    let x = document.getElementById("input_name").value;
    
    if(x == ""){
        alert("Name cannot be blank");
        document.getElementById("input_name").focus();
    }
    else{
        let splitInput = x.split("");
        
        for (i=0; i < x.length; i++) {
           
            if(isNaN(splitInput[i]) || splitInput[i] == " ") {
                let str = document.getElementById('input_name').value;
                document.getElementById("taken_name").innerHTML = str + " is taken as name.";
                document.getElementById("input_email").focus();
            }
            else {
                alert(`Sorry! Name cannot contain numaric value!`);
                document.getElementById("input_name").value = "";
                document.getElementById("input_name").focus();
                document.getElementById('taken_name').innerHTML = "";
            }
        }
    }
}
// Input-Name END

// Input-Email START
function emailChangeFunc() {
    document.getElementById('taken_email').innerHTML = "";
}

function mailFunc() {
    let y = document.getElementById('input_email').value;
    
    if(y == "") {
        alert('Email cannot be blank');
        document.getElementById('input_email').focus();
    }
    else {
        const splitInput = Array.from(y.split(""));

        let sorted = splitInput.sort();

        if(sorted[0] == "." && sorted[1] == "@") {
            document.getElementById("taken_email").innerHTML = y + " is taken as mail address";
            document.getElementById('input_phone').focus();   
        }
        else {
            alert("Mail address is not correct, please retype")
            document.getElementById("input_email").value = "";
            document.getElementById("input_email").focus();
        }
   }
}
// Input-Email END

// Input-Phone START
function telChangeFunc() {
    document.getElementById('taken_phone').innerHTML = "";
}

function telFunc() {
    let z = document.getElementById("input_phone").value;
    
        if(z == "") {
            alert("Phone cannot be blank");
            document.getElementById('input_phone').focus();
        }
        else {
            let converted = parseInt(z);

            if(( isNaN(z)) || z.length !== 11 ) {
                alert("Phone number should be numarics/contain 11 digit");
                document.getElementById('input_phone').value = "";
                document.getElementById('input_phone').focus();
            }
            else {
                document.getElementById('taken_phone').innerHTML = z + " is taken as phone number";
            }
        }
}
// Input-Phone END

// Input-Comment START
function autoCounter() {
    let take = document.getElementById('text_input').value;
    let len = take.length;
    
    let counter = 250 - len;

    document.getElementById('counter_output').innerHTML = counter + " - character remaining";

    if(counter == 0) {
        document.getElementById('text_input').disabled = true;
    }   
}

function comChangeFunc() {
    document.getElementById('taken_comm').innerHTML = "";
}

function comFunc() {
    let comm = document.getElementById('text_input').value;

    if(comm == "") {
        alert('You are missing comment');
        document.getElementById('text_input').focus() = "";
    }
    else {
    document.getElementById('taken_comm').innerHTML = "Comment taken";
    }
}
// Input-Comment END
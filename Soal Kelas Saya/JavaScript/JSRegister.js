var fullname, email, password1, password2, gender, box
var radios, formvalid

function Submit(){
    fullname = document.getElementById('txtfullname').value
    email= document.getElementById('txtemail').value
    password1 = document.getElementById('txtpass1').value
    password2 =document.getElementById('txtpass2').value
    gender = document.getElementsByName('Gender')
    box = document.getElementById('box1');


    print = document.getElementById('print-something')
    
    //validasi
    if(fullname === ""){
        alert('Please fill your full name!')
    }
    else if(fullname.length < 8){
        alert('Your full name must be at least 8 character!')
    }
    else if(email === ""){
        alert('Please fill your email!')
    }
    else if(!email.includes("@")){
        alert("Your email must contain '@'")
    }
    // blom validasi password letter kecil atau gede cuma length password
    else if(password1 === ""){
        alert("Please fill your password!")  
    }
    else if(password2 === ""){
        alert("Please fill your password!")  
    }
    else if(password1 != password2){
        alert('Password did not match please try again')
    }
    // else if(password.length< 12){
    //     alert('Your password length must be at least 12 character!')
    // }
    else if(!(gender[0].checked || gender[1].checked)){
        alert("Please Select Your Gender");
        return false;
    }
    else if(!(box.checked)){
        alert('Please Check the box to agree our terms');
        return false;
    }   
    else{
        alert('Success')
        window.location.reload();
    }

}


function Cancel(params) {
    // document.getElementById('txtfullname').value = "" // bikin element namenya jadi kosong dan ke reset
    // document.getElementById('txtemail').value = "" // bikin element emailnya jadi kosong dan ke reset
    // document.getElementById('txtpass').value = "" // bikin element feedbacknya jadi kosong dan ke reset
    // document.getElementById('Gender').value = ""
    // document.getElementById("box1").value = ""
    window.location.reload();
 }
 





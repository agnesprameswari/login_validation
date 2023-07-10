const correctemail = "jwd@gmail.com";
const correctpassword = "1234";

const messagecontainer = document.getElementById('message-container');

function ceklogin(){
    const useremail = document.getElementById('femail').value;
    const userpassword = document.getElementById('fpassword').value;

    if((useremail != correctemail) || (userpassword != correctpassword)){
        messagecontainer.innerHTML = "<p class='error-message'>login gagal, email atau password salah ! </p>";
    }else{messagecontainer.innerHTML = "<p class='succes-message'>login berhasil...</p>";
        
    }
    
}
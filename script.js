$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var Error=true;
    var password_error=true;
    var confirm_password_error=true;
    var email_error=true;

    $('#username').keyup(function(){
        username_validation();
    });

    $('#email').keyup(function(){
        email_validation();
    });

    $('#password').keyup(function(){
        password_validation();
    });

    $('#confirmpassword').keyup(function(){
        confirm_password();
    });

    $('#submitvalidation').click(function(){
        username_validation();
        password_validation();
        confirm_password();
        email_validation();

        if(Error==true&&confirm_password_error==true&&password_error==true){
            return true;
        }else{
            return false;
        }
    });

    function username_validation(){

        // var strongRegex = new RegExp("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})");
        var username_val=$('#username').val();
        if(!username_val.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:');
            $('#usernamevalidation').css('color', 'red');
            $('#usernamevalidation').css('font-size', '15px');
            Error=false;
            return false;
        }else{
            Error=true;
            $('#usernamevalidation').hide();
        }
    }


    function email_validation(){
        console.log('email');

        var email_val=$('#email').val();
        if(!email_val.match(/^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/)){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Please provide a properly formated email address ');
            $('#emailvalidation').css('color', 'red');
            $('#emailvalidation').css('font-size', '15px');
            email_error=false;
            return false;
        }else{
            email_error=true;
            $('#emailvalidation').hide();
        }
    }

   


    function password_validation(){

        var password_val=$('#password').val();
        if(!password_val.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Minimum eight characters, at least one uppercase letter, one  lowercase letter, one number and one special character');
            $('#passwordvalidation').css('color', 'red');
            $('#passwordvalidation').css('font-size', '15px');
            password_error=false;
            return false;
        }else{
            password_error=true;
            $('#passwordvalidation').hide();
        }


       
    }

   

    function confirm_password(){
        var confirm_password_val=$('#confirmpassword').val();
        var password_val=$('#password').val();

        if(password_val!=confirm_password_val){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password did not match');
            $('#confirmpasswordvalidation').css('color', 'red');
            $('#confirmpasswordvalidation').css('font-size', '15px');
               confirm_password_error=false;
               return false;
        }else{
            confirm_password_error=true;
            $('#confirmpasswordvalidation').hide();
        }

    }



});
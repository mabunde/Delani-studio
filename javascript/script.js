$(document).ready(function(){
    $('#icon1').click(function(){
        $('#p1').toggle('slow')
        $('#icon1').slideUp();
    });

    $('#icon2').click(function(){
        $('#p2').toggle('slow')
        $('#icon2').slideUp();
    });
    $('#icon3').click(function(){
        $('#p3').toggle('slow')
        $('#icon3').slideUp();
    });
    // hover effects
    $('.portfolio-1').hover(function() {
        $('.descr',this).slideToggle();
    });
    // form validation
    $('form#contactForm').submit(function(event) {
        var fName = $('input#inputName').val();
        var eMail = $('input#inputEmail').val();
        var message = $('textarea#inputMessage').val();

        if($("input#inputName").val() && $("input#inputEmail").val()) {
            alert(' Hi ' + fName + ' We have received your message. Thank you for reaching out to us');
        }
        else {
            alert('Please fill in the form');
        }
        event.preventDefault();
    })
})

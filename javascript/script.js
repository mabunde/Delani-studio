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
    $(".portfolio-1").hover(function () {
        $("#descr-1").show()
        $(".portfolio-1").mouseleave(function () {
            $("#descr-1").hide()
            })
        })
    $(".portfolio-2").hover(function () {
        $("#descr-2").show()
        $(".portfolio-2").mouseleave(function () {
            $("#descr-2").hide()
            })
        })
    $(".portfolio-3").hover(function () {
        $("#descr-3").show()
        $(".portfolio-3").mouseleave(function () {
            $("#descr-3").hide()
            })
        })
    $(".portfolio-4").hover(function () {
        $("#descr-4").show()
        $(".portfolio-4").mouseleave(function () {
            $("#descr-4").hide()
            })
        })
    $(".portfolio-5").hover(function () {
        $("#descr-5").show()
        $(".portfolio-5").mouseleave(function () {
            $("#descr-5").hide()
            })
        })
    $(".portfolio-6").hover(function () {
        $("#descr-6").show()
        $(".portfolio-6").mouseleave(function () {
            $("#descr-6").hide()
            })
        })
    $(".portfolio-8").hover(function () {
        $("#descr-8").show()
        $(".portfolio-8").mouseleave(function () {
            $("#descr-8").hide()
            })
        })

     $(".portfolio-7").hover(function () {
        $("#descr-7").show()
        $(".portfolio-7").mouseleave(function () {
            $("#descr-7").hide()
            })
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
});

jQuery(document).ready(function(){
    $('div').css('background', 'yellow');
    $('.tekst').css('background', 'teal');
    $('#id1').css('background', 'red');
    $('#id2').css('color', 'white');
    $('#id1').css({'background':'brown','color':'lightgreen'}); //jak kilka
    $('*').css('font-family','Arial','verdana'); // dla wszystkich elementów
    $('*').css('color','brown');
    //$('*').css({'color':'brown','font-size':'90%'});

    $('#ukryjAkapit').click(function(){
        //$('#akapit').hide();
        $('#akapit').hide('slow');
    })

    $('#pokazAkapit').click(function(){
        //$('#akapit').show();
        //$('#akapit').show('fast');
        $('#akapit').show('2000');
    })

    $('#zmienHTML').click(function(){
        $('#html').html('<h1>Zmieniony tekst</h1>'); // zamienia kod HTML
    })

    $('a').css('color','green');
    $('#link a').css('color','black');


    $('#kolorInny').click(function(){
        $('input[type="text"]').css({'background':'brown','color':'white'});
    })



























});
















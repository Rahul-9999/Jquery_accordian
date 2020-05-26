// external jquery
$('#red-btn').click(function() {
    
    // let theText  = $(this).text();
    // if(theText === 'hide'){
    //     $(this).text('show');
    // }
    // else{
    //     $(this).text('hide');
    // }
    ($(this).text() === 'hide') ? $(this).text('show') : $(this).text('hide');
    $('#red-card').slideToggle(500);
});

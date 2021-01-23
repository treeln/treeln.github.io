 $(document).ready(function(){

////////////////////////////////////////////////////////////
                    // Navigation 
///////////////////////////////////////////////////////////

                    var homebtn = $('#homebtn');
                    var h = $('#home').height();
                    var a = $('#about').height();
                    var t = $('#tests').height();
                    homebtn.click(function() {
                        $(window).scrollTop(h);
                    });
                    $('#aboutbtn').click(function() {
                        $(window).scrollTop(a+h);
                    });
                    $('#testsbtn').click(function() {
                        $(window).scrollTop(a+h+t);
                    });

////////////////////////////////////////////////////////////
                    // Test tab toggle
///////////////////////////////////////////////////////////

                    $('.tc1').click(function(){
                        $('.tc_content').css('z-index','1');
                        $('.tcphy').css('z-index','10');
                        $('.tc1').css({'background-color':'#fff','color':'#1abc9c'});
                        $('.tc2').css({'background-color':'#ccc','color':'#000'});
                        $('.tc3').css({'background-color':'#ccc','color':'#000'});
                    });
                    $('.tc2').click(function(){
                        $('.tc_content').css('z-index','1');
                        $('.tcchem').css('z-index','10');
                        $('.tc2').css({'background-color':'#fff','color':'#1abc9c'});
                        $('.tc1').css({'background-color':'#ccc','color':'#000'});
                        $('.tc3').css({'background-color':'#ccc','color':'#000'});
                    });
                    $('.tc3').click(function(){
                        $('.tc_content').css('z-index','1');
                        $('.tcmath').css('z-index','10');
                        $('.tc3').css({'background-color':'#fff','color':'#1abc9c'});
                        $('.tc2').css({'background-color':'#ccc','color':'#000'});
                        $('.tc1').css({'background-color':'#ccc','color':'#000'});
                    });




                }); 
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
                        $(window).scrollTop(2*h);
                    });
                    $('#testsbtn').click(function() {
                        $(window).scrollTop(3*h);
                    });
                    $(window).scroll(function(){
                        var position = $(window).scrollTop();
                        if(position>200)
                        {
                            $('#homescrollbtn').show(600);
                        }
                        else
                        {
                            $('#homescrollbtn').hide(600)
                        }
                    });
                    $('#homescrollbtn').click(function(){
                        $(window).scrollTop(0);
                    })
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
                        $('#instrct_bttn').click(function(){
                                $('#instrct').show(500);


                        });

                        $('#close_inst').click(function() {
                                $('#instrct').hide(500);
                        });


                }); 
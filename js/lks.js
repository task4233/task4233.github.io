$(function () {
    
    var width = $(window).width(),
        timer = false;
    
    $(window).ready(function () {
        
        $('html,body').animate({
            scrollTop: 0
        }, 500, 'swing');
    });

    $(window).load(function () {
    
    /* Decralation of var */
        
        /* section Datemessage */
        var date = (new Date()).getDay(),
            $day = $('#day-message'),
        
        /* section Scroll */
            offsetY = -10,
            scrollTime = 500,
                    
        /* section Certification */
            name;
        
        /* smart-menu Appear&disssapear */
        
        $(window).click(function (event) {
            if (width < 900) {
                var target = $(event.target);
                if (target.attr('id') !== "#main-menu") {
                    $('#main-menu').removeClass('on').addClass('off').animate({'marginRight': '-400px'}, 300);
                }
                setTimeout(function () {
                    $('#main-menu').css({
                        'position': 'absolute',
                        'display': 'none',
                        'height': '100%',
                        'width': '60%',
                        'margin': '0',
                        'top': '0',
                        'right': '0',
                        'float': 'right'
                    });
                }, 300);
            }
        });

        $('#smart-menu').click(function (event) {
            var target = $(event.target);
            if ($('#main-menu').hasClass('off')) {
                $('#main-menu').removeClass('off');
                $('#main-menu').css({
                    'display': 'block',
                    "clear": "both",
                    "cursor": "pointer",
                    "top": "90px",
                    "right": "0",
                    "width": "153px",
                    "margin-right": "-400px",
                    "height": "auto",
                    "padding": "0 40px 0 0",
                    "background-color": "black"
                }).animate({'marginRight': '0'}, 300).addClass('on');
            } else {
                $('#main-menu').removeClass('on').addClass('off').animate({'marginRight': '-400px'}, 300).css({
                    'display': 'block',
                    'position': 'absolute',
                    'height': '100%',
                    'width': '60%',
                    'margin': '0',
                    'top': '0',
                    'right': '0',
                    'float': 'right'
                });
            }
            return false;
        });

        /* Date Message */

        switch (date) {
        case 0:
            $day.html('今日は日曜日!<br><br>思う存分やりたいことができるね！</p><p>仕事がある人は頑張って！');
            break;

        case 1:
            $day.html('今日は月曜日！<br><br>一週間の始まりだから憂鬱かもしれないけど、頑張ろうぜ！');
            break;

        case 2:
            $day.html('今日は火曜日！<br><br>今日はどんな日になるかな？');
            break;

        case 3:
            $day.html('今日は水曜日！<br><br>今日が終われば一週間の半分が終わるよ！<br>頑張ろうぜ!</p>');
            break;

        case 4:
            $day.html('今日は木曜日!<br><br>今日から一週間の後半戦だよ。');
            break;

        case 5:
            $day.html('今日は金曜日!<br><br>明日講義がない人はひと段落だね！</p>');
            break;

        case 6:
            $day.html('今日は土曜日!<br><br>今日を乗り切れば十分な睡眠がとれるぞ！');
            break;

        default:
            $day.html('よくぞ見つけた！素晴らしい！');
            break;
        }

        /* Open & Close main */

        $('.btn').prevAll('p').hide();
        $('.btn').click(function () {
            if ($(this).prevAll('p').is(':hidden')) {
                $(this).prevAll('p').slideDown();
                $(this).text("Close");
                $(this).prev('h1').animate({
                    marginTop: '20%'
                });

            } else {
                $(this).prevAll('p').slideUp();
                $(this).text("More Details...");
                $(this).prevAll('h1').animate({
                    marginTop: '10%'
                });
            }

            var targetNum;

            switch ($(this).attr('id')) {
            case 'linkf':
                targetNum = 2;
                break;
            case 'links':
                targetNum = 3;
                break;
            case 'linkb':
                targetNum = 4;
                break;
            default:
                break;
            }

            $('.button:eq(' + targetNum + ')').trigger('click');
            
        });

        /* Scroll */


        $('a[href^=#]').on('click', function () {
            if ($('#main-menu').hasClass('on')) {
                $('#main-menu').hide().removeClass('on').addClass('off');
                setTimeout (function () {
                    $('#main-menu').css({
                        'position': 'absolute',
                        'display': 'none',
                        'height': '100%',
                        'width': '60%',
                        'margin': '0',
                        'top': '0',
                        'right': '0',
                        'float': 'right'
                    });
                }, 300);
            }

            if ($(this).prev('p').is('.btn')) {
                $(this).prev('p').click();
            }

            var target = $(this.hash);
            if (!target.length) {
                return;
            }
            var targetY = target.offset().top + offsetY;

            $('html,body').animate({
                scrollTop: targetY
            }, scrollTime, 'swing');

            window.history.pushState(null, null, this.hash);

            return false;
        });

        /* Display PageUp */

        $(window).scroll(function () {

            if ($(this).scrollTop() > 300) {
                $('#top').addClass('show');
            } else {
                $('#top').removeClass('show');
            }


        });

        /* Certification */

        $("#submit-btn").click(function () {
            if (name === "") {
                $('#modal').fadeOut();
            } else {
                name = $("#form-name").val();
                $('#flag').html("Welcome to My Page, " + name + "!");
                $('#modal').fadeOut();
            }
        });

        $("#skip-btn").click(function () {
            $('#modal').fadeOut();
        });

    });
    
    $(window).resize(function () {
        if (timer !== false) {
            clearTimeout(timer);
        }
        
        timer = setTimeout(function () {
            if ($(window).width() !== width) {
                width = $(window).width();
            }
        }, 10);
        
        if (width < 900) {
            $('#main-menu').css({
                'position': 'absolute',
                'display': 'none',
                'height': '100%',
                'width': '60%',
                'margin': '0',
                'top': '0',
                'right': '0',
                'float': 'right'
            });
        } else {
            $('#main-menu').css({
                'position': 'absolute',
                'display': 'block',
                'height': '100%',
                'width': '60%',
                'margin': '0',
                'top': '0',
                'right': '0',
                'float': 'right'
            });
        }
        
    });
});
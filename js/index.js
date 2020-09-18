//初始化
$(function () {
    $('[data-toggle="tooltip"]').tooltip();//提示工具初始化
    $('html').niceScroll();//滚动条初始化
    $('#slide').carousel({//轮播图初始化
        interval: 10000000000000000,
        pause: ''
    });
});

//banner图添加动画类名
$(function () {
    $('#slide .item h2').addClass('wow bounceIn animated').attr('data-wow-delay', '0.2s');
    $('#slide .item h3').addClass('wow bounceInUp animated').attr('data-wow-delay', '0.5s');
    $('#slide .item p').addClass('wow fadeIn').attr('data-wow-delay', '1s');
});

//设置导航栏背景色
$(function () {
    $('#header .nav').on('activate.bs.scrollspy', function () {
        navIndex = $(this).find('.active').index();
        $('#header').css("background-color", !navIndex ? 'transparent' : 'rgba(0,0,0,.4)');
    })
});

//切换整屏动画效果 
function animater(temp, callback) {
    $('html,body').animate({
        scrollTop: $(temp).offset().top
    }, 600, callback);
    return false;
}

//鼠标滑轮切换整屏
$(function () {
    var boo = true;
    $('.wrap').on('wheel', function (e) {
        var index = $('#collapse .nav .active').index();
        console.log('鼠标正在滑动');
        if (boo) {
            boo = false;
            if (e.originalEvent.deltaY > 0) {
                index++;
                if (index > 5) {
                    index = 0;
                }
            } else {
                index--;
                if (index < 0) {
                    index = 5;
                }
            }
            var arrDom = ["#home", "#about", "#service", "#case", "#customer", "#contact"];
            var Position = arrDom[index];
            animater(Position, function () {
                console.log('滚动结束');
                boo = true;
            });
        }
        return false;
    })
});

//点击切换下一屏
$(function () {
    //wrap容器中页面插入goToNext按钮
    var a = '<a href="##" class="scroll-down toscroll hidden-xs goToNext"><span class="down-button scroll-button"></span><span class="down-button scroll-button"></span></a>';
    $('.wrap').append(a).last().find('.goToNext').remove();
    //点击toNext切换下一屏
    $('.goToNext').on('click', function () {
        var index = $(this).parent().next().attr('id');
        animater('#' + index);
    })
});

//点击导航进行滚屏
$(function () {
    $('#header .nav').on('click', 'a', function () {
        var url = $(this).attr('href');
        if (url.slice(0, 1) === '#') {
            animater(url);
        }
    })
});

//滑动鼠标总函数
function roll(major, lengthen, oActive, arrId, page, dom1, dom2) {
    //console.log(arguments[4])
    var y1, y2;
    var len = $(lengthen).length;
    $(major).on('mousedown', function (e) {
        y1 = page ? e.pageY : e.pageX;
    }).on('mouseup', function (e) {
        var the = $(oActive).index() + 1;
        y2 = page ? e.pageY : e.pageX;
        console.log(y2);
        if ((y2 - y1) >= 100) {
            the++;
            if (the > len) {
                the = 1;
            }
            console.log('up');
        }
        if ((y1 - y2) >= 100) {
            the--;
            if (the < 1) {
                the = len;
            }
            console.log('lower');
        }
        if (page) {
            animater(arrId[the - 1]);
        } else {
            $(dom1).removeClass('active');
            $(dom1 + ':nth-of-type(' + the + ')').addClass('active');
            $(dom2).removeClass('active in');
            $(dom2 + ':nth-of-type(' + the + ')').addClass('active in');
        }

        return false;
    })
}

//鼠标点击上下滑动进行切屏
$(function () {
    roll('.wrap', '#header .nav li', '#header .navbar-nav .active', ["#home", "#about", "#service", "#case", "#customer", "#contact"], true);
});

//鼠标点击左右滑动进行tab标签切换
$(function () {
    roll('.tab-main', '#about .nav-tabs li', '#about .nav-tabs .active', ['#about1', '#about2', '#about3', '#about4'], false, '#about .nav-tabs li', '#about .tab-main .tab-pane');
});

//鼠标点击左右滑动进行轮播图标签切换
$(function () {
    roll('#slide', '#slide .item', '#slide .active', ['#about1', '#about2', '#about3', '#about4'], false, '#slide .item', '#slide ol li');
});
/**
 * Created by Administrator on 2017/1/13.
 */


    //点击登录注册，遮罩效果
    (function () {
        $('#login').click(function () {
            $('#mask,#Bomb_login').show();
            $('body').css('overflow','hidden');  //禁止页面滚动
        });

        $('#register').click(function () {
            $('#mask,#Bomb_register').show();
            $('body').css('overflow','hidden');
        });

        $('#close_loginMask,#close_registerMask').click(function () {
            $('#mask,#Bomb_login,#Bomb_register').hide();
            $('body').css('overflow','auto');
        });

    })();


    //判断账户名注册合法性
    (function () {
        $('#login_name,#register_name').focus(function(){
            $(this).css('borderColor', '#e43930');
        }).blur(function () {
            compareName($(this));
        });
    })();


    function compareName(usename){
        var nameTxt = usename.val();
        var _tips =  usename.siblings('.tips');  //提示信息
        var _tipsIcon =  _tips.find('i');
        var _tipsTxt = _tips.find('span');

       if(nameTxt.length<5 || nameTxt.length>12){
            //查找某一个元素的兄弟元素siblings，查找子元素find
           _tipsIcon.css('backgroundPosition', '-17px -100px');
           _tipsTxt.html('请输入5-12个字符');
        }
        else{
           _tipsIcon.css('backgroundPosition', '0 -117px');
           _tipsTxt.html('OK!');
           usename.css('borderColor', '#f1f1f1');

       }
    }

    //判断用户登录


    //关闭通栏广告
    $('#jd_closeTopBanner').click(function () { $('#jd_topBanner').hide();});

    //左侧slide全部品类折叠张开类目
    $('#category').hover(function () {
       $('#category>dd').show()
     }, function () {
       $('#category>dd').hide()
    });

    //购物车hover状态
    $('#car').hover(function () {
        $(this).addClass('hover');
        $('#carDetail').show();
    }, function () {
        $(this).removeClass('hover');
        $('#carDetail').hide();
    });

    //搜索联想词
    $('#inputTxt').keyup(function () {
        var txt = $('#inputTxt').val();

        // 这是百度的接口
        // var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+txt;

        var url = 'https://suggest.taobao.com/sug?code=utf-8&q='+txt;
        var _box = $('#queryKw');
        querySUG_TaoBao(_box,url);

        $(document).click(function () {
            _box.hide();
        })
    });

    //封装淘宝关键词搜索ajax请求数据
    function querySUG_TaoBao(_box,url){

        $.ajax({
            url:url,
            type:'get',
            dataType:'jsonp',
            jsonp:'callback',
            success:function(data){
                if(data.result.length>0) {
                    _box.empty(); //清空上一次查询结果
                    _box.show();
                    var ul = $('<ul></ul>');
                    var keywords = data.result;
                    $.each(keywords, function (i, element) {
                        var li = $('<li></li>').append(element[0]);
                        ul.append(li);

                    });
                    _box.append(ul).show();

                }
                else{
                    //如果没有结果，则隐藏
                        _box.hide();

                }

        }
    }).done(function(){
            chooseword(_box);//当用户选择联想词时
        })
            .fail(function (e) {
            console.log(e);
        })

};
    //选择关键词后隐藏联想词框
    function chooseword(_box){
        $('#queryKw>ul').on('click','li', function (e) {
            var txt = e.target.innerHTML;
            $('#inputTxt').val(txt);
            _box.hide();

        })
    }




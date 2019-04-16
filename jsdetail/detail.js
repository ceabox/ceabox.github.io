/**
 * Created by Administrator on 2017/1/13.
 */

    $( "#tabs" ).tabs();

    //    显示/隐藏配送地址
    $('.address').hover(function(){
        $('.box').show();
    },function(){
        $('.box').hide();
    }).trigger('mouseout');

    //选择增值保障面板
    (function () {
        var _a =$('.yb-item-cats>.yb-item-cat');

        //开始时先隐藏
        $('.yb-item-cat>.yb-more-item').hide();
        //存储每个序号
        var index=[];

        for(var i=0;i< _a.length;i++){
            index.b=i;
            //讲每个序号填到对应的data属性中，注意a[]是DOM对象
            $(_a[index.b]).attr('data',index.b);

            //给每个a[]绑定对应的事件，并把序号值传进去，找到对应的子代，将其隐藏
            _a[index.b].onmouseenter = function () {
                return function(){
                    var b=this.children[1];
                    $(b).show();
                }
            }(index.b);

            _a[index.b].onmouseleave = function () {
                return function(){
                    var b=this.children[1];
                    $(b).hide();
                }
            }(this);
        }

    })();


     //选择购买商品数量,判断最小库存
    (function () {
        var _addNum = $('#add_num');
        var _minNum = $('#min_num');

        var _buy_num = $('#buy_num');
        var val_num = _buy_num.val();
        val_num = Number(val_num);  //input获取过来的值都是string类型的，需转化


        _addNum.on('click', function () {
            val_num = Number(_buy_num.val());   //获取当前的值
            val_num += 1;
            stockJudge(val_num);
        });

        _minNum.on('click', function () {
            val_num = Number(_buy_num.val());
            val_num -= 1;
            stockJudge(val_num);
        });

        //检测用户手动输入
        _buy_num.on('change', function () {
            val_num = Number(_buy_num.val());
            stockJudge(val_num)
        });

    })();


    //判断库存合理性
    //检测是否大于最低库存1，如果大于则可以减少
    function stockJudge(stockNum){
        var _minNum = $('#min_num');
        var _buy_num = $('#buy_num');

        if(stockNum>1){
            _buy_num.val(stockNum);
            _minNum.css({backgroundColor:'#fffff',disabled:'false', cursor:'pointer'});
        }
        else{
            _minNum.css({backgroundColor:'#f1f1f1',disabled:'true', cursor:'not-allowed'});
            _buy_num.val(1);

        }
    };


     //屏幕滚动固定滚动栏
    (function () {
        var nav = $("#product-nav");
        var shop_nav = $('#shop_nav');
        var navTop = nav.offset().top;  // 得到导航栏距离顶部的距离
        window.onscroll = function() {
            // console.log(nav.offsetTop);
            if($(document).scrollTop() >= navTop)
            {
                //alert("到位置了");
                nav.addClass('fixed');
                shop_nav.addClass('fixed');

            }
            else
            {
                nav.removeClass('fixed');
                shop_nav.removeClass('fixed');
            }
        };
    })();


/**
 * Created by Administrator on 2017/1/13.
 */


//定义产品对象
    function Product(data){

        /*产品标题*/
        this.name = data.name,
        /*产品描述*/
        this.description = data.description,
        /*促销描述*/
        this.salesInfo = data.salesInfo,
        /*产品价格*/
        this.price = data.price,
        /*促销信息*/
        this.discount=getdiscount(data.discount),
        /*是否支持换新*/
        this.changOther=getChangOther(data.changOther),
        /*配送范围*/
        this.saleArea='',
        /*产品重量*/
        this.weight = data.weight,

        /*选择颜色*/
        this.color=[],
        /*选择版本*/
        /*套装*/
        /*增值保障*/
        /*白条分期*/
        this.buy_num = 0
    }



    /*判断该产品参加促销活动类型*/
    function getdiscount(typenum){

        if(typenum == 0){
            //参加限购、加价购活动
            return ;
        }
        else if(typenum == 1){
            //仅参与限购活动
            $('#discount_addBuy').hide();
        }
        else if(typenum == 2){
            //仅参与加价购活动
            $('#discount_limitBuy').hide();
        }
        else if(typenum == 3){
            //不参与促销信息
            $('#discount,#discount_limitBuy,#discount_addBuy').hide();


        }
    }

    /*是否支持以旧换新*/
    function getChangOther(typenum){
        typenum == 0?$('#changOther,#changOther_old').hide():$('#changOther,#changOther_old').show();
    }


    Product.prototype={
        /*普通购买*/
        buy: function () {

        },
        /*绑定图片*/
        bindDOMImage:function(){

        },

        /*绑定基本信息*/
        bindDOMDetail:function(){

            $('#p-name').html(this.name);
            $('#description').html(this.description);
            $('#salesInfo').html(this.salesInfo);
            $('#price').html('￥'+this.price);
            $('#discount').html(this.discount);
            $('#changOther').html(this.changOther);
          //  $('#saleArea').html(this.saleArea);
            $('#p-weight').html(this.weight);

        },

        bindEvent: function () {
            //点击添加购物车，将产品添加到购物车
            $('#btnaddcart,#btnaddcart-2').on('click',addCart);
        }
    };

    function addCart(e){
        e.preventDefault();

        var product = new Product(p_json);
        //理论上这里不应该new一个实例的，购物车的产品列表，应该和用户关联着的
        //这里new一个product是为了将用户多次添加购物车的数量，记录下来赋值到每个实例的buy_num属性中，呈现出可以选择不同数量的产品
        //真正开发中，每个product都有一个id，依照id的不同区分不同的实例；若是多次添加同一个产品，就不是在cart里push product了，而是仅仅改变数量。这里简化了这一步


        //获取当前选择的数量
        var num = $('#buy_num').val();
        num = parseInt(num);


        //将该产品实例的数量更改，并加入购物车
        product.buy_num = num;

        console.log(cart);
        cart.products.push(product);

        //给每个product动态添加index属性，便于对cart操作
        for(var i=0;i<cart.products.length;i++){
            cart.products[i].index = i;
        }

        /*更新购物车 - 重新绑定购物车*/
        cart.bindBasic();
        cart.bindList();
        cart.bindEvent();


        /*滑动到最顶部*/
        $(window).scrollTop(0);

        //将购买数量重置为1
        $('#buy_num').val(1)


    }


    //模拟后台传递json数据
    var p_json = {
        'name': '戴尔(DELL)成就Vostro 3800-R6308 台式电脑(i3-4170 4G 500G DVD 三年上门 三年硬盘保留)',
        'description': '轻松扩展性能强劲!!',
        'salesInfo': '4升级6代CPU性能更强运行速度更快，增加蓝牙及WIFI功能的灵越3650 I3同配限时促销3099猛戳这里',
        'price': '2788.00',
        'discount': 0,
        'changOther': 1,
        'weight': '8kg'
    };


    //产品实例化
    (function () {
        var product =  new Product(p_json);

        product.bindDOMDetail();
        product.bindEvent();
    })();






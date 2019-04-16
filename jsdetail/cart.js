/**
 * Created by Administrator on 2017/1/13.
 */

    //定义购物车对象
    function Cart(){
        this.products=[];
        this.sum=0;
        this.allPrice=0;
    }

    Cart.prototype={
        bindBasic: function () {
            //绑定
            $('#car-sum-num').html(this.getSum());
            $('#car-sum-price').html(this.getallPrice());
            $('#cart-icon3').html(this.getSum());
        },

        bindList: function () {
            /*每次点击添加到购物车都会将产品添加到list中*/
            var str='';
            for(var i = 0;i < this.products.length ; i++){
                str += '<li>';
                    str += ' <a href="#"><img src="images/detail/previewPic.jpg" alt=""/></a>';
                    str += '<h5><a href="#">'+ this.products[i].name +' </a></h5>';
                str += ' <div class="p-price">';
                    str += ' <span>￥'+ this.products[i].price +'</span>';
                str += '<span>x'+this.products[i].buy_num+'</span>';
                str += '</div>';
                str += '<a href="#" class="p-delete" data='+i+'>删除</a>';
                str += '</li>';
                $('#car-products-list > ul').html(str);

            }
            //每次绑定初始化allprice
            this.allPrice = 0;

        },


        bindEvent: function () {

            //删除购物车内产品
            var lis = document.getElementById('car-products-list').children[0].children;

            for(var i=0;i<cart.products.length;i++){
                var deletes = lis[i].children[3];
                deletes.onclick =deleteProduct;

            }



        },



        getSum: function () {
            this.sum = this.products.length;
            return this.sum;
        },

        getallPrice: function () {
            for(var i= 0,len=this.products.length;i<len;i++){
                var sumPrice = this.products[i].price * this.products[i].buy_num;
                this.allPrice+=parseFloat(sumPrice);
            }

            return this.allPrice.toFixed(2);
        }
    }


    function deleteProduct(e){

            e.preventDefault();

           //点击某个删除按钮，找到这个删除按钮对应的product，然后，再将这个product从cart实例中的prducts这个数组中删除
           //获取点击的按钮的index
         var p_index = $(this).attr('data');

          //从cart的products的数组中删除对应序号的product
         cart.products.splice(p_index,1);

        //重新将products的序号排序
        for(var i=0;i<cart.products.length;i++){
            cart.products[i].index = i;
        }
        //重新绑定
        cart.bindBasic();
        cart.bindList();
        cart.bindEvent();

        //如果购物车没有产品，则清空购物车
        if(cart.products.length ==0){
            var ul = document.getElementById('car-products-list').children[0];
            ul.innerHTML = '';
        }

    }

    //实例化购物车
        var cart = new Cart();

        cart.bindBasic();
        cart.bindList();








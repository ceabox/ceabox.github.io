
/**
 * Created by Administrator on 2016/12/1.
 */


    //轮播图效果
    (function () {
        var sliderImage = document.getElementById("slider-img");
        var lis = sliderImage.getElementsByTagName("li");
        var imgs = sliderImage.getElementsByTagName("img")[0];

        for(var a=0;a<lis.length;a++){

            lis[a].index=a;
            lis[a].onmouseover = function(){

                for(var a=0;a<lis.length;a++){

                    lis[a].className="";
                }
                this.className="current";

                // alert(typeof this.index);
                imgs.src="images/index/slider"+(this.index+1)+".png";
            }

        }

        $('#arrow_r').on('click',function(e){

            var num = $('.current').html();
            num=parseInt(num);

            if(num !=6){
                //让下一个li的class变成current，把图片地址换
                lis[num-1].className="";
                lis[num].className="current";
                imgs.src="images/index/slider"+(num+1)+".png"

            }
            else{
                lis[num-1].className="";
                lis[num-6].className="current";
                imgs.src="images/index/slider"+(num-5)+".png"
            }

        });

        $('#arrow_l').on('click',function(e){

            var num = $('.current').html();
            num=parseInt(num);
            if(num !=1){
                //让下一个li的class变成current，把图片地址换
                lis[num-1].className="";
                lis[num-2].className="current";
                imgs.src="images/index/slider"+(num-1)+".png"

            }
            else{
                lis[num-1].className="";
                lis[num+4].className="current";
                imgs.src="images/index/slider"+(num+5)+".png"
            }

        });


    })();

    //遍历首页生活服务模块精灵图
    (function () {
        var li=document.getElementById("life-icon").getElementsByTagName("li");

        var i_list=[];
        for(var a=0;a<li.length;a++){
            var icon=li[a].getElementsByTagName("i")[0];
            i_list.push(icon);
            i_list[a].style.backgroundPosition = "-25px "+(-a*25)+"px";
        }

    })();







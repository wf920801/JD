window.addEventListener('load', function() {
    // 左边的初始化
    var swiper = new Swiper('.left .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true
    });
    //右边的初始化
    var swiper = new Swiper('.right .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true
    });

    // 左侧的分类栏添加点击事件,吸顶效果
    // 给每个li标签添加点击事件,可以利用给父元素添加点击事件
    var ul = document.querySelector('.swiper-slide ul');
    // console.log(ul);
    // 获取要位移的div
    var div = document.querySelector(".swiper-wrapper");
    list = ul.children;
    // console.log(list);
    for (var i = 0; i < list.length; i++) {
        list[i].index = i;
        list[i].onclick = function() {
            // console.log(this.index);
            // 获取当前点击的li的高度
            var liHeight = this.offsetHeight;
            // console.log(liHeight);
            // 获取当前点击的li标签索引
            var index = this.index;
            // 获取移动出去的距离
            var distenceY = -index * liHeight;
            // console.log(distenceY);
            // 最大的位移距离为父盒子-所有li标签高的和
            var maxDistenceY = div.offsetHeight - ul.offsetHeight;
            // console.log(maxDistenceY);
            if (distenceY > maxDistenceY) {
                // div.style.transform = 'translate3d(0px, ' + distenceY + 'px, 0px)';
                div.style.transform = 'translateY(' + distenceY + 'px)';
            } else {
                div.style.transform = 'translateY(' + maxDistenceY + 'px)';
            };
            // 给div添加过度的效果      
            // 规定完成过渡效果需要花费的时间（ 以秒或毫秒计）。
            div.style.transitionDuration = '1000ms';
            // 遍历所有的li,给每一个li 的类active清掉,然后给点击的那个li添加active的类
            for (var i = 0; i < list.length; i++) {
                list[i].classList.remove('active');
            }
            this.classList.add('active');
        }
    }

});

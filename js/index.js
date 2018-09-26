// 先写移动端的入口函数
window.addEventListener('load', function() {
    // 获取顶部元素
    var header = document.querySelector('#header');
    // 获取滚动距离,需要创建一个滚动事件去获取滚动距离
    window.addEventListener('scroll', scroll);
    scroll();

    function scroll() {
        // 获取滚动距离
        var scrollTop = document.documentElement.scrollTop;
        // console.log(scrollTop);
        // 获取轮播图的高度
        var solidHeight = document.querySelector('#solid').offsetHeight;
        // console.log(solidHeight);
        // 计算透明度:  透明度=滚动距离/轮播图高度
        var opacity = scrollTop / solidHeight;
        // console.log(opacity);
        if (opacity > 1) {
            header.style.backgroundColor = "rgba(255, 0, 0, 1)";
        } else {
            header.style.backgroundColor = "rgba(255, 0, 0, " + opacity + ")";
        }
    }

    // 倒计时计算

    // 先获取未来事件
    // 1. 获取未来的时间  new Date()参数 .getTime()  获取微秒;
    //今天中午12点的时间 月份是从0-11 月份减少1月  按照年月日时分秒每个数字用逗号隔开
    // getTime方法是获取一个时间的毫秒数 从1970 1.1. 0:00:00  - 今天中午12的时间差的毫秒数
    var future = Math.floor(new Date(2018, 8, 22, 20, 00, 00).getTime() / 1000);
    // console.log(future);
    // 获取当前时间的秒数
    var time = Math.floor(new Date().getTime() / 1000);
    // console.log(time);
    // 3. 获取未来时间-当前时间的秒杀的时间差 倒计时的总时间
    var downTime = future - time;
    // console.log(downTime);  当前倒计时的总秒数
    // 获取到倒计时框里面的每一个span
    var spans = document.querySelectorAll('.time span')
        // console.log(spans);
        // 倒计时事件需要一个定时器,每一秒钟time-1
    setInterval(function() {
        downTime--
        if (downTime < 0) {
            downTime = 3600;
        }
        // 小时    当前的秒杀数/3600
        var hour = Math.floor(downTime / 3600);
        // console.log(hour);
        // 分钟    当前的秒数/3600  的余数 /60
        var minute = Math.floor(downTime % 3600 / 60);
        // console.log(minute);
        // 秒数   只要是除以60的余数都是秒
        var second = Math.floor(downTime % 60);
        // console.log(second);
        // 6. 把计算好的时分秒放到span里面 把小时的部分/10 就是 十位
        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(second / 10);
        spans[7].innerHTML = Math.floor(second % 10);

    }, 1000);
});




// 轮播图

// 初始化插件,在页面加载完毕后
window.addEventListener('load', function() {
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        direction: 'horizontal', //  这是水平切换
        loop: true, // 循环模式选项
        autoplay: {
            delay: 2000, //轮播图的延迟
            stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）
            disableOnInteraction: false, //当用户滑动的时候禁止自动轮播图 不需要禁止就为false
        },

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        // 不需要左右按钮
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        //  这里不需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    });
});

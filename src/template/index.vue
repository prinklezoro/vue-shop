<template>
    <div style="height: 150px;">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../images/1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../images/2.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../images/3.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                // imageList: [ '../image/1.jpg', '../images/2.jpg','../images/3.jpg' ]
            }
        }
    }
</script>

<style scoped lang="less">
    .mint-swipe {
        .mint-swipe-item {
            img {
                width: 100%;
                height: auto;
                display: block;
            }
        }
    }
    .mui-content {
        background-color: transparent;
        .mui-table-view {
            background-color: #fff;
            border: 0;
            .mui-table-view-cell {
                border: 0;
                img {
                    width: 60px;
                    height: 60px;
                }
            }   
        }
    }
</style>
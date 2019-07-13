<template>
    <div>
        <mt-header fixed title="vue实战"></mt-header>
        <div style="margin-top: 40px; height: 150px;position: absolute;">
            <transition mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/index">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" href="#tabbar-with-chat" to="/person">
                <span class="mui-icon mui-icon-person"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" href="#tabbar-with-contact" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" href="#tabbar-with-map" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>
    .router-link-active {
        color: #007aff;
    }
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }
    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
    }
    .v-enter-active, .v-leave-active {
        transition: all 0.5s ease;
    }
</style>
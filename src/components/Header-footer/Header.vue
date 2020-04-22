<template>
    <header>
        <div class="container clear">
            <div class="logo">
                <img :src="logoIcon"/>
            </div>
            <div class="nav">
                <img
                        :src="menuIcon"
                        @click="showSidePanel= !showSidePanel"
                />
            </div>
            <md-drawer
                    class="side-drawer"
                    :md-right="true"
                    :md-active.sync="showSidePanel"
                    style="background: #288fae"
            >
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span class="md-title">Nguyễn Danh Thái</span>
                </md-toolbar>
                <md-list>
                    <md-list-item style="background: #499785">
                        <span class="md-list-item-text">Visit FB:</span><a href="https://www.facebook.com/danhthai.mta/" target="_blank">here</a>
                    </md-list-item>
                </md-list>
            </md-drawer> <!--với sync nhấn phía bên ngoài có thể tắt-->
        </div>
    </header>
</template>

<script>
    import Logo from '../../assets/images/logo.png';
    import  Menu from '../../assets/images/menu.png';
    export default {
        name: "Header",
        data(){
            return {
                logoIcon:Logo,
                menuIcon: Menu,
                showSidePanel:false
            }
        }
    }
</script>

<style scoped>


</style>
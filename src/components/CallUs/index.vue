<template>
    <div class="call_us_container">
        <div class="container">
            <div class="first" v-scroll-reveal.reset="{delay:350,scarle:2}">
                <h1>Bạn đang cảm thấy đói?</h1>
            </div>
            <div class="second" v-scroll-reveal.reset="{delay:300,afterReveal:()=>{
                secondAnim = true
            }}">
                <div v-if="secondAnim">
                    <com-anim></com-anim>
                </div>
            </div>
            <div class="third" v-scroll-reveal.reset="{delay:600,scarle:2}">
                <span>Gọi cho chúng tôi</span>  <span>0383.729.419</span>
            </div>
        </div>
    </div>
</template>

<script>
    import comAnim from './anim'
    export default {
        name: "index",
        data(){
            return{
                secondAnim: false,
            }
        },
        components:{
            comAnim,
        }
    }
</script>

<style scoped>

</style>
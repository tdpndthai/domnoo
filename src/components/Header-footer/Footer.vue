<template>
    <footer>
        <div class="container">
            <div>
                <img v-bind:src="iconLogo" alt="">
                <div class="contact">
                    <div>Liên hệ với chúng tôi</div>
                    <div>0383.729.419</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

    import Logo from '../../assets/images/logo.png'
    export default {
        name: "Footer",
        data() {
            return {
                iconLogo:Logo
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="hero">
        <video autoplay muted loop class="hero-video">
            <source src="../assets/Love-Coding.mp4" type="video/mp4">
        </video>
        <div class="hero-text">
            <span class="greeting">Hi, I'm </span>
            <h1 class="my-name">Ryan Bray</h1>
        </div>
    </div>
</template>

<script>

    export default {
        render: {
            ssr: true
        },
        name: "HeroSection",
    }

</script>

<style scoped lang="scss">

    .hero{
        position: relative;
        right: 0;
        bottom: 0;
        min-width: 100%;
        height: 100%;
        text-align: center;
        color: white;
        overflow: hidden;
    }

    .hero-video {
        //position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }

    .hero-text{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .my-name {
            font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
            display: block;
            font-weight: 300;
            font-size: 50px;
            margin-top: 0;
        }

        .greeting {
            font-weight: 300;
            font-size: 24px;
            word-spacing: 5px;
        }
    }

    @media (min-width: 768px) {
        .hero-text{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .my-name {
                font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
                display: block;
                font-weight: 300;
                font-size: 100px;
                margin-top: 0;
            }

            .greeting {
                font-weight: 300;
                font-size: 42px;
                word-spacing: 5px;
            }
        }
    }
</style>

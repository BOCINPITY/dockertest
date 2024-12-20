<script setup lang="ts">


</script>

<template>
    <div class="container">
        <div class="header">
            <div class="avatar">
            </div>
            <div class="username">
            </div>
        </div>
        <div class="divid"></div>
        <div class="comment">
            <div class="sk">&nbsp;</div>
            <div class="sk">&nbsp;</div>
            <div class="sk">&nbsp;</div>
        </div>

    </div>
</template>

<style scoped lang="scss">
    @keyframes skeleton-loading {
        0% {
            background-color: #ccc;
        }

        50% {
            background-color: #b8b3b3;
        }

        100% {
            background-color: #ccc;
        }
    }

    .container {
        width: 500px;
        padding: 10px;

        .header {
            min-height: 100px;
            display: flex;
            align-items: center;

            .avatar {
                height: 80px;
                width: 80px;
                border-radius: 50%;
                overflow: hidden;
                display: flex;
                background-color: #CCC;
                justify-content: center;
                align-items: center;
                margin-right: 5px;
                animation: skeleton-loading 1.5s infinite;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }

            .username {
                height: 1rem;
                background-color: #CCC;
                flex: 1;
                animation: skeleton-loading 1.5s infinite;

            }
        }

        .divid {
            height: 1px;
            background-color: #CCC;
        }

        .comment {
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            height: 5rem;


            .sk {
                background-color: #CCC;
                height: 1rem;
                animation: skeleton-loading 1.5s infinite;
            }
        }
    }
</style>
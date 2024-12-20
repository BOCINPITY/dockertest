<script setup lang="ts">
    import { axios } from '@/http';
    interface IComment {
        username?: string,
        avatar?: string,
        details?: string
    }
    const data = await axios.get<IComment>('/data.json')
</script>

<template>
    <div class="container">
        <div class="header">
            <div class="avatar">
                <img :src="data.avatar" alt="avatar">
            </div>
            <div class="username">
                {{ data.username }}
            </div>
        </div>
        <div class="divid"></div>
        <div class="comment">
            {{ data.details }}
        </div>
    </div>
</template>

<style scoped lang="scss">
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
                border: 1px solid #FFF;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: 0.3);
                margin-right: 5px;

                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                }
            }
        }

        .divid {
            height: 1px;
            background-color: #CCC;
        }
    }
</style>
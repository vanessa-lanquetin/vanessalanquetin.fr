<template>
    <ul>
        <li 
            :class="{active: theme.id === themes.currentThemeName}"
            v-for="theme of availableThemes" :key="theme.id"
            @click="themes.setCurrentTheme(theme.id)">
            <div class="preview-color" :style="{backgroundColor: theme.previewColor}"></div>
            {{theme.label}}
        </li>
    </ul>
</template>

<script>
import themes from '../services/theme'
export default {
    name: 'dark',
    data() {
        return{
            themes,
            availableThemes: themes.availableThemes,
            isDarkMode: false,
        }
    },
}
</script>

<style lang="scss" scoped>
ul {
    li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        text-align: left;
        padding: 10px 20px;
        border-bottom: 1px solid rgba(255,255,255, 0.5);
        cursor: pointer;
        transition: 300ms;
        will-change: background-color;
        &:hover {
            background-color: rgba(255,255,255, 0.05);
        }
        &:last-of-type {
            border-bottom: none;
        }
        &.active {
            background-color: rgba(255,255,255,0.15);
        }
        .preview-color {
            $preview-color-size: 20px;
            width: $preview-color-size;
            height: $preview-color-size;
            border-radius: 50%;
            border: 2px solid white;
            position: relative;
            &::after {
                position: absolute;
                content: '';
                left: 0;
                top: 0;
                height: 100%;
                width: 50%;
                border-top-left-radius: $preview-color-size;
                border-bottom-left-radius: $preview-color-size;
                background: linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(0,0,0,0) 100%);
                transform: rotateZ(-45deg);
                transform-origin: right;

            }
        }
    }
}
</style>

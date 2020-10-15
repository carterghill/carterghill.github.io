<template>
    <div id="navbar">
        <p class='title'>{{title}}</p>
        <ul class='items'>
            <li>Home</li>
            <li>About</li>
            <li>Content</li>
            <li>Contact</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data () {
        return {
            title: 'Carter Hill - Developer'
        }
    }
}
</script>

<style>

#navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    border-bottom-style: solid;
    border-color: rgb(100, 100, 200);
    background-color: rgb(235, 235, 235);
}

.title {
    margin: auto;
    align-self: center;
    font-size: 20px;
    margin-top: 18px;
    margin-left: 18px;
}

.items {
    float: right;
    align-self: center;
    margin: auto;
    font-size: 18px;
    margin-right: 1rem;
    margin-top:1rem;
    padding: 0rem;
}

</style>

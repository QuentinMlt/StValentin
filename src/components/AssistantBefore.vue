<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  },
  imgBot: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="container">
        <img :src="imgBot" alt="Image"><br>
        <div id="typed-text" v-html="msg"> </div>
    </div>
</template>

<style scoped>
.container {
    text-align: center;
    padding: 20px;
    border: 2px solid #fff;
    border-radius: 10px;
    width: 400px;
}

img {
    width: 100px; /* ajustez la taille de l'image selon vos besoins */
    border: 2px solid #fff;
    border-radius: 50%;
}

#typed-text {
    color: white;
    word-wrap: break-word;
    font-family: 'Courier New', Courier, monospace;
    overflow: hidden;
    margin-top: 20px;
    white-space: nowrap;
    margin: 0 auto;
    border-right: 2px solid #fff;
    font-size: 18px;
    animation: typing 4s steps(30) forwards; /* Augmentation du temps de l'animation */
    word-break: break-all; /* Ajout de la propriété pour le retour à la ligne */
}

@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
</style>

<template>
<div>
        <div class="happy-valentines">
            <div class="valentines-day-card2">
            
            </div>
            
            
        </div>
    </div>
        
    
</template>

<script setup>



</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.valentines-day-card2 {
  position: relative;
  width: 380px;
  height: 280px;
  background-color: #ffb3c1;
  overflow: hidden;
  border-radius:10px;
  box-shadow: 0 0 100px rgba(0,0,0,.4);
}
.valentines-day-card2:before {
content: "";
  position: absolute;
  width: 0;
  z-index: 9;
  height: 0;
  border-left: 190px solid transparent; /* La moitié de la largeur souhaitée */
  border-right: 190px solid transparent; /* La moitié de la largeur souhaitée */
  border-top: 175px solid #f78fa2; /* La hauteur souhaitée et la couleur de fond */
}


.valentines-day-card2:after {
    position: absolute;
    content: "";
    height: 100px;
    width: 100px;
    aspect-ratio: 1;
    z-index: 10;
    top: 125px;
    left: 140px;
    border-image: radial-gradient(#c9184a 69%, #0000 70%) 84.5%/50%;
    clip-path: polygon(-41% 0, 50% 91%, 141% 0);
}



.hover {
  color: white;
  font-family: 'Pacifico', cursive;
  text-align: center;
}

.text:hover span {
  display: none;
}

.text:hover:before {
  content:"Veux-tu être ma Valentine ?";
  font-size:25px;

}

/* CSS */

</style>


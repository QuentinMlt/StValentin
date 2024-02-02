<script setup>
import {db} from '@/firebase/index.js'
import { collection, getDocs, doc, setDoc, query, where, onSnapshot, deleteDoc  } from "firebase/firestore";
import { onMounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import EnvelopeVue from "./components/Envelope.vue";
import ValentineCardVue from "./components/ValentineCard.vue";
import AssistantBeforeVue from "./components/AssistantBefore.vue"
let finish = ref(false)
let msg = ref(`Bonjour Méline,<br> je suis Minou l'assistant de Quentin.<br> Il m'envoit ici <br>pour te donner cette lettre.`)
let imgBot = ref('https://media.tenor.com/1VPfEhD8CpUAAAAM/cat-talking.gif')
let open = ref(false)
let needBot = ref(true)
let envelopeShowed = ref(false)
function openEnvelope() {
    // Créer un élément de style
    const styleElement = document.createElement("style");

    // Définir les règles CSS
    const cssRules = `
        .valentines-day-card2:after {
            opacity: 0;
            transition: opacity 1s ease;
        }
    `;

    // Ajouter les règles CSS à l'élément de style
    styleElement.appendChild(document.createTextNode(cssRules));

    // Écouter l'événement 'transitionend'
    styleElement.addEventListener('transitionend', () => {
        // Une fois la transition terminée, ajouter l'élément de style au document head
        document.head.appendChild(styleElement);

        // Sélectionnez l'élément par sa classe (s'il en a une)
        open.value = true;
    });

    // Ajouter l'élément de style au document
    // (L'événement 'transitionend' sera déclenché lorsque la transition sera terminée)
    document.head.appendChild(styleElement);
    
    // Utiliser setTimeout avec une fonction de rappel pour ajouter le délai
    setTimeout(() => {
      open.value=true;
      needBot.value = false
      envelopeShowed.value = false
    }, 200);
}

async function envoieReponse(rep) {
  // Obtenir la date et l'heure actuelles
  const dateActuelle = new Date();

  // Formater la date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateFormatee = dateActuelle.toLocaleDateString('fr-FR', options);

  // Formater l'heure
  const heureFormatee = dateActuelle.toLocaleTimeString('fr-FR');

  // Créer la chaîne de caractères au format français
  const dateHeureFormatFr = `${dateFormatee} ${heureFormatee}`;

  await setDoc(doc(db, "reponseMéline", uuidv4()), {
    date: dateHeureFormatFr,
    reponse: rep
  });

  
  if(rep=='Oui')
  {
    msg.value = `Super ! je vais le prévenir.<br>Ne t'inquiète pas !<br> il s'occupe de tout.`
    imgBot.value = "https://media.tenor.com/Z73zwxJhLpsAAAAi/cat.gif"
  }
  if(rep=='Non')
  {
    msg.value = `Bon...Dommage<br> mais ce n'est pas grave !<br> revient ici le 14 février<br> il y aura du nouveau !`
    imgBot.value = "https://media1.tenor.com/m/t7_iTN0iYekAAAAd/sad-sad-cat.gif"
  }

  needBot.value = true;
  envelopeShowed.value = false;
  open.value = false;
  finish.value = true;
}

</script>

<template>
  <div id="content">
    <transition name="t">
      <div v-if="open && !needBot && !envelopeShowed" class="component">
        <ValentineCardVue id="valentineCard" ></ValentineCardVue>
        <div style="display: flex; justify-content: space-between;">
          <button class="button-30" role="button"  @click="envoieReponse('Oui')">Oui</button>
          <button class="button-30" role="button"  @click="envoieReponse('Non')">Non</button>
        </div>
      </div>
    </transition>
    <transition name="t">
      <div v-if="!open && !needBot && envelopeShowed" class="component">
        <EnvelopeVue id="envelope" ></EnvelopeVue>
        <button class="button-30" role="button"  @click="openEnvelope">Ouvrir la lettre</button>
      </div>
      
    </transition>
    
    <transition name="t">
      <div v-if="needBot && !open &&!envelopeShowed" class="component">
        <AssistantBeforeVue :msg="msg" :imgBot="imgBot"></AssistantBeforeVue>
        <button class="button-30" role="button" v-if="!finish"  @click="envelopeShowed=true;needBot=false">Voir la lettre</button>
      </div>
    </transition>
  
  </div>
</template>

<style>

.t-enter-from, .t-leave-to {
    opacity: 0;
    
}

.t-enter-active {
    transition: opacity 3s ease;
    transition-delay: 2s;
}

.t-leave-active {
    transition: opacity 3s ease;
    
    
    /* Ajoutez un délai de 3 secondes pour que le leave termine avant l'enter */
    
}

#content {
  margin-right: auto;
  margin-left: auto;
  display: block;
}

.component {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

body {
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #ff758f;
}
#id {
  margin-right: auto;
  margin-left: auto;
  display: block;
}
.button-30 {
margin-right: auto;
margin-left: auto;
margin-top: 20px;
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: block;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
}

.button-30:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

.button-30:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-30:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}
</style>

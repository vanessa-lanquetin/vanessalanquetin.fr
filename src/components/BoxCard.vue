<template>
  <div class="box-card reveal reveal-loaded" :class="{ noStyle }"> <!-- Ajouter des class reveal pour rendre visible et invisible -->
    <div class="card">
      <div class="title" v-if="title">{{ title }}</div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noStyle: { default: false, type: Boolean },
    title: { default: "", type: String },
  },
};
const threshold = .1 
//En utulisant la funct handle je trouve le ratio et le défini ici pour m'en servir dans options
const options = { 
  /* Ici on a un objet qui permet de définir les options de notre observer */
  root: null, 
  //Ici c'est la racine qui servira de zone d'affichage, qui permettra de voir l'élément est visible ou non
  /* Ici il y a null car on veut juste savoir quand l'élément est visible dans L'ECRAN */
  rootMargin: '0px', 
  //Ici on peut mettre des marges, où demande a ce que l'élément dépasse la marge pour être visible
  threshold 
  // Permet indiquer à partir de quel moment le système d'intersection va être détecter
  //En soit choisi quand on voit l'objet entierement(1.0) ou quand 10%(.1) de l'objet est visible à l'écran ça se déclenche
}

const handleIntersect = function (entries, observer) { //entries sont les élments que je vais observer
  entries.forEach(function (entry) {  
  //Ici on boucle tous les éléments, on lance une fioction qui récupèrera tous les éléments les un après les autres
    if (entry.intersectionRatio > threshold) { //Ici je compare l'intersectionRatio et le threshold que j'ai défini c'est > donc
      entry.target.classList.remove('reveal') /* Je suprise la class reveal qui cache, pour faire apparaitre l'élément */
      observer.unobserve(entry.target) //Une fois visible j'arrête l'obersation, pour ne pas faire une boucle
    }
  })
}

document.documentElement.classList.add('reveal-loaded')//Ici on ajoute la class pour le rendre visible

window.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(handleIntersect, options) 
  //Ici on crée l'observer et intersect. avec comme paramètre la callback handle et options où nous avons définit les options de l'obsercer
  const targets = document.querySelectorAll('.reveal') //Ici on récupères les éléments qu'on veut faire défiler 
  targets.forEach(function (target) { //Ici on dit que pour chaque élément récupérer execute cette fonction
    observer.observe(target)//Cette fonction permet d'observer l'élément
  })
})
</script>

<style lang="scss" scoped>
.box-card {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  .card {
    padding: 80px;
/*     box-sizing: border-box; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 30px;
    width: 90%;
    max-width: 800px;
    box-shadow: -10px -10px 20px 5px rgba(0, 0, 0, 0.1),
      10px 10px 20px -5px rgba(255, 255, 255, 0.3);
    border: 1px solid rgb(250, 149, 149);;
  }
  .title {
    font-family: "Monofett";
    font-size: 2.3em;
    margin-bottom: 28px;
    color: rgb(250, 149, 149);
  }
  .content {
    font-size: 1.7em;
    line-height: 1.5;
  }
  &.noStyle {
    .card {
      background-color: transparent;
      border: none;
      box-shadow: none;
      padding: 0;
    }
    .content {
      line-height: 1;
    }
  }
}
.reveal-loaded .reveal { /* Ici on dit qu'avec la class reveal on veut tout rendre invisible */
    opacity: 0;
    transform: translateY(30px);
}

.reveal-loaded{ /* Ici c'est le contraire avec cette class on veut tout faire réapparaitre */
    transition: 0.5s cubic-bezier(.5, 0, 0, 1);
}
@media screen and(max-width: 465px) {
  .box-card {
    .card {
      padding: 30px;
    }
    .title {
      font-size: 1.9em;
    }
    .content {
      font-size: 1.1em;
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
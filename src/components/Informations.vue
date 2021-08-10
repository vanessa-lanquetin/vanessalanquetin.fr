<template>
<box-card id="informations" title="Informations">
  <div class="container">
    <div class="left">
      <ul class="list-infos">
        <li>Age: 24 ans</li>
        <li>Localisation: Meurthe et Moselle (54)</li>
      </ul>
      <div class="social-networks">
        <h2>Réseaux Sociaux</h2>
        <ul class="logos">
          <li class="logo">
            <a href="https://www.linkedin.com/in/vanessa-lanquetin-15742b153/">
              <img src="@/assets/img/logo-linkedin.png" alt="linkedin">
              Linkedin
            </a>
          </li>
          <li class="logo">
            <a href="https://github.com/vanessouille">
              <img src="@/assets/img/logo-github.png" alt="github">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/img/moi.jpg" alt="Lanquetin Vanessa">
    </div>
  </div>
</box-card>
</template>

<script>
import BoxCard from './BoxCard.vue'
export default {
  components: { BoxCard },

}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  .left {
    .social-networks {
      display: flex;
      flex-direction: column;
      h2 {
        margin-top: 50px;
        margin-bottom: 20px;
      }
      .logos {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        .logo a {
          display: flex;
          align-items: center;
          margin-right: 20px;
          text-decoration: none;
          color: black;
          transition: 300ms;
          &:hover {
            cursor: pointer;
            transform: scale(1.2);
          }
          img {
            width: 40px;
          }
        }
      }
    }
  }
  .right {
    img {
      border-radius: 10px;
      border: 1px solid #999;
      box-shadow: 5px 5px 5px rgba(0,0,0, 0.2);
      height: 250px;
    }
  }
}
@media screen and(max-width: 699px){
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .social-networks{
    display: flex;
    align-items: center;
  }
  
}
@media screen and(max-width: 321px)  {
  .container{
    .right{
      img {
        height:200px;
      }
    }
  }
}
</style>
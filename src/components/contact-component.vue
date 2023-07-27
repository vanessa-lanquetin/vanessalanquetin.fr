<template>
  <div :class="'theme-' + theme.currentThemeName.value">
  <section class="sec-05">
    <div class="container">
      <div class="content">
        <div class="container-contact">
          <form action="#" method="POST" enctype="text/plain" @submit="submit">
            <div class="items-contact">
              <label for="name">Nom :</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                v-model="data.name"
              />
            </div>
            <div class="items-contact">
              <label for="mail">Mail :</label>
              <input
                type="email"
                id="mail"
                name="email"
                required
                v-model="data.email"
              />
            </div>
            <div class="items-contact">
              <label for="msg">Message :</label>
              <textarea
                id="msg"
                name="user_message"
                rows="6"
                unset
                required
                v-model="data.msg"
              ></textarea>
            </div>
            <div class="button">
              <button type="submit" name="submit">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import SectionHero from '../components/Section-Hero.vue'
import HeroImg from '../assets/img/gum/home.gif'
import theme from "../services/theme";
import { ref } from "@vue/reactivity";
import API from "../services/API";
export default {
  setup() {
    const data = ref({
      email: "",
      name: "",
      msg: "",
    });
    return {
      data,theme,
      async submit(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        const { data: result } = await API.post("/send", data.value);
        console.log(result);
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/global";

@media screen and (max-width: 450px) {

  .accueil {
    height: 75vh;
  }
}

.deco {
  width: 100%;
}

strong {
  font-weight: 600;
}

$labelWidth: 100px;
.sec-05 {
  display: flex;
  flex-direction: column;
  .container {
    margin: 50px auto;
    width: 90%;
    h2 {
      margin-top: 50px;
    }
    .content {
      justify-content: center;
      .container-contact {
        padding: 60px;
        box-sizing: border-box;
        max-width: 1200px;
        width: 100%;
        background: linear-gradient(to bottom, #b6b6fa, #fcc0e7, #f0d595);
        .items-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          label {
            text-align: left;
            width: $labelWidth;
            flex-shrink: 0;
            display: inline-block;
            color: #fff;
            font-size: 20px;
          }
        }
        .button {
          padding-top: 10px;
          display: flex;
          justify-content: right;
          font-size: 24px;
          font-weight: 900;
          
          button{
            border: #fff 1px solid;
            &:hover{
              transform: scale(1.09);
              transition: 300ms transform;
            }
          }
        }
      }
    }
  }
}
input {
  border: none;
  border-bottom: 1px solid black;
  padding: 5px 0;
  outline: none;
  margin-bottom: 20px;
  font-size: 1em;
}
textarea {
  min-height: 290px;
}
input,
textarea {
  border-radius: 5px;
  background: rgb(255, 255, 255);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-grow: 1;
  min-width: 100px;
  color: #000;
  font-size: 1.4em;
  padding: 10px;
}
@media screen and (max-width: 1071px) {
  .sec-05 .content .text-box[data-v-6599f3b0] {
    padding: 25px;
    textarea[data-v-6599f3b0] {
      min-height: 150px;
    }
  }
}
@media screen and (max-width: 592px) {
  .sec-05 .container .content .container-contact {
    padding: 20px;
  }
  .sec-05 .text-box {
    padding: 10px;
  }
}
@media screen and (max-width: 400px) {
  .sec-05 .content .text-box[data-v-6599f3b0][data-v-6599f3b0] {
    padding: 10px;
    margin-bottom: 50px;
  }
  .sec-05 .content[data-v-6599f3b0] {
    margin: 0 20px;
  }
  input[data-v-6599f3b0],
  textarea[data-v-6599f3b0] {
    min-width: 90px;
  }
  .sec-05
    .content
    .text-box[data-v-6599f3b0]
    textarea[data-v-6599f3b0][data-v-6599f3b0] {
    min-height: 100px;
  }
}

h1{
  margin: 80px;
}
</style>
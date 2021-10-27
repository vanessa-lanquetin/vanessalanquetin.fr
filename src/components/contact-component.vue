<template>
  <section class="sec-05" v-scroll-reveal="{ preset: 'bottom', interval: 200 }">
    <div class="container">
      <h2
        id="contact"
        class="section-title"
        v-scroll-reveal="{ preset: 'left' }"
      >
        Contact
      </h2>
      <div class="content">
        <div class="text-box" v-scroll-reveal="{ preset: 'right', delay: 700 }">
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
</template>

<script>
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
      data,
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
$labelWidth: 100px;
.sec-05 {
  h2 {
    margin-top: 50px;
  }
  .content {
    justify-content: center;
    .text-box {
      padding: 60px;
      max-width: 1200px;
      width: 100%;
      .items-contact {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        label {
          text-align: left;
          width: $labelWidth;
          flex-shrink: 0;
          display: inline-block;
        }
      }
      .button {
        padding-top: 10px;
        display: flex;
        justify-content: right;
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
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-grow: 1;
  min-width: 200px;
}
@media screen and (max-width: 1071px) {
  .sec-05 .content .text-box[data-v-6599f3b0] {
    padding: 25px;
    textarea[data-v-6599f3b0] {
      min-height: 150px;
    }
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
  .sec-05 .content .text-box[data-v-6599f3b0] textarea[data-v-6599f3b0][data-v-6599f3b0] {
    min-height: 100px;
  }
}
</style>
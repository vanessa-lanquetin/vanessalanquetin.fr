<template>
  <box-card id="contact" title="Contact">
    <div class="container">
      <div class="left">
        <img
          id="moi"
          src="@/assets/img/Animation.gif"
          alt="Vanessa LANQUETIN"
        />
      </div>
      <div class="right">
        <form action="mailto:lanquetin.vanessa@gmail.com" method="post">
          <div class="items-contact">
            <label for="name">Nom :</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="items-contact">
            <label for="mail">Mail :</label>
            <input type="email" id="mail" name="email" required />
          </div>
          <div class="items-contact">
            <label for="msg">Message :</label>
            <textarea
              id="msg"
              name="user_message"
              rows="6"
              unset
              required
            ></textarea>
          </div>
          <div class="button">
            <button type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  </box-card>
</template>

<script>
import BoxCard from "./BoxCard.vue";
export default {
  components: { BoxCard },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .left {
    img {
      width: 230px;
      height: 100%;
      object-fit: cover;
      margin-right: 20px;
    }
  }
  .right {
    padding: 10px 20px;
    flex-grow: 1;
    .items-contact {
      display: flex;
      flex-direction: column;
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
input,
textarea {
  border-color: #aaa;
}
button {
  padding: 10px 20px;
  border-radius: 1em;
  background-color: #fff;
  border: 1px solid #aaa;
  cursor: pointer;
  transition: 300ms;
  margin-top: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  }
}
@media screen and(max-width: 465px) {
  .container {
    .left {
      img {
        display: block;
        width: 230px;
      }
    }
  }
}
@media screen and(max-width: 2511px) {
  .container {
    .left {
    }
    .right {
      padding: 10px 0px;
      text-align: left;
    }
  }
  form {
    margin-right: 20px;
  }
  input,
  textarea {
    max-width: 80%;
  }
}
</style>
<template>
    <section class="sec-05" v-scroll-reveal="{preset: 'bottom', interval: 200}">
      <div class="container">
        <h3 id="contact" class="section-title" v-scroll-reveal="{preset: 'left'}">Contact</h3>
        <div class="content">
          <div class="text-box" v-scroll-reveal="{preset: 'right', delay: 700}">
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
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sec-05 .content {
  justify-content: center;
}
.sec-05 .text-box {
  max-width: none;
  padding: 80px;
}
.items-contact {
  display: flex;
  gap: 100px;
  justify-content: space-between;
}
.sec-05 .button {
  padding-top: 10px;
  display: flex;
  justify-content: right;
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
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  min-width: 826px;
  max-width: 826px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
#msg{
  min-height: 290px;
}

</style>

import ScrollReveal from "scrollreveal";

const defaultScrollOption = {
  //reset: true,
  distance: "60px",
  duration: 1000,
  delay: 100,
}
const presets = {
  left: { delay: 200, origin: "left" },
  bottom: { delay: 200, origin: "bottom" },
  top: { delay: 200, origin: "top" },
  right: { delay: 200, origin: "right" },
};
(defaultScrollOption);
const MyDirective = {
  created() {}, // new
  beforeMount() {},
  mounted(el,binding) {
    if(binding?.value?.preset && presets[binding.value.preset]) {
      Object.assign(binding.value, presets[binding.value.preset]);
    }
    Object.assign(binding.value, {container: document.querySelector("#app-content")})
    ScrollReveal().reveal(el, binding.value || defaultScrollOption)
  },
  beforeUpdate() {}, // new
  updated() {},
  beforeUnmount() {}, // new
  unmounted() {},
};
export default MyDirective
import html from "html-literal";
import dogPic from "../assets/img/dog-with-flower.jpg";

export default () => html`
  <section id="bio">
    <h2>Vivamus ac justo eu nisi</h2>
    <img src="${dogPic}" alt="me" />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu</p>
    <p>Quisque at hendrerit libero, eget interdum lectus. Etiam facilisis</p>
    <p>Etiam egestas consectetur gravida. Nulla mollis suscipit</p>
  </section>
`;

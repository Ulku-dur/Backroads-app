import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, ab minima quam culpa quas aspernatur sequi, aperiam
            dolore corporis reiciendis labore alias.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reiciendis, aut distinctio! Iure numquam natus ea facilis placeat ab
            error doloremque quas mollitia beatae!{" "}
          </p>
          <button className="btn">
  read more
</button>

        </article>
      </div>
    </section>
  );
};

export default About;

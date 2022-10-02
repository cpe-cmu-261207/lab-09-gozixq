import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <section class="home" id="home">
          <div class="home-text">
            <h1>Natsinee Sasanasopa</h1>
            <h2>
              I am currently enrolled in the Faculty of
              Engineering Computer Engineering at Chiang Mai University.
              <br />
              
            </h2>
          </div>
          <div class="me">
            <img
              src="/image/profile.PNG"
              width="900rem"
              height="900rem"
              style={{ objectfit: "cover" }}
              class="rounded-circle p-5"
            />
          </div>
        </section>
      </div>

      <p class="skill">My hobby</p>
      <div class="d-flex gap-3 mt-4 justify-content-center">
        <div class="card" style={{ width: "18rem" }}>
          <img src="image/blck.jpg" class="card-img-top m-auto" />
          <div class="card-body m-2">
            <span class="badge rounded-pill text-bg-primary">Drawing</span>
            <p class="card-text">
              I enjoy drawing art for art sake.
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src="image/ylp.jpg" class="card-img-top m-auto" />
          <div class="card-body m-2">
            <span class="badge rounded-pill text-bg-primary">Music</span>
            <p class="card-text">
              I like listening to Yonlapa band the most.
            </p>
          </div>
        </div>

        <div class="card" style={{ width: "18rem" }}>
          <img src="image/Mae.jpg" class="card-img-top m-auto" />
          <div class="card-body m-2">
            <span class="badge rounded-pill text-bg-primary">Travel</span>
            <p class="card-text">
              I'm a backpacker. I love to go somewhere alone.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <br />
    </div>
  );
}
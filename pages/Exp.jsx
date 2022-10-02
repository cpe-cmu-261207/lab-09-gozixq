import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <p class="expre">Experience</p>

      <div class="bottom2">
        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="image/ino.jpg" class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Innovation</h5>
                <p class="card-text">
                Innovative design for preventing and reducing the chance of contracting COVID by making it a portable sterilization box.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mb-3" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src="image/game.jpg" class="img-fluid rounded-start" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Scratch game</h5>
                <p class="card-text">
                  Create a game using Scratch program in the first year of Basic Computer course by designing graphics from Sketch Up.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
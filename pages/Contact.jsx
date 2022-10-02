import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <p class="expre">Contact</p>
        <div class="contact d-flex justify-content-center">
          <img
            src="image/profile.PNG"
            width="150"
            height="150"
            class="rounded-circle me-5"
            style={{ objectFit: "cover", boxShadow: "3px,3px,20px,black" }}
          />
          <div>
            <span>
              Name <br />
            </span>
            <span>
              Nickname <br />
            </span>
            <span>
              Address <br />
            </span>
            <span>
              Facebook <br />
            </span>
            <span>
              Email <br />
            </span>
            <span>Phone</span>
          </div>
          <div>
            <span class="para1">Natsinee Sasanasopa</span> <br />
            <span class="para1">Gigi</span> <br />
            <span class="para1">
              72/7 Sripangnga road Meungkrani Krabi 
            </span>
            <br />
            <span>
              <a
                href="https://www.facebook.com/jjnatsinee2545"
                class="text-decoration-none para1"
                target="_blank"
                rel="noreferrer"
              >
                Natsinee Sasanasopa
              </a>
              <br />
            </span>
            <a
              href="mailto:NAtsinee_sa@cmu.ac.th"
              class="text-decoration-none para1"
            >
              Natsinee_sa@cmu.ac.th
            </a>
            <br />
            <span class="para1">0638453830</span> <br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
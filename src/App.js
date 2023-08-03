import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-body-tertiary ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            Car
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container px-4 my-5">
        <div class="row ">
          <div class="col-sm-7 mb-3 mb-lg-1 col-md-9 ">
            <img
              src="https://www.xtrafondos.com/wallpapers/resoluciones/22/noche-en-las-montanas-durante-el-invierno_1920x1080_11051.jpg"
              className="img-fluid max-width: 100% height: auto"
              alt="..."
            />
          </div>
          <div class="col-sm-5  col-md-3">
            <h1 className="fw-bold ">Tagline</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              pariatur voluptatum ipsam illum id rerum mollitia saepe
              repudiandae, eligendi distinctio vel commodi, provident quibusdam
              atque aliquam. Laboriosam nulla et sunt.
            </p>
            <button className=" btn btn-outline-primary">Action</button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="card p-0 ">
            <div className="card-body text-center bg-secondary text-white border-1 rounded">
              Some quick example text to build on the card title and make up the
              bulk of the card's content
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
          <div className="col">
            <div class="card h-100  border-success">
              <img
                src="https://w0.peakpx.com/wallpaper/324/853/HD-wallpaper-dodge-challenger-blue-blue-car-car-charger-sport-sport-car-sports-car-thumbnail.jpg"
                class="card-img-top  h-75 "
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card h-100 border-success ">
              <img
                src="https://w0.peakpx.com/wallpaper/503/803/HD-wallpaper-sports-car-car-black-street-thumbnail.jpg"
                class="card-img-top h-75"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card h-100 border-success ">
              <img
                src="https://w0.peakpx.com/wallpaper/310/1013/HD-wallpaper-mustang-car-cars-thumbnail.jpg"
                class="card-img-top h-75"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark py-5 my-5 ">
      <div className="container px-4 px-lg-5">
        <p className="text-white text-center"> Copyright &copy, Your Website 2023</p>
      </div>


      </footer>
    </>
  );
}

export default App;

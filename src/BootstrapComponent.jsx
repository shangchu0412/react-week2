import Card from "./components/Card"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function BootstrapComponent() {
  return (
    <>
      <header data-bs-theme="dark">
        <Navbar />
      </header>
      <main>
        <Header />
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                return <div className="col" key={item}>
                <Card />
              </div>
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default BootstrapComponent
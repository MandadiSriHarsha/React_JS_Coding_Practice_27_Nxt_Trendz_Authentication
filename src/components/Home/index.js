import './index.css'

import Header from '../Header'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <div className="clothes-item-card">
      <div className="clothes-image-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="clothes-card-image"
        />
      </div>
      <div className="clothes-content-card">
        <div className="temp-container">
          <h1 className="clothes-content-card-main-heading">
            Clothes That Get YOU Noticed
          </h1>
        </div>
        <p className="clothes-content-card-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
    </div>
  </div>
)

export default Home

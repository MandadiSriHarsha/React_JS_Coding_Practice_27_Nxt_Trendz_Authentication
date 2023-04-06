import './index.css'

const Header = () => (
  <>
    <div className="header-card">
      <div className="website-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="header-logo"
        />
      </div>
      <ul className="header-nav-items-card">
        <li className="home-nav-item">Home</li>
        <li className="home-nav-item">Products</li>
        <li className="home-nav-item">Cart</li>
        <button type="button" className="logout-button">
          Logout
        </button>
      </ul>
      <div className="logout-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-image"
        />
      </div>
    </div>
    <div className="header-small-width-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="nav-icon-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="nav-icon-image"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="nav-icon-image"
      />
    </div>
    <p className="clothes-card-main-heading">Clothes That Get YOU Noticed</p>
  </>
)

export default Header

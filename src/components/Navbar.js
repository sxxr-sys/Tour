import { Component } from "react";
import { MenuItems } from "./MenuItems"; // Assuming MenuItems is an array of menu objects
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false, // To manage the mobile menu (hamburger toggle)
    };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="bg-gray-800 h-20 flex justify-between items-center px-5">
        {/* Logo or App Title */}
        <h1 className="text-white text-2xl font-bold">Your Logo Here</h1>

        {/* Hamburger icon (for mobile menu) */}
        <div
          className="menu-icon md:hidden text-white text-3xl cursor-pointer"
          onClick={this.handleClick}
        >
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* Navbar links */}
        <ul
          className={`md:flex md:static absolute top-20 left-0 w-full bg-gray-800 z-10 md:bg-transparent md:w-auto md:flex-row flex-col md:items-center ${
            this.state.clicked ? "block" : "hidden"
          }`}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="text-white text-lg">
                <Link
                  to={item.url}
                  className="block px-5 py-3 hover:bg-gray-500"
                  onClick={() => this.setState({ clicked: false })} // Close menu on link click
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

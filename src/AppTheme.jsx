import React, { useContext } from "react";
import "./AppTheme.css";
import { DarkModeContext, DarkModeProvide } from "./context/DarkModeContext";

export default function AppTheme() {
  return (
    <DarkModeProvide>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvide>
  );
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <main className="main">
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <footer>
      Profile
      <User />
    </footer>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      Product Detail
      <p>
        DarkMode :{" "}
        {darkMode ? (
          <span style={{ backgroundColor: "#000", color: "#fff" }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}

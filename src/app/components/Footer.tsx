import {Facebook, Instagram, Twitter} from "react-bootstrap-icons"

export default function Footer() {
  return (
    <footer className="flex flex-row flex-wrap justify-between items-center p-20">
      <div>
        <li className="text-blue-500 underline">
          <ul>About</ul>
          <ul>Contact</ul>
          <ul>Terms of Use</ul>
          <ul>Privacy Policy</ul>
        </li>
        <p>© Brand 2026. All Rights Reserved.</p>
      </div>
      <div className="text-blue-500 flex flex-row flex-wrap justify-center items-center">
        <Facebook />
        <Twitter />
        <Instagram />
      </div>
    </footer>
  );
}

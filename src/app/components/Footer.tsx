import {Facebook, Instagram, Twitter} from "react-bootstrap-icons"

export default function Footer() {
  return (
    <footer className="flex flex-row flex-wrap justify-between items-center p-20">
      <div>
        <li className="flex flex-row flex-wrap justify-center items-center">
          <ul className="text-blue-500 underline">About</ul>
          <span className="flex items-center justify-center text-neutral-800 text-center p-3 h-full">.</span>
          <ul className="text-blue-500 underline">Contact</ul>
          <span className="flex items-center justify-center text-neutral-800 text-center p-3 h-full">.</span>
          <ul className="text-blue-500 underline">Terms of Use</ul>
          <span className="flex items-center justify-center text-neutral-800 text-center p-3 h-full">.</span>
          <ul className="text-blue-500 underline">Privacy Policy</ul>
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

import {Facebook, Instagram, Twitter} from "react-bootstrap-icons"

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row justify-center lg:justify-between items-center p-10 gap-8">
      <div className="flex flex-col flex-wrap justify-center items-center">
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
      <div className="text-blue-500 w-full lg:max-w-1/2 flex flex-row flex-wrap justify-center lg:justify-end items-center gap-6">
        <Facebook className="h-8 w-8" />
        <Twitter className="h-8 w-8" />
        <Instagram className="h-8 w-8" />
      </div>
    </footer>
  );
}

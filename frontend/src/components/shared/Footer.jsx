import { Link } from "react-router-dom";
import bhc_logo from "./../../assets/BHC logo.png"

const Footer = () => {
  return (
    <footer className="footer bg-slate-900 text-neutral-content p-10 font-bold text-[11px]">
      <nav>
        <h6 className="text-xl font-bold">Abstract</h6>
        <Link className="mb-0">Branches</Link>
      </nav>
      <nav>
        <h6 className="text-xl font-bold">Resources</h6>
        <Link className="mb-0">Blog</Link>
        <Link className="mb-0">Help Center</Link>
        <Link className="mb-0">Release Notes</Link>
        <Link className="mb-0">Status</Link>
      </nav>
      <nav>
        <h6 className="text-xl font-bold">Community</h6>
        <Link className="mb-0">Twitter</Link>
        <Link className="mb-0">Linkedin</Link>
        <Link className="mb-0">Facebook</Link>
        <Link className="mb-0">Dribbble</Link>
        <Link className="mb-0">Podcast</Link>
      </nav>
      <nav>
        <h6 className="text-xl font-bold">Company</h6>
        <Link className="mb-0">About Us</Link>
        <Link className="mb-0">Careers</Link>
        <Link className="mb-0">Legal</Link>
        <div className="mt-4">
          <h6 className="font-bold text-base">Contact Us</h6>
          <Link className="mb-0">info@abstract.com</Link>
        </div>
      </nav>
      <nav>
        <div className="md:mt-20">
          <div className="bg-white max-w-6 p-1 rounded-lg mb-6"><img src={bhc_logo} alt="logo"/></div>
          <p>&copy; Copyright</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

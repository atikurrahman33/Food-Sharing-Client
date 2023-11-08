import { Link } from "react-router-dom";
import LOG from '../../assets/A Great Pear-logos_transparent.png'


const Footer = () => {
    return (
        <div className=" sm:mx-auto">
             <footer className="footer p-10 bg-base-200 text-base-content ">
  <aside>
   <img className="h-20" src={LOG} alt="" />
    <p className="text-3xl font-bold text-orange-700 pt-2">Providing good food since 2000</p>
  </aside> 
  <nav>
    <header className="footer-title font-bold ">Services</header> 
    <a className="link link-hover font-bold">Branding</a> 
    <a className="link link-hover font-bold">Design</a> 
    <a className="link link-hover font-bold">Marketing</a> 
    <a className="link link-hover font-bold">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header>                 
                <Link className="hover:text-pink-500 link-hover font-bold" to='/'>Home</Link>
                <Link className="hover:text-pink-500 link-hover font-bold" to='/allfood'>Available Food</Link>
                <Link className="hover:text-pink-500 link-hover font-bold" to='/blog'>Blog</Link>
                <Link className="hover:text-pink-500 link-hover font-bold" to='/connect'>Contact</Link>
  </nav> 
  <nav>
    <header className="footer-title font-bold">Legal</header> 
    <a className="link link-hover font-bold">Terms of use</a> 
    <a className="link link-hover font-bold">Privacy policy</a> 
    <a className="link link-hover font-bold">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
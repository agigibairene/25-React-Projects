import { FaBars } from "react-icons/fa";
import { links, socials } from "./data";
import "./style.css";
import logo from "../assets/logo.svg";

export default function NavBar() {
    return (
                <nav>
                    <div className="nav-div">
                        <div className="image">
                            <img src={logo} alt="logo" />
                            <button className="btn-toggle">
                                <FaBars />
                            </button>
                        </div>
                        {/* <div className="links-container">
                            <ul className="tabs">
                                {
                                    links.map(link =><li key={link.id}>
                                        <a href={link.url}>{link.text}</a>
                                    </li>)
                                }
                            </ul>
                        </div>
                        
                        
                        <ul className="socials">
                            {
                                socials.map(social =><li key={social.id} className="icons">
                                    <a href={social.url}>{social.icon}</a>
                                </li>)
                            }
                        </ul> */}
                    </div>
                </nav>
    )
}
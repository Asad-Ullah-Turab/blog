import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="pt-20">
      <div className="md-2:mx-10 p-10 flex flex-col items-center space-y-8">
        <div className="flex space-x-2">
          <a
            href="https://www.linkedin.com/in/asadullah-turab-6946b2236/"
            target="_blank"
            rel="noreferrer"
            className="bg-footerbtn p-3 rounded-2xl"
          >
            <FaLinkedinIn size="24" color="white" />
          </a>
          <a
            href="https://github.com/Asad-Ullah-Turab"
            target="_blank"
            rel="noreferrer"
            className="bg-footerbtn p-3 rounded-2xl"
          >
            <PiGithubLogoFill size="24" color="white" />
          </a>
          <a
            href="https://www.facebook.com/asadullah.turab.37"
            target="_blank"
            rel="noreferrer"
            className="bg-footerbtn p-3 rounded-2xl"
          >
            <FaFacebookF size="24" color="white" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-footerbtn p-3 rounded-2xl"
          >
            <FaXTwitter size="24" color="white" />
          </a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Zephyr. All rights reserved.
        </div>
        <div className="text-center">
          <p>
            Made with <span className="text-red-600">❤</span> by{" "}
          </p>
          <p>Muhammad Asad Ullah Turab</p>
        </div>
      </div>
    </footer>
  );
}

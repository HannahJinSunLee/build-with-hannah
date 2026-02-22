import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-note">Built by Hannah. Luna supervises.</p>
          <p className="footer-subtle">
            <Link className="text-link" href="/work-with-me">
              Need website help? Work with me
            </Link>
          </p>
        </div>

        <div className="social">
          <a className="social-link" href="https://www.instagram.com/jinsunni_lee">
            Instagram
          </a>
          <a className="social-link" href="https://github.com/HannahJinSunLee?tab=following">
            GitHub
          </a>
          <a className="social-link" href="https://www.linkedin.com/in/hannah-jin-sun-lee">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

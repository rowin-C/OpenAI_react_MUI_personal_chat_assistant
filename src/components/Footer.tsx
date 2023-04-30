import "./styles.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="box blank"></div>
        <div className="box">Made with ❤️ by Saubhagya</div>
        <div className="box">
          <div className="icon">
            <a href="https://github.com/rowin-C" target="_blank">
              <img className="git" src="src/assets/gitlogo.png" alt="git" />
            </a>
          </div>
          <div className="icon">
            <a href="https://twitter.com/rowin_dev" target="_blank">
              <img className="twi" src="src/assets/twi.png" alt="git" />
            </a>
          </div>
          <div className="icon">
            <a href="https://portfolio-rowinc.vercel.app/" target="_blank">
              <img className="logo" src="src/assets/logo.png" alt="git" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

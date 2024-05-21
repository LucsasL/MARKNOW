const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div>
            <h1>
              This is MARKDOWN
            </h1>

            <p>
              SIGN TO OUR NEWSLETTER:
            </p>

            <input type="text" id="inp" />
          </div>

          <div>
            <h2>
              QUICK LINKS:
            </h2>

            <ul>
              <li>
                <a href="https://youtube.com">HOME</a>
              </li>
              <li>
                <a href="https://youtube.com">ABOUT US</a>
              </li>
              <li>
                <a href="https://youtube.com">SERVICES</a>
              </li>
              <li>
                <a href="https://youtube.com">CONTACT</a>
              </li>
            </ul>
          </div>

          <div>
            <h2>
              MY SOCIALS:
            </h2>

            <ul>
              <li>
                <a href="https://youtube.com">@LUCSAS.L</a>
              </li>
              <li>
                <a href="https://youtube.com">@LUCSASL</a>
              </li>
              <li>
                <a href="https://youtube.com">@LUCAS LIRA</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="credit">
          <p>
            THIS IS A FICTITIOUS COMPANY
          </p>
          <p>
            BUILT BY <a href="https://github.com/lucsasl">LUCSAS</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer;
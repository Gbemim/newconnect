import React from 'react'

const App = () => {
  return (
   <div className="container">
      <main className="main">
        <h1 className="title">Welcome to Connect!</h1>

        <p className="description">
          A platform that allows Linkedin users to have a one on one video call
          with another Linkedin user
        </p>

        <div className="grid">
          {/* <Link href="/profile"> */}
          <a
            href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&scope=r_liteprofile&client_id=78tkd2wwr2p92m&redirect_uri=https%3A%2F%2Fwww.netconnect.online%2Fprofile"
            // onClick={tesst}
            className="card"
          >
            <h3>Login & Signup &rarr;</h3>
          </a>
          {/* </Link> */}
        </div>
      </main>

      <footer className="footer">
        <a href="https://gbemi.ca/" target="_blank" rel="noopener noreferrer">
          Made by Gbemi
        </a>
      </footer>
    </div>
  );
}

export default App;

import React from "react";
function App() {

  return (
    <div>
      <section className="showcase">
        <div className="overlay">
         

          <article>
            <p className="tag">
              <strong>Creat Your Account </strong> 
            </p>

            <form className="form">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button type="sumbit">Sign up </button>
              <small>
                By clicking the button, you are agreeing to our{" "}
                <span className="red">Terms and Services</span>
              </small>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;

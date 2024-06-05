import "../css/forgetpassword.css";

function ForgetPassword() {
  return (
    <>
      <section className="forget-section">
        <div className="form-box">
          <div className="form-value">
            <form action="#">
              <h2 className="forget-h2">Forget Password</h2>
              <br />
              <p className="forget-p">Please enter your email address to reset your password.</p>
              <div className="inputbox">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input type="email" id="email" name="email" />
              </div>
              <button className="forget-btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgetPassword;

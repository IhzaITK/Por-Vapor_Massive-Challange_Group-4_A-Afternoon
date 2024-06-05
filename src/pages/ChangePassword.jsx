import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/changepassword.css";

function ChangePassword() {
  return (
    <div className="change-section">
      <Header />

      <h1 className="header">Change Password</h1>
      <div className="change">
        <div className="sidebar">
          <ul className="change-ul">
            <a className="side-link" href="profile.html">
              Account Details
            </a>
            <br />
            <a className="side-link" href="history.html">
              Orders
            </a>
            <br />
            <a className="side-link" href="changePassword.html">
              Change Password
            </a>
            <br />
            <a className="side-link" href="login.html">
              Log Out
            </a>
          </ul>
        </div>
        <div className="change">
          <form action="#">
            <div className="form-group">
              <label htmlFor="now" className="label">
                Password Now
              </label>
              <input type="current-password" id="passwordNow" name="passwordNow" className="input" required />
              <span className="password-eye">
                <i className="fas fa-eye"></i>
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="new" className="label">
                New Password
              </label>
              <input type="new-password" id="passwordNew" name="passwordNew" className="input" required />
              <span className="password-eye">
                <i className="fas fa-eye"></i>
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="confirm" className="label">
                Confirm New Password
              </label>
              <input type="new-password" id="passwordConfirm" name="passwordConfirm" className="input" required />
              <span className="password-eye">
                <i className="fas fa-eye"></i>
              </span>
            </div>

            <button type="submit" className="button">
              Save Changes
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ChangePassword;

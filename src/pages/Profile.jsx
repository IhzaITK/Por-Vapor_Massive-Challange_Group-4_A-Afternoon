import "../css/profile.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Profile() {
  return (
    <div className="profile-body">
      <Header />

      <h1 className="header">Account Details</h1>
      <div className="profile">
        <div className="sidebar">
          <ul className="profile-ul">
            <span className="side-link">Account Details</span>
            <br />
            <span className="side-link">Orders</span>
            <br />
            <span className="side-link">Change Password</span>
            <br />
            <span className="side-link">Log Out</span>
          </ul>
        </div>
        <div className="profil">
          <form action="#">
            <div className="form-group">
              <label htmlFor="name" className="label">
                Full Name
              </label>
              <input type="text" id="name" name="name" className="input" required />
            </div>

            <div className="form-group">
              <label htmlFor="address" className="label">
                Address
              </label>
              <input type="text" id="alamat" name="alamat" className="input" />
            </div>
            <div className="form-group">
              <label htmlFor="tgl" className="label">
                Birth Date
              </label>
              <input type="date" id="tgl" name="tgl" className="input" />
            </div>

            <div className="form-group">
              <label htmlFor="telp" className="label">
                Handphone
              </label>
              <input type="telp" id="telp" name="telp" className="input" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="label">
                Email Address
              </label>
              <input type="email" id="email" name="email" className="input" required />
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

export default Profile;

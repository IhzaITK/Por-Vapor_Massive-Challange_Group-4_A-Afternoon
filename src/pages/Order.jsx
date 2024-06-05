import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/order.css";

function Order() {
  return (
    <div className="body-order">
      <Header />

      <h1 className="header">Orders</h1>
      <div className="order">
        <div className="sidebar">
          <ul className="order-ul">
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
        <div className="riwayat">
          <table className="table mt-5">
            <thead className="order-thead">
              <tr>
                <th scope="col" className="order-th">
                  Tanggal <i className="fa fa-calendar-o" aria-hidden="true"></i>
                </th>
                <th scope="col" className="order-th">
                  Produk
                </th>
                <th scope="col" className="order-th center">
                  Jumlah
                </th>
                <th scope="col" className="order-th center">
                  Total
                </th>
                <th scope="col" className="order-th center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="tbody-order"></tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Order;

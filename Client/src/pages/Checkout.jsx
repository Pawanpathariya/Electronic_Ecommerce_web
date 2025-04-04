import React, { useEffect, useState } from 'react'
import BASEURL from '../confiq/BASEURL'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.addtocart.cart);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({});
  const [address, setAddress] = useState('');

  useEffect(() => {
    let totalprice = 0;
    product.forEach((p) => {
      totalprice += p.quantity * p.price;
    });
    setTotal(totalprice);
  }, [product]);

  useEffect(() => {
    const loaddata = async () => {
      let api = `${BASEURL}/user/getuser`;
      try {
        let response = await axios.post(api, {
          userid: localStorage.getItem('userid'),
        });
        setUser(response.data);
        if (!response.data.address) {
          response.data.address = '';
        }
      } catch (error) {
        console.log(error);
      }
    };
    loaddata();
  }, []);

  const initPay = (data) => {
    const options = {
      key: 'rzp_test_jzFpAn1XFch491',
      amount: data.amount,
      currency: data.currency,
      name: product[0].proname,
      description: 'Test',
      image: product[0].defaultimage,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = `${BASEURL}/api/payment/verify`;
          const { data } = await axios.post(verifyURL, response);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: '#3399cc',
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePay = async () => {
    try {
      const orderURL = `${BASEURL}/api/payment/orders`;
      const { data } = await axios.post(orderURL, { amount: total });
      console.log(data);
      initPay(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {product.map((p) => (
              <tr key={p._id}>
                <td>
                  <img
                    src={`${BASEURL}/${p.defaultimage}`}
                    height="60px"
                    width="60px"
                  />
                </td>
                <td>{p.proname}</td>
                <td>{p.brand}</td>
                <td>{p.price} RS.</td>
                <td style={{ display: 'flex' }}>
                  {p.quantity}
                </td>
                <td>
                  {p.quantity * p.price}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div>
          <h3>Name : {user.name}</h3>

          <h3>
            Address :{' '}
            {user.address ? (
              user.address
            ) : (
              <input
                type="text"
                placeholder="Enter your address"
                onChange={(e) => setAddress(e.target.value)}
              />
            )}
          </h3>

          <h3>Email : {user.email}</h3>
          <h3>Total : {total}</h3>
          <Button variant="primary" onClick={handlePay}>
            Make payment
          </Button>
        </div>
      </div>
    </>
  );
};

export default Checkout;


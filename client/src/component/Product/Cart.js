import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./../../GlobalContext";
import axios from "axios";
import {
  Container,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TableBody,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

function Cart() {
  const data = useContext(GlobalContext);
  const [cart, setCart] = data.authApi.cart;
  const orderUpdate = data.authApi.orderUpdate;
  const [token] = data.token;
  const [finalTotal, setFinalTotal] = data.authApi.finalTotal;
  const [order, setOrder] = data.authApi.order;

  const [total, setTotal] = useState(0); // total price
  const [gst, setGst] = useState(5); // gst -> cgst & sgst
  const [dc, setDC] = useState(30); // delivery charge

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
      let gstTotal = Math.round(total * (5 / 100));
      let final = total + gstTotal + dc;
      setFinalTotal(final);
    };
    getTotal();
  }, [cart]);

  // inc count of items
  const incCount = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });
    setCart([...cart]);
    updateCart(cart);

    setOrder(cart, finalTotal);
    storeOrder(cart, finalTotal);
  };

  // to dec count of items
  const decCount = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
    updateCart(cart);

    setOrder(cart, finalTotal);
    storeOrder(cart, finalTotal);
  };

  // to update cart
  const updateCart = async (cart) => {
    await axios.patch(
      `/api/v1/auth/addToCart`,
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };

  // delete item from cart
  const delItem = (id) => {
    if (window.confirm(`Do you want to remove product?`)) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
      updateCart(cart);

      // setOrder(cart,finalTotal)
      // storeOrder(cart,finalTotal)
    }
  };

  // final order save and continue to check out
  const storeOrder = async (cart, finalTotal) => {
    await orderUpdate(cart, finalTotal);
  };

  if (cart.length === 0) {
    return (
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ textAlign: "center" }}>
              Cart is Empty
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ textAlign: "center", py: 5 }}>
            {" "}
            My cart{" "}
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TableContainer component={Paper} sx={{ p: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Count</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart &&
                  cart.map((item, index) => {
                    const { _id, title, image, price, qnty, quantity } = item;
                    return (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          {title}
                        </TableCell>
                        <TableCell align="center">
                          <img
                            src={image.url}
                            style={{ width: "100px" }}
                            alt=""
                          />
                        </TableCell>
                        <TableCell align="center">&#8377; {price}</TableCell>
                        <TableCell align="center">{qnty}</TableCell>
                        <TableCell align="center">
                          <IconButton>
                            <RemoveIcon
                              color="error"
                              onClick={() => decCount(_id)}
                            />
                          </IconButton>
                          <strong
                            style={{
                              border: "2px solid black",
                              padding: "5px",
                            }}
                          >
                            {" "}
                            {quantity}{" "}
                          </strong>
                          <IconButton>
                            <AddIcon
                              color="success"
                              onClick={() => incCount(_id)}
                            />
                          </IconButton>
                        </TableCell>
                        <TableCell align="center">
                          <IconButton>
                            <DeleteForeverRoundedIcon
                              onClick={() => delItem(_id)}
                              color="error"
                            />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardHeader title="Cart info" align="center" />
            <Divider color="black" />
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>Sub Total</strong>
                <span> &#8377; {total} </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <strong>Gst (cgst+sgst) </strong>
                <span> {gst} % </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <strong>Delivery Charges</strong>
                <span> &#8377; {dc} </span>
              </div>

              <Divider color="black" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <strong>Total value</strong>
                <span> &#8377; {finalTotal} </span>
              </div>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <NavLink to={`/checkout`} style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="warning">
                  Continue
                </Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cart;

// import React, { useContext, useState, useEffect } from 'react'
// import { GlobalContext } from '../../GlobalContext'
// import { NavLink } from 'react-router-dom'
// import axios from 'axios';

// function Cart() {
//     const data = useContext(GlobalContext)
//     const [cart, setCart] = data.authApi.cart;
//     const orderUpdate = data.authApi.orderUpdate;
//     const [token] = data.token;
//     const [finalTotal, setFinalTotal] = data.authApi.finalTotal
//     const [order, setOrder] = data.authApi.order;

//     const [total, setTotal] = useState(0); // total price
//     const [gst, setGst] = useState(5);  // gst -> cgst & sgst
//     const [dc, setDC] = useState(30); // delivery charge

//     useEffect(() => {
//         const getTotal = () => {
//             const total = cart.reduce((prev, item) => {
//                 return prev + (item.price * item.quantity)
//             }, 0)

//             setTotal(total)
//            let gstTotal = Math.round(total * (5/ 100))
//             let final = total + gstTotal + dc;
//             setFinalTotal(final)
//         }
//         getTotal()
//     },[cart])

//     // inc count of items
//     const incCount = (id) => {
//         cart.forEach(item => {
//             if (item._id === id) {
//                 item.quantity += 1
//             }
//         });
//         setCart([...cart])
//         updateCart(cart)

//         setOrder(cart,finalTotal)
//         storeOrder(cart,finalTotal)
//     }

//     // to dec count of items
//     const decCount = (id) => {
//         cart.forEach(item => {
//             if(item._id === id) {
//                 item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1;
//             }
//         })
//         setCart([...cart])
//         updateCart(cart)

//         setOrder(cart,finalTotal)
//         storeOrder(cart,finalTotal)
//     }

//     // to update cart
//     const updateCart = async (cart) => {
//         await axios.patch(`/api/v1/auth/addToCart`, { cart }, {
//             headers: {Authorization: token}
//         })
//     }

//     // delete item from cart
//     const delItem = (id) => {
//         if (window.confirm(`Do you want to remove product?`)) {
//             cart.forEach((item, index) => {
//                 if (item._id === id) {
//                     cart.splice(index, 1)
//                 }
//             });
//             setCart([...cart]);
//             updateCart(cart)

//             // setOrder(cart,finalTotal)
//             // storeOrder(cart,finalTotal)
//         }
//     }

//     // final order save and continue to check out
//     const storeOrder = async (cart, finalTotal) => {
//         await orderUpdate(cart,finalTotal)
//     }

//     if (cart.length === 0) {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-12 text-center">
//                         <h3 className="display-3 text-secondary">Cart is Empty</h3>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-md-12 text-center">
//                     <h3 className="display-3 text-secondary">Cart </h3>
//                 </div>
//             </div>

//             <div className="row">
//                 <div className="col-sm-12 col-md-8 col-lg-8 mt-2">
//                     <table className="table table-bordered">
//                         <thead>
//                             <tr>
//                                 <th>Title</th>
//                                 <th>Image</th>
//                                 <th>Price</th>
//                                 <th>Qnty</th>
//                                 <th>Count</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                                 {
//                                     cart && cart.map((item, index) => {
//                                         const { _id, title,image, price, qnty,quantity } = item
//                                         return (
//                                             <tr key={index} className="text-center" >
//                                                 <td> {title} </td>
//                                                 <td>
//                                                     <img src={image.url} alt="" className="img-fluid" style={{ width: '100px' }} />
//                                                 </td>
//                                                 <td> &#8377; {price} </td>
//                                                 <td>  {qnty} </td>
//                                                 <td>
//                                                     <span onClick={() => decCount(_id)} className="btn btn-sm btn-danger">
//                                                         <i className="bi bi-dash"></i></span>
//                                                     <strong className="text-primary fs-5">  {quantity} </strong>
//                                                     <span onClick={() => incCount(_id)} className="btn btn-sm btn-success">
//                                                         <i className="bi bi-plus"></i></span>
//                                                 </td>
//                                                 <td>
//                                                     <span onClick={() => delItem(_id)} className="btn btn-sm btn-danger">
//                                                         <i className="bi bi-trash"></i></span>
//                                                 </td>
//                                             </tr>
//                                         )
//                                     })
//                                 }
//                             </tbody>
//                     </table>
//                 </div>
//                 <div className="col-sm-12 col-md-4 col-lg-4 mt-2">
//                     <div className="card">
//                         <div className="card-header">
//                             <h5> Cart Info </h5>
//                         </div>
//                         <div className="card-body">
//                             <ul className="list-group">
//                                 <li className="list-group-item">
//                                     <strong>Sub Total</strong>
//                                     <span className="text-secondary float-end"> &#8377; {total} </span>
//                                 </li>
//                                 <li className="list-group-item">
//                                     <strong>Gst (cgst+sgst) 5%  </strong>
//                                     <span className="float-end text-secondary">  {gst} %</span>
//                                 </li>
//                                 <li className="list-group-item">
//                                     <strong> Delivery Charges </strong>
//                                     <span className="float-end text-secondary"> &#8377; {dc} </span>
//                                 </li>
//                                 <hr />
//                                 <li className="list-group-item">
//                                     <strong>Final Total</strong>
//                                     <span className="float-end"> &#8377; {finalTotal} </span>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="card-footer d-grid">
//                             <NavLink to={`/checkout`} className="btn btn-outline-success">Continue</NavLink>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cart

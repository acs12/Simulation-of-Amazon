import React, { Component } from "react";
import { Route } from 'react-router-dom';
import CustomerLogin from './components/customer/customerLogin/customerLogin';
import CustomerSignUp from './components/customer/customerSignUp/customerSignUp';
import CustomerProductDashBoard from './components/customer/products/productDashBoard';
import SellerProductDashBoard from './components/seller/products/productDashBoard';
import CustomerNavBar from './components/customer/navbar/navbar';
import SellerNavBar from './components/seller/navbar/navbar';
import AdminNavBar from './components/admin/navbar/navbar';
import Orders from './components/customer/orders/orders'
import CustomerHome from './components/customer/home/home';
import Cart from './components/customer/cart/cart';
import Payment from "./components/customer/payment/payment";
import SaveForLater from './components/customer/saveForLater/saveForLater';
import { BrowserRouter, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/login"> <CustomerLogin /> </Route>
                    
                    <Route path="/signUp"><CustomerSignUp /></Route>

                    <Route path="/seller"><SellerNavBar></SellerNavBar></Route>
                    <Route path="/seller/product"><SellerProductDashBoard /></Route>

                    <Route path="/customer"><CustomerNavBar></CustomerNavBar></Route>
                    <Route path="/customer/product"><CustomerProductDashBoard /></Route>
                    <Route path="/customer/home"><CustomerHome /></Route>
                    <Route path="/customer/cart"><Cart /></Route>
                    <Route path="/customer/payment"><Payment /></Route>
                    <Route path="/customer/saveForLater"><SaveForLater /></Route>
                    <Route path="/customer/orders"><Orders /></Route>

                    <Route path="/admin"><AdminNavBar></AdminNavBar></Route>
                </div>
            </BrowserRouter>
        )
    }
}
export default Main;

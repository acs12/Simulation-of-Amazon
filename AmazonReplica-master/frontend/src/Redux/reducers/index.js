 
import { combineReducers } from 'redux';
import sellerLoginReducer from './seller/loginReducer';
import customerLoginReducer from "./customer/loginReducer";
import adminLoginReducer from "./admin/loginReducer";
import customerPaymentReducer from "./customer/payment"
import customerProductReducer from "./customer/productReducer";
import customerReviewReducer from "./customer/reviewReducer";

import cartReducer from "./customer/cartReducer";
const rootReducer = combineReducers({
    sellerLogin : sellerLoginReducer,
    customerLogin : customerLoginReducer,
    adminLogin : adminLoginReducer,
    customerPayment : customerPaymentReducer,
    customerProductData: customerProductReducer,
    customerReviewData: customerReviewReducer,
    cart : cartReducer

})

export default rootReducer;
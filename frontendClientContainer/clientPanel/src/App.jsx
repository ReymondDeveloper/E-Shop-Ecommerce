import Login from './validationComponents/Login.jsx';
import Register from './validationComponents/Register.jsx';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/ClientHome.jsx';
import Cart from './pages/CartComponent.jsx';
import OrderDetails from './pages/OrderDetails.jsx';
import OrderHistory from './pages/OrderHistory.jsx';
import UserEditProfile from './pages/UserEditProfile.jsx';
import UserProf from './pages/UserProf.jsx';
import Address from './pages/Address.jsx';
import Password from './pages/Password.jsx';
import AddressEdit from './pages/AddressEdit.jsx';
import EditPassword from './pages/EditPassword.jsx';
import NewPassword from './pages/NewPassword.jsx';
import PrivacySetting from './pages/PrivacySetting.jsx';
import ModalPrivacy from './pages/ModalPrivacy.jsx';
import Payment from './pages/Payment.jsx';
import PaymentCard from './pages/PaymentCard.jsx';
import PaymentBank from './pages/PaymentBank.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/orderdetails' element={<OrderDetails/>} />
          <Route path='/orderhistory' element={<OrderHistory/>} />
          <Route path='/editprofile' element={<UserEditProfile/>} />
          <Route path='/addressedit' element={<AddressEdit/>} />
          <Route path='/userprofile' element={<UserProf/>} /> 
          <Route path='/address' element={<Address/>} />
          <Route path='/password' element={<Password/>} />
          <Route path='/editpassword' element={<EditPassword/>} />
          <Route path='/newpassword' element={<NewPassword/>} />
          <Route path='/privacysetting' element={<PrivacySetting/>} />
          <Route path='/modalprivacy' element={<ModalPrivacy/>} />
          <Route path='/paymentmethod' element={<Payment/>} />
          <Route path='/paymentcard' element={<PaymentCard/>} />
          <Route path='/paymentbank' element={<PaymentBank/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
 

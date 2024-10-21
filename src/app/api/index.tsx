// "use client";
// import React, { useEffect, useState } from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Document from './sections/document'
// import PaymentPage from './sections/paymentpage'
// import { useMediaQuery } from '@mui/material';
// import { theme } from '../../assets/themes/theme';
// import ApiIntroduction from './sections/api-introduction';
// import RecurringPayment from './sections/recurring-payment';
// import PaymentVerification from './sections/paymentverification';
// import TransactionReceipt from './sections/transactionreceipt';
// import AllOffers from './sections/alloffers';
// import EditOffers from './sections/editoffer';
// import AccountBalance from './sections/accountbalance';
// import BalanceLedger from './sections/balanceledger';
// import VirtualCardIntegration from './sections/virtualcardintegration';
// import VirtualCardServices from './sections/virtualcardservices';
// import VoucherIssue from './sections/voucherissue';
// import VoucherList from './sections/voucherlist';
// import UserDetails from './sections/userdetails';
// import ExchangeRate from './sections/exchangerate';
// import AvailableLanguages from './sections/availablelanguges';
// import AvailableCountries from './sections/availablecountries';
// import Currencies from './sections/currencies';
// import TransferFunds from './sections/transferfunds';
// import PaymentMethod from './sections/paymentmethod';

// export default function Api():React.JSX.Element {
//   const [deviceType, setDeviceType] = useState("mobile");
//   const mobile = useMediaQuery(theme.breakpoints.only("xs"));
//   const tablet = useMediaQuery(theme.breakpoints.down("md"));

//   useEffect(() => {
//     if (mobile) {
//       setDeviceType("mobile");
//     } else if (tablet) {
//       setDeviceType("tablet");
//     } else {
//       setDeviceType("pc");
//     }
//   }, [mobile, tablet]);
//   return (

//       <>
//     <Routes>
//         <Route  path="/" element={<Document deviceType={deviceType}/>}/>
//         <Route path='/payment' element={<PaymentPage deviceType={deviceType}/>}/>
//         <Route path='/api-intro' element={<ApiIntroduction deviceType={deviceType}/>}/>
//         <Route path='/recurring' element={<RecurringPayment deviceType={deviceType}/>}/>
//         <Route path='/payment-veri' element={<PaymentVerification deviceType={deviceType}/>}/>
//         <Route path='/Transaction-details' element={<TransactionReceipt deviceType={deviceType}/>}/>
//         <Route path='/offers' element={<AllOffers deviceType={deviceType}/>}/>
//         <Route path='/edit-offer' element={<EditOffers deviceType={deviceType}/>}/>
//         <Route path='/acc-bal' element={<AccountBalance deviceType={deviceType}/>}/>
//         <Route path='/balance-ledger' element={<BalanceLedger deviceType={deviceType}/>}/>
//         <Route path='/virtual-card' element={<VirtualCardIntegration deviceType={deviceType}/>}/>
//         <Route path='/virtual-card-services' element={<VirtualCardServices deviceType={deviceType}/>}/>
//         <Route path='/voucher-issue' element={<VoucherIssue deviceType={deviceType}/>}/>
//         <Route path='/voucher-list' element={<VoucherList deviceType={deviceType}/>}/>
//         <Route path='/user-details' element={<UserDetails deviceType={deviceType}/>}/>
//         <Route path='/exchange-rate' element={<ExchangeRate deviceType={deviceType}/>}/>
//         <Route path='/languages' element={<AvailableLanguages deviceType={deviceType}/>}/>
//         <Route path='/available-countries' element={<AvailableCountries deviceType={deviceType}/>}/>
//         <Route path='/currencies' element={<Currencies deviceType={deviceType}/>}/>
//         <Route path='/tranfer-funds' element={<TransferFunds deviceType={deviceType}/>}/>
//         <Route path='/payment-methods' element={<PaymentMethod deviceType={deviceType}/>}/>


//     </Routes>
//     </>
 
//   )
// }

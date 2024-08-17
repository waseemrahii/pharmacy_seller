// import React from "react";

// import admin_wallet from "../AdminWallet/Assets/admin-wallet.png";
// import inhouse_earning from "../AdminWallet/Assets/inhouse-earning.png";
// import dce from "../AdminWallet/Assets/dce.png";
// import ce from "../AdminWallet/Assets/ce.png";
// import ttc from "../AdminWallet/Assets/ttc.png";
// import pa from "../AdminWallet/Assets/pa.png";
// const Adminwallet = () => {
//   return (
//     <div className="bg-white border rounded-lg border-gray-200 mt-2 mx-5 p-5">
//       <div className="font-bold text-[1rem] flex gap-2 items-center ">
//         <img src={admin_wallet} alt="" className="h-5 w-5" />
//         <h1>Admin Wallet</h1>
//       </div>
//       <div className="  grid grid-cols-3  mt-2 gap-2">
//         <div className="flex flex-col gap-2 items-center py-7 justify-center bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg   row-span-2">
//           <img src={inhouse_earning} alt="" className="h-14 w-14 " />
//           <h1 className="text-[1.5rem] font-bold ">$39,892.00</h1>
//           <p className="text-[.9rem]">In-House Earning</p>
//         </div>
//         <div className="flex justify-between items-center bg-white rounded-lg shadow-md  cursor-pointer hover:shadow-lg p-2">
//           <div className="">
//             <h1 className="text-[1.5rem] font-bold ">$12,755.02</h1>
//             <p className="text-[.9rem]">Commission Earned</p>
//           </div>
//           <img src={ce} alt="" className="h-7 w-7" />
//         </div>
//         <div className="flex justify-between items-center bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg  px-6 py-3">
//           <div className="">
//             <h1 className="text-[1.5rem] font-bold ">$1,360.00</h1>
//             <p className="text-[.9rem]">Delivery Charge Earned</p>
//           </div>
//           <img src={dce} alt="" className="h-7 w-7" />
//         </div>
//         <div className="flex justify-between items-center bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg  px-6 py-3">
//           <div className="">
//             <h1 className="text-[1.5rem] font-bold">$2,343.00</h1>
//             <p className="text-[.9rem]">Total Tax Collected</p>
//           </div>
//           <img src={ttc} alt="" className="h-7 w-7" />
//         </div>
//         <div className="flex justify-between items-center bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg px-6 py-3">
//           <div className="">
//             <h1 className="text-[1.5rem] font-bold ">$8,153.00</h1>
//             <p className="text-[.9rem]">Pending Amount</p>
//           </div>
//           <img src={pa} alt="" className="h-7 w-7" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Adminwallet;



import React from 'react';
import { FaWallet, FaMoneyCheckAlt, FaTruckLoading, FaPercentage } from 'react-icons/fa';

const Adminwallet = () => {
  return (
    <div className="card-body snipcss-KRwJd">
      <h4 className="d-flex align-items-center text-capitalize gap-10 mb-3">
        <img width="20" className="mb-1" src="https://6valley.6amtech.com/public/assets/back-end/img/admin-wallet.png" alt="" /> Admin wallet
      </h4>
      <div className="row g-2" id="order_stats">
        <div className="col-lg-4">
          <div className="card h-100 d-flex justify-content-center align-items-center">
            <div className="card-body d-flex flex-column gap-10 align-items-center justify-content-center">
              <img width="48" className="mb-2" src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-earning.png" alt="" />
              <h3 className="for-card-count mb-0 fz-24">$39,892.00</h3>
              <div className="text-capitalize mb-30">In-house earning</div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row g-2">
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24">$12,755.02</h3>
                    <div className="text-capitalize mb-0">Commission earned</div>
                  </div>
                  <div>
                    <FaMoneyCheckAlt size={40} className="mb-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24">$1,360.00</h3>
                    <div className="text-capitalize mb-0">Delivery charge earned</div>
                  </div>
                  <div>
                    <FaTruckLoading size={40} className="mb-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24">$2,343.00</h3>
                    <div className="text-capitalize mb-0">Total tax collected</div>
                  </div>
                  <div>
                    <FaPercentage size={40} className="mb-2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-body h-100 justify-content-center">
                <div className="d-flex gap-2 justify-content-between align-items-center">
                  <div className="d-flex flex-column align-items-start">
                    <h3 className="mb-1 fz-24">$8,153.00</h3>
                    <div className="text-capitalize mb-0">Pending amount</div>
                  </div>
                  <div>
                    <FaWallet size={40} className="mb-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminwallet;

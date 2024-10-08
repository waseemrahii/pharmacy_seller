// import React from "react";

// import { FaSearch, FaDownload, FaEye, FaTrash } from 'react-icons/fa';
// import "./CustomerList.css";
// const CustomerList = () => {
//   // Sample customer data array (replace with your own data)
//   const customers = [
//     {
//       id: 1,
//       name: "Walking Customer",
//       email: "walking@customer.com",
//       phone: "000000000000",
//       totalOrders: 19,
//       blockStatus: "Default",
//       viewLink: "https://6valley.6amtech.com/admin/customer/view/0",
//       deleteAction: "https://6valley.6amtech.com/admin/customer/delete/0",
//     },
//     {
//       id: 10,
//       name: "Another Customer",
//       email: "another@customer.com",
//       phone: "111111111111",
//       totalOrders: 10,
//       blockStatus: "Default",
//       viewLink: "https://6valley.6amtech.com/admin/customer/view/10",
//       deleteAction: "https://6valley.6amtech.com/admin/customer/delete/10",
//     },
//   ];

//   return (
//     <div className="content container-fluid snipcss-yBZjF">
//       <div className="mb-4">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <img
//             width="20"
//             src="https://6valley.6amtech.com/public/assets/back-end/img/customer.png"
//             alt=""
//           />{" "}
//           Customer list{" "}
//           <span className="badge badge-soft-dark radius-50">9</span>
//         </h2>
//       </div>
//       <div className="card">
//         <div className="px-3 py-4">
//           <div className="row gy-2 align-items-center">
//             <div className="col-sm-8 col-md-6 col-lg-4">
//               <form
//                 action="https://6valley.6amtech.com/admin/customer/list"
//                 method="GET"
//               >
//                 <div className="input-group input-group-merge input-group-custom">
//                   <div className="input-group-prepend">
//                     <div className="input-group-text">
//                       <FaSearch />
//                     </div>
//                   </div>
//                   <input
//                     id="datatableSearch_"
//                     type="search"
//                     name="searchValue"
//                     className="form-control"
//                     placeholder="Search by Name or Email or Phone"
//                     aria-label="Search orders"
//                     value=""
//                   />
//                   <button
//                     type="submit"
//                     className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37]"
//                   >
//                     Search
//                   </button>
//                 </div>
//               </form>
//             </div>
//             <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
//               <div className="d-flex justify-content-sm-end">
//                 <button
//                   type="button"
//                   className="btn px-4 py-2 bg-[#A1CB46] text-white hover:bg-[#7e9f37] flex gap-1"
//                   style={{
//                     display: "flex ",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                   data-toggle="dropdown"
//                 >
//                   <FaDownload /> Export
//                 </button>
//                 <ul className="dropdown-menu dropdown-menu-right">
//                   <li>
//                     <a
//                       className="dropdown-item"
//                       href="https://6valley.6amtech.com/admin/customer/export"
//                     >
//                       <img
//                         width="14"
//                         src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png"
//                         alt=""
//                       />{" "}
//                       Excel{" "}
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="table-responsive datatable-custom">
//           <table
//             className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 style-1OgBd"
//             id="style-1OgBd"
//           >
//             <thead className="thead-light thead-50 text-capitalize">
//               <tr>
//                 <th>SL</th>
//                 <th>Customer name</th>
//                 <th>Contact info</th>
//                 <th>Total Order </th>
//                 <th className="text-center">Block / Unblock</th>
//                 <th className="text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {customers.map((customer) => (
//                 <tr key={customer.id}>
//                   <td>{customer.id}</td>
//                   <td>
//                     <a
//                       href={customer.viewLink}
//                       className="title-color hover-c1 d-flex align-items-center gap-10"
//                     >
//                       <img
//                         src="https://6valley.6amtech.com/public/assets/back-end/img/placeholder/user.png"
//                         className="avatar rounded-circle"
//                         alt=""
//                         width="40"
//                       />{" "}
//                       {customer.name}
//                     </a>
//                   </td>
//                   <td>
//                     <div className="mb-1">
//                       <strong>
//                         <a
//                           className="title-color hover-c1"
//                           href={`mailto:${customer.email}`}
//                         >
//                           {customer.email}
//                         </a>
//                       </strong>
//                     </div>
//                     <a
//                       className="title-color hover-c1"
//                       href={`tel:${customer.phone}`}
//                     >
//                       {customer.phone}
//                     </a>
//                   </td>
//                   <td>
//                     <label className="btn text-info bg-soft-info font-weight-bold px-3 py-1 mb-0 fz-12">
//                       {customer.totalOrders}
//                     </label>
//                   </td>
//                   <td>
//                     <div className="text-center">
//                       <div className="badge badge-soft-version">
//                         {customer.blockStatus}
//                       </div>
//                     </div>
//                   </td>
//                   <td>
//                     <div className="d-flex justify-content-center gap-2">
//                       <a
//                         title="View"
//                         className="btn btn-outline-info btn-sm square-btn"
//                         href={customer.viewLink}
//                       >
//                        <FaEye />
//                       </a>
//                       <a
//                         title="Delete"
//                         className="btn btn-outline-danger btn-sm delete square-btn delete-data"
//                         href={`javascript:`}
//                         data-id={`customer-${customer.id}`}
//                       >
//                         <FaTrash />
//                       </a>
//                     </div>
//                     <form
//                       action={customer.deleteAction}
//                       method="post"
//                       id={`customer-${customer.id}`}
//                     >
//                       <input
//                         type="hidden"
//                         name="_token"
//                         value="ChWFIlGtnDfQo1PE6cDKl9lLWLOyMQwknpw3ZBtZ"
//                         autoComplete="off"
//                       />{" "}
//                       <input type="hidden" name="_method" value="delete" />
//                     </form>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="table-responsive mt-4">
//           <div className="px-4 d-flex justify-content-lg-end"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerList;


import React, { useEffect, useState } from "react";
import { FaSearch, FaDownload, FaEye, FaTrash } from 'react-icons/fa';
import "./CustomerList.css";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  // Fetch customer data from the backend
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/customers/');
        const data = await response.json();
        setCustomers(data.doc); // Assuming the data structure matches the one provided
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="content container-fluid snipcss-yBZjF">
      <div className="mb-4">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            width="20"
            src="https://6valley.6amtech.com/public/assets/back-end/img/customer.png"
            alt=""
          />{" "}
          Customer list{" "}
          <span className="badge badge-soft-dark radius-50">{customers.length}</span>
        </h2>
      </div>
      <div className="card">
        <div className="px-3 py-4">
          <div className="row gy-2 align-items-center">
            <div className="col-sm-8 col-md-6 col-lg-4">
              <form action="https://6valley.6amtech.com/admin/customer/list" method="GET">
                <div className="input-group input-group-merge input-group-custom">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <FaSearch />
                    </div>
                  </div>
                  <input
                    id="datatableSearch_"
                    type="search"
                    name="searchValue"
                    className="form-control"
                    placeholder="Search by Name or Email or Phone"
                    aria-label="Search orders"
                  />
                  <button
                    type="submit"
                    className="btn px-4 py-2 bg-[#1EBEB6] text-white hover:bg-[#1EBEB6]"
                      style={{color:"white"}}
                   >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <div className="col-sm-4 col-md-6 col-lg-8 mb-2 mb-sm-0">
              <div className="d-flex justify-content-sm-end">
                <button
                  type="button"
                  className="btn px-4 py-2 bg-[#1EBEB6] text-white hover:bg-[#1EBEB6] flex gap-1"
                  style={{ display: "flex", justifyContent: "center", alignItems: "center", color:"white" }}
                  data-toggle="dropdown"
                >
                  <FaDownload /> Export
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li>
                    <a className="dropdown-item" href="https://6valley.6amtech.com/admin/customer/export">
                      <img width="14" src="https://6valley.6amtech.com/public/assets/back-end/img/excel.png" alt="" />{" "}
                      Excel{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive datatable-custom">
          <table
            className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 style-1OgBd"
            id="style-1OgBd"
          >
            <thead className="thead-light thead-50 text-capitalize">
              <tr>
                <th>SL</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email </th>
                <th className="text-center">Phone</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={customer._id}>
                  <td>{index + 1}</td>
                  <td>
                  
                      {/* <img
                        src={customer.image || "https://6valley.6amtech.com/public/assets/back-end/img/placeholder/user.png"}
                        className="avatar rounded-circle"
                        alt=""
                        width="40"
                      /> */}
                      {customer.firstName} 
                 
                  </td>
                  <td>
                  
                    
                      {customer.lastName} 
                 
                  </td>
                  <td>
                    <div className="mb-1">
                      <strong>
                        <a className="title-color hover-c1" href={`mailto:${customer.email}`}>
                          {customer.email}
                        </a>
                      </strong>
                    </div>
                   
                  </td>
                  <td className="text-center">
                    {customer.phoneNumber}
                  </td>
                
                  {/* <td>
                    <form
                      action="https://6valley.6amtech.com/admin/customer/status-update"
                      method="post"
                      id={`customer-status-${customer._id}`}
                      className="customer-status-form"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        value="hpNurnhaFUILyFbiw54XD1fhfe7Y1k4DPCovxQYR"
                        autoComplete="off"
                      />
                      <input type="hidden" name="id" value={customer._id} />
                      <label className="switcher mx-auto">
                        <input
                          type="checkbox"
                          className="switcher_input toggle-switch-message"
                          id={`customer-status-${customer._id}`}
                          name="status"
                          value="1"
                          defaultChecked={customer.status === "active"}
                          data-modal-id="toggle-status-modal"
                          data-toggle-id={`customer-status-${customer._id}`}
                          data-on-image="customer-block-on.png"
                          data-off-image="customer-block-off.png"
                          data-on-title={`Want to unblock ${customer.firstName} ${customer.lastName}?`}
                          data-off-title={`Want to block ${customer.firstName} ${customer.lastName}?`}
                          data-on-message="<p>If enabled this customer will be unblocked and can log in to this system again</p>"
                          data-off-message="<p>If disabled this customer will be blocked and cannot log in to this system</p>"
                        />
                        <span className="switcher_control"></span>
                      </label>
                    </form>
                  </td> */}
                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      {/* <a
                        title="View"
                        className="btn btn-outline-info btn-sm square-btn"
                        href={`/admin/customer/view/${customer._id}`}
                      >
                        <FaEye />
                      </a> */}
                      <a
                        title="Delete"
                        className="btn btn-outline-danger btn-sm delete square-btn delete-data"
                        href={`#`}
                        data-id={`customer-${customer._id}`}
                      >
                        <FaTrash />
                      </a>
                    </div>
                    <form
                      action={`/admin/customer/delete/${customer._id}`}
                      method="post"
                      id={`customer-${customer._id}`}
                    >
                      <input
                        type="hidden"
                        name="_token"
                        value="ChWFIlGtnDfQo1PE6cDKl9lLWLOyMQwknpw3ZBtZ"
                        autoComplete="off"
                      />{" "}
                      <input type="hidden" name="_method" value="delete" />
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-responsive mt-4">
          <div className="px-4 d-flex justify-content-lg-end"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;

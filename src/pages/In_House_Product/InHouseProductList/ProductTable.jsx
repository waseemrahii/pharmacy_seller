// // ProductTable.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FiEdit, FiTrash, FiEye } from 'react-icons/fi';

// const ProductTable = ({ products, onToggleFeatured, onUpdateStatus, onDeleteProduct }) => {
//   return (
//     <div className="table-responsive">
//       <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
//         <thead className="thead-light thead-50 text-capitalize">
//           <tr>
//             <th>SL</th>
//             <th>Product Name</th>
//             <th className="text-center">Product Type</th>
//             <th className="text-center">Unit price</th>
//             <th className="text-center">Show as featured</th>
//             {/* <th className="text-center">Active status</th> */}
//             <th className="text-center">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={product._id}>
//               <th scope="row">{index + 1}</th>
//               <td>
//                 <a href="#" className="media align-items-center gap-2">
//                   <img src={`http://localhost:3000/${product.thumbnail}`} className="avatar border" alt={product.name} />
//                   <span className="hover-c1">{product.name}</span>
//                 </a>
//               </td>
//               <td className="text-center">{product.productType}</td>
//               <td className="text-center">PKR{product.price}</td>
//               <td className="text-center">
//                 <label className="switcher mx-auto">
//                   <input
//                     type="checkbox"
//                     className="switcher_input"
//                     checked={product.isFeatured}
//                     onChange={() => onToggleFeatured(product)}
//                   />
//                   <span className="switcher_control" />
//                 </label>
//               </td>
//               {/* <td className="text-center">
//                 <label className="switcher mx-auto">
//                   <input
//                     type="checkbox"
//                     className="switcher_input"
//                     checked={product.approved}
//                     onChange={() => onUpdateStatus(product)}
//                   />
//                   <span className="switcher_control" />
//                 </label>
//               </td> */}
//               <td className="text-center">
//                 <div className="btn-group flex gap-3">
//                   <Link to={`/products/${product._id}`} className="btn border-green-500 text-green-500 hover:bg-green-500 hover:text-white" title="View">
//                     <FiEye />
//                   </Link>
//                   <Link to={`/product/edit/${product._id}`} className="btn btn-sm border-gray-400 hover:bg-gray-500 hover:text-white" title="Edit">
//                     <FiEdit />
//                   </Link>
//                   <button
//                     type="button"
//                     className="btn btn-sm border-red-400 text-red-400 hover:bg-red-500 hover:text-white"
//                     title="Delete"
//                     onClick={() => onDeleteProduct(product._id)}
//                   >
//                     <FiTrash />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default React.memo(ProductTable);



import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit, FiTrash, FiEye } from 'react-icons/fi';

const ProductTable = ({ products, onToggleFeatured, onUpdateStatus, onDeleteProduct }) => {
    console.log("product =========", products)
  return (
    <div className="table-responsive">
      <table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100 text-start">
        <thead className="thead-light thead-50 text-capitalize">
          <tr>
            <th>SL</th>
            <th>Product Name</th>
            <th className="text-center">Product Type</th>
            <th className="text-center">Unit price</th>
            <th className="text-center">Show as featured</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product._id}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a href="#" className="media align-items-center gap-2">
                    <img src={`http://localhost:3000/${product.thumbnail}`} className="avatar border" alt={product.name} />
                    <span className="hover-c1">{product.name}</span>
                  </a>
                </td>
                <td className="text-center">{product.productType}</td>
                <td className="text-center">PKR {product.price}</td>
                <td className="text-center">
                  <label className="switcher mx-auto">
                    <input
                      type="checkbox"
                      className="switcher_input"
                      checked={product.isFeatured}
                      onChange={() => onToggleFeatured(product)}
                    />
                    <span className="switcher_control" />
                  </label>
                </td>
                <td className="text-center">
                  <div className="btn-group flex gap-3">
                    <Link to={`/products/${product._id}`} className="btn border-green-500 text-green-500 hover:bg-green-500 hover:text-white" title="View">
                      <FiEye />
                    </Link>
                    <Link to={`/product/edit/${product._id}`} className="btn btn-sm border-gray-400 hover:bg-gray-500 hover:text-white" title="Edit">
                      <FiEdit />
                    </Link>
                    <button
                      type="button"
                      className="btn btn-sm border-red-400 text-red-400 hover:bg-red-500 hover:text-white"
                      title="Delete"
                      onClick={() => onDeleteProduct(product._id)}
                    >
                      <FiTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No products found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(ProductTable);

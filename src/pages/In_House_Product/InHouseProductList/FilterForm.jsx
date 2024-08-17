// // FilterForm.jsx
// import React from 'react';

// const FilterForm = ({ filters, onInputChange, onReset }) => {
//   return (
//     <div className="card mb-3">
//       <div className="card-body">
//         <form onSubmit={(e) => e.preventDefault()}>
//           <div className="row gx-2">
//             <div className="col-12">
//               <h4 className="mb-3">Filter Products</h4>
//             </div>
//             <div className="col-sm-6 col-lg-3 col-xl-3">
//               <div className="form-group">
//                 <label className="title-color" htmlFor="brand">Brand</label>
//                 <select name="brand" className="form-control" onChange={onInputChange} value={filters.brand}>
//                   <option value="">All Brands</option>
//                   {/* brands options should be populated dynamically */}
//                 </select>
//               </div>
//             </div>
//             <div className="col-sm-6 col-lg-3 col-xl-3">
//               <div className="form-group">
//                 <label className="title-color" htmlFor="category">Category</label>
//                 <select name="category" className="form-control" onChange={onInputChange} value={filters.category}>
//                   <option value="">Select category</option>
//                   {/* categories options should be populated dynamically */}
//                 </select>
//               </div>
//             </div>
//             <div className="col-12">
//               <div className="d-flex gap-3 justify-content-end">
//                 <button type="button" className="btn btn-secondary px-5" onClick={onReset}>
//                   Reset
//                 </button>
//                 <button type="submit" className="btn btn--secondary px-5">Show data</button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default React.memo(FilterForm);




import React from 'react';

const FilterForm = ({ filters, onInputChange, onReset, categories = [], brands = [] }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row gx-2">
            <div className="col-12">
              <h4 className="mb-3">Filter Products</h4>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-3">
              <div className="form-group">
                <label className="title-color" htmlFor="brand">Brand</label>
                <select
                  name="brand"
                  className="form-control"
                  onChange={onInputChange}
                  value={filters.brand}
                >
                  <option value="">All Brands</option>
                  {brands.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 col-xl-3">
              <div className="form-group">
                <label className="title-color" htmlFor="category">Category</label>
                <select
                  name="category"
                  className="form-control"
                  onChange={onInputChange}
                  value={filters.category}
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex gap-3 justify-content-end">
                <button type="button" className="btn btn-secondary px-5" onClick={onReset}>
                  Reset
                </button>
                <button type="submit" className="btn btn--secondary px-5">Show data</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(FilterForm);

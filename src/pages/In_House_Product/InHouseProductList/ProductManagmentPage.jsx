// // InHouseProductList.jsx
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts, toggleFeatured, deleteProduct, updateProductStatus } from '../../../components/redux/product/productSlice';
// import { fetchCategories, fetchBrands } from '../../../components/redux/categorybrandSlice';
// import Swal from 'sweetalert2';
// import FilterForm from './FilterForm';
// import ProductTable from './ProductTable';
// import { Link } from 'react-router-dom';

// const InHouseProductList = ({ initialTitle = 'In House Product List', initialFilters = {} }) => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.product);
//   const { categories, brands } = useSelector((state) => state.category);

//   const [filters, setFilters] = useState({
//     brand: initialFilters.brand || '',
//     category: initialFilters.category || '',
//     searchValue: initialFilters.searchValue || '',
//     userType: initialFilters.userType || '', // Default userType to 'vendor'
//     status: initialFilters.status || '',  // Default status
//     vendorNew4Days: initialFilters.vendorNew4Days || false
//   });

//   useEffect(() => {
//     dispatch(fetchProducts(filters));
//     dispatch(fetchCategories());
//     dispatch(fetchBrands());
//   }, [filters, dispatch]);

//   const handleInputChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleToggleFeatured = async (product) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: `Do you want to ${product.isFeatured ? 'remove' : 'add'} this product as featured?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       try {
//         await dispatch(toggleFeatured({ productId: product._id, isFeatured: !product.isFeatured })).unwrap();
//         Swal.fire('Success', 'Product status updated successfully!', 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   const handleUpdateStatus = async (product) => {
//     const result = await Swal.fire({
//       title: 'Update Product Status',
//       input: 'select',
//       inputOptions: {
//         'pending': 'Pending',
//         'approved': 'Approved',
//         'rejected': 'Rejected'
//       },
//       inputPlaceholder: 'Select status',
//       showCancelButton: true,
//       confirmButtonText: 'Update',
//       cancelButtonText: 'Cancel'
//     });

//     if (result.isConfirmed) {
//       const selectedStatus = result.value; // 'pending', 'approved', or 'rejected'

//       try {
//         await dispatch(updateProductStatus({ productId: product._id, status: selectedStatus })).unwrap();
//         Swal.fire('Success', `Product status updated to ${selectedStatus}!`, 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   const handleDeleteProduct = async (productId) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to delete this product?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       try {
//         await dispatch(deleteProduct(productId)).unwrap();
//         Swal.fire('Deleted!', 'Product has been deleted.', 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   const handleResetFilters = () => {
//     setFilters({
//       brand: '',
//       category: '',
//       searchValue: '',
//       userType: '',
//       status: '',
//       vendorNew4Days: false
//     });
//   };

//   return (
//     <>
//       <div className="content container-fluid px-12">
//          <div className="mb-3">
//          <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
//            <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="In House Product List" />
//            {initialTitle}
//            <span className="badge badge-soft-dark radius-50 fz-14 ml-1">{products.length}</span>
//          </h2>
//        </div>
      
//       <FilterForm
//         filters={filters}
//         onInputChange={handleInputChange}
//         onReset={handleResetFilters}
//       />
//       {loading ? (
//         // <div>Loading...</div>
//         <div className="loading-overlay">
//         <img src="/loading.svg" alt="Loading..." />
//       </div>
//       ) : error ? (
//         <div>{error}</div>
//       ) : (
//         <ProductTable
//           products={products}
//           onToggleFeatured={handleToggleFeatured}
//           onUpdateStatus={handleUpdateStatus}
//           onDeleteProduct={handleDeleteProduct}
//         />
//       )}
//       </div>
//     </>
//   );
// };

// export default InHouseProductList;



// /////// with spinner


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, toggleFeatured, deleteProduct, updateProductStatus } from '../../../components/redux/product/productSlice';
import { fetchCategories, fetchBrands } from '../../../components/redux/categorybrandSlice';
import Swal from 'sweetalert2';
import FilterForm from './FilterForm';
import ProductTable from './ProductTable';
import '../InHouseProductList/Product.css';
import LoadingSpinner from '../../../components/LoodingSpinner/LoadingSpinner';

const InHouseProductList = ({ initialTitle = 'In House Product List', initialFilters = {} }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const { categories, brands } = useSelector((state) => state.category);

  const [filters, setFilters] = useState({
    brand: initialFilters.brand || '',
    category: initialFilters.category || '',
    searchValue: initialFilters.searchValue || '',
    userType: initialFilters.userType || '', // Default userType to 'vendor'
    status: initialFilters.status || '',  // Default status
    vendorNew4Days: initialFilters.vendorNew4Days || false
  });

  useEffect(() => {
    dispatch(fetchProducts(filters));
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [filters, dispatch]);

  const handleInputChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggleFeatured = async (product) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to ${product.isFeatured ? 'remove' : 'add'} this product as featured?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    });

    if (result.isConfirmed) {
      try {
        await dispatch(toggleFeatured({ productId: product._id, isFeatured: !product.isFeatured })).unwrap();
        Swal.fire('Success', 'Product status updated successfully!', 'success');
      } catch (error) {
        Swal.fire('Error', error.message, 'error');
      }
    }
  };

  const handleUpdateStatus = async (product) => {
    const result = await Swal.fire({
      title: 'Update Product Status',
      input: 'select',
      inputOptions: {
        'pending': 'Pending',
        'approved': 'Approved',
        'rejected': 'Rejected'
      },
      inputPlaceholder: 'Select status',
      showCancelButton: true,
      confirmButtonText: 'Update',
      cancelButtonText: 'Cancel'
    });

    if (result.isConfirmed) {
      const selectedStatus = result.value; // 'pending', 'approved', or 'rejected'

      try {
        await dispatch(updateProductStatus({ productId: product._id, status: selectedStatus })).unwrap();
        Swal.fire('Success', `Product status updated to ${selectedStatus}!`, 'success');
      } catch (error) {
        Swal.fire('Error', error.message, 'error');
      }
    }
  };

  const handleDeleteProduct = async (productId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this product?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No',
    });

    if (result.isConfirmed) {
      try {
        await dispatch(deleteProduct(productId)).unwrap();
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error', error.message, 'error');
      }
    }
  };

  const handleResetFilters = () => {
    setFilters({
      brand: '',
      category: '',
      searchValue: '',
      userType: '',
      status: '',
      vendorNew4Days: false
    });
  };

  return (
    <>
      <div className="content container-fluid px-12">
        <div className="mb-3">
          <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
            <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="In House Product List" />
            {initialTitle}
            <span className="badge badge-soft-dark radius-50 fz-14 ml-1">{products.length}</span>
          </h2>
        </div>
      
        <FilterForm
          filters={filters}
          onInputChange={handleInputChange}
          onReset={handleResetFilters}
        />
        
        {/* Loading overlay for ProductTable */}
        {/* {loading && (
          <div className="loading-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="100" height="100" style={{ shapeRendering: 'auto', display: 'block', background: 'rgba(255, 255, 255, 0.8)' }} xmlnsXlink="http://www.w3.org/1999/xlink">
              <g>
                <circle strokeWidth="3" stroke="#05cc47" fill="none" r="0" cy="50" cx="50">
                  <animate begin="0s" calcMode="spline" keySplines="0 0.2 0.8 1" keyTimes="0;1" values="0;40" dur="1s" repeatCount="indefinite" attributeName="r"></animate>
                  <animate begin="0s" calcMode="spline" keySplines="0.2 0 0.8 1" keyTimes="0;1" values="1;0" dur="1s" repeatCount="indefinite" attributeName="opacity"></animate>
                </circle>
                <circle strokeWidth="3" stroke="#4dc47d" fill="none" r="0" cy="50" cx="50">
                  <animate begin="-0.5s" calcMode="spline" keySplines="0 0.2 0.8 1" keyTimes="0;1" values="0;40" dur="1s" repeatCount="indefinite" attributeName="r"></animate>
                  <animate begin="-0.5s" calcMode="spline" keySplines="0.2 0 0.8 1" keyTimes="0;1" values="1;0" dur="1s" repeatCount="indefinite" attributeName="opacity"></animate>
                </circle>
              </g>
            </svg>
          </div>
        )} */}

         {loading && <LoadingSpinner />}

        {/* Product Table Component */}
        <div className="product-table-container">
          {error ? (
            <div>{error}</div>
          ) : (
            <ProductTable
              products={products}
              onToggleFeatured={handleToggleFeatured}
              onUpdateStatus={handleUpdateStatus}
              onDeleteProduct={handleDeleteProduct}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default InHouseProductList;



///////////// with react query 

// import React, { useState } from 'react';
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { fetchProducts, toggleFeatured, deleteProduct, updateProductStatus } from '../../../components/redux/product/productSlice';
// import { fetchCategories, fetchBrands } from '../../../components/redux/categorybrandSlice';
// import Swal from 'sweetalert2';
// import '../InHouseProductList/Product.css';

// const FilterForm = React.lazy(() => import('./FilterForm'));
// const ProductTable = React.lazy(() => import('./ProductTable'));
// const LoadingSpinner = React.lazy(() => import('../../../components/LoodingSpinner/LoadingSpinner'));

// const InHouseProductList = ({ initialTitle = 'In House Product List', initialFilters = {} }) => {
//   const queryClient = useQueryClient();

//   const [filters, setFilters] = useState({
//     brand: initialFilters.brand || '',
//     category: initialFilters.category || '',
//     searchValue: initialFilters.searchValue || '',
//     userType: initialFilters.userType || '',
//     status: initialFilters.status || '',
//     vendorNew4Days: initialFilters.vendorNew4Days || false
//   });

//   const { data: products = [], isLoading, isError, error } = useQuery({
//     queryKey: ['products', filters],
//     queryFn: () => fetchProducts(filters),
//   });

//   const { data: categories = [] } = useQuery({
//     queryKey: ['categories'],
//     queryFn: fetchCategories,
//   });

//   const { data: brands = [] } = useQuery({
//     queryKey: ['brands'],
//     queryFn: fetchBrands,
//   });

//   const toggleFeaturedMutation = useMutation(
//     (product) => toggleFeatured({ productId: product._id, isFeatured: !product.isFeatured }),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(['products']);
//         Swal.fire('Success', 'Product status updated successfully!', 'success');
//       },
//       onError: (error) => Swal.fire('Error', error.message, 'error'),
//     }
//   );

//   const updateProductStatusMutation = useMutation(
//     ({ productId, status }) => updateProductStatus({ productId, status }),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(['products']);
//         Swal.fire('Success', 'Product status updated successfully!', 'success');
//       },
//       onError: (error) => Swal.fire('Error', error.message, 'error'),
//     }
//   );

//   const deleteProductMutation = useMutation(
//     (productId) => deleteProduct(productId),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(['products']);
//         Swal.fire('Deleted!', 'Product has been deleted.', 'success');
//       },
//       onError: (error) => Swal.fire('Error', error.message, 'error'),
//     }
//   );

//   const handleInputChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleToggleFeatured = async (product) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: `Do you want to ${product.isFeatured ? 'remove' : 'add'} this product as featured?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       toggleFeaturedMutation.mutate(product);
//     }
//   };

//   const handleUpdateStatus = async (product) => {
//     const result = await Swal.fire({
//       title: 'Update Product Status',
//       input: 'select',
//       inputOptions: {
//         'pending': 'Pending',
//         'approved': 'Approved',
//         'rejected': 'Rejected'
//       },
//       inputPlaceholder: 'Select status',
//       showCancelButton: true,
//       confirmButtonText: 'Update',
//       cancelButtonText: 'Cancel'
//     });

//     if (result.isConfirmed) {
//       const selectedStatus = result.value;
//       updateProductStatusMutation.mutate({ productId: product._id, status: selectedStatus });
//     }
//   };

//   const handleDeleteProduct = async (productId) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to delete this product?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       deleteProductMutation.mutate(productId);
//     }
//   };

//   const handleResetFilters = () => {
//     setFilters({
//       brand: '',
//       category: '',
//       searchValue: '',
//       userType: '',
//       status: '',
//       vendorNew4Days: false
//     });
//   };

//   return (
//     <div className="content container-fluid px-12">
//       <div className="mb-3">
//         <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
//           <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="In House Product List" />
//           {initialTitle}
//           <span className="badge badge-soft-dark radius-50 fz-14 ml-1">{products.length}</span>
//         </h2>
//       </div>

//       <React.Suspense fallback={<div>Loading FilterForm...</div>}>
//         <FilterForm
//           filters={filters}
//           onInputChange={handleInputChange}
//           onReset={handleResetFilters}
//         />
//       </React.Suspense>

//       <React.Suspense fallback={<LoadingSpinner />}>
//         {isLoading && <LoadingSpinner />}
//       </React.Suspense>

//       <div className="product-table-container">
//         {isError ? (
//           <div>{error.message}</div>
//         ) : (
//           <React.Suspense fallback={<div>Loading ProductTable...</div>}>
//             <ProductTable
//               products={products}
//               onToggleFeatured={handleToggleFeatured}
//               onUpdateStatus={handleUpdateStatus}
//               onDeleteProduct={handleDeleteProduct}
//               categories={categories}
//               brands={brands}
//             />
//           </React.Suspense>
//         )}
//       </div>
//     </div>
//   );
// };

// export default InHouseProductList;



/////////////// with lazy


// import React, { useState, useEffect, Suspense, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts, toggleFeatured, deleteProduct, updateProductStatus } from '../../../components/redux/product/productSlice';
// import { fetchCategories, fetchBrands } from '../../../components/redux/categorybrandSlice';
// import Swal from 'sweetalert2';

// // Lazy load components
// const FilterForm = lazy(() => import('./FilterForm'));
// const ProductTable = lazy(() => import('./ProductTable'));
// const LoadingSpinner = lazy(() => import('../../../components/LoodingSpinner/LoadingSpinner'));
// import '../InHouseProductList/Product.css';

// const InHouseProductList = ({ initialTitle = 'In House Product List', initialFilters = {} }) => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.product);
//   const { categories, brands } = useSelector((state) => state.category);

//   const [filters, setFilters] = useState({
//     brand: initialFilters.brand || '',
//     category: initialFilters.category || '',
//     searchValue: initialFilters.searchValue || '',
//     userType: initialFilters.userType || '', // Default userType to 'vendor'
//     status: initialFilters.status || '',  // Default status
//     vendorNew4Days: initialFilters.vendorNew4Days || false
//   });

//   useEffect(() => {
//     dispatch(fetchProducts(filters));
//     dispatch(fetchCategories());
//     dispatch(fetchBrands());
//   }, [filters, dispatch]);

//   const handleInputChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleToggleFeatured = async (product) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: `Do you want to ${product.isFeatured ? 'remove' : 'add'} this product as featured?`,
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       try {
//         await dispatch(toggleFeatured({ productId: product._id, isFeatured: !product.isFeatured })).unwrap();
//         Swal.fire('Success', 'Product status updated successfully!', 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   const handleUpdateStatus = async (product) => {
//     const result = await Swal.fire({
//       title: 'Update Product Status',
//       input: 'select',
//       inputOptions: {
//         'pending': 'Pending',
//         'approved': 'Approved',
//         'rejected': 'Rejected'
//       },
//       inputPlaceholder: 'Select status',
//       showCancelButton: true,
//       confirmButtonText: 'Update',
//       cancelButtonText: 'Cancel'
//     });

//     if (result.isConfirmed) {
//       const selectedStatus = result.value; // 'pending', 'approved', or 'rejected'

//       try {
//         await dispatch(updateProductStatus({ productId: product._id, status: selectedStatus })).unwrap();
//         Swal.fire('Success', `Product status updated to ${selectedStatus}!`, 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   const handleDeleteProduct = async (productId) => {
//     const result = await Swal.fire({
//       title: 'Are you sure?',
//       text: 'Do you want to delete this product?',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No',
//     });

//     if (result.isConfirmed) {
//       try {
//         await dispatch(deleteProduct(productId)).unwrap();
//         Swal.fire('Deleted!', 'Product has been deleted.', 'success');
//       } catch (error) {
//         Swal.fire('Error', error.message, 'error');
//       }
//     }
//   };

//   const handleResetFilters = () => {
//     setFilters({
//       brand: '',
//       category: '',
//       searchValue: '',
//       userType: '',
//       status: '',
//       vendorNew4Days: false
//     });
//   };

//   return (
//     <>
//       <div className="content container-fluid px-12">
//         <div className="mb-3">
//           <h2 className="h1 mb-0 text-capitalize d-flex gap-2">
//             <img src="https://6valley.6amtech.com/public/assets/back-end/img/inhouse-product-list.png" alt="In House Product List" />
//             {initialTitle}
//             <span className="badge badge-soft-dark radius-50 fz-14 ml-1">{products.length}</span>
//           </h2>
//         </div>
      
//         <Suspense fallback={<div>Loading FilterForm...</div>}>
//           <FilterForm
//             filters={filters}
//             onInputChange={handleInputChange}
//             onReset={handleResetFilters}
//           />
//         </Suspense>
        
//         {/* Loading overlay for ProductTable */}
//         <Suspense fallback={<LoadingSpinner />}>
//           {loading && <LoadingSpinner />}
//         </Suspense>

//         {/* Product Table Component */}
//         <div className="product-table-container">
//           {error ? (
//             <div>{error}</div>
//           ) : (
//             <Suspense fallback={<div>Loading ProductTable...</div>}>
//               <ProductTable
//                 products={products}
//                 onToggleFeatured={handleToggleFeatured}
//                 onUpdateStatus={handleUpdateStatus}
//                 onDeleteProduct={handleDeleteProduct}
//               />
//             </Suspense>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default InHouseProductList;

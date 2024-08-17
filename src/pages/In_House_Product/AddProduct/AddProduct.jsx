
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {useAuth} from '../../../components/context/AuthContext.jsx'
// const AddNewProduct = () => {

//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     subCategorySlug: '',
//     subSubCategorySlug: '',
//     brand: '',
//     productType: '',
//     digitalProductType: '',
//     sku: '',
//     unit: '',
//     tags: '',
//     price: '',
//     discount: '',
//     discountType: '',
//     discountAmount: '',
//     taxAmount: '',
//     taxIncluded: false,
//     minimumOrderQty: '',
//     quantity: '',
//     stock: '',
//     isFeatured: false,
//     color: '',
//     attributeType: '',
//     size: '',
//     videoLink: '',
//   });

//   const [thumbnail, setThumbnail] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreview, setImagePreview] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [subSubCategories, setSubSubCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [colors, setColors] = useState([]);

//   useEffect(() => {
//     // Fetch categories on mount
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/categories');
//         setCategories(response.data.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     // Fetch brands on mount
//     const fetchBrands = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/brands/');
//         setBrands(response.data);
//       } catch (error) {
//         console.error('Error fetching brands:', error);
//       }
//     };
//     fetchBrands();
//   }, []);

//   useEffect(() => {
//     // Fetch colors on mount
//     const fetchColors = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/colors/');
//         setColors(response.data);
//       } catch (error) {
//         console.error('Error fetching colors:', error);
//       }
//     };
//     fetchColors();
//   }, []);

//   useEffect(() => {
//     if (formData.category) {
//       // Fetch sub-categories when a category is selected
//       const fetchSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-categories/main-category/${formData.category}`);
//           setSubCategories(response.data);
//         } catch (error) {
//           console.error('Error fetching sub-categories:', error);
//         }
//       };
//       fetchSubCategories();
//     }
//   }, [formData.category]);

//   useEffect(() => {
//     if (formData.subCategorySlug) {
//       // Fetch sub-sub-categories when a sub-category is selected
//       const fetchSubSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-sub-categories/subcategory/${formData.subCategorySlug}`);
//           setSubSubCategories(response.data.data);
//         } catch (error) {
//           console.error('Error fetching sub-sub-categories:', error);
//         }
//       };
//       fetchSubSubCategories();
//     }
//   }, [formData.subCategorySlug]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     setThumbnail(file);
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const productFormData = new FormData();

//     for (const key in formData) {
//       productFormData.append(key, formData[key]);
//     }

//     if (thumbnail) {
//       productFormData.append('thumbnail', thumbnail);
//     }

//     images.forEach((image) => {
//       productFormData.append('images', image);
//     });
//     productFormData.append(   "userId", user.userId );
//     productFormData.append(   "userType", user.role, );
//     // Log the FormData object to the console
//     for (let [key, value] of productFormData.entries()) {
//       console.log(`${key}: ${value}`);
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/api/products/', productFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         }
//       });
//       alert('Product added successfully!');
//       // Clear the form
//       // setFormData({
//       //   name: '',
//       //   description: '',
//       //   category: '',
//       //   subCategorySlug: '',
//       //   subSubCategorySlug: '',
//       //   brand: '',
//       //   productType: '',
//       //   digitalProductType: '',
//       //   sku: '',
//       //   unit: '',
//       //   tags: '',
//       //   price: '',
//       //   discount: '',
//       //   discountType: '',
//       //   discountAmount: '',
//       //   taxAmount: '',
//       //   taxIncluded: false,
//       //   minimumOrderQty: '',
//       //   quantity: '',
//       //   stock: '',
//       //   isFeatured: false,
//       //   color: '',
//       //   attributeType: '',
//       //   size: '',
//       //   videoLink: '',
//       // });
//       // setThumbnail(null);
//       // setImages([]);
//       // setSubCategories([]);
//       // setSubSubCategories([]);
//     } catch (error) {
//       setErrorMessage(`Error adding product: ${error.response?.data?.message || error.message}`);
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className='p-20 flex flex-col gap-2 '>
//       {/* Form inputs for each field */}
//       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
//       <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required />
      
//       <select name="category" value={formData.category} onChange={handleChange} required>
//         <option value="">Select Category</option>
//         {categories.map(category => (
//           <option key={category._id} value={category.slug}>{category.name}</option>
//         ))}
//       </select>
      
//       <select name="subCategorySlug" value={formData.subCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Category</option>
//         {subCategories.map(subCategory => (
//           <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="subSubCategorySlug" value={formData.subSubCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Sub-Category</option>
//         {subSubCategories.map(subSubCategory => (
//           <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="brand" value={formData.brand} onChange={handleChange} required>
//         <option value="">Select Brand</option>
//         {brands.map(brand => (
//           <option key={brand._id} value={brand._id}>{brand.name}</option>
//         ))}
//       </select>
      
//       <input type="text" name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type" required />
//       <input type="text" name="digitalProductType" value={formData.digitalProductType} onChange={handleChange} placeholder="Digital Product Type" />
//       <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" required />
//       <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" required />
//       <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags" />
//       <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
//       <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" />
//       <input type="text" name="discountType" value={formData.discountType} onChange={handleChange} placeholder="Discount Type" />
//       <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" />
//       <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" />
//       <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} /> Tax Included
//       <input type="number" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Quantity" required />
//       <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
//       <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required />
//       <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} /> Featured
      
//       <select name="color" value={formData.color} onChange={handleChange}>
//         <option value="">Select Color</option>
//         {colors.map(color => (
//           <option key={color._id} value={color._id}>{color.name}</option>
//         ))}
//       </select>
      
//       <input type="text" name="attributeType" value={formData.attributeType} onChange={handleChange} placeholder="Attribute Type" />
//       <input type="text" name="size" value={formData.size} onChange={handleChange} placeholder="Size" />
//       <input type="url" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" />
      
//       <input type="file" onChange={handleThumbnailChange} required />
//       {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" />}
      
//       <input type="file" multiple onChange={handleImageChange} />
      
//       <button type="submit">Add Product</button>
      
//       {errorMessage && <p className="error">{errorMessage}</p>}
//     </form>
//   );
// };

// export default AddNewProduct;



/////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../../components/context/AuthContext.jsx';

// const AddNewProduct = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     subCategorySlug: '',
//     subSubCategorySlug: '',
//     brand: '',
//     productType: '',
//     digitalProductType: '',
//     sku: '',
//     unit: '',
//     tags: '',
//     price: '',
//     discount: '',
//     discountType: '',
//     discountAmount: '',
//     taxAmount: '',
//     taxIncluded: false,
//     minimumOrderQty: '',
//     quantity: '',
//     stock: '',
//     isFeatured: false,
//     color: '',
//     attributeType: '',
//     videoLink: '',
//   });

//   const [thumbnail, setThumbnail] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreview, setImagePreview] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [subSubCategories, setSubSubCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [attributes, setAttributes] = useState([]);

//   const { user } = useAuth();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/categories');
//         setCategories(response.data.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/brands/');
//         setBrands(response.data);
//       } catch (error) {
//         console.error('Error fetching brands:', error);
//       }
//     };
//     fetchBrands();
//   }, []);

//   useEffect(() => {
//     const fetchColors = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/colors/');
//         setColors(response.data);
//       } catch (error) {
//         console.error('Error fetching colors:', error);
//       }
//     };
//     fetchColors();
//   }, []);

//   useEffect(() => {
//     const fetchAttributes = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/attributes/');
//         setAttributes(response.data);
//       } catch (error) {
//         console.error('Error fetching attributes:', error);
//       }
//     };
//     fetchAttributes();
//   }, []);

//   useEffect(() => {
//     if (formData.category) {
//       const fetchSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-categories/main-category/${formData.category}`);
//           setSubCategories(response.data);
//         } catch (error) {
//           console.error('Error fetching sub-categories:', error);
//         }
//       };
//       fetchSubCategories();
//     }
//   }, [formData.category]);

//   useEffect(() => {
//     if (formData.subCategorySlug) {
//       const fetchSubSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-sub-categories/subcategory/${formData.subCategorySlug}`);
//           setSubSubCategories(response.data.data);
//         } catch (error) {
//           console.error('Error fetching sub-sub-categories:', error);
//         }
//       };
//       fetchSubSubCategories();
//     }
//   }, [formData.subCategorySlug]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     setThumbnail(file);
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const productFormData = new FormData();

//     for (const key in formData) {
//       productFormData.append(key, formData[key]);
//     }

//     if (thumbnail) {
//       productFormData.append('thumbnail', thumbnail);
//     }

//     images.forEach((image) => {
//       productFormData.append('images', image);
//     });

//     productFormData.append('userId', '669ac00ffe4a9e456fb35af2');
//     productFormData.append('userType', 'admin');

//     try {
//       const response = await axios.post('http://localhost:3000/api/products/', productFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         }
//       });
//       alert('Product added successfully!');
//     } catch (error) {
//       setErrorMessage(`Error adding product: ${error.response?.data?.message || error.message}`);
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className='p-20 flex flex-col gap-2 '>
//       {/* Form inputs for each field */}
//       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
//       <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required />
      
//       <select name="category" value={formData.category} onChange={handleChange} required>
//         <option value="">Select Category</option>
//         {categories.map(category => (
//           <option key={category._id} value={category.slug}>{category.name}</option>
//         ))}
//       </select>
      
//       <select name="subCategorySlug" value={formData.subCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Category</option>
//         {subCategories.map(subCategory => (
//           <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="subSubCategorySlug" value={formData.subSubCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Sub-Category</option>
//         {subSubCategories.map(subSubCategory => (
//           <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="brand" value={formData.brand} onChange={handleChange} required>
//         <option value="">Select Brand</option>
//         {brands.map(brand => (
//           <option key={brand._id} value={brand._id}>{brand.name}</option>
//         ))}
//       </select>
      
//       <input type="text" name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type" required />
//       <input type="text" name="digitalProductType" value={formData.digitalProductType} onChange={handleChange} placeholder="Digital Product Type" />
//       <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" required />
//       <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" required />
//       <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags" />
//       <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
//       <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" />
//       <input type="text" name="discountType" value={formData.discountType} onChange={handleChange} placeholder="Discount Type" />
//       <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" />
//       <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" />
//       <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} /> Tax Included
//       <input type="number" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Quantity" required />
//       <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
//       <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" required />
//       <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} /> Featured

//       {/* New Select Inputs for Colors and Attributes */}
//       <select name="color" value={formData.color} onChange={handleChange}>
//         <option value="">Select Color</option>
//         {colors.map(color => (
//           <option key={color._id} value={color.name}>{color.name}</option>
//         ))}
//       </select>

//       <select name="attributeType" value={formData.attributeType} onChange={handleChange}>
//         <option value="">Select Attribute Type</option>
//         {attributes.map(attribute => (
//           <option key={attribute._id} value={attribute.name}>{attribute.type}</option>
//         ))}
//       </select>


//       <input type="text" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" />

//       <input type="file" accept="image/*" onChange={handleThumbnailChange} />
//       {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" width="100" />}

//       <input type="file" accept="image/*" multiple onChange={handleImageChange} />

//       <button type="submit">Add Product</button>
//       {errorMessage && <p>{errorMessage}</p>}
//     </form>
//   );
// };

// export default AddNewProduct;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../../components/context/AuthContext.jsx';

// const AddNewProduct = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     subCategorySlug: '',
//     subSubCategorySlug: '',
//     brand: '',
//     productType: '',
//     digitalProductType: '',
//     sku: '',
//     unit: '',
//     tags: '',
//     price: '',
//     discount: '',
//     discountType: '',
//     discountAmount: '',
//     taxAmount: '',
//     taxIncluded: false,
//     minimumOrderQty: '',
//     quantity: '',
//     stock: '',
//     isFeatured: false,
//     videoLink: '',
//   });

//   const [thumbnail, setThumbnail] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreview, setImagePreview] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [subSubCategories, setSubSubCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [attributes, setAttributes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
//   const [selectedAttributeType, setSelectedAttributeType] = useState('');
//   const [attributeValue, setAttributeValue] = useState('');

//   const { user } = useAuth();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/categories');
//         setCategories(response.data.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/brands/');
//         setBrands(response.data);
//       } catch (error) {
//         console.error('Error fetching brands:', error);
//       }
//     };
//     fetchBrands();
//   }, []);

//   useEffect(() => {
//     const fetchColors = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/colors/');
//         setColors(response.data);
//       } catch (error) {
//         console.error('Error fetching colors:', error);
//       }
//     };
//     fetchColors();
//   }, []);

//   useEffect(() => {
//     const fetchAttributes = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/attributes/');
//         setAttributes(response.data);
//       } catch (error) {
//         console.error('Error fetching attributes:', error);
//       }
//     };
//     fetchAttributes();
//   }, []);

//   useEffect(() => {
//     if (formData.category) {
//       const fetchSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-categories/main-category/${formData.category}`);
//           setSubCategories(response.data);
//         } catch (error) {
//           console.error('Error fetching sub-categories:', error);
//         }
//       };
//       fetchSubCategories();
//     }
//   }, [formData.category]);

//   useEffect(() => {
//     if (formData.subCategorySlug) {
//       const fetchSubSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-sub-categories/subcategory/${formData.subCategorySlug}`);
//           setSubSubCategories(response.data.data);
//         } catch (error) {
//           console.error('Error fetching sub-sub-categories:', error);
//         }
//       };
//       fetchSubSubCategories();
//     }
//   }, [formData.subCategorySlug]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (name === 'attributeValue') {
//       setAttributeValue(value);
//     } else if (name === 'attributeType') {
//       setSelectedAttributeType(value);
//     } else {
//       setFormData({
//         ...formData,
//         [name]: type === 'checkbox' ? checked : value,
//       });
//     }
//   };

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     setThumbnail(file);
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const addColor = (color) => {
//     if (!selectedColors.includes(color)) {
//       setSelectedColors([...selectedColors, color]);
//     }
//   };

//   const removeColor = (color) => {
//     setSelectedColors(selectedColors.filter(c => c !== color));
//   };

//   const addAttribute = () => {
//     if (selectedAttributeType && attributeValue) {
//       setSelectedAttributes([...selectedAttributes, { type: selectedAttributeType, value: attributeValue }]);
//       setAttributeValue('');
//       setSelectedAttributeType('');
//     }
//   };

//   const removeAttribute = (attribute) => {
//     setSelectedAttributes(selectedAttributes.filter(attr => attr.value !== attribute.value));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const productFormData = new FormData();

//     for (const key in formData) {
//       productFormData.append(key, formData[key]);
//     }

//     if (thumbnail) {
//       productFormData.append('thumbnail', thumbnail);
//     }

//     images.forEach((image) => {
//       productFormData.append('images', image);
//     });

//     selectedColors.forEach((color) => {
//       productFormData.append('colors[]', color);
//     });

//     selectedAttributes.forEach((attribute) => {
//       productFormData.append('attributes[]', JSON.stringify(attribute));
//     });

//     productFormData.append('userId', '669ac00ffe4a9e456fb35af2');
//     productFormData.append('userType', 'admin');

//     try {
//       const response = await axios.post('http://localhost:3000/api/products/', productFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         }
//       });
//       alert('Product added successfully!');
//     } catch (error) {
//       setErrorMessage(`Error adding product: ${error.response?.data?.message || error.message}`);
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className='p-20 flex flex-col gap-2 '>
//       {/* Form inputs for each field */}
//       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
//       <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required />
      
//       <select name="category" value={formData.category} onChange={handleChange} required>
//         <option value="">Select Category</option>
//         {categories.map(category => (
//           <option key={category._id} value={category.slug}>{category.name}</option>
//         ))}
//       </select>
      
//       <select name="subCategorySlug" value={formData.subCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Category</option>
//         {subCategories.map(subCategory => (
//           <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="subSubCategorySlug" value={formData.subSubCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Sub-Category</option>
//         {subSubCategories.map(subSubCategory => (
//           <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="brand" value={formData.brand} onChange={handleChange} required>
//         <option value="">Select Brand</option>
//         {brands.map(brand => (
//           <option key={brand._id} value={brand._id}>{brand.name}</option>
//         ))}
//       </select>
      
//       <input type="text" name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type" required />
//       <input type="text" name="digitalProductType" value={formData.digitalProductType} onChange={handleChange} placeholder="Digital Product Type" />
//       <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" required />
//       <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" />
//       <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags (comma-separated)" />
//       <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
//       <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" />
      
//       <select name="discountType" value={formData.discountType} onChange={handleChange}>
//         <option value="">Discount Type</option>
//         <option value="percentage">Percentage</option>
//         <option value="fixed">Fixed Amount</option>
//       </select>
      
//       <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" />
//       <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" />
      
//       <label>
//         <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} />
//         Tax Included
//       </label>
      
//       <input type="number" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Quantity" />
//       <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
//       <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />
      
//       <label>
//         <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} />
//         Featured Product
//       </label>
      
//       <input type="text" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" />
      
//       <input type="file" accept="image/*" onChange={handleThumbnailChange} />
//       {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" width="100" height="100" />}
      
//       <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      
//       <div className='my-4'>
//         <h3>Colors</h3>
//         {colors.map(color => (
//           <button key={color._id} type="button" onClick={() => addColor(color._id)}>
//             {color.name}
//           </button>
//         ))}
//         <ul>
//           {selectedColors.map(color => (
//             <li key={color}>
//               {color}
//               <button type="button" onClick={() => removeColor(color)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       <div className='my-4'>
//         <h3>Attributes</h3>
//         <select name="attributeType" value={selectedAttributeType} onChange={handleChange}>
//           <option value="">Select Attribute Type</option>
//           {attributes.map(attr => (
//             <option key={attr._id} value={attr.name}>{attr.type}</option>
//           ))}
//         </select>
//         <input type="text" name="attributeValue" value={attributeValue} onChange={handleChange} placeholder="Attribute Value" />
//         <button type="button" onClick={addAttribute}>Add Attribute</button>
//         <ul>
//           {selectedAttributes.map((attr, index) => (
//             <li key={index}>
//               {attr.type}: {attr.value}
//               <button type="button" onClick={() => removeAttribute(attr)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       <button type="submit">Submit</button>
      
//       {errorMessage && <p>{errorMessage}</p>}
//     </form>
//   );
// };

// export default AddNewProduct;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useAuth } from '../../../components/context/AuthContext.jsx';

// const AddNewProduct = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     subCategorySlug: '',
//     subSubCategorySlug: '',
//     brand: '',
//     productType: '',
//     digitalProductType: '',
//     sku: '',
//     unit: '',
//     tags: '',
//     price: '',
//     discount: '',
//     discountType: '',
//     discountAmount: '',
//     taxAmount: '',
//     taxIncluded: false,
//     minimumOrderQty: '',
//     quantity: '',
//     stock: '',
//     isFeatured: false,
//     videoLink: '',
//   });

//   const [thumbnail, setThumbnail] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreview, setImagePreview] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [subSubCategories, setSubSubCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [attributes, setAttributes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedAttributes, setSelectedAttributes] = useState([]);
// ;

//   const { user } = useAuth();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/categories');
//         setCategories(response.data.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const fetchBrands = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/brands/');
//         setBrands(response.data);
//       } catch (error) {
//         console.error('Error fetching brands:', error);
//       }
//     };
//     fetchBrands();
//   }, []);

//   useEffect(() => {
//     const fetchColors = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/colors/');
//         setColors(response.data);
//       } catch (error) {
//         console.error('Error fetching colors:', error);
//       }
//     };
//     fetchColors();
//   }, []);

//   useEffect(() => {
//     const fetchAttributes = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/attributes/');
//         setAttributes(response.data);
//       } catch (error) {
//         console.error('Error fetching attributes:', error);
//       }
//     };
//     fetchAttributes();
//   }, []);

//   useEffect(() => {
//     if (formData.category) {
//       const fetchSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-categories/main-category/${formData.category}`);
//           setSubCategories(response.data);
//         } catch (error) {
//           console.error('Error fetching sub-categories:', error);
//         }
//       };
//       fetchSubCategories();
//     }
//   }, [formData.category]);

//   useEffect(() => {
//     if (formData.subCategorySlug) {
//       const fetchSubSubCategories = async () => {
//         try {
//           const response = await axios.get(`http://localhost:3000/api/sub-sub-categories/subcategory/${formData.subCategorySlug}`);
//           setSubSubCategories(response.data.data);
//         } catch (error) {
//           console.error('Error fetching sub-sub-categories:', error);
//         }
//       };
//       fetchSubSubCategories();
//     }
//   }, [formData.subCategorySlug]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (name === 'attributeValue') {
//       setAttributeValue(value);
//     } else if (name === 'attributeType') {
//       setSelectedAttributeType(value);
//     } else {
//       setFormData({
//         ...formData,
//         [name]: type === 'checkbox' ? checked : value,
//       });
//     }
//   };

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     setThumbnail(file);
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const addColor = (color) => {
//     if (!selectedColors.includes(color)) {
//       setSelectedColors([...selectedColors, color]);
//     }
//   };

//   const removeColor = (color) => {
//     setSelectedColors(selectedColors.filter(c => c !== color));
//   };

//   const addAttribute = () => {
//     if (selectedAttributeType && attributeValue) {
//       setSelectedAttributes([...selectedAttributes, { type: selectedAttributeType, value: attributeValue }]);
//       setAttributeValue('');
//       setSelectedAttributeType('');
//     }
//   };

//   const removeAttribute = (attribute) => {
//     setSelectedAttributes(selectedAttributes.filter(attr => attr.value !== attribute.value));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const productFormData = new FormData();

//     for (const key in formData) {
//       productFormData.append(key, formData[key]);
//     }

//     if (thumbnail) {
//       productFormData.append('thumbnail', thumbnail);
//     }

//     images.forEach((image) => {
//       productFormData.append('images', image);
//     });

//     selectedColors.forEach((color) => {
//       productFormData.append('colors[]', color);
//     });

//     selectedAttributes.forEach((attribute) => {
//       productFormData.append('attributes[]', JSON.stringify(attribute));
//     });

//     productFormData.append('userId', '669ac00ffe4a9e456fb35af2');
//     productFormData.append('userType', 'admin');

//     try {
//       const response = await axios.post('http://localhost:3000/api/products/', productFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         }
//       });
//       alert('Product added successfully!');
//     } catch (error) {
//       setErrorMessage(`Error adding product: ${error.response?.data?.message || error.message}`);
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className='p-20 flex flex-col gap-2'>
//       {/* Form inputs for each field */}
//       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
//       <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required />
      
//       <select name="category" value={formData.category} onChange={handleChange} required>
//         <option value="">Select Category</option>
//         {categories.map(category => (
//           <option key={category._id} value={category.slug}>{category.name}</option>
//         ))}
//       </select>
      
//       <select name="subCategorySlug" value={formData.subCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Category</option>
//         {subCategories.map(subCategory => (
//           <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="subSubCategorySlug" value={formData.subSubCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Sub-Category</option>
//         {subSubCategories.map(subSubCategory => (
//           <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="brand" value={formData.brand} onChange={handleChange} required>
//         <option value="">Select Brand</option>
//         {brands.map(brand => (
//           <option key={brand._id} value={brand._id}>{brand.name}</option>
//         ))}
//       </select>
      
//       <input type="text" name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type" required />
//       <input type="text" name="digitalProductType" value={formData.digitalProductType} onChange={handleChange} placeholder="Digital Product Type" />
//       <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" required />
//       <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" />
//       <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags (comma-separated)" />
//       <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
//       <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" />
      
//       <select name="discountType" value={formData.discountType} onChange={handleChange}>
//         <option value="">Select Discount Type</option>
//         <option value="percentage">Percentage</option>
//         <option value="flat">Flat</option>
//       </select>
      
//       <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" />
//       <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" />
//       <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} /> Tax Included
//       <input type="number" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Quantity" />
//       <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" />
//       <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />
//       <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} /> Featured
//       <input type="text" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" />

//       <input type="file" name="thumbnail" onChange={handleThumbnailChange} />
//       {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" className="mt-2 w-32 h-32 object-cover" />}

//       <input type="file" name="images" multiple onChange={handleImageChange} />
      
//       <div className="flex gap-2">
//         {colors.map(color => (
//           <button key={color._id} type="button" className={`p-2 ${selectedColors.includes(color) ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={() => addColor(color)}>{color.name}</button>
//         ))}
//       </div>
      
//       <div className="flex gap-2 mt-2">
//         {selectedColors.map(color => (
//           <button key={color._id} type="button" className="p-2 bg-red-500" onClick={() => removeColor(color)}>{color.name} X</button>
//         ))}
//       </div>

//       <div className="flex gap-2">
//         {attribute.map(attr => (
//           <button key={color._id} type="button" className={`p-2 ${attribue.includes(name) ? 'bg-blue-500' : 'bg-gray-300'}`} onClick={() => addColor(color)}>{color.name}</button>
//         ))}
//       </div>
      
//       <div className="flex gap-2 mt-2">
//         {selectedColors.map(color => (
//           <button key={color._id} type="button" className="p-2 bg-red-500" onClick={() => removeColor(color)}>{color.name} X</button>
//         ))}
//       </div>

     

//       <input type="text" name="attributeValue" value={attributeValue} onChange={handleChange} placeholder="Attribute Value" />
//       <button type="button" onClick={addAttribute}>Add Attribute</button>

//       <div className="flex gap-2 mt-2">
//         {selectedAttributes.map(attribute => (
//           <button key={attribute.value} type="button" className="p-2 bg-red-500" onClick={() => removeAttribute(attribute)}>{attribute.type}: {attribute.value} X</button>
//         ))}
//       </div>

//       <button type="submit">Add Product</button>
//       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//     </form>
//   );
// };

// export default AddNewProduct;



////////////////// corect with use redux
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';

// const AddNewProduct = () => {

//   const dispatch = useDispatch();
//   const { user } = useSelector(state => state.auth);
//  const userId = user._id
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category: '',
//     subCategorySlug: '',
//     subSubCategorySlug: '',
//     brand: '',
//     productType: '',
//     digitalProductType: '',
//     sku: '',
//     unit: '',
//     tags: '',
//     price: '',
//     discount: '',
//     discountType: '',
//     discountAmount: '',
//     taxAmount: '',
//     taxIncluded: false,
//     minimumOrderQty: '',
//     shippingCost: '',
//     stock: '',
//     isFeatured: false,
//     videoLink: '',
//   });

//   const [thumbnail, setThumbnail] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreview, setImagePreview] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState([]);
//   const [subSubCategories, setSubSubCategories] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [colors, setColors] = useState([]);
//   const [attributes, setAttributes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedAttribute, setSelectedAttribute] = useState('');
//   const [attributeValue, setAttributeValue] = useState('');
//   const [productAttributes, setProductAttributes] = useState([]);

//   // const { user } = useAuth();

//   useEffect(() => {
//     // Fetch categories
//     axios.get('http://localhost:3000/api/categories').then(response => setCategories(response.data.docs)).catch(error => console.error('Error fetching categories:', error));
//   }, []);

//   useEffect(() => {
//     // Fetch brands
//     axios.get('http://localhost:3000/api/brands/').then(response => setBrands(response.data.docs)).catch(error => console.error('Error fetching brands:', error));
//   }, []);

//   useEffect(() => {
//     // Fetch colors
//     axios.get('http://localhost:3000/api/colors/').then(response => setColors(response.data)).catch(error => console.error('Error fetching colors:', error));
//   }, []);

//   useEffect(() => {
//     // Fetch attributes
//     axios.get('http://localhost:3000/api/attributes/').then(response => setAttributes(response.data)).catch(error => console.error('Error fetching attributes:', error));
//   }, []);

//   useEffect(() => {
//     // Fetch sub-categories based on selected category
//     if (formData.category) {
//       axios.get(`http://localhost:3000/api/sub-categories/main-category/${formData.category}`)
//         .then(response => setSubCategories(response.data.docs))
//         .catch(error => console.error('Error fetching sub-categories:', error));
//     }
//   }, [formData.category]);

//   useEffect(() => {
//     // Fetch sub-sub-categories based on selected sub-category
//     if (formData.subCategorySlug) {
//       axios.get(`http://localhost:3000/api/sub-sub-categories/subcategory/${formData.subCategorySlug}`)
//         .then(response => setSubSubCategories(response.data.docs))
//         .catch(error => console.error('Error fetching sub-sub-categories:', error));
//     }
//   }, [formData.subCategorySlug]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     setThumbnail(file);
//     const reader = new FileReader();
//     reader.onloadend = () => setImagePreview(reader.result);
//     reader.readAsDataURL(file);
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const handleColorChange = (color) => {
//     setSelectedColors(prevColors => 
//       prevColors.includes(color)
//         ? prevColors.filter(c => c !== color)
//         : [...prevColors, color]
//     );
//   };

//   const handleAttributeChange = (e) => {
//     setSelectedAttribute(e.target.value);
//   };

//   const addAttribute = () => {
//     if (selectedAttribute) {
//       const selectedAttr = attributes.find(attr => attr._id === selectedAttribute);
//       if (selectedAttr) {
//         setProductAttributes(prevAttrs => [
//           ...prevAttrs,
//           { _id: selectedAttr._id, name: selectedAttr.name }
//         ]);
//         setSelectedAttribute('');
//       }
//     }
//   };


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const productFormData = new FormData();

//   // Convert and append form data with appropriate types
//   for (const key in formData) {
//       let value = formData[key];

//       if (key === 'tags') {
//           // Convert tags to an array and append them
//           const tagsArray = value.split(',').map(tag => tag.trim()).filter(tag => tag);
//           tagsArray.forEach(tag => productFormData.append('tags[]', tag));
//       } else {
//           switch (key) {
//               case 'price':
//               case 'discount':
//               case 'discountAmount':
//               case 'taxAmount':
//               case 'shippingCost':
//               case 'minimumOrderQty':
//               case 'stock':
//                   value = parseFloat(value) || 0; // Convert to number
//                   break;
//               case 'taxIncluded':
//               case 'isFeatured':
//                   value = value === 'true'; // Convert to boolean
//                   break;
//               default:
//                   value = String(value); // Convert to string
//                   break;
//           }
//           productFormData.append(key, value);
//       }
//   }

//   // Append additional data
//   if (thumbnail) {
//       productFormData.append('thumbnail', thumbnail);
//   }

//   images.forEach((image) => {
//       productFormData.append('images', image);
//   });

//   selectedColors.forEach((color) => {
//       productFormData.append('colors[]', color);
//   });

//   productAttributes.forEach((attribute) => {
//       productFormData.append('attributes[]', attribute._id);
//   });

//   productFormData.append('userId', userId);
//   productFormData.append('userType', 'admin');

//   try {
//       await axios.post('http://localhost:3000/api/products/', productFormData, {
//           headers: {
//               'Content-Type': 'multipart/form-data',
//           }
//       });
//       alert('Product added successfully!');
//   } catch (error) {
//       setErrorMessage(`Error adding product: ${error.response?.data?.message || error.message}`);
//       console.log(error);
//   }
// };

// return (
//     <form onSubmit={handleSubmit} className='p-20 flex flex-col gap-2'>
//       {/* Form inputs for each field */}
//       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
//       <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required />
      
//       <select name="category" value={formData.category} onChange={handleChange} required>
//         <option value="">Select Category</option>
//         {categories.map(category => (
//           <option key={category._id} value={category.slug}>{category.name}</option>
//         ))}
//       </select>
      
//       <select name="subCategorySlug" value={formData.subCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Category</option>
//         {subCategories.map(subCategory => (
//           <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="subSubCategorySlug" value={formData.subSubCategorySlug} onChange={handleChange}>
//         <option value="">Select Sub-Sub-Category</option>
//         {subSubCategories.map(subSubCategory => (
//           <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
//         ))}
//       </select>
      
//       <select name="brand" value={formData.brand} onChange={handleChange} required>
//         <option value="">Select Brand</option>
//         {brands.map(brand => (
//           <option key={brand._id} value={brand._id}>{brand.name}</option>
//         ))}
//       </select>
      
//       <input type="text" name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type" required />
//       <input type="text" name="digitalProductType" value={formData.digitalProductType} onChange={handleChange} placeholder="Digital Product Type" />
//       <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" required />
//       <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" />
//       <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags (comma-separated)" />
//       <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
//       <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" />
//       <select name="discountType" value={formData.discountType} onChange={handleChange}>
//         <option value="">Select Discount Type</option>
//         <option value="percent">Percentage</option>
//         <option value="fixed">Fixed Amount</option>
//       </select>
//       <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" />
//       <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" />
//       <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} /> Tax Included
//       <input type="number" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Quantity" />
//       {/* <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" /> */}
//       <input type="number" name="shippingCost" value={formData.shippingCost} onChange={handleChange} placeholder="ShippingCost" />
//       <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />
//       <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} /> Featured
//       <input type="text" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" />

//       <input type="file" accept="image/*" onChange={handleThumbnailChange} />
//       {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" width="100" />}
      
//       <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      
//       <div>
//         <h3>Colors</h3>
//         {colors.map(color => (
//           <label key={color._id}>
//             <input
//               type="checkbox"
//               checked={selectedColors.includes(color._id)}
//               onChange={() => handleColorChange(color._id)}
//             />
//             {color.name}
//           </label>
//         ))}
//       </div>

//       <div>
//         <h3>Attributes</h3>
//         <select onChange={handleAttributeChange} value={selectedAttribute}>
//           <option value="">Select Attribute</option>
//           {attributes.map(attribute => (
//             <option key={attribute._id} value={attribute._id}>{attribute.name}</option>
//           ))}
//         </select>
//         <button type="button" onClick={addAttribute}>Add Attribute</button>
//         <ul>
//           {productAttributes.map(attr => (
//             <li key={attr._id}>{attr.name}</li>
//           ))}
//         </ul>
//       </div>
      
//       {errorMessage && <div className="error-message">{errorMessage}</div>}
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default AddNewProduct;




import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchBrands, fetchColors, fetchAttributes,
   fetchSubCategories, fetchSubSubCategories } from
    '../../../components/redux/categorybrandSlice';

import { createProduct } from 
'../../../components/redux/product/productSlice';

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
   const userId = user._id
  const { categories, subCategories, subSubCategories, brands, colors, attributes } = useSelector((state) => state.category);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    subCategorySlug: '',
    subSubCategorySlug: '',
    brand: '',
    productType: '',
    digitalProductType: '',
    sku: '',
    unit: '',
    tags: '',
    price: '',
    discount: '',
    discountType: '',
    discountAmount: '',
    taxAmount: '',
    taxIncluded: false,
    minimumOrderQty: '',
    shippingCost: '',
    stock: '',
    isFeatured: false,
    videoLink: '',
  });

  const [thumbnail, setThumbnail] = useState(null);
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState('');
  const [productAttributes, setProductAttributes] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
    dispatch(fetchColors());
    dispatch(fetchAttributes());
  }, [dispatch]);

  useEffect(() => {
    if (formData.category) {
      dispatch(fetchSubCategories(formData.category));
    }
  }, [dispatch, formData.category]);

  useEffect(() => {
    if (formData.subCategorySlug) {
      dispatch(fetchSubSubCategories(formData.subCategorySlug));
    }
  }, [dispatch, formData.subCategorySlug]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleColorChange = (color) => {
    setSelectedColors(prevColors =>
      prevColors.includes(color)
        ? prevColors.filter(c => c !== color)
        : [...prevColors, color]
    );
  };

  const handleAttributeChange = (e) => {
    setSelectedAttribute(e.target.value);
  };

  const addAttribute = () => {
    if (selectedAttribute) {
      const selectedAttr = attributes.find(attr => attr._id === selectedAttribute);
      if (selectedAttr) {
        setProductAttributes(prevAttrs => [
          ...prevAttrs,
          { _id: selectedAttr._id, name: selectedAttr.name }
        ]);
        setSelectedAttribute('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productFormData = new FormData();

    for (const key in formData) {
      let value = formData[key];

      if (key === 'tags') {
        const tagsArray = value.split(',').map(tag => tag.trim()).filter(tag => tag);
        tagsArray.forEach(tag => productFormData.append('tags[]', tag));
      } else {
        switch (key) {
          case 'price':
          case 'discount':
          case 'discountAmount':
          case 'taxAmount':
          case 'shippingCost':
          case 'minimumOrderQty':
          case 'stock':
            value = parseFloat(value) || 0;
            break;
          case 'taxIncluded':
          case 'isFeatured':
            value = value === 'true';
            break;
          default:
            value = String(value);
            break;
        }
        productFormData.append(key, value);
      }
    }

    if (thumbnail) {
      productFormData.append('thumbnail', thumbnail);
    }

    images.forEach((image) => {
      productFormData.append('images', image);
    });

    selectedColors.forEach((color) => {
      productFormData.append('colors[]', color);
    });

    productAttributes.forEach((attribute) => {
      productFormData.append('attributes[]', attribute._id);
    });
    productFormData.append('userId', userId);
      productFormData.append('userType', 'admin');
    try {
      console.log("form data====", productFormData)
      await dispatch(createProduct(productFormData));
      alert('Product added successfully!');
    } catch (error) {
      setErrorMessage(`Error adding product: ${error.message}`);
      console.log(error);
    }
  };

  
return (
    <form onSubmit={handleSubmit} className='p-20 flex flex-col gap-2'>
      {/* Form inputs for each field */}
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required />
      
      <select name="category" value={formData.category} onChange={handleChange} required>
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category._id} value={category.slug}>{category.name}</option>
        ))}
      </select>
      
      <select name="subCategorySlug" value={formData.subCategorySlug} onChange={handleChange}>
        <option value="">Select Sub-Category</option>
        {subCategories.map(subCategory => (
          <option key={subCategory._id} value={subCategory.slug}>{subCategory.name}</option>
        ))}
      </select>
      
      <select name="subSubCategorySlug" value={formData.subSubCategorySlug} onChange={handleChange}>
        <option value="">Select Sub-Sub-Category</option>
        {subSubCategories.map(subSubCategory => (
          <option key={subSubCategory._id} value={subSubCategory.slug}>{subSubCategory.name}</option>
        ))}
      </select>
      
      <select name="brand" value={formData.brand} onChange={handleChange} required>
        <option value="">Select Brand</option>
        {brands.map(brand => (
          <option key={brand._id} value={brand._id}>{brand.name}</option>
        ))}
      </select>
      
      <input type="text" name="productType" value={formData.productType} onChange={handleChange} placeholder="Product Type" required />
      <input type="text" name="digitalProductType" value={formData.digitalProductType} onChange={handleChange} placeholder="Digital Product Type" />
      <input type="text" name="sku" value={formData.sku} onChange={handleChange} placeholder="SKU" required />
      <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit" />
      <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Tags (comma-separated)" />
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
      <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" />
      <select name="discountType" value={formData.discountType} onChange={handleChange}>
        <option value="">Select Discount Type</option>
        <option value="percent">Percentage</option>
        <option value="fixed">Fixed Amount</option>
      </select>
      <input type="number" name="discountAmount" value={formData.discountAmount} onChange={handleChange} placeholder="Discount Amount" />
      <input type="number" name="taxAmount" value={formData.taxAmount} onChange={handleChange} placeholder="Tax Amount" />
      <input type="checkbox" name="taxIncluded" checked={formData.taxIncluded} onChange={handleChange} /> Tax Included
      <input type="number" name="minimumOrderQty" value={formData.minimumOrderQty} onChange={handleChange} placeholder="Minimum Order Quantity" />
      {/* <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" /> */}
      <input type="number" name="shippingCost" value={formData.shippingCost} onChange={handleChange} placeholder="ShippingCost" />
      <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />
      <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} /> Featured
      <input type="text" name="videoLink" value={formData.videoLink} onChange={handleChange} placeholder="Video Link" />

      <input type="file" accept="image/*" onChange={handleThumbnailChange} />
      {imagePreview && <img src={imagePreview} alt="Thumbnail Preview" width="100" />}
      
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      
      <div>
        <h3>Colors</h3>
        {colors.map(color => (
          <label key={color._id}>
            <input
              type="checkbox"
              checked={selectedColors.includes(color._id)}
              onChange={() => handleColorChange(color._id)}
            />
            {color.name}
          </label>
        ))}
      </div>

      <div>
        <h3>Attributes</h3>
        <select onChange={handleAttributeChange} value={selectedAttribute}>
          <option value="">Select Attribute</option>
          {attributes.map(attribute => (
            <option key={attribute._id} value={attribute._id}>{attribute.name}</option>
          ))}
        </select>
        <button type="button" onClick={addAttribute}>Add Attribute</button>
        <ul>
          {productAttributes.map(attr => (
            <li key={attr._id}>{attr.name}</li>
          ))}
        </ul>
      </div>
      
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddNewProduct;
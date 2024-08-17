// import React, { useState } from 'react';
// import { FiUserPlus, FiInfo, FiImage, FiMail, FiLock } from 'react-icons/fi';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import axios from 'axios';

// const API_URL = "http://localhost:3000/api/vendors";

// const AddVendorForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     password: '',
//     confirm_password: '',
//     shopName: '',
//     address: '',
//     vendorImage: null,
//     logo: null,
//     banner: null
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (formData.password !== formData.confirm_password) {
//       alert('Passwords do not match!');
//       return;
//     }

//     try {
//       const form = new FormData();
//       form.append('firstName', formData.firstName);
//       form.append('lastName', formData.lastName);
//       form.append('phoneNumber', formData.phoneNumber);
//       form.append('email', formData.email);
//       form.append('password', formData.password);
//       form.append('confirm_password', formData.confirm_password);
//       form.append('shopName', formData.shopName);
//       form.append('address', formData.address);
//       form.append('vendorImage', formData.vendorImage);
//       form.append('logo', formData.logo);
//       form.append('banner', formData.banner);

//       // Log formData for debugging
//       console.log('Form Data:', formData);

//       const response = await axios.post(API_URL, form, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('Vendor added successfully:', response.data);
//       // Reset form data after submission
//       setFormData({
//         firstName: '',
//         lastName: '',
//         phoneNumber: '',
//         email: '',
//         password: '',
//         confirm_password: '',
//         shopName: '',
//         address: '',
//         vendorImage: null,
//         logo: null,
//         banner: null
//       });

//       // Reset form fields
//       document.getElementById('add-vendor-form').reset(); 
//     } catch (error) {
//       console.error('Error adding vendor:', error);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleImageChange = (event) => {
//     const { name, files } = event.target;
//     setFormData({
//       ...formData,
//       [name]: files[0]
//     });

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const imgElement = document.getElementById(`${name}Preview`);
//       if (imgElement) {
//         imgElement.src = e.target.result;
//       }
//     };
//     if (files[0]) {
//       reader.readAsDataURL(files[0]);
//     }
//   };

//   return (
//     <div className="content container-fluid main-card ltr snipcss-B2K3K">
//       <div className="mb-4">
//         <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
//           <FiUserPlus className="mb-1" /> Add new Vendor
//         </h2>
//       </div>
//       <form className="user" onSubmit={handleSubmit} encType="multipart/form-data" id="add-vendor-form">
//         <div className="card">
//           <div className="card-body">
//             <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
//               <FiInfo className="mb-1" /> Vendor information
//             </h5>
//             <div className="row align-items-center">
//               <div className="col-lg-6 mb-4 mb-lg-0">
//                 <div className="form-group">
//                   <label htmlFor="exampleFirstName" className="title-color d-flex gap-1 align-items-center">First name</label>
//                   <input type="text" className="form-control form-control-user" id="exampleFirstName" name="firstName" placeholder="Ex: John" required value={formData.firstName} onChange={handleInputChange} />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="exampleLastName" className="title-color d-flex gap-1 align-items-center">Last name</label>
//                   <input type="text" className="form-control form-control-user" id="exampleLastName" name="lastName" placeholder="Ex: Doe" required value={formData.lastName} onChange={handleInputChange} />
//                 </div>
//                 <div className="form-group">
//                   <label className="title-color d-flex gap-1 align-items-center" htmlFor="exampleInputPhone">Phone</label>
//                   <PhoneInput
//                     inputProps={{
//                       name: 'phoneNumber',
//                       required: true,
//                       autoFocus: false,
//                       placeholder: 'Enter phone number',
//                       autoComplete: 'off',
//                     }}
//                     country={'us'}
//                     value={formData.phoneNumber}
//                     onChange={(value) => handleInputChange({ target: { name: 'phoneNumber', value } })}
//                   />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="form-group">
//                   <div className="d-flex justify-content-center">
//                     <img className="upload-img-view" id="vendorImagePreview" src={formData.vendorImage ? URL.createObjectURL(formData.vendorImage) : 'https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'} alt="Vendor image" />
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <div className="title-color mb-2 d-flex gap-1 align-items-center">Vendor Image <span className="text-info">(Ratio 1:1)</span></div>
//                   <div className="custom-file text-left">
//                     <input type="file" name="vendorImage" id="vendorImageInput" className="custom-file-input image-input" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onChange={handleImageChange} />
//                     <label className="custom-file-label" htmlFor="vendorImageInput">Upload image</label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card mt-3">
//           <div className="card-body">
//             <input type="hidden" name="status" value="approved" />
//             <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
//               <FiMail className="mb-1" /> Account information
//             </h5>
//             <div className="row">
//               <div className="col-lg-4 form-group">
//                 <label htmlFor="exampleInputEmail" className="title-color d-flex gap-1 align-items-center">Email</label>
//                 <input type="email" className="form-control form-control-user" id="exampleInputEmail" name="email" placeholder="Ex: John@company.com" required value={formData.email} onChange={handleInputChange} />
//               </div>
//               <div className="col-lg-4 form-group">
//                 <label htmlFor="user_password" className="title-color d-flex gap-1 align-items-center">Password
//                   <span className="input-label-secondary cursor-pointer d-flex" data-toggle="tooltip" data-placement="top" title="The password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, one special character, and no spaces.">
//                     <FiInfo width="16" />
//                   </span>
//                 </label>
//                 <div className="input-group input-group-merge">
//                   <input type="password"
//                     className="js-toggle-password form-control password-check"
//                     name="password"
//                     required id="user_password"
//                     minLength="8" 
//                     placeholder="Password minimum 8 characters"
//                     value={formData.password}
//                     onChange={handleInputChange} 
//                   />
//                   <div id="changePassTarget" className="input-group-append">
//                     <a className="input-group-text" href="javascript:">
//                       <i className="fa fa-eye-slash"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 form-group">
//                 <label htmlFor="user_confirm_password" className="title-color d-flex gap-1 align-items-center">Confirm Password</label>
//                 <div className="input-group input-group-merge">
//                   <input type="password"
//                     className="js-toggle-password form-control"
//                     name="confirm_password"
//                     required id="user_confirm_password"
//                     placeholder="Re-enter password"
//                     minLength="8" 
//                     value={formData.confirm_password}
//                     onChange={handleInputChange} 
//                   />
//                   <div id="changePassTarget" className="input-group-append">
//                     <a className="input-group-text" href="javascript:">
//                       <i className="fa fa-eye-slash"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card mt-3">
//           <div className="card-body">
//             <h5 className="mb-0 text-capitalize d-flex align-items-center gap-2 border-bottom pb-3 mb-4 pl-4">
//               <FiImage className="mb-1" /> Shop details
//             </h5>
//             <div className="row">
//               <div className="col-lg-4 form-group">
//                 <label htmlFor="shopName" className="title-color d-flex gap-1 align-items-center">Shop Name</label>
//                 <input type="text" className="form-control form-control-user" id="shopName" name="shopName" placeholder="Ex: John’s Shop" required value={formData.shopName} onChange={handleInputChange} />
//               </div>
//               <div className="col-lg-4 form-group">
//                 <label htmlFor="address" className="title-color d-flex gap-1 align-items-center">Address</label>
//                 <input type="text" className="form-control form-control-user" id="address" name="address" placeholder="Ex: 123 Main St" required value={formData.address} onChange={handleInputChange} />
//               </div>
//               <div className="col-lg-4 form-group">
//                 <div className="d-flex justify-content-center">
//                   <img className="upload-img-view" id="logoPreview" src={formData.logo ? URL.createObjectURL(formData.logo) : 'https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'} alt="Logo" />
//                 </div>
//                 <div className="form-group">
//                   <div className="title-color mb-2 d-flex gap-1 align-items-center">Logo</div>
//                   <div className="custom-file text-left">
//                     <input type="file" name="logo" id="logoInput" className="custom-file-input image-input" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onChange={handleImageChange} />
//                     <label className="custom-file-label" htmlFor="logoInput">Upload image</label>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 form-group">
//                 <div className="d-flex justify-content-center">
//                   <img className="upload-img-view" id="bannerPreview" src={formData.banner ? URL.createObjectURL(formData.banner) : 'https://6valley.6amtech.com/public/assets/back-end/img/400x400/img2.jpg'} alt="Banner" />
//                 </div>
//                 <div className="form-group">
//                   <div className="title-color mb-2 d-flex gap-1 align-items-center">Banner</div>
//                   <div className="custom-file text-left">
//                     <input type="file" name="banner" id="bannerInput" className="custom-file-input image-input" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onChange={handleImageChange} />
//                     <label className="custom-file-label" htmlFor="bannerInput">Upload image</label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card mt-3">
//           <div className="card-body">
//             <button type="submit" className="btn btn-success px-5">
//               <FiUserPlus className="mr-2" /> Save Vendor
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddVendorForm;






import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FiUserPlus, FiInfo, FiImage, FiMail } from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { createVendor } from '../../../components/redux/vendorSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormInput from '../../../components/FormInput/FormInput';
import FormTextArea from '../../../components/FormInput/FormTextArea';
import FileUpload from '../../../components/FormInput/FileUpload';
import PreviewImage from '../../../components/FormInput/PreviewImage';
import FormSection from '../../../components/FormInput/FormSection';

const AddVendorForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirm_password: '',
    shopName: '',
    address: '',
    vendorImage: null,
    logo: null,
    banner: null
  });

  const dispatch = useDispatch();


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (formData.password !== formData.confirm_password) {
      toast.error('Passwords do not match!');
      return;
    }
  
    try {
      const form = new FormData();
      form.append('firstName', formData.firstName);
      form.append('lastName', formData.lastName);
      form.append('phoneNumber', formData.phoneNumber);
      form.append('email', formData.email);
      form.append('password', formData.password);
      form.append('confirm_password', formData.confirm_password);
      form.append('shopName', formData.shopName);
      form.append('address', formData.address);
      if (formData.vendorImage) form.append('vendorImage', formData.vendorImage);
      if (formData.logo) form.append('logo', formData.logo);
      if (formData.banner) form.append('banner', formData.banner);
  
      // Log form data for debugging
      for (let pair of form.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
      }
  
      const actionResult = await dispatch(createVendor(form));
      
      if (createVendor.fulfilled.match(actionResult)) {
        toast.success('Vendor added successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          password: '',
          confirm_password: '',
          shopName: '',
          address: '',
          vendorImage: null,
          logo: null,
          banner: null
        });
        event.target.reset(); // Reset form fields
      } else {
        throw new Error(actionResult.error.message || 'Failed to add vendor!');
      }
    } catch (error) {
      console.error('Error adding vendor:', error);
      toast.error(error.message || 'Failed to add vendor!');
    }
  };
  

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   if (formData.password !== formData.confirm_password) {
  //     toast.error('Passwords do not match!');
  //     return;
  //   }
  
  //   try {
  //     const form = new FormData();
  //     Object.keys(formData).forEach(key => {
  //       if (formData[key] !== null && formData[key] !== undefined) {
  //         form.append(key, formData[key]);
  //       }
  //     });
  
  //     const actionResult = await dispatch(createVendor(form));
      
  //     if (createVendor.fulfilled.match(actionResult)) {
  //       toast.success('Vendor added successfully!');
  //       setFormData({
  //         firstName: '',
  //         lastName: '',
  //         phoneNumber: '',
  //         email: '',
  //         password: '',
  //         confirm_password: '',
  //         shopName: '',
  //         address: '',
  //         vendorImage: null,
  //         logo: null,
  //         banner: null
  //       });
  //       event.target.reset(); // Reset form fields
  //     } else {
  //       throw new Error(actionResult.error.message || 'Failed to add vendor!');
  //     }
  //   } catch (error) {
  //     console.error('Error adding vendor:', error);
  //     toast.error(error.message || 'Failed to add vendor!');
  //   }
  // };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files[0]
    });
  };

  return (
    <div className="content container-fluid main-card ltr snipcss-B2K3K">
      <div className="mb-4">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <FiUserPlus className="mb-1" /> Add new Vendor
        </h2>
      </div>
      <form className="user" onSubmit={handleSubmit} encType="multipart/form-data" id="add-vendor-form">
        <FormSection icon={<FiInfo className="mb-1" />} title="Vendor information">
          <div className="row align-items-center p-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <FormInput label="First name" name="firstName" type="text" placeholder="Ex: John" value={formData.firstName} onChange={handleInputChange} required />
              <FormInput label="Last name" name="lastName" type="text" placeholder="Ex: Doe" value={formData.lastName} onChange={handleInputChange} required />
              <div className="form-group">
                <label htmlFor="exampleInputPhone" className="title-color d-flex gap-1 align-items-center">Phone</label>
                <PhoneInput
                  inputProps={{
                    name: 'phoneNumber',
                    required: true,
                    autoFocus: false,
                    placeholder: 'Enter phone number',
                    autoComplete: 'off',
                  }}
                  country={'us'}
                  value={formData.phoneNumber}
                  onChange={(value) => handleInputChange({ target: { name: 'phoneNumber', value } })}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <PreviewImage image={formData.vendorImage} altText="Vendor image" />
              <FileUpload name="vendorImage" label="Vendor Image (Ratio 1:1)" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onChange={handleImageChange} />
            </div>
          </div>
        </FormSection>

        <FormSection icon={<FiMail className="mb-1" />} title="Account information">
          <div className="row p-4">
            <div className="col-lg-4">
              <FormInput label="Email" name="email" type="email" placeholder="Ex: John@company.com" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="col-lg-4">
              <FormInput label="Password" name="password" type="password" placeholder="Password minimum 8 characters" value={formData.password} onChange={handleInputChange} required />
            </div>
            <div className="col-lg-4">
              <FormInput label="Confirm password" name="confirm_password" type="password" placeholder="Password minimum 8 characters" value={formData.confirm_password} onChange={handleInputChange} required />
            </div>
          </div>
        </FormSection>

        <FormSection icon={<FiImage className="mb-1" />} title="Shop information">
          <div className="row p-4">
            <div className="col-lg-6">
              <FormInput label="Shop name" name="shopName" type="text" placeholder="Shop name" value={formData.shopName} onChange={handleInputChange} required />
              <FormTextArea label="Address" name="address" placeholder="Enter shop address" value={formData.address} onChange={handleInputChange} required />
            </div>
            <div className="col-lg-6">
              <PreviewImage image={formData.logo} altText="Shop Logo" />
              <FileUpload name="logo" label="Shop Logo (Ratio 2:1)" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onChange={handleImageChange} />
              <PreviewImage image={formData.banner} altText="Shop Banner" />
              <FileUpload name="banner" label="Shop Banner (Ratio 5:1)" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" onChange={handleImageChange} />
            </div>
          </div>
        </FormSection>

        <div className="form-group col-lg-12 text-right">
          <button type="submit" className="btn bg-green-500 mt-3 text-white">Add Vendor</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddVendorForm;

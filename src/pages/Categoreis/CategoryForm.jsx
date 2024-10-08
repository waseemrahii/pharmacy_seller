

// import React, { useState } from 'react';

// const CategoryForm = ({ selectedLang, newCategory, onInputChange, onSubmit }) => {
//   return (
//     <form onSubmit={onSubmit}>
//       <div className="row">
//         <div className="col-lg-6">
//           {['en', 'sa', 'bd', 'in'].map((lang) => (
//             <div className={`form-group ${selectedLang === lang ? '' : 'd-none'} form-system-language-form`} key={lang} id={`${lang}-form`}>
//               <label className="title-color">
//                 Category Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 placeholder="New Category"
//                 required={lang === 'en'}
//                 value={newCategory.name}
//                 onChange={onInputChange}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="d-flex flex-wrap gap-2 justify-content-end w-full p-3">
//           <button type="reset" id="reset" className="btn btn-success">Reset</button>
//           <button type="submit" className="btn bg-green-400 text-white">Submit</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default React.memo(CategoryForm);





import React, { useCallback, useState } from 'react';

const CategoryForm = ({ selectedLang, newCategory, onInputChange, onFileChange, onSubmit }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file)); // Create a preview URL
      onFileChange(file); // Pass the file to the parent component
    } else {
      setPreview(null); // Reset the preview if no file is selected
    }
  }, [onFileChange]);

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-lg-6">
          {['en', 'sa', 'bd', 'in'].map((lang) => (
            <div className={`form-group ${selectedLang === lang ? '' : 'd-none'} form-system-language-form`} key={lang} id={`${lang}-form`}>
              <label className="title-color">
                Category Name<span className="text-danger">*</span> ({lang.toUpperCase()})
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="New Category"
                required={lang === 'en'}
                value={newCategory.name}
                onChange={onInputChange}
              />
            </div>
          ))}
       
          <div className="form-group">
            <label className="title-color">Category Logo</label>
            <span className="text-info"><span className="text-danger">*</span> Ratio 1:1 (500 x 500 px)</span>
            <div className="custom-file text-left">
              <input
                type="file"
                name="logo"
                id="category-image"
                className="custom-file-input"
                accept="image/*"
                required
                onChange={handleFileChange}
              />
              <label className="custom-file-label" htmlFor="category-image">Choose File</label>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0 from_part_2">
          <div className="form-group flex justify-center">
            <div className="text-center" style={{ width: "50%" }}>
              <img
                className="upload-img-view"
                id="viewer"
                alt=""
                src={preview || '/image-place-holder.png'}
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap gap-2 justify-content-end w-full p-3">
          <button type="reset" id="reset" className="btn btn-success">Reset</button>
          <button type="submit" className="btn bg-green-400 text-white">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default React.memo(CategoryForm);

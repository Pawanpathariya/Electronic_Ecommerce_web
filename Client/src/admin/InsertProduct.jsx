import React, { useState } from 'react'
import BASEURL from '../confiq/BASEURL'
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
const InsertProduct = () => {
  const [product, setProduct] = useState({})
  const [Images, setImages] = useState([])

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }
  const handleImageChange = (e) => {
    setImages(e.target.files);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < Images.length; i++) {
      formData.append('image', Images[i]);
    }

    formData.append('proname', product.proname);
    formData.append('brand', product.brand);
    formData.append('category', product.category);
    formData.append('description', product.description);
    formData.append('price', product.price);

  let api=`${BASEURL}/admin/insertproduct`;
  try {
    let response=await axios.post(api,formData)
    toast.success(response.data.message);
 setProduct({
   proname: '',
   brand: '',
   category: '',
   description: '',
   price: '',
 });
 setImages([]);
  }
  catch (error) {
    console.log(error);
  }


  }

  return (
    <>
      <div id='insert'>
        <h3>Insert Product</h3>
        <label >Enter name</label>
        <input type="text" value={product.proname} onChange={handleChange} name='proname' />
        <label >Enter Brand</label>
        <input type="text" value={product.brand} onChange={handleChange} name='brand' />
        <label >Select Category</label>
        <select value={product.category} onChange={handleChange} name="category">
          <option value="">----Select----</option>
          <option value="computer">Computer</option>
          <option value="laptop">Laptop</option>
          <option value="mobile">Mobile</option>
        </select>
        <label>Description</label>
        <textarea value={product.description} onChange={handleChange} name="description" cols={20} rows={5} />
        <label name="price">Enter Price</label>
        <input type="text" value={product.price} onChange={handleChange} name='price' />

        <label name="images">Images</label>
        <input type="file" onChange={handleImageChange} name='image' multiple />

        <button onClick={handleSubmit}>Insert</button>
      </div>
      <ToastContainer />
    </>
  )
}

export default InsertProduct


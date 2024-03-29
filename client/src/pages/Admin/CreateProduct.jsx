import React, { useState,useEffect } from "react";
import './CreateProduct.css';
import AdminMenu from "../../components/layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Select } from "antd";
const { Option } = Select;
const CreateProduct = () => {
  const [categories,setCategories]= useState([])
  const [category,setCategory]= useState([])
  const [name,setName]= useState("")
  const [description,setDescription]= useState("")
  const [price,setPrice]= useState("")
  const [quantity,setQuantity]= useState("")
  const [shipping,setShipping]= useState("")
  const [photo,setPhoto]= useState("")

    //get all categories
    const getAllCategory = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
        if (data?.success) {
          setCategories(data?.category);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something wwent wrong in getting catgeory");
      }
    };
  
    useEffect(() => {
      getAllCategory();
    }, []);

  return (
    <div>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="Select-category">
            <Select
                placeholder="Select a category"
                size="large"
                showSearch
                className="drop-down-category"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                   {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
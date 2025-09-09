import { useState } from "react";
import axios from "axios";

function Parts() {
  const [formData, setFormData] = useState({
    type: "",
    lotNumber: "",
    quantity: "",
    supplyDate: "",
    warrantyYears: "",
  });

  const [message, setMessage] = useState("");

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call (backend URL dalna padega)
      const res = await axios.post(
        "http://localhost:5000/api/part",
        formData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"), // login ke baad token save karna hoga
          },
        }
      );

      setMessage(res.data.message);
      setFormData({
        type: "",
        lotNumber: "",
        quantity: "",
        supplyDate: "",
        warrantyYears: "",
      });
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className='bg-white text-black p-6 rounded shadow w-full max-w-lg mx-auto'>
      <h2 className='text-2xl font-semibold mb-4'>Add New Part</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          name='type'
          value={formData.type}
          onChange={handleChange}
          placeholder='Part Type'
          className='border p-2 rounded'
          required
        />
        <input
          type='text'
          name='lotNumber'
          value={formData.lotNumber}
          onChange={handleChange}
          placeholder='Lot Number'
          className='border p-2 rounded'
          required
        />
        <input
          type='number'
          name='quantity'
          value={formData.quantity}
          onChange={handleChange}
          placeholder='Quantity'
          className='border p-2 rounded'
          required
        />
        <input
          type='date'
          name='supplyDate'
          value={formData.supplyDate}
          onChange={handleChange}
          className='border p-2 rounded'
          required
        />
        <input
          type='number'
          name='warrantyYears'
          value={formData.warrantyYears}
          onChange={handleChange}
          placeholder='Warranty (Years)'
          className='border p-2 rounded'
          required
        />
        <button
          type='submit'
          className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700'
        >
          Submit
        </button>
      </form>

      {message && <p className='mt-4 text-green-600'>{message}</p>}
    </div>
  );
}

export default Parts;

import { useState } from "react";
import axios from "axios";

function MQR() {
  const [formData, setFormData] = useState({
    partType: "",
    manufactureDate: "",
    lotNo: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/qr/generate",
        formData,
        {
          responseType: "blob", // file aa rahi hai
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // token add karna zaruri h
          },
        }
      );

      // ✅ PDF download logic
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `QR_${formData.partType}_${formData.lotNo}.pdf`
      );
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error("QR Generation Error:", err);
      alert("Failed to generate QR!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Generate QR Code</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* Part Type */}
        <div>
          <label className='block mb-1 font-medium'>Part Type</label>
          <input
            type='text'
            name='partType'
            value={formData.partType}
            onChange={handleChange}
            placeholder='Enter part type (e.g., Bolt)'
            className='w-full border p-2 rounded focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        {/* Manufacture Date */}
        <div>
          <label className='block mb-1 font-medium'>Manufacture Date</label>
          <input
            type='date'
            name='manufactureDate'
            value={formData.manufactureDate}
            onChange={handleChange}
            className='w-full border p-2 rounded focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        {/* Lot Number */}
        <div>
          <label className='block mb-1 font-medium'>Lot Number</label>
          <input
            type='text'
            name='lotNo'
            value={formData.lotNo}
            onChange={handleChange}
            placeholder='Enter lot number'
            className='w-full border p-2 rounded focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          disabled={loading}
          className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50'
        >
          {loading ? "Generating..." : "Generate QR PDF"}
        </button>
      </form>
    </div>
  );
}

export default MQR;

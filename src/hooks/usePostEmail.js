import { useState } from "react";
import axios from "axios";

const usePostEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Ambil URL API dari environment variable
  const API_URL = import.meta.env.VITE_API_URL

  const postEmail = async (email) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(`${API_URL}/api/subscribe`, { email });
      setSuccess(true);
      console.log("Success:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { postEmail, isLoading, error, success };
};

export default usePostEmail;

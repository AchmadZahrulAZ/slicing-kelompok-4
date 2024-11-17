import { useState } from "react";
import axios from "axios";

const useSendContact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // URL API dari environment variable
  const API_URL = import.meta.env.VITE_API_URL

  const sendContact = async (contactData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(`${API_URL}/api/contact`, contactData);
      setSuccess(true);
      console.log("Success:", response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendContact, isLoading, error, success };
};

export default useSendContact;

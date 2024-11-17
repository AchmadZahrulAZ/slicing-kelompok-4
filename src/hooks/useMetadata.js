import { useContext } from "react";
import { MetadataContext } from "../context/MetadataContext.jsx";

const useMetadata = (page) => {
  const { defaultMetadata, metadata } = useContext(MetadataContext);
  // Jika metadata halaman tidak ada, gunakan metadata default
  return metadata[page] || defaultMetadata;
};

export default useMetadata;

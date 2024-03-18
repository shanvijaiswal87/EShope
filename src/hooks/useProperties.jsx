import React from "react";

const useProperties = () => {
  const { data, isError, isLoading } = useQuery(
    "allProperties",
    getAllProprties,
    { refetchWindowsFocus: false }
  );

  return data, isError, isLoading, refetch;
};

export default useProperties;

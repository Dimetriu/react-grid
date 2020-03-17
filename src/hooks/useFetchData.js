import React from 'react';

export const useFetchData = ({
  defaultEndpoint,
  endpoint = null
}) => {
  const from = endpoint || defaultEndpoint;

  const [data, setData] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const fetchData = async endpoint => {
    try {
      const response = await fetch(endpoint);
      setData(await response.json());
    } catch (error) {
      setErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData(from);
  }, [from]);

  return { data, errorMessage, loading };
};
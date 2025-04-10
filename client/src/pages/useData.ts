import { useEffect, useState } from 'react';

function useData() {
  const [items, setItems] = useState<any[]>([]);

  function fetchItems() {
    fetch(`${process.env.API_URL}/items`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => {
        console.error('Failed to fetch items', err);
      });
  }

  useEffect(() => {
    fetchItems();
    const intervalID = setInterval(fetchItems, 10000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return items;
}

export default useData;

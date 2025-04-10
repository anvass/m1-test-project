import { useMemo, useState } from 'react';

function useSort(items: any[]): [any[], any, any] {
  const [sortBy, setSortBy] = useState('ASC');

  const sortedItems = useMemo(() => {
    const copyOfItems = [...items];

    if (sortBy === 'DESC') {
      return copyOfItems.sort((a, b) => a.id - b.id);
    }

    if (sortBy === 'ASC') {
      return copyOfItems.sort((a, b) => b.id - a.id);
    }

    return copyOfItems;
  }, [items, sortBy]);

  const handleSortClick = () => {
    if (sortBy === 'ASC') {
      setSortBy('DESC');
    } else if (sortBy === 'DESC') {
      setSortBy('ASC');
    } else {
      setSortBy('');
    }
  };

  return [sortedItems, sortBy, handleSortClick];
}

export default useSort;

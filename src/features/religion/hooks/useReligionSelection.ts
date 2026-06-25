import { useCallback, useState } from 'react';

import { type ReligionId } from '../types/religion';

export const useReligionSelection = () => {
  const [selectedId, setSelectedId] = useState<ReligionId | null>(null);

  const select = useCallback((id: ReligionId) => {
    setSelectedId(id);
  }, []);

  const isSelected = useCallback(
    (id: ReligionId) => selectedId === id,
    [selectedId],
  );

  return {
    hasSelection: selectedId !== null,
    isSelected,
    select,
    selectedId,
  };
};

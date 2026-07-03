import { useCallback, useState } from 'react';

import { type ReligionId } from '../../religion/types/religion';

export const useProfileTradition = (initial: ReligionId = 'hindu') => {
  const [selectedId, setSelectedId] = useState<ReligionId>(initial);

  const select = useCallback((id: ReligionId) => {
    setSelectedId(id);
  }, []);

  const isSelected = useCallback(
    (id: ReligionId) => selectedId === id,
    [selectedId],
  );

  return { isSelected, select, selectedId };
};

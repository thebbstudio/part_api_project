import React, { createContext, useState, useMemo } from 'react';

const defaultValue = '';

export const PaidDataContext = createContext(defaultValue);

function PaidDataProvider({ children }) {
  const [selectedPaidService, setSelectedPaidService] = useState(defaultValue);

  const value = useMemo(() => ([
    selectedPaidService,
    setSelectedPaidService,
  ]), [selectedPaidService]);

  return (
    <PaidDataContext.Provider value={value}>
      {children}
    </PaidDataContext.Provider>
  );
}

export default PaidDataProvider;

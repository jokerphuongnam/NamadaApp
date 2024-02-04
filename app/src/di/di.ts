import { iNamadaNetwork, NamadaImpl } from '@network/namada_network';
import { createContext, useContext } from 'react';

export interface DIContainer {
  namadaNetwork: iNamadaNetwork;
}

const DIContext = createContext<DIContainer | undefined>(undefined);

export const DIProvider: React.FC<{ children: React.ReactNode; container: DIContainer }> = ({
  children,
  container,
}) => {
  return DIContext.Provider({value: container, children: children});
};

export const useDI = () => {
  const container = useContext(DIContext);

  if (!container) {
    throw new Error('useDI must be used within a DIProvider');
  }

  return container;
};
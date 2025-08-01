export enum Month {
  JANVIER = 'Janvier', 
  FEVRIER = 'Février', 
  MARS = 'Mars',
  AVRIL = 'Avril',
  MAI = 'Mai',
  JUIN = 'Juin',
  JUILLET = 'Juillet',
  AOUT = 'Août',
  SEPTEMBRE = 'Septembre',
  OCTOBRE = 'Octobre',
  NOVEMBRE = 'Novembre',
  DECEMBRE = 'Décembre'
}

export function getCurrentMonth(): Month {
  const monthIndex = new Date().getMonth(); // 0 à 11
  const monthValues = Object.values(Month);
  return monthValues[monthIndex];
}
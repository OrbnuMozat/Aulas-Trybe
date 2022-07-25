import { PERSONAL_TYPE, PROFESSIONAL_TYPE } from './actionTypes';

export const personalAction = (personalData) => ({
  type: PERSONAL_TYPE,
  personalData,
});

export const professionalAction = (professionalData) => ({
  type: PROFESSIONAL_TYPE,
  professionalData,
});

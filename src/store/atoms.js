import { atom, selector } from 'recoil';

export const itemsStateAtom = atom({
  key: 'itemsStateAtom',
  default: [
    {
      id: 'e1',
      title: 'Tissues',
      amount: 64.21,
      date: new Date(2019, 7, 12),
    },
    {
      id: 'e2',
      title: 'Paper',
      amount: 50.20,
      date: new Date(2019, 7, 12),
    },
    {
      id: 'e3',
      title: 'Orange',
      amount: 12.64,
      date: new Date(2019, 7, 12),
    }
  ],
});

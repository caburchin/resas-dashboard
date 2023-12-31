'use client';
import dynamic from 'next/dynamic';

import { Prefecture } from '@/libs/resas/prefectures';

import { usePrefectureSelect, useSyncPrefCode } from '../usePrefectureSelect';
import * as classes from './PrefectureSelector.css';

const Checkbox = dynamic(() => import('@/libs/components/controls/Checkbox'), {
  ssr: false,
});

type Props = {
  prefectureOptions: Prefecture[];
};

export const PrefectureSelector = ({ prefectureOptions }: Props) => {
  const { selected, addPrefecture, removePrefecture } = usePrefectureSelect();
  useSyncPrefCode(prefectureOptions);

  const getIsSelected = (prefCode: number) =>
    selected.findIndex((_) => _.code === prefCode) > -1;
  const getOnChange = (pref: Prefecture) => (checked: boolean) => {
    const addOrRemove = checked ? addPrefecture : removePrefecture;
    addOrRemove(pref);
  };
  const getColor = (prefCode: number) => selected.find((_) => _.code === prefCode)?.color;

  return (
    <div data-testid="PrefectureSelector" className={classes.checkBoxGrid}>
      {prefectureOptions.map((option) => (
        <Checkbox
          bg={getColor(option.prefCode)}
          key={option.prefCode}
          onChange={getOnChange(option)}
          checked={getIsSelected(option.prefCode)}
        >
          {option.prefName}
        </Checkbox>
      ))}
    </div>
  );
};

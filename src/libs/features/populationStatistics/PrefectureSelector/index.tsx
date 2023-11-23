'use client';

import { Prefecture } from '@/libs/resas/prefectures';
import { Checkbox } from '@/libs/components/controls/Checkbox';
import { usePrefectureSelect, useSyncPrefCode } from '../usePrefectureSelect';
import * as classes from './PrefectureSelector.css';

type Props = {
  prefectureOptions: Prefecture[];
};

export const PrefectureSelector = ({ prefectureOptions }: Props) => {
  const { selected, addPrefecture, removePrefecture } = usePrefectureSelect();
  useSyncPrefCode();

  const getIsSelected = (prefCode: number) =>
    selected.findIndex((_) => _.code === prefCode) > -1;
  const getOnChange = (pref: Prefecture) => (checked: boolean) => {
    const addOrRemove = checked ? addPrefecture : removePrefecture;
    addOrRemove(pref);
  };

  return (
    <div className={classes.checkBoxGrid}>
      {prefectureOptions.map((option) => (
        <Checkbox
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

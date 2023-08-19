/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-cycle */
import Papa, { ParseResult } from 'papaparse';
import React from 'react';
import { useAppDispatch } from '../app/redux-hooks';
import { createSettings } from '../features/project/projectSlice';
import { addCoordinations } from '../features/result/resultSlice';
import { findMaxMinCoordinate } from '../utils';

export type Coordination = {
  KP: string;
  X: string;
  Y: string;
  Z: string;
};

const ReadFile = () => {
  const dispatch = useAppDispatch();
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files && event.target.files[0]) {
      Papa.parse(event?.target?.files[0], {
        header: true,
        skipEmptyLines: true,
        complete(results: ParseResult<Coordination>) {
          dispatch(addCoordinations(results?.data));
          const { max_x, max_y, max_z, min_x, min_y, min_z } =
            findMaxMinCoordinate(results?.data);
          dispatch(
            createSettings({
              max_x,
              max_y,
              max_z,
              min_x,
              min_y,
              min_z,
            })
          );
        },
      });
    }
  };
  return (
    <div>
      {/* File Uploader */}
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        style={{ display: 'block', margin: '10px auto' }}
      />
    </div>
  );
};

export default ReadFile;

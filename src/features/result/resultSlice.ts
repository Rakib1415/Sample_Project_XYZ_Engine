/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Coordination } from '../../components/ReadFile';
import { State } from '../project/projectSlice';

export interface ProjectItems {
  projects: Array<State>;
  coordinations: Array<Coordination>;
}

export const initialState: ProjectItems = {
  projects: [],
  coordinations: [],
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<State>) => {
      state.projects.push(action.payload);
    },
    addCoordinations: (state, action: PayloadAction<Coordination[]>) => {
      state.coordinations = action.payload;
    },
  },
});

export default resultSlice.reducer;
export const { addProject, addCoordinations } = resultSlice.actions;

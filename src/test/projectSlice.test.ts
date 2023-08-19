/* eslint-disable prettier/prettier */
import { describe, expect, it } from 'vitest';
import projectReducer, {
    State,
    clearProjectItem,
    createProjectInfo,
    createSettings,
    initialState,
} from '../features/project/projectSlice';

describe('Tests for ProjectSlice', () => {
  it('should return the initial state', () => {
    const projectSliceInit = projectReducer(initialState, { type: 'unknown' });
    expect(projectSliceInit).toBe(initialState);
  });

  it('should handle a project info. being added to an empty project Informations', () => {
    const previousState: State = initialState;
    expect(
      projectReducer(
        previousState,
        createProjectInfo({
          projectName: 'test',
          projectDescription: 'this is a test description',
          clientName: 'test client',
          contractorName: 'test contractor',
        })
      )
    ).toEqual({
      projectInformations: {
        projectName: 'test',
        projectDescription: 'this is a test description',
        clientName: 'test client',
        contractorName: 'test contractor',
      },
      projectSettings: {
        max_x: null,
        max_y: null,
        max_z: null,
        min_x: null,
        min_y: null,
        min_z: null,
      },
    });
  });

  it('should handle a project settings. being added to an empty project Settings', () => {
    const previousState: State = initialState;
    expect(
      projectReducer(
        previousState,
        createSettings({
          max_x: 0,
          max_y: 0,
          max_z: 0,
          min_x: 0,
          min_y: 0,
          min_z: 0,
        })
      )
    ).toEqual({
      projectInformations: {
        projectName: '',
        projectDescription: '',
        clientName: '',
        contractorName: '',
      },
      projectSettings: {
        max_x: 0,
        max_y: 0,
        max_z: 0,
        min_x: 0,
        min_y: 0,
        min_z: 0,
      },
    });
  });
  it("should handle a project clearItems being clear project info. and settings", () => {
    const previousState : State = {
        projectInformations: {
          projectName: 'test',
          projectDescription: 'this is a test description',
          clientName: 'test client',
          contractorName: 'test contractor',
        },
        projectSettings: {
          max_x: 100,
          max_y: 100,
          max_z: 100,
          min_x: 100,
          min_y: 100,
          min_z: 100,
        },
      }
    expect(projectReducer(previousState, clearProjectItem())).toEqual(initialState);
  })
});

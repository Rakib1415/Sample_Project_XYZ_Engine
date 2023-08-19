/* eslint-disable prettier/prettier */
import { describe, expect, it } from 'vitest';
import resultReducer, {
    ProjectItems,
    addCoordinations,
    addProject,
    initialState,
} from '../features/result/resultSlice';

describe('Tests for ResultSlice', () => {
  it('should return the initial state', () => {
    const resultSliceInit = resultReducer(initialState, {
      type: 'unknown',
    });
    expect(resultSliceInit).toBe(initialState);
  });
  it('should handle a project being added to an empty project list', () => {
    const previousState: ProjectItems = initialState;
  
    expect(resultReducer(previousState, addProject({
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
      }))).toEqual({
        projects : [
            {
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
        ],
        coordinations: []
      })
  })

  it('should handle a project being added to an existing project list', () => {
    const previousState: ProjectItems = {
        projects : [
            {
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
        ],
        coordinations: []
      };
  
    expect(resultReducer(previousState, addProject({
        projectInformations: {
          projectName: 'test 2',
          projectDescription: 'this is a test description 2',
          clientName: 'test client 2',
          contractorName: 'test contractor 2',
        },
        projectSettings: {
          max_x: 34,
          max_y: 34,
          max_z: 34,
          min_x: 34,
          min_y: 34,
          min_z: 34,
        },
      }))).toEqual({
        projects : [
            {
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
              },
              {
                projectInformations: {
                  projectName: 'test 2',
                  projectDescription: 'this is a test description 2',
                  clientName: 'test client 2',
                  contractorName: 'test contractor 2',
                },
                projectSettings: {
                  max_x: 34,
                  max_y: 34,
                  max_z: 34,
                  min_x: 34,
                  min_y: 34,
                  min_z: 34,
                },
              }
        ],
        coordinations: []
      })
  })

  it('should handle a coordination being added to an empty coordination list', () => {
    const previousState: ProjectItems = initialState;
  
    expect(resultReducer(previousState, addCoordinations([{
        KP: '233',
        X:'244',
        Y: '244',
        Z: '244',
      }]))).toEqual({
        projects : [],
        coordinations: [{
            KP: '233',
            X:'244',
            Y: '244',
            Z: '244',
          }]
      })
  })
  
});

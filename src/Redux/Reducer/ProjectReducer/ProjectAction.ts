import { CREATE_PROJECT, CREATE_PROJECT_AUTHOR } from './ProjectConstant';
import { ProjectModel } from '@Models/Project.types';
import { ResponseModalAPI } from '@Models/Global.types';

export const createProjectAction = (
  Project: ResponseModalAPI<ProjectModel>
) => {
  return {
    type: CREATE_PROJECT,
    payload: Project,
  } as const;
};

export const createProjectAuthorAction = (
  Project: ResponseModalAPI<ProjectModel>
) => {
  return {
    type: CREATE_PROJECT_AUTHOR,
    payload: Project,
  } as const;
};

export type ActionsProject = ReturnType<
  typeof createProjectAction | typeof createProjectAuthorAction
>;

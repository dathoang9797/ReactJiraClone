import { FETCH_PROJECTS } from './ProjectCyberBugsConstant';
import { ProjectModel } from '@Models/Project.types';
import { ResponseModalAPI } from '@Models/Global.types';

export const fetchProjects = (Projects: ResponseModalAPI<ProjectModel[]>) => {
  return {
    type: FETCH_PROJECTS,
    payload: Projects,
  } as const;
};

export type ActionsProject = ReturnType<typeof fetchProjects>;

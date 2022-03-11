import { FETCH_PROJECTS_CATEGORY } from './ProjectCategoryConstant';
import { ResponseModalAPI } from '@Models/Global.types';
import { ProjectsCategoryModal } from '@Models/ProjectCategory.types';

export const fetchProjectsCategory = (
  ProjectsCategory: Omit<ResponseModalAPI<ProjectsCategoryModal>, 'message'>
) => {
  return {
    type: FETCH_PROJECTS_CATEGORY,
    payload: ProjectsCategory,
  } as const;
};

export type ActionsProjectCategory = ReturnType<typeof fetchProjectsCategory>;

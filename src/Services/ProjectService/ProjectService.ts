import axios from 'axios';
import { baseUrlProject } from '@Utils/Domain/domainJira';
import { ProjectModel } from '@Models/Project.types';
import { TOKEN } from '@Utils/Constants/settingSystems';
import { UserModel } from '@Models/User.types';
import {
  FormValues,
  ResponseModalAPI,
  ErrResponseModalAPI,
} from '@Models/Global.types';

class ProjectService {
  private ProjectAPI = axios.create({
    baseURL: baseUrlProject,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem(TOKEN),
    },
  });

  public getAllProject = (keyword: string = '') =>
    this.ProjectAPI.get<ResponseModalAPI<ProjectModel[]>>(
      `/getAllProject?${keyword ? `keyword=${keyword}` : ''}`
    ).catch<ErrResponseModalAPI>((err) => err);

  public getProjectDetail = (projectId: ProjectModel['id']) =>
    this.ProjectAPI.get<ResponseModalAPI<ProjectModel>>(
      `/getProjectDetail?id=${projectId}`
    ).catch((err) => err);

  public createProject = (project: FormValues) =>
    this.ProjectAPI.post<ResponseModalAPI<ProjectModel>>(
      `/createProject`,
      project
    ).catch<ErrResponseModalAPI<ResponseModalAPI<string>>>((err) => err);

  public createProjectAuthorize = (project: FormValues) =>
    this.ProjectAPI.post<ResponseModalAPI<ProjectModel>>(
      `/createProjectAuthorize`,
      project
    ).catch<ErrResponseModalAPI<ResponseModalAPI<string>>>((err) => err);

  public assignUserProject = (project: {
    projectID: ProjectModel['id'];
    userId: UserModel['id'];
  }) =>
    this.ProjectAPI.post<ResponseModalAPI<ProjectModel>>(
      `/assignUserProject`,
      project
    ).catch((err) => err);

  public deleteProject = (projectId: ProjectModel['id']) =>
    this.ProjectAPI.delete<ResponseModalAPI<ProjectModel>>(
      `/deleteProject?projectId=${projectId}`
    ).catch((err) => err);

  public updateProject = (
    projectId: ProjectModel['id'],
    project: ProjectModel
  ) =>
    this.ProjectAPI.put<ResponseModalAPI<ProjectModel>>(
      `/updateProject?projectId=${projectId}`,
      project
    ).catch<ErrResponseModalAPI>((err) => err);
}

export default new ProjectService();

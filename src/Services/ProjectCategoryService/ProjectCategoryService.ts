import axios from 'axios';
import { baseUrlProjectCategory } from '@Utils/Domain/domainJira';
import { ErrResponseModalAPI, ResponseModalAPI } from '@Models/Global.types';
import { ProjectsCategoryModal } from '@Models/ProjectCategory.types';

class ProjectCategory {
  private projectCategoryAPI = axios.create({
    baseURL: baseUrlProjectCategory,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  });
  public getProjectCategory = () =>
    this.projectCategoryAPI
      .get<Omit<ResponseModalAPI<ProjectsCategoryModal>, 'message'>>('')
      .catch<ErrResponseModalAPI>((err) => err);
}

export default new ProjectCategory();

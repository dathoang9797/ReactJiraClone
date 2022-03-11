import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { connector, PropsFromReducer } from '@Redux/connect';
import { FormikProps, withFormik } from 'formik';
import { ProjectModel } from '@Models/Project.types';
import { SchemaOf } from 'yup';
import * as Yup from 'yup';

type FormValues = Pick<ProjectModel, 'projectName' | 'categoryName' | 'description'>;

const FormEditProjects = ({ modalDispatch }: PropsFromReducer & FormikProps<FormValues>) => {
  const handleOnEditorChange = (content: string, editor: TinyMCEEditor) => {};
  const editorRef = useRef<string | null>(null);

  const submitForm = (e: React.FormEvent<HTMLFormElement> | null) => {
    if (e) e.preventDefault();
    alert('Submit');
  };

  useEffect(() => {
    modalDispatch.setSubmitEditProject(submitForm);
  }, []);

  return (
    <form className='container' onSubmit={submitForm}>
      <div className='row'>
        <div className='col-4'>
          <div className='form-group'>
            <p>Id</p>
            <input type='text' disabled className='form-control' name='id' />
          </div>
        </div>
        <div className='col-4'>
          <div className='form-group'>
            <p>Project Name</p>
            <input type='text' className='form-control' name='projectName' />
          </div>
        </div>
        <div className='col-4'>
          <div className='form-group'>
            <p>Project Name</p>
            <input type='text' className='form-control' name='categoryName' />
          </div>
        </div>
        <div className='col-4'>
          <div className='form-group'>
            <p>Description</p>
            <input type='text' className='form-control' name='description' />
          </div>
        </div>
        <div className='col-12'>
          <div className='form-group'>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor.getContent())}
              onEditorChange={handleOnEditorChange}
              initialValue='<p>This is the initial content of the editor'
              init={{
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

const createProjectFormik = withFormik<PropsFromReducer, FormValues>({
  // Transform outer props into form values
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { projectsCategoryState } = props;

    return {
      categoryId: projectsCategoryState.projects[0]?.id,
      categoryName: '',
      projectName: '',
      description: '',
    };
  },

  validationSchema: Yup.object().shape({}) as SchemaOf<FormValues>,

  handleSubmit: (values, { props }) => {},

  displayName: 'CreateProjectFormik',
})(FormEditProjects);

export default connector(createProjectFormik);

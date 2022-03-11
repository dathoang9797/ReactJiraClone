import React from 'react';
import { Input, Button } from 'antd';
import { UserOutlined, TwitterOutlined } from '@ant-design/icons';
import {
  CardTitle,
  Form,
  GlobalContainer,
  LoginForm,
  SignUp,
  CardBody,
  CardText,
  FormGroup,
} from './Login.styles';
import { withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { SchemaOf } from 'yup';
import { connector, PropsFromReducer } from '@Redux/connect';
import { Layout } from 'antd';
const { Sider, Content } = Layout;

type FormValues = {
  email: string;
  passWord: string;
};

const Login = (props: FormikProps<FormValues> & PropsFromReducer) => {
  const { touched, values, handleChange, handleSubmit, errors, userState } = props;
  return (
    <>
      <Layout>
        <Sider
          width={'40%'}
          style={{
            height: '100vh',
            backgroundImage: 'url(https://picsum.photos/500)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></Sider>
        <GlobalContainer>
          <LoginForm className='card'>
            <CardBody className='card-body'>
              <CardTitle className='text-center'> Login To Continue</CardTitle>
              <CardText className='card-text'>
                <Form onSubmit={handleSubmit}>
                  <FormGroup className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Email </label>
                    <Input
                      size='large'
                      placeholder='large size'
                      prefix={<UserOutlined />}
                      name='email'
                      onChange={handleChange}
                    />
                    <div className='text-danger'>{errors.email}</div>
                  </FormGroup>
                  <FormGroup className='form-group'>
                    <label htmlFor='exampleInputPassword1'>Password</label>
                    <Input.Password
                      placeholder='input password'
                      name='passWord'
                      onChange={handleChange}
                    />
                    <div className='text-danger'>{errors.passWord}</div>
                  </FormGroup>
                  <Button
                    htmlType='submit'
                    type='primary'
                    size='large'
                    style={{
                      width: '100%',
                      backgroundColor: 'rgb(102,117,223)',
                    }}
                  >
                    Sign In
                  </Button>
                  <SignUp className='sign-up'>
                    Don't have an account? <a href='#@'>Create One</a>
                  </SignUp>
                  <div className='social d-flex justify-content-center'>
                    <Button
                      style={{
                        backgroundColor: 'rgb(59,89,152)',
                        marginRight: 10,
                      }}
                      shape='circle'
                      size='large'
                    >
                      <span className='font-weight-bold' style={{ color: '#fff' }}>
                        F
                      </span>
                    </Button>
                    <Button
                      type='primary'
                      shape='circle'
                      icon={<TwitterOutlined />}
                      size='large'
                    ></Button>
                  </div>
                </Form>
              </CardText>
            </CardBody>
          </LoginForm>
        </GlobalContainer>
      </Layout>
    </>
  );
};

const LoginCyberWithFormik = withFormik<PropsFromReducer, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      email: '',
      passWord: '',
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    passWord: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(32, 'Password must be at max 6 characters'),
  }) as SchemaOf<FormValues>,

  handleSubmit: (values, { props }) => {
    const { userDispatch } = props;
    userDispatch.signInUser(values);
  },
  displayName: ' Login To Continue',
})(Login);

export default connector(LoginCyberWithFormik);

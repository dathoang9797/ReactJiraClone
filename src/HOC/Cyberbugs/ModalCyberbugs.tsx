import React from 'react';
import { Drawer, Button, Select, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { PropsFromReducer, connector } from '@Redux/connect';

const ModalCyberbugs = ({ modalState, modalDispatch }: PropsFromReducer) => {
  const { ComponentContentDrawer, visible, callBackSubmit } = modalState;
  console.log(callBackSubmit);

  const showDrawer = () => {
    modalDispatch.toggleModal(true);
  };

  const onClose = () => {
    modalDispatch.toggleModal(false);
  };

  return (
    <>
      <Button type='primary' onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button>
      <Drawer
        title='Create a new account'
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              onClick={() => {
                callBackSubmit(null);
              }}
              type='primary'
              htmlType='submit'
            >
              Submit
            </Button>
          </Space>
        }
      >
        {ComponentContentDrawer}
      </Drawer>
    </>
  );
};

export default connector(ModalCyberbugs);

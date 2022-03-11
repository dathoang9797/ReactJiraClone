import React from 'react';
import {
  ModalBody,
  ModalSearchContainer,
  ModalSearchCss,
  ModalContent,
  ModalHeader,
  ModalSearchBlock,
} from './ModalSearch.styles';

const ModalSearch = () => {
  return (
    <>
      <ModalSearchContainer
        className='modal fade'
        id='searchModal'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='searchModal'
        aria-hidden='true'
      >
        <ModalSearchCss className='modal-dialog'>
          <ModalContent className='modal-content'>
            <ModalHeader className='modal-header'>
              <ModalSearchBlock>
                <input className='search' />
                <i className='fa fa-search'></i>
              </ModalSearchBlock>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </ModalHeader>
            <ModalBody className='modal-body'>
              <p>RECENT ISSUES</p>
              <div style={{ display: 'flex' }}>
                <div className='icon'>
                  <i className='fa fa-bookmark'></i>
                </div>
                <div>
                  <p>cyberlearn</p>
                  <p>BUG-238066</p>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </ModalSearchCss>
      </ModalSearchContainer>
    </>
  );
};

export default ModalSearch;

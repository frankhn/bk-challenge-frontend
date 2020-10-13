import React from 'react';
import { Modal } from 'reactstrap';

export interface ImodalProps {
  children?: React.ReactElement;
  isOpen: boolean;
  toggle?: any;
  centered?: boolean;
  closeModal?: any;
  title: string;
}

const modal: React.FC<ImodalProps> = (props: ImodalProps) => {
  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggle}
      centered={props.centered}
    >
      <div className="modal-header">
        <h5 className="modal-title mt-0" id="myModalLabel">
          {props.title}
        </h5>
        <button
          type="button"
          onClick={props.closeModal}
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">{props.children}</div>
    </Modal>
  );
};

export default modal;

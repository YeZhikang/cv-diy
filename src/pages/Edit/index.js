import React from 'react';
import './index.scss'
import {ProfileForm} from '../../components/Form'

export const Edit = () => {
  return (
    <div className={'edit-container'}>
      <div className="edit-container__header">
        <h3 className="header__title font--llg font--fat">编辑简历</h3>
        <h5 className="header__description font--thin font--sm">在这里进行简历编辑，然后点击「确定」查看模版</h5>
      </div>
      <div className="edit-container__body">
        <ProfileForm/>
      </div>
    </div>
  )
};

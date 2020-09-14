import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'zent';
import { mapRoutes } from '../../config/router';
import './index.scss';

const MenuCard = ({ style, to, title, content }) => {
  const history = useHistory();

  return (
    <div onClick={() => history.push(to)} className={'content__item'}>
      <Card className={'menu-card'} style={style} title={title}>
        {content}
      </Card>
    </div>
  );
};

export const Index = () => {
  return (
    <div className={'index-container'}>
      <div className="index-container__content">
        <MenuCard to={mapRoutes.EDIT} title={'新建简历'} content={<p>创建一个新简历</p>} />
        <MenuCard to={mapRoutes.HISTORY} title={'历史简历'} content={<p>查看历史制作的简历</p>} />
      </div>
    </div>
  );
};

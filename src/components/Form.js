import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, FormStrategy, Icon, Form } from 'zent';
import { useImageCache } from '../hooks/image';
import cx from 'classnames';
import { useProfileData } from '../hooks/profile';

const ImageUpload = ({ item, imageCache = {}, setImageCache }) => {
  const imageRef = useRef(null);
  const uploadRef = useRef(null);

  const handleUpload = () => {
    uploadRef.current.click();
  };

  const handleSure = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      setImageCache((cache) => {
        const pre = { ...cache };
        pre[item.name] = this.result;
        return pre;
      });
    };
  };

  return (
    <div className="image-upload">
      <div onClick={handleUpload} className="image-review">
        {imageCache[item.name] ? (
          <img className={'image-review__content'} ref={imageRef} src={imageCache[item.name]} />
        ) : (
          <Icon type="more" />
        )}
      </div>
      <input onChange={handleSure} ref={uploadRef} type="file" className={'file-input'} />
    </div>
  );
};

const isShowImage = (name) => {
  const imageShowFields = [/^eduTime$/, /^company-[0-9]+$/];
  return imageShowFields.some((matchTest) => name.match(matchTest));
};

const FormFieldGroup = ({ imageCache, setImageCache, item, isSub, handleAddItem }) => {
  const fieldGroupClassNames = cx('field-group', { 'is-sub': isSub, 'is-highlight': isSub || item.isArray });
  return (
    <div className={fieldGroupClassNames}>
      {isShowImage(item.name) && <ImageUpload imageCache={imageCache} setImageCache={setImageCache} item={item} />}
      {((isSub && item.isFirst) || !isSub || item.isArray) && (
        <div onClick={() => handleAddItem(item)} className="field-group__title">
          {(isSub || item.isArray) && <Icon type="plus-circle-o" />} &nbsp;
          {item.title}
        </div>
      )}
      {item.fields.map((field) =>
        field.fields ? (
          <FormFieldGroup
            imageCache={imageCache}
            setImageCache={setImageCache}
            handleAddItem={handleAddItem}
            isSub
            item={field}
          />
        ) : (
          <field.Component
            key={field.name}
            name={field.name}
            label={field.label}
            required={field.required}
            props={field.props}
            defaultValue={field.defaultValue}
            validators={field.validators}
          >
            {field.children}
          </field.Component>
        ),
      )}
    </div>
  );
};

const FormFieldItem = ({ item }) => {
  return (
    <item.Component
      key={item.name}
      name={item.name}
      label={item.label}
      required={item.required}
      props={item.props}
      defaultValue={item.defaultValue}
      validators={item.validators}
    >
      {item.children}
    </item.Component>
  );
};

export const ProfileForm = () => {
  const form = Form.useForm(FormStrategy.View);
  const [profileData, dispatch] = useProfileData();
  const [imageCache, setImageCache] = useState({});
  const history = useHistory();
  console.log('render');

  const handleAddItem = (item) => {
    dispatch(item.name);
  };

  const handleSure = () => {
    console.log(form.getValue());
  };

  const handleCancel = () => {
    history.push('/');
  };

  return (
    <Form layout="horizontal" form={form}>
      {profileData.map((item) => {
        if (item.fields) {
          return (
            <FormFieldGroup
              imageCache={imageCache}
              setImageCache={setImageCache}
              handleAddItem={handleAddItem}
              item={item}
            />
          );
        } else {
          return <FormFieldItem item={item} />;
        }
      })}
      <div className={'form__footer'}>
        <Button onClick={handleSure} type="primary">
          确定
        </Button>
        <Button onClick={handleCancel}>取消</Button>
      </div>
    </Form>
  );
};

import {
  Validators,
  FormInputField,
  Radio,
  FormRadioGroupField,
  FormNumberInputField,
  FormCheckboxField,
  FormDateRangePickerField,
} from 'zent';
import React from 'react';
/**
 * 简历的组成部分
 */
export const profileConfig = {
  // 基本信息
  baseInfo: {
    // 姓名
    name: '',
    // 年龄
    age: '',
    // 性别
    gender: '',
  },
  // 校园经历
  inSchool: {
    // 毕业院校
    school: '',
    // 毕业专业
    major: '',
    // 毕业时间
    eduTime: '',
    highlight: [
      {
        highlightTitle: '',
        text: '',
      },
    ],
  },
  // 联系方式
  contact: {
    phone: '',
    email: '',
  },
  // 个人优势
  advantages: [
    {
      title: '',
      detail: '',
    },
  ],
  // 项目经历
  projects: [
    {
      title: '',
      highlight: [
        {
          highlightTitle: '',
          text: '',
        },
      ],
      // 详细记录
      detail: '',
      // 链接地址
      link: '',
      // 起止时间
      time: '',
    },
  ],
  // 工作经历
  works: [
    {
      // 公司名
      title: '',
      highlight: [
        {
          highlightTitle: '',
          text: '',
        },
      ],
      detail: '',
      // 公司 logo url
      companyLogo: '',
      // 起止时间
      time: '',
    },
  ],
};

/**
 * 简历配置项
 */
export const baseInfoFormFields = {
  name: 'baseInfo',
  title: '基本信息',
  fields: [
    {
      name: 'name',
      label: '姓名',
      required: true,
      props: {
        spellCheck: false,
        placeholder: '输入姓名',
      },
      Component: FormInputField,
    },
    {
      name: 'age',
      label: '年龄',
      defaultValue: 22,
      props: {
        showStepper: true,
        placeholder: '输入年龄',
      },
      Component: FormNumberInputField,
    },
    {
      name: 'sex',
      label: '性别',
      required: true,
      validators: [Validators.required('请选择性别')],
      Component: FormRadioGroupField,
      children: (
        <>
          <Radio value="1">男</Radio>
          <Radio value="2">女</Radio>
        </>
      ),
    },
  ],
};

export const educationFormFields = {
  name: 'eduTime',
  title: '教育经历',
  fields: [
    {
      name: 'school',
      label: '毕业院校',
      required: true,
      props: {
        spellCheck: false,
        placeholder: '输入学校',
      },
      Component: FormInputField,
    },
    {
      name: 'major',
      label: '专业',
      required: true,
      props: {
        spellCheck: false,
        placeholder: '输入专业',
      },
      Component: FormInputField,
    },
    {
      name: 'eduTime',
      label: '教育时间',
      required: true,
      Component: FormDateRangePickerField,
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
      validators: [
        function required(value) {
          if (!value[0] || !value[1]) {
            return {
              name: 'required',
              message: '请填写有效期',
            };
          }
        },
      ],
    },
    {
      name: 'eduTime-highlight-1',
      title: '突出表现',
      currKey: 1,
      isArray: true,
      isFirst: true,
      fields: [
        {
          name: 'eduTime-highlight-title-1',
          label: '事件名',
          required: true,
          Component: FormInputField,
          props: {
            placeholder: '输入事件',
            spellCheck: true,
          },
        },
        {
          name: 'eduTime-description-title-1',
          label: '描述',
          required: true,
          Component: FormInputField,
          props: {
            placeholder: '输入描述',
            spellCheck: true,
            type: 'textarea',
            showCount: true,
            width: '400px',
            maxCharacterCount: 10
          },
        },
      ],
    },
  ],
};

export const contactFormFields = {
  name: 'contact',
  title: '联系方式',
  fields: [
    {
      name: 'phone',
      label: '电话号码',
      required: true,
      props: {
        spellCheck: false,
        placeholder: '输入电话号码',
      },
      Component: FormInputField,
    },
    {
      name: 'email',
      label: '邮箱',
      required: true,
      props: {
        spellCheck: false,
        placeholder: '输入邮箱',
      },
      Component: FormInputField,
    },
  ],
};

export const advantageFormFields = {
  name: 'advantage',
  title: '个人优势',
  isArray: true,
  fields: [
    {
      name: 'advantage-1',
      title: '优势',
      currKey: 1,
      fields: [
        {
          name: 'advantage-title-1',
          label: '主题',
          required: true,
          props: {
            spellCheck: false,
            placeholder: '输入主题',
          },
          Component: FormInputField,
        },
        {
          name: 'advantage-description-1',
          label: '细节',
          required: true,
          props: {
            spellCheck: false,
            placeholder: '输入细节',
            type: 'textarea',
            width: '400px',
          },
          Component: FormInputField,
        },
      ]
    }
  ]
}

export const companyFormFields = {
  name: 'company',
  title: '公司经历',
  isArray: true,
  fields: [
    {
      name: 'company-1',
      title: '公司',
      currKey: 1,
      fields: [
        {
          name: 'company-1-title',
          label: '公司名称',
          required: true,
          props: {
            spellCheck: false,
            placeholder: '输入主题',
          },
          Component: FormInputField,
        },
        {
          name: 'company-1-detail',
          label: '工作职责',
          required: true,
          props: {
            spellCheck: false,
            placeholder: '输入工作职责',
            type: 'textarea',
            width: '400px'
          },
          Component: FormInputField,
        },
        {
          name: 'company-1-time',
          label: '起止时间',
          required: true,
          props: {
            spellCheck: false,
            placeholder: '输入主题',
          },
          Component: FormDateRangePickerField,
        },
        {
          name: 'company-1-highlight-1',
          title: '工作亮点',
          currKey: 1,
          isArray: true,
          isFirst: true,
          fields: [
            {
              name: 'company-1-highlight-1-title',
              label: '事件名',
              required: true,
              Component: FormInputField,
              props: {
                placeholder: '输入事件',
                spellCheck: true,
              },
            },
            {
              name: 'company-1-highlight-1-description',
              label: '描述',
              required: true,
              Component: FormInputField,
              props: {
                placeholder: '输入描述',
                spellCheck: true,
                type: 'textarea',
                showCount: true,
                width: '400px',
                maxCharacterCount: 10
              },
            },
          ],
        },
      ]
    }
  ]
}

export const projectFormFields = {
  name: 'project',
  title: '项目经历',
  isArray: true,
  fields: [
    {
      name: 'project-1',
      title: '项目',
      currKey: 1,
      fields: [
        {
          name: 'project-1-title',
          label: '项目名称',
          required: true,
          props: {
            spellCheck: false,
            placeholder: '输入主题',
          },
          Component: FormInputField,
        },
        {
          name: 'project-1-detail',
          label: '项目描述',
          required: true,
          props: {
            spellCheck: false,
            placeholder: '输入主题',
            type: 'textarea',
            width: '400px'
          },
          Component: FormInputField,
        },
        {
          name: 'project-1-link',
          label: '链接地址',
          required: true,
          props: {
            spellCheck: false,
            placeholder: '输入主题',
          },
          Component: FormInputField,
        },
        {
          name: 'project-1-time',
          label: '起止时间',
          required: true,
          props: {
            spellCheck: false,
            placeholder: '输入主题',
          },
          Component: FormDateRangePickerField,
        },
        {
          name: 'project-1-highlight-1',
          title: '亮点',
          currKey: 1,
          isArray: true,
          isFirst: true,
          fields: [
            {
              name: 'project-1-highlight-1-title',
              label: '事件名',
              required: true,
              Component: FormInputField,
              props: {
                placeholder: '输入事件',
                spellCheck: true,
              },
            },
            {
              name: 'project-1-highlight-1-description',
              label: '描述',
              required: true,
              Component: FormInputField,
              props: {
                placeholder: '输入描述',
                spellCheck: true,
                type: 'textarea',
                showCount: true,
                width: '400px',
                maxCharacterCount: 10
              },
            },
          ],
        },
      ]
    }
  ]
}
import { FormDateRangePickerField, FormInputField } from 'zent';

export const educationHighlightTemplate = (key) => ({
  name: 'eduTime-highlight-' + key,
  title: '突出表现',
  isFirst: false,
  fields: [
    {
      name: `eduTime-highlight-title-${key}`,
      label: '事件名',
      required: true,
      Component: FormInputField,
      props: {
        placeholder: '输入事件',
        spellCheck: true,
      },
    },
    {
      name: `eduTime-highlight-description-${key}`,
      label: '描述',
      required: true,
      Component: FormInputField,
      props: {
        placeholder: '输入描述',
        spellCheck: true,
        type: 'textarea',
        width: '400px',
        showCount: true,
        maxCharacterCount: 1000,
      },
    },
  ],
})

export const advantageTemplate = (key) => ({
  name: 'advantage-' + key,
  title: '优势',
  isFirst: false,
  fields: [
    {
      name: 'advantage-title-' + key,
      label: '事件名',
      required: true,
      Component: FormInputField,
      props: {
        placeholder: '输入事件',
        spellCheck: true,
      },
    },
    {
      name: 'advantage-description-' + key,
      label: '描述',
      required: true,
      Component: FormInputField,
      props: {
        placeholder: '输入描述',
        spellCheck: true,
        width: '400px',
        type: 'textarea',
        showCount: true,
        maxCharacterCount: 1000,
      },
    },
  ],
})

export const companyHighlightTemplate = (key, parKey) => ({
  name: `company-${parKey}-highlight-${key}`,
  title: '工作亮点',
  currKey: 1,
  fields: [
    {
      name: `company-${parKey}-highlight-${key}-title`,
      label: '事件名',
      required: true,
      Component: FormInputField,
      props: {
        placeholder: '输入事件',
        spellCheck: true,
      },
    },
    {
      name: `company-${parKey}-highlight-${key}-description`,
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
})

export const projectHighlightTemplate = (key, parKey) => ({
  name: `project-${parKey}-highlight-${key}`,
  title: '亮点',
  currKey: 1,
  fields: [
    {
      name: `project-${parKey}-highlight-${key}-title`,
      label: '事件名',
      required: true,
      Component: FormInputField,
      props: {
        placeholder: '输入事件',
        spellCheck: true,
      },
    },
    {
      name: `project-${parKey}-highlight-${key}-description`,
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
});

export const projectTemplate = (key) => ({
  name: `project-${key}`,
  title: '项目',
  currKey: 1,
  fields: [
    {
      name: `project-${key}-title`,
      label: '项目名称',
      required: true,
      props: {
        spellCheck: false,
        placeholder: '输入主题',
      },
      Component: FormInputField,
    },
    {
      name: `project-${key}-detail`,
      label: '项目描述',
      required: true,
      props: {
        spellCheck: false,
        placeholder: '输入主题',
      },
      Component: FormInputField,
    },
    {
      name: `project-${key}-link`,
      label: '链接地址',
      required: true,
      props: {
        spellCheck: false,
        placeholder: '输入主题',
      },
      Component: FormInputField,
    },
    {
      name: `project-${key}-time`,
      label: '起止时间',
      required: true,
      props: {
        spellCheck: false,
        placeholder: '输入主题',
      },
      Component: FormDateRangePickerField,
    },
    {
      name: `project-${key}-highlight-1`,
      title: '亮点',
      currKey: 1,
      isArray: true,
      isFirst: true,
      fields: [
        {
          name: `project-${key}-highlight-1-title`,
          label: '事件名',
          required: true,
          Component: FormInputField,
          props: {
            placeholder: '输入事件',
            spellCheck: true,
          },
        },
        {
          name: `project-${key}-highlight-1-description`,
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
})

export const companyTemplate = (key) => ({
  name: `company-${key}`,
  title: '公司',
  currKey: 1,
  fields: [
    {
      name: `company-${key}-title`,
      label: '公司名称',
      required: true,
      props: {
        spellCheck: false,
        placeholder: '输入主题',
      },
      Component: FormInputField,
    },
    {
      name: `company-${key}-detail`,
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
      name: `company-${key}-time`,
      label: '起止时间',
      required: true,
      props: {
        spellCheck: false,
        placeholder: '输入主题',
      },
      Component: FormDateRangePickerField,
    },
    {
      name: `company-${key}-highlight-1`,
      title: '工作亮点',
      currKey: 1,
      isArray: true,
      isFirst: true,
      fields: [
        {
          name: `company-${key}-highlight-1-title`,
          label: '事件名',
          required: true,
          Component: FormInputField,
          props: {
            placeholder: '输入事件',
            spellCheck: true,
          },
        },
        {
          name: `company-${key}-highlight-1-description`,
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
})
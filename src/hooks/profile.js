import { useImmerState } from './immer';
import {
  advantageFormFields,
  baseInfoFormFields,
  companyFormFields,
  contactFormFields,
  educationFormFields,
  projectFormFields,
} from '../config/profile';
import { useCallback, useMemo } from 'react';
import {
  advantageTemplate,
  companyHighlightTemplate,
  companyTemplate,
  educationHighlightTemplate,
  projectHighlightTemplate,
  projectTemplate,
} from '../config/field-template';

const addFields = (itemName, templateFn, parKey, isChild = false) => (draft) => {
  console.log(parKey);
  const profileFields = isChild ? draft.fields[parKey - 1].fields : draft.fields;
  const firstItem = profileFields.find((item) => item.name.includes(itemName));
  const key = firstItem.currKey + 1;
  firstItem.currKey = key;
  profileFields.push(templateFn(key, parKey));
};

export const useProfileData = () => {
  const [baseInfo, setBaseInfo] = useImmerState(baseInfoFormFields);
  const [contact, setContact] = useImmerState(contactFormFields);
  const [eduction, setEducation] = useImmerState(educationFormFields);
  const [advantage, setAdvantage] = useImmerState(advantageFormFields);
  const [company, setCompany] = useImmerState(companyFormFields);
  const [project, setProject] = useImmerState(projectFormFields);

  const profileData = useMemo(() => {
    return [baseInfo, contact, eduction, advantage, company, project];
  }, [eduction, contact, baseInfo, advantage, company, project]);

  const dispatch = useCallback((itemName) => {
    if (itemName.match(/eduTime-highlight-[0-9]+/)) {
      setEducation(addFields(itemName, educationHighlightTemplate));
    } else if (itemName.match(/^advantage$/)) {
      setAdvantage(addFields(itemName, advantageTemplate));
    } else if (itemName.match(/project-[0-9]+-highlight-[0-9]+/)) {
      const parKey = itemName.split('-')[1];
      setProject(addFields(itemName, projectHighlightTemplate, parKey, true));
    } else if (itemName.match(/^project$/)) {
      setProject(addFields(itemName, projectTemplate));
    } else if (itemName.match(/company-[0-9]+-highlight-[0-9]+/)) {
      const parKey = itemName.split('-')[1];
      setCompany(addFields(itemName, companyHighlightTemplate, parKey, true));
    } else if (itemName.match(/^company$/)) {
      setCompany(addFields(itemName, companyTemplate));
    }

    console.log(itemName);
  }, []);

  return [profileData, dispatch];
};

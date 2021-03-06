import langData from '../../lang';

export default ({ id }) => {
  try {
    if (!window.lang) window.lang = 'cn';
    return langData[window.lang][id].toString();
  } catch (e) {
    console.log('No lang:', id);
    return id.toString();
  }
};

const LangStr = id => {
  try {
    if (!window.lang) window.lang = 'cn';
    return langData[window.lang][id];
  } catch (e) {
    console.log(e);
    console.log('No lang:', id);
    return id.toString();
  }
};

export { LangStr };

import classnames from 'classnames/bind';
import style from './index.scss';
import { LangStr } from '../../../components';
import _ from 'lodash';

export default ({ option, data, log, uiMini }) => {
  let Content = [];
  let Subtitle = [];
  if (window.active) {
    if (uiMini) {
      option.forEach(item =>
        Subtitle.push(
          <span key={item}>{` ${LangStr(`encounter.${item}`)}: ${_.result(data, item)}`}</span>
        )
      );
    } else {
      Subtitle = data.name !== 'Encounter' ? <span>{` · ${data.name}`}</span> : null;
    }

    Content = (
      <span className={classnames.bind(style)('zone', { uiMini: uiMini })}>
        <a
          href={`http://ff14.huijiwiki.com/wiki/${data.zone.split(' ')[0]}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {data.zone}
        </a>
        {Subtitle}
      </span>
    );
  } else {
    Content = (
      <span className={classnames.bind(style)('zone', { uiMini: uiMini })}>
        <a
          href="https://github.com/canisminor1990/ffxiv-cmskin"
          rel="noopener noreferrer"
          target="_blank"
        >
          CanisMinor Act
        </a>
        <span>{` · ${log.version}`}</span>
      </span>
    );
  }

  return <div className={style.view}>{Content}</div>;
};

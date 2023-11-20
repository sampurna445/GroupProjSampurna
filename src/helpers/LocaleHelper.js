import {I18n} from 'i18n-js';
import en from '../../translations/en.json';
import fr from '../../translations/fr.json';

const i18n = new I18n({
  ...en,
  ...fr,
});

i18n.locale = 'fr';

export default i18n;

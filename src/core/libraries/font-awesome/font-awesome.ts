import { library } from '@fortawesome/fontawesome-svg-core';

// prettier-ignore
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

// prettier-ignore
import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faCheck,
  faClipboard,
  faClipboardCheck,
  faDownload,
  faPlus,
  faSpinnerThird,
  faTrash,
  faXmark,
  faYinYang,
} from '@fortawesome/pro-light-svg-icons';

const buildLibrary = (): void => {
  // prettier-ignore
  library.add(
    // Brands
    faGoogle,
    // Lights
    faArrowLeft,
    faArrowRight,
    faBars,
    faCheck,
    faClipboard,
    faClipboardCheck,
    faDownload,
    faPlus,
    faSpinnerThird,
    faTrash,
    faXmark,
    faYinYang,
  );
};

export default { buildLibrary };

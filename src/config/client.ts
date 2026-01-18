import { PLAUSIBLE_DOMAIN, PLAUSIBLE_SCRIPT_URL, SITE_URL } from 'astro:env/client';

import { configClientSchema } from '@/schemas/config';
import { validateData } from '@/utils/validation';

import type { ConfigClientType } from '@/types/config';

const configClientData: ConfigClientType = {
  /** all urls without '/' */
  SITE_URL,
  /** same for all environments, defined here, not env var */
  SITE_URL_CANONICAL: 'https://jeffwilliams.dev',
  SITE_TITLE: 'Jeff Williams',
  SITE_DESCRIPTION: 'Data Engineer building scalable data infrastructure and pipelines',
  PLAUSIBLE_SCRIPT_URL,
  PLAUSIBLE_DOMAIN,
  PAGE_SIZE_POST_CARD: 3,
  PAGE_SIZE_POST_CARD_SMALL: 6,
  PAGE_SIZE_PROJECT_CARD: 6,
  MORE_POSTS_COUNT: 3,
  BLUR_IMAGE_DELAY: 200,
  DEFAULT_MODE: 'light',
  DEFAULT_THEME: 'default-light',
  AUTHOR_NAME: 'Jeff Williams',
  AUTHOR_EMAIL: 'jeffwilliams2030@gmail.com',
  AUTHOR_GITHUB: 'https://github.com/jeffwilliams2',
  AUTHOR_LINKEDIN: 'https://www.linkedin.com/in/jefferywilliams4',
  AUTHOR_TWITTER: '',
  AUTHOR_YOUTUBE: '',
  REPO_URL: 'https://github.com/jeffwilliams2/jeff.portfolio.v2',
};

export const CONFIG_CLIENT = validateData(configClientData, configClientSchema);

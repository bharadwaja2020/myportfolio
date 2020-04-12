import React from 'react';
import { FormattedMessage } from 'react-intl';

import { CopyWrapper } from '../../commons/copy_wrapper/copy_wrapper';

// import { ReactComponent as TwitterIcon } from '../../../assets/icons/brands/twitter.svg';
// import { ReactComponent as FacebookIcon } from '../../../assets/icons/brands/facebook.svg';
import { ReactComponent as GitHubIcon } from '../../../assets/icons/brands/github.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/icons/brands/linkedin.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/share.svg';

export const SHARE_LINKS_DATA = Object.freeze({
    linkedIn: {
        icon: LinkedInIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.link.message"
                defaultMessage="Check out my Linked in Profile"
                values={{ platform: 'LinkedIn' }}
            />
        ),
        getLink: 'https://www.linkedin.com/in/abdul-mukheem-shaik/'
    },
    gitHub: {
        icon: GitHubIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.github.tooltip"
                defaultMessage="Check out my Github Profile"
                values={{ platform: 'GitHub' }}
            />
        ),
        getLink: 'https://github.com/Mukheem'
    },
    copyShareUrl: {
        icon: props => (
            <CopyWrapper value={(typeof window === 'undefined' ? {} : window).location?.href}>
                <ShareIcon {...props} />
            </CopyWrapper>
        ),
        tooltipTranslation: <FormattedMessage id="Footer.shareLinks.copyUrl" defaultMessage="Copy profile's URL" />
    }
});

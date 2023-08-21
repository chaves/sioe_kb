let apiPath: string;
let siteUrl: string;

if (process.env.NODE_ENV === 'development') {
	apiPath = 'http://sioe_call_api.test/api/';
	// apiPath = 'https://api.sioe.org/api/';
	siteUrl = 'http://localhost:5173/'
} else {
	apiPath = 'https://api.sioe.org/api/';
	siteUrl = 'https://kb.sioe.org/'
}

const CONFERENCE_YEAR = '2023';
const CONFERENCE_EMAIL = 'conference2023@sioe.org';
const CONFERENCE_TITLE = '27th Annual ISNIE / SIOE Conference';
const SITE_EMAIL = 'webmaster@sioe.org';

export const vars = {
	apiPath,
	siteUrl,
	CONFERENCE_YEAR,
	CONFERENCE_EMAIL,
	CONFERENCE_TITLE,
	SITE_EMAIL
};

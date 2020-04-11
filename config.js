const description = 'Ultimate Frisbee Sports Club from South Bangalore';
module.exports = {
    siteTitle: 'Thatte Idli Kaal Soup', // <title>
    siteDescription: description,
    siteKeywords:
        'Ultimate Frisbee, Bangalore, Jayanagar, South Bangalore, Fitness, Sports, Frisbee, Friends, Sports Club, TIKS, Thatte Idli Kaal Soup',
    manifestName: 'Stylish',
    manifestShortName: 'Landing', // max 12 characters
    manifestStartUrl: '/',
    manifestBackgroundColor: '#663399',
    manifestThemeColor: '#663399',
    manifestDisplay: 'standalone',
    manifestIcon: 'src/assets/img/website-icon.png',
    pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
    heading: 'Thatte Idli Kaal Soup',
    subHeading: description,

    // social
    socialLinks: [
        {
            icon: 'icon-social-instagram',
            name: 'Instagram',
            url: 'https://instagram.com/thatteidlikaalsoup'
        },
        {
            icon: 'icon-social-facebook',
            name: 'Facebook',
            url: 'https://facebook.com/Thatte-Idli-Kaal-Soup-448323595322728'
        },
        {
            icon: 'icon-social-email',
            name: 'Email',
            url: 'tiks.india.ultimate@gmail.com'
        },
        {
            icon: 'icon-social-github',
            name: 'Github',
            url: 'https://github.com/thatte-idli-kaal-soup'
        }
    ],
    email: 'tiks.india.ultimate@gmail.com',
    phone: '000-00000',
    address: 'Jayanagar, Banglaore, India'
};

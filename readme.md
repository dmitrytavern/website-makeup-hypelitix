# **Hypelitix**

The **Hypelitix** website analyzes Instagram account data. But in the case of this project, it's an advertising site. See [**demo**](https://dmitrytavern.github.io/website-makeup-hypelitix/).

**Developers:**

- [Dmitry Tavern (developer)](https://github.com/dmitrytavern).
- [Lyovushkin Kyrylo (designer)](https://www.instagram.com/k.lyovushkin/).

**Screenshot:**

<img src="https://github.com/dmitrytavern/website-makeup-hypelitix/releases/latest/download/screenshot.png" style="border-radius: 6px" />

## Formulation of the problem

Create a cross-browser, adaptive website by design in Sketch. Key points for adaptability: **375px**, **768px**, **1100px**, **1600px**. There are no additional requirements.

Pages to create:

- [Home](https://dmitrytavern.github.io/website-makeup-hypelitix/)
- [Prices](https://dmitrytavern.github.io/website-makeup-hypelitix/prices.html)
- [Contacts](https://dmitrytavern.github.io/website-makeup-hypelitix/contacts.html)
- [About](https://dmitrytavern.github.io/website-makeup-hypelitix/about_en.html)
- [Content page (privacy policy)](https://dmitrytavern.github.io/website-makeup-hypelitix/privacy-policy_en.html)

## Technologies

<img src="https://img.shields.io/badge/-Webpack-262626?style=flat&logo=webpack&logoColor=3074D7" />&nbsp;
<img src="https://img.shields.io/badge/-HTML5-262626?style=flat&logo=html5&logoColor=E34F26" />&nbsp;
<img src="https://img.shields.io/badge/-CSS3-262626?style=flat&logo=css3&logoColor=1572B6" />&nbsp;
<img src="https://img.shields.io/badge/-PUG-262626?style=flat&logo=pug&logoColor=E34F26" />&nbsp;
<img src="https://img.shields.io/badge/-SASS-262626?style=flat&logo=sass" />&nbsp;
<img src="https://img.shields.io/badge/-JavaScript-262626?style=flat&logo=javascript" />&nbsp;
<img src="https://img.shields.io/badge/-Vue-262626?style=flat&logo=vuedotjs" />&nbsp;
<img src="https://img.shields.io/badge/-i18n-262626?style=flat&logo=i18next" />&nbsp;
<img src="https://img.shields.io/badge/-jQuery-262626?style=flat&logo=jquery&logoColor=78CFF5" />&nbsp;
<img src="https://img.shields.io/badge/-Bootstrap-262626?style=flat&logo=bootstrap&logoColor=FFFFFF" />&nbsp;
<img src="https://img.shields.io/badge/-npm-262626?style=flat&logo=npm" />&nbsp;
<img src="https://img.shields.io/badge/-Node.js-262626?style=flat&logo=nodedotjs" />&nbsp;
<img src="https://img.shields.io/badge/-Express-262626?style=flat&logo=express" />&nbsp;
<img src="https://img.shields.io/badge/-Git-262626?style=flat&logo=git&logoColor=F05032" />&nbsp;
<img src="https://img.shields.io/badge/-VS%20Code-262626?style=flat&logo=visual-studio-code&logoColor=007ACC" />&nbsp;
<img src="https://img.shields.io/badge/-GitHub Actions-262626?style=flat&logo=GitHub" />&nbsp;
<img src="https://img.shields.io/badge/-Linux (Ubuntu)-262626?style=flat&logo=linux" />&nbsp;

## Performance

The site loads very quickly and has green positions on all metrics:

<img src=".github/image3.png" width="49%" />&nbsp;
<img src=".github/image4.png" width="49%" />&nbsp;

## Problems

### 01. Implementation of a circular price slider

There is a section on the site to show the user the price for one account at different rates. It could be rendered as a table (as it is done on the [pricing page](https://dmitrytavern.github.io/website-makeup-hypelitix/prices.html)), but to save space, it was decided to make it as a circular slider.

**Solution:** I used Vue, which deals with dot placement, changing the active plan, and so on.

<img src=".github/image1.png" />

### 02. Implementation of real-time translation

At the last moment I had a requirement that the site should be able to change the localization on the fly without the backend.

**Solution:** For this I used i18n and put all the text into separate json files. The blocks where localized text was used, I marked them with data-i18n, and if it was a link, I marked it with data-i18n-link.

<img src=".github/image2.png" />

## Conclusions

The project is old and it was not a big problem to make it. However, I highlighted the following mistakes:

- **Hardcore tariffs in the slider.** The number of tariffs should be dynamic, and the price of tariffs can change over time. I didn't take it into account and put everything in js, which, in case of minification, doesn't allow to change tariffs. I should have separated them in json, as it was done with localization.
- **Custom localization.** Although I used i18n, I wrote my own scripts to change the text. I think a better solution could have been found.
- **Development time.** It took me 45 hours to do the site. For a layout like this, it's WAY too long. The slider and localization setup took a lot of time. This was my first time doing both. However, it's still a lot.

## Guide

If you only need a finished build, you can download it from the [latest release](https://github.com/dmitrytavern/website-makeup-hypelitix/releases/latest/download/website-makeup.tar.gz).

This project is obsolete and uses an older version of **Node.js** - **v16.20.0**. There may be errors on newer versions. Make sure you are using this version of Node.js.

There may also be problems running on **Windows** or **MacOs** because the webpack config may not be ready due to different implementation paths.

Steps to manually build a project:

1. Clone a repository:

```
git clone https://github.com/dmitrytavern/website-makeup-hypelitix.git
```

2. Install dependencies:

```
npm ci
```

3. Run a command:

```
npm run dev
npm run build
npm run build:serve
```

- **npm run dev** - launches a live-reload webpack dev server for development.
- **npm run build** - builds the entire project in a production version.
- **npm run build:serve** - runs the production server to test the finished build.

## License

MIT - check repo files

Copyright (c) 2020-present, Dmitry Tavern

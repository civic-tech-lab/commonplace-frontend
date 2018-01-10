// @flow

/*-------------------
      Site Colors
--------------------*/

const color = Object.freeze({
  casper: '#B0B9D3',
  cinnabar: '#E53333',
  geyser: '#D0D9E2',
  trout: '#4F5B66',
});

/*-------------------
    Brand Colors
--------------------*/

export const brandColor = Object.freeze({
  primary: color.cinnabar,
});

/*-------------------
     Neutral Text
--------------------*/

export const textColor = Object.freeze({
  subdued: color.casper,
  unselected: color.trout,
});

/*-------------------
       Fonts
--------------------*/

export const font = Object.freeze({
  family: Object.freeze({
    body: 'sans-serif',
    heading: 'serif',
    ui: 'sans-serif',
  }),
  size: Object.freeze({
    large: 23,
    medium: 15,
  }),
  weight: Object.freeze({
    bold: 'bold',
    normal: 'normal',
  }),
});

export const transition = '.15s ease-in-out';

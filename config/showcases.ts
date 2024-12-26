const NEXT_PUBLIC_SHOWCASE_LIST = process.env.NEXT_PUBLIC_SHOWCASE_LIST

const ENV_SHOWCASE_LIST = NEXT_PUBLIC_SHOWCASE_LIST && NEXT_PUBLIC_SHOWCASE_LIST.split(',').map(i => {
  return {
    url: i
  }
}) || []

export const showcases = [
  {
    // title: 'Landing Page Boilerplate',
    // description: 'A free, open-source, and powerful landing page boilerplate, ideal for various projects, enabling you to create a landing page in under an hour.',
    url: 'https://onelinkly.com/dashboard/,
    // logo: '',
    // og: 'https://onelinkly.com/'
  },
  {
    url: 'https://onelinkly.com/dashboard/'
  },
  {
    url: 'https://onelinkly.com/dashboard/'
  },
].concat(ENV_SHOWCASE_LIST)
import { join } from 'path';

export default {
  publicPath: '/test-gh-pages/',
  plugins: [
    join(__dirname, '..', require('../package').main || 'index.js'),
  ],
}

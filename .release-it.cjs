const { createConventionalRecommendedBumpOpts } = require('conventional-changelog-angular/conventionalRecommendedBump');
const { createParserOpts } = require('conventional-changelog-angular/parserOpts');

const parserOpts = createParserOpts();
const { whatBump } = createConventionalRecommendedBumpOpts(parserOpts);

module.exports = {
  git: {
    requireCleanWorkingDir: false,
    tagName: 'v${version}',
    commitMessage: 'chore(release): ${version} [skip ci]'
  },
  github: {
    release: true,
    releaseName: 'Release ${version}'
  },
  npm: {
    publish: false
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'angular',
      infile: 'CHANGELOG.md',
      parserOpts,
      whatBump
    }
  }
};

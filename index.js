// const path = require('path');
const core = require('@actions/core');
const tc = require('@actions/tool-cache');
const { getDownloadObject } = require('./lib/utils');

async function setup() {
  try {
    // Get version of tool to be installed
    const version = core.getInput('version');

    // Download the specific version of the tool, e.g. as a tarball/zipball
    const download = getDownloadObject(version);
    const pathToTarball = await tc.downloadTool(download.url);

    // Extract the tarball/zipball onto host runner
    const extract = tc.extractTar;
    const pathToCLI = await extract(pathToTarball);
    core.notice(`CLI: ${pathToCLI}`)

    // Expose the tool by adding it to the PATH
    core.addPath(pathToCLI);
    if (!pathToCLI) {
      throw new Error(`Unable to download togomak from ${download.url}`);
    }

  } catch (e) {
    core.setFailed(e);
  }
}

module.exports = setup

if (require.main === module) {
  setup();
}

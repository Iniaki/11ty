const git = require('simple-git')();

async function getChanges(data) {

  const options = {
    file: data.page.inputPath,
  }

  try {
    const history = await git.log(options);
    return history.all
  } catch (e) {
    return null;
  }

}

module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      parent: data => data.parent
    }
  }
}
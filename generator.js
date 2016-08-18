'use strict';

var isValid = require('is-valid-app');

module.exports = function(app) {
  // return if the generator is already registered
  if (!isValid(app, 'generate-robots')) return;

  /**
   * Generates a `robots.txt` file to the current working directory or
   * specified `--dest`.
   *
   * ```sh
   * $ gen robots
   * $ gen robots --dest ./foo
   * ```
   * @name robots
   * @api public
   */

  app.task('default', ['robots']);
  app.task('robots', function(cb) {
    return app.src('templates/robots.tmpl', { cwd: __dirname })
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(function(file) {
        file.basename = 'robots.txt';
        return app.cwd;
      }))
  });
};

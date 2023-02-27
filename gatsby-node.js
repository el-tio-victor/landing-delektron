exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /snapsvg-cjs/,
              use: loaders.null(),
            },
            {
              test: /@gatsbyjs/,
              use: loaders.null(),
            },
            {
              test: /gatsby/,
              use: loaders.null(),
            },
            {
              test: /camelcase/,
              use: loaders.null(),
            },
            {
              test: /classnames/,
              use: loaders.null(),
            },
            {
              test: /filter-invalid-dom-props/,
              use: loaders.null(),
            },
            {
              test: /react-bootstrap/,
              use: loaders.null(),
            },
            {
              test: /lodash.throttle/,
              use: loaders.null(),
            },
            {
              test: /react-dom/,
              use: loaders.null(),
            },
            {
              test: /common-tags/,
              use: loaders.null(),
            },
            {
              test: /css-select/,
              use: loaders.null(),
            },
            {
              test: /gatsby-page-utils/,
              use: loaders.null(),
            },
            /*{
              test: /.cache/,
              use: loaders.null(),
            },*/
            {
              test: /any-base/,
              use: loaders.null(),
            },
            {
              test: /classnames/,
              use: loaders.null(),
            },
            {
              test: /filter-invalid-dom-props/,
              use: loaders.null(),
            },
            {
              test: /react-bootstrap/,
              use: loaders.null(),
            },
            {
              test: /signal-exit/,
              use: loaders.null(),
            },
            {
              test: /gatsby-worker/,
              use: loaders.null(),
            },
            {
              test: /yoga-layout-prebuilt/,
              use: loaders.null(),
            },
            {
              test: /deepmerge/,
              use: loaders.null(),
            },
            {
              test: /gatsby-react-router-scroll/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }
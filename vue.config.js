function stylusLoaderV4Hotfixer(args) {
  delete args.preferPathResolver
  return args
}

module.exports = {
  chainWebpack: (config) => {
    config.module.rule("stylus").oneOf("vue-modules").use("stylus-loader").tap(stylusLoaderV4Hotfixer)

    config.module.rule("stylus").oneOf("vue").use("stylus-loader").tap(stylusLoaderV4Hotfixer)

    config.module.rule("stylus").oneOf("normal-modules").use("stylus-loader").tap(stylusLoaderV4Hotfixer)

    config.module.rule("stylus").oneOf("normal").use("stylus-loader").tap(stylusLoaderV4Hotfixer)
  },
}

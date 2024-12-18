
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    const importMap = {
      
        "@angular/core": async () => {
          let pkg = await import("__mf__virtual/host__prebuild___mf_0_angular_mf_1_core__prebuild__.js")
          return pkg
        }
      
    }
      const usedShared = {
      
          "@angular/core": {
            name: "@angular/core",
            version: "17.3.12",
            scope: ["default"],
            loaded: false,
            from: "host",
            async get () {
              usedShared["@angular/core"].loaded = true
              const {"@angular/core": pkgDynamicImport} = importMap 
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: false,
              requiredVersion: "^17.3.12"
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      
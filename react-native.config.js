module.exports = {
    project: {
      ios: {
        automaticPodsInstallation: true,
      },
    },
  };

//   type ProjectConfigT = {
//     reactNativePath: ?string;
//     project: {
//       android?: AndroidProjectParams;
//       ios?: IOSProjectParams;
//       // Any additional platforms would appear here
//       [key: string]: any;
//     };
//     platforms: {
//       android: AndroidPlatformConfig;
//       ios: IOSPlatformConfig;
//       // Any additional platforms would appear here
//       [key: string]: any;
//     };
//     dependencies: {
//       [key: string]: DependencyConfig;
//     };
//     commands: Command[];
//     assets?: string[];
//   };
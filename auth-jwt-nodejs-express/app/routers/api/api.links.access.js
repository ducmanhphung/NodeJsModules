// const paths = {
//   api: {
//     path: "/api",
//     childs: {
//       v1: {
//         path: paths.api.path + "/v1",
//         childs: {
//           users: {
//             path: v1.path + "/users",
//           },
//         },
//       },
//     },
//   },
// };

const paths = {
  api: {
    path: "/api",
  },
};

paths.api.v1 = {
  path: paths.api.path + "/v1",
};

paths.api.v1.users = {
  path: paths.api.v1.path + "/users",
};

paths.api.v1.roles = {
  path: paths.api.v1.path + "/roles",
};

module.exports = paths;

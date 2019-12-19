import Roles from "./roles";

const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: "iamEdit",
        allowedRoles: [roles.owner, roles.admin],
        allowedStorageFolders: ["user"]
      },
      iamCreate: {
        id: "iamCreate",
        allowedRoles: [roles.owner, roles.admin]
      },
      iamRead: {
        id: "iamRead",
        allowedRoles: [
          roles.owner,
          roles.admin,
          roles.guest,
          roles.grunnskole,
          roles.ungdomsskole,
          roles.videregående,
          roles.universitet
        ]
      },
      iamReadGrunnskole: {
        id: "iamReadGrunnskole",
        allowedRoles: [roles.owner, roles.admin, roles.grunnskole]
      },
      iamReadUngdomsskole: {
        id: "iamReadUngdomsskole",
        allowedRoles: [roles.owner, roles.admin, roles.ungdomsskole]
      },
      iamReadVideregående: {
        id: "iamReadVideregående",
        allowedRoles: [roles.owner, roles.admin, roles.videregående]
      },
      iamReadUniversitet: {
        id: "iamReadUniversitet",
        allowedRoles: [roles.owner, roles.admin, roles.universitet]
      }
    };
  }

  static get asArray() {
    return Object.keys(this.values).map(value => {
      return this.values[value];
    });
  }
}

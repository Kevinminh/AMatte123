import _values from "lodash/values";

class Roles {
  static get values() {
    return {
      owner: "owner",
      admin: "admin",
      guest: "guest",
      grunnskole: "grunnskole",
      ungdomsskole: "ungdomsskole",
      videregående: "videregående",
      universitet: "universitet"
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return `roles.${roleId}.label`;
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return `roles.${roleId}.description`;
  }

  static get selectOptions() {
    return _values(this.values).map(value => ({
      id: value,
      value: value,
      title: this.descriptionOf(value),
      label: this.labelOf(value)
    }));
  }
}

export default Roles;

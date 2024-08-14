import { Profile } from "./Profile";

export default (
  <Profile
    info={{
      firstName: "first-name",
      lastName: "last-name",
      label: "label",
      email: "email",
      image: "arcade.png",
    }}
    social={[
      { name: "Linkedin", url: "#" },
      { name: "Anchor", url: "#" },
      { name: "Home", url: "#" },
    ]}
  />
);

import { Profile } from ".";

export default (
  <Profile
    info={{
      firstName: "first-name",
      lastName: "last-name",
      label: "label",
      email: "email",
      image: "arcade.webp",
    }}
    social={[
      { name: "Linkedin", url: "#" },
      { name: "Anchor", url: "#" },
      { name: "Home", url: "#" },
    ]}
  />
);

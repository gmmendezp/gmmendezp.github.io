import Image from "../../../misc/Image";

interface ProfileImageProps {
  image: string;
}

export const ProfileImage = ({ image }: ProfileImageProps) => (
  <div className="w-full text-center">
    <Image
      image={image}
      className="rounded-3xl w-[420px] max-w-[90%] border-2 border-dotted border-primary my-0 mx-auto"
      alt="Profile image"
    />
  </div>
);

export default ProfileImage;

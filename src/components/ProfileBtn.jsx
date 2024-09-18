import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fileService from "../services/fileService";

export default function ProfileBtn() {
  const [open, setOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [loading, setLoading] = useState(true);
  const profilePicId = useSelector(
    (state) => state.auth.profileData.profilePic
  );
  useEffect(() => {
    const getProfilePic = async () => {
      const profilePic = await fileService.getProfilePicPreview(profilePicId);
      if (profilePic) setProfilePic(profilePic);
      setLoading(false);
    };
    getProfilePic();
  }, [profilePicId]);
  return !loading &&
    <div className="h-12 w-12 rounded-full overflow-hidden">
      <img src={profilePic.href} alt="Profile" />
    </div>
}

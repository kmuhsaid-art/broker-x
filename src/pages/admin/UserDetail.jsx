import AdminLayout from "../../components/admin/AdminLayout";

import UserProfileCard from "../../components/admin/users/UserProfileCard";
import UserInfoCard from "../../components/admin/users/UserInfoCard";
import UserWalletCard from "../../components/admin/users/UserWalletCard";
import UserTradingCard from "../../components/admin/users/UserTradingCard";
import UserKycCard from "../../components/admin/users/UserKycCard";
import UserLoginHistory from "../../components/admin/users/UserLoginHistory";
import UserActionPanel from "../../components/admin/users/UserActionPanel";

const user = {
  id: "USR00001",
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 202 555 0125",
  country: "United States",
  level: "VIP Gold",
  avatar: "https://i.pravatar.cc/150?img=12",
};

export default function UserDetail() {
  return (
    <AdminLayout>

      <div className="space-y-6">

        <h1 className="text-3xl font-bold text-white">
          User Detail
        </h1>

        <UserProfileCard user={user} />

        <div className="grid xl:grid-cols-2 gap-6">

          <UserInfoCard user={user} />

          <UserWalletCard />

        </div>

        <div className="grid xl:grid-cols-2 gap-6">

          <UserTradingCard />

          <UserKycCard />

        </div>

        <UserLoginHistory />

        <UserActionPanel />

      </div>

    </AdminLayout>
  );
}
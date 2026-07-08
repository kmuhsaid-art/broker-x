import {
    Bell,
} from "lucide-react";

export default function NotificationsCard({ data }) {

    const notifications = data?.notifications ?? [];

    return (

        <div className="bg-[#111827] rounded-2xl border border-white/10 p-6">

            <div className="flex items-center gap-3 mb-6">

                <Bell
                    className="text-yellow-400"
                    size={22}
                />

                <h2 className="text-xl font-semibold text-white">
                    Notifications
                </h2>

            </div>

            {
                notifications.length === 0 ? (

                    <div className="text-center py-10 text-gray-500">

                        No notifications

                    </div>

                ) : (

                    <div className="space-y-4">

                        {notifications.map((item) => (

                            <div
                                key={item.id}
                                className="bg-white/5 rounded-xl p-4"
                            >

                                <h3 className="text-white font-semibold">

                                    {item.title}

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    {item.message}

                                </p>

                            </div>

                        ))}

                    </div>

                )

            }

        </div>

    );

}
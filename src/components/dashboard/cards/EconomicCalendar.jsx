import {
    CalendarDays,
    Clock3,
} from "lucide-react";

export default function EconomicCalendar({ data }) {

    const events = data?.economic_calendar ?? [];

    return (

        <div className="bg-[#111827] rounded-2xl border border-white/10 p-6 h-full">

            <div className="flex items-center gap-3 mb-6">

                <CalendarDays
                    size={22}
                    className="text-blue-400"
                />

                <h2 className="text-xl font-semibold text-white">
                    Economic Calendar
                </h2>

            </div>

            {events.length === 0 ? (

                <div className="flex flex-col items-center justify-center py-12">

                    <Clock3
                        size={42}
                        className="text-gray-600"
                    />

                    <p className="text-gray-500 mt-4">
                        No economic events.
                    </p>

                </div>

            ) : (

                <div className="space-y-4">

                    {events.map((event) => (

                        <div
                            key={event.id}
                            className="bg-white/5 rounded-xl p-4 border border-white/5"
                        >

                            <div className="flex justify-between">

                                <div>

                                    <h3 className="text-white font-semibold">

                                        {event.title}

                                    </h3>

                                    <p className="text-gray-400 mt-1">

                                        {event.country}

                                    </p>

                                </div>

                                <div className="text-right">

                                    <p className="text-yellow-400">

                                        {event.time}

                                    </p>

                                    <p className="text-gray-500 text-sm">

                                        {event.impact}

                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}
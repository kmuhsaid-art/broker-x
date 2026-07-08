import {
    Newspaper,
    ExternalLink,
} from "lucide-react";

export default function NewsFeed({ data }) {

    const news = data?.news ?? [];

    return (

        <div className="bg-[#111827] rounded-2xl border border-white/10 p-6 h-full">

            <div className="flex items-center gap-3 mb-6">

                <Newspaper
                    className="text-yellow-400"
                    size={22}
                />

                <h2 className="text-xl font-semibold text-white">

                    Market News

                </h2>

            </div>

            {news.length === 0 ? (

                <div className="text-center py-12">

                    <Newspaper
                        size={42}
                        className="mx-auto text-gray-600"
                    />

                    <p className="text-gray-500 mt-4">

                        No market news.

                    </p>

                </div>

            ) : (

                <div className="space-y-4">

                    {news.map((item) => (

                        <div
                            key={item.id}
                            className="border-b border-white/5 pb-4"
                        >

                            <div className="flex justify-between items-start">

                                <div>

                                    <h3 className="text-white font-semibold">

                                        {item.title}

                                    </h3>

                                    <p className="text-gray-400 text-sm mt-2">

                                        {item.summary}

                                    </p>

                                </div>

                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-yellow-400"
                                >

                                    <ExternalLink size={18} />

                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}
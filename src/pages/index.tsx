import Link from "next/link";

import { socialLinks } from "@/lib/utilities";

export default function Index() {
    return (
        <div className="mt-6 flex w-full flex-col items-start justify-start space-y-6">
            <p className="text-left text-sm font-light text-white">
                I’m an undergraduate Computer Science and Electrical Engineering student at California State University, Los Angeles. This site showcases my projects and technical work to date.
            </p>

            <ul className="flex flex-row flex-wrap items-center justify-start space-x-2">
                {socialLinks.map((link, idx) => {
                    return (
                        <li key={idx} className="flex flex-row items-center justify-start space-x-2">
                            <Link href={link.url} target="_blank">
                                <p className="text-left text-sm font-light text-white underline">
                                    {link.name}
                                </p>
                            </Link>

                            {idx < socialLinks.length - 1 ? (
                                <span className="text-left text-sm font-light text-white">
                                    ·
                                </span>
                            ) : (
                                <></>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

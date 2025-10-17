'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"



function MyHeader() {

    const [open, setOpen] = useState(false)


    return (
        <>
            <header className="hidden md:block">
                <div className="w-full h-[50px] p-0 m-0 flex justify-between bg-[#eee2cb] text-[#2d230f]">

                    <ul className="w-1/2 flex justify-center items-centern p-0 m-0">
                        <Link href={'/'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-[#0A2B1B] hover:text-white transition">صفحه اصلی</li>
                        </Link>

                        <Link href={'/'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-[#0A2B1B] hover:text-white transition" onMouseEnter={() => setOpen(!open)}>انواع سبک</li>

                            {
                                open ?
                                    <div className="w-auto h-auto bg-[#eee2cb] text-[#2d230f] z-10 p-5">

                                        <Link href={'/classic'}>
                                            <li className="p-5 rounded-xs hover:text-l bg-[#eee2cb] text-[#2d230f] hover:border-1 transition">Classic</li>
                                        </Link>

                                        <Link href={'/neoClassic'}>
                                            <li className="p-5 rounded-xs hover:text-l bg-[#eee2cb] text-[#2d230f] hover:border-1 transition">NeoClassic</li>
                                        </Link>

                                        <Link href={'/modern'}>
                                            <li className="p-5 rounded-xs hover:text-l bg-[#eee2cb] text-[#2d230f] hover:border-1 transition">Modern</li>
                                        </Link>
                                    </div>
                                    :
                                    ""
                            }
                        </Link>

                        {/* <Link href={'/'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">Interior Design</li>
                        </Link> */}

                        <Link href={'/landscape'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-[#0A2B1B] hover:text-white transition">Landscape</li>
                        </Link>

                        <Link href={'/lighting'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-[#0A2B1B] hover:text-white transition">Lighting</li>
                        </Link>

                        {/* <Link href={'/jornal'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">ژورنال</li>
                        </Link> */}

                        <Link href={'/articles'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-[#0A2B1B] hover:text-white transition">مقالات</li>
                        </Link>

                        <Link href={'/about'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-[#0A2B1B] hover:text-white transition">درباره ما</li>
                        </Link>

                    </ul>

                    <ul className="w-1/4 p-0 m-0">
                        <Link href={'/'}>
                            <li className="w-fit p-2 rounded-md hover:text-l hover:bg-[#957536] hover:text-white transition">ارسال مقاله/پروژه</li>
                        </Link>
                    </ul>

                    {/* <div>
                        <Image
                            // src="/img/logo/logo-crown and col.png"
                            src="/img/logo/logo-png.png"
                            width={80}
                            height={80}
                            alt="Picture of the Logo"
                        />
                    </div> */}

                </div>
            </header>
        </>
    )
}



export default MyHeader

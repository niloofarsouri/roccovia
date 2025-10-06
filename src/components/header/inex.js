import Link from "next/link"



function MyHeader() {


    return (
        <>
            <header className="hidden md:block">
                <div className="w-full h-[50px] p-0 m-0 flex justify-between bg-[#eee2cb] text-[#7e6229]">

                    <ul className="w-1/2 flex justify-center items-centern p-0 m-0">
                        <Link href={'/'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">صفحه اصلی</li>
                        </Link>

                        <Link href={'/'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">Classic</li>
                        </Link>

                        <Link href={'/neoClassic'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">NeoClassic</li>
                        </Link>

                        <Link href={'/modern'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">Modern</li>
                        </Link>

                        <Link href={'/interiorDesign'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">Interior Design</li>
                        </Link>

                        <Link href={'/landscape'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">Landscape</li>
                        </Link>

                        <Link href={'/lighting'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">Lighting</li>
                        </Link>

                        <Link href={'/jornal'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">ژورنال</li>
                        </Link>

                        <Link href={'/articles'}>
                            <li className="p-2 rounded-xs hover:text-l hover:bg-green-950 hover:text-white transition">مقالات</li>
                        </Link>

                    </ul>

                    <ul className="w-1/4 p-0 m-0">
                        <Link href={'/'}>
                            <li className="w-fit p-2 rounded-md hover:text-l hover:bg-[#957536] hover:text-white transition">ارسال مقاله/پروژه</li>
                        </Link>
                    </ul>

                </div>
            </header>
        </>
    )
}



export default MyHeader

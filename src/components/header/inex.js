import Link from "next/link"



function MyHeader() {


    return (
        <>
            <header>
                <div className="w-full h-[50px] p-0 m-0 flex justify-between bg-white text-black border-b-1 ">

                    <ul className="w-1/2 flex justify-center items-centern p-0 m-0">
                        <Link href={'/'}>
                            <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white hover:rounded-md transition">معماری کلاسیک و فاخر</li>
                        </Link>

                        <Link href={'/'}>
                            <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">معماری معاصر / نئوکلاسیک</li>
                        </Link>

                        <Link href={'/'}>
                            <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">طراحی داخلی</li>
                        </Link>

                        <Link href={'/'}>
                            <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">پروژه‌های ایرانی</li>
                        </Link>

                        <Link href={'/'}>
                            <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">اخبار و رویدادها</li>
                        </Link>

                        <Link href={'/'}>
                            <li className="p-2 hover:text-l hover:bg-green-950 hover:text-white transition">نقد و تحلیل</li>
                        </Link>
                    </ul>

                    <ul className="w-1/4 p-0 m-0">
                        <Link href={'/'}>
                            <li className="w-fit p-2 hover:text-l hover:bg-[#957536] hover:text-white transition">ارسال مقاله/پروژه کاربران</li>
                        </Link>
                    </ul>

                </div>
            </header>
        </>
    )
}



export default MyHeader
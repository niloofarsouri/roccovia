import Image from "next/image"
import Link from "next/link"




function HomepageLandscape() {


    return (
        <>
            <div>
                <div className="grid gap-2 grid-cols-4 p-5">

                    <div className="flex justify-center col-span-4">
                        <p className="text-2xl font-serif text-[#eee2cb] p-3">Landscape</p>
                    </div>

                </div>


                <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2">
                    <Link href={'/landscape'}>
                        <div className="col-span-1 hover:opacity-50 transition-all">
                            <Image
                                src="/img/landscape/IMG_1929.JPG"
                                width={500}
                                height={500}
                                alt="Picture of the Logo"
                            />
                        </div>
                    </Link>

                    <Link href={'/landscape'}>
                        <div className="col-span-1 hover:opacity-50 transition-all">
                            <Image
                                src="/img/landscape/IMG_1977.JPG"
                                width={500}
                                height={500}
                                alt="Picture of the Logo"
                            />
                        </div>
                    </Link>

                    <Link href={'/landscape'}>
                        <div className="col-span-1 hover:opacity-50 transition-all">
                            <Image
                                src="/img/landscape/IMG_1886.JPG"
                                width={500}
                                height={500}
                                alt="Picture of the Logo"
                            />
                        </div>
                    </Link>

                    <Link href={'/landscape'}>
                        <div className="col-span-1 hover:opacity-50 transition-all">
                            <Image
                                src="/img/landscape/IMG_1970.JPG"
                                width={500}
                                height={500}
                                alt="Picture of the Logo"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default HomepageLandscape
import Image from "next/image"




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
                    <div className="col-span-1 hover:opacity-50 transition-all">
                        <Image
                            src="/img/landscape/IMG_1929.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the Logo"
                        />
                    </div>

                    <div className="col-span-1 hover:opacity-50 transition-all">
                        <Image
                            src="/img/landscape/IMG_1977.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the Logo"
                        />
                    </div>

                    <div className="col-span-1 hover:opacity-50 transition-all">
                        <Image
                            src="/img/landscape/IMG_1886.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the Logo"
                        />
                    </div>

                    <div className="col-span-1 hover:opacity-50 transition-all">
                        <Image
                            src="/img/landscape/IMG_1970.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the Logo"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


export default HomepageLandscape
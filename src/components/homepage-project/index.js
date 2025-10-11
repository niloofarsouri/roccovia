import Image from "next/image"



function HomepageProject() {


    return (
        <>
            {/* <div className="flex justify-center"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-5 overflow-hidden">

                <div className="col-span-1 md:col-span-3 p-5 flex justify-center items-center">
                    <p className="text-2xl font-serif text-[#eee2cb] p-3">Projects</p>
                </div>

                <div className="col-span-1 hover:opacity-50 transition-all">
                    <Image
                        src="/img/project/cam5-2___psd.tif"
                        width={500}
                        height={500}
                        alt="Picture of the Logo"
                    />
                </div>
                {/* <div className="col-span-1 p-5">col</div> */}

                <div className="col-span-1 hover:opacity-50 transition-all">
                    <Image
                        src="/img/project/cam4___psd.tif"
                        width={500}
                        height={500}
                        alt="Picture of the Logo"
                    />
                </div>
                {/* <div className="col-span-1 p-5">col</div> */}

                <div className="col-span-1 hover:opacity-50 transition-all">
                    <Image
                        src="/img/project/cam11___psd.tif"
                        width={500}
                        height={500}
                        alt="Picture of the Logo"
                    />
                </div>

                {/* <div className="col-span-3 text-center">
            <p className="text-3xl font-serif text-[#eee2cb] p-3">Redefining Classical Architecture in The Contemprory World</p>
            <p className="text-l text-[#eee2cb] p-3">"بازتعریف معماری کلاسیک در دنیای معاصر"</p>
          </div> */}
            </div>

            {/* </div> */}
        </>
    )
}



export default HomepageProject
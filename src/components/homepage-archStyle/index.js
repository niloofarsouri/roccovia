import Image from "next/image"



function HomepageArchitecturalStyles() {


    return (
        <>
            <div>
                <div className="grid gap-2 grid-cols-4 p-5">

                    <div className="flex justify-center col-span-4">
                        <p className="text-2xl font-serif text-[#eee2cb] p-3">Architectural Styles</p>
                    </div>

                    {/* <div className="col-span-4 mb-10">
                    <Styles />
                  </div> */}
                </div>


                <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2">
                    <div className="col-span-1 hover:opacity-50 transition-all">
                        <Image
                            src="/img/classic/lamp.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the Logo"
                        />
                    </div>

                    <div className="col-span-1 hover:opacity-50 transition-all">
                        <Image
                            src="/img/classic/pediment.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the Logo"
                        />
                    </div>

                    <div className="col-span-1 hover:opacity-50 transition-all">
                        <Image
                            src="/img/classic/classic3.jpg"
                            width={500}
                            height={500}
                            alt="Picture of the Logo"
                        />
                    </div>

                    <div className="col-span-1 hover:opacity-50 transition-all">
                        <Image
                            src="/img/classic/baroque.jpg"
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


export default HomepageArchitecturalStyles
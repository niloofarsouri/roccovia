import Image from "next/image"


function MyFooter() {

    return (
        <>
            <section className="w-full h-auto flex justify-center items-center">
                <div className="w-[80%] flex justify-between items-center text-[#B89B51] border-t-1 p-2">

                    <div>
                        <Image
                            src="/img/logo-png.png"
                            width={200}
                            height={200}
                            alt="Picture of the Logo"
                        />
                    </div>

                    <div className="flex-col justify-center items-center">
                        <p>Niloofar Souri</p>
                        <p>Minoo Souri</p>
                        <p>Negin Souri</p>
                    </div>

                </div>
            </section>
        </>
    )
}


export default MyFooter
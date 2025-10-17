import Image from "next/image"
import Link from "next/link"



function MyFooter() {

    return (
        <>
            <footer className="w-full h-auto flex-col justify-center items-center bg-[#eee2cb] text-[#7e6229]">
                <div class="max-w-6xl mx-auto px-6 py-6 text-sm flex justify-between items-center">
                    <div>© 2025 Roccovia. All rights reserved.</div>
                    <div>Designed by Roccovia — Architecture & Lighting</div>
                </div>

                <section className="w-full h-auto flex justify-center items-center bg-[#eee2cb] text-[#7e6229]">

                    <div className="w-[80%] flex justify-between items-center border-t-1 md:p-2">

                        <Link href={'https://www.linkedin.com/in/roccovia-architecture'}>
                            <Image
                                src="/img/logo/logo-png.png"
                                width={200}
                                height={200}
                                alt="Picture of the Logo"
                            />
                        </Link>

                        <div className="flex-col justify-center items-center">
                            <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                                <p className="font-serif">Niloofar Souri</p>
                            </Link>

                            <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                                <p className="font-serif">Minoo Souri</p>
                            </Link>

                            <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                                <p className="font-serif">Negin Souri</p>
                            </Link>
                        </div>

                    </div>
                </section>
            </footer>
        </>
    )
}


export default MyFooter

// text-[#2d230f]

// text-[#7e6229]
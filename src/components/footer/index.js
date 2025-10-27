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

                        {/* <Link href={'https://www.linkedin.com/in/roccovia-architecture'}>
                            <Image
                                src="/img/logo/logo-png.png"
                                width={200}
                                height={200}
                                alt="Picture of the Logo"
                            />
                        </Link> */}

                        <div className="flex-col justify-center items-center pr-10">
                            {/* <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                                <p className="font-serif">Niloofar Souri</p>
                            </Link>

                            <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                                <p className="font-serif">Minoo Souri</p>
                            </Link>

                            <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                                <p className="font-serif">Negin Souri</p>
                            </Link> */}

                            {/* <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                                <p className="font-serif pl-10">Roccovia Design</p>
                            </Link> */}





                            <ul>
                                <Link href={'/'}>
                                    <li className="rounded-xs hover:text-l hover:bg-[#0A2B1B] hover:text-white transition">صفحه اصلی</li>
                                </Link>

                                {/* <Link href={'/classic'}>
                                    <li className="rounded-xs hover:text-l bg-[#eee2cb] text-[#2d230f] hover:border-1 transition">Classic</li>
                                </Link>

                                <Link href={'/neoClassic'}>
                                    <li className="rounded-xs hover:text-l bg-[#eee2cb] text-[#2d230f] hover:border-1 transition">NeoClassic</li>
                                </Link>

                                <Link href={'/modern'}>
                                    <li className="rounded-xs hover:text-l bg-[#eee2cb] text-[#2d230f] hover:border-1 transition">Modern</li>
                                </Link> */}

                                <Link href={'/landscape'}>
                                    <li className="rounded-xs hover:text-l hover:bg-[#0A2B1B] hover:text-white transition">Landscape</li>
                                </Link>

                                <Link href={'/lighting'}>
                                    <li className="rounded-xs hover:text-l hover:bg-[#0A2B1B] hover:text-white transition">Lighting</li>
                                </Link>

                                <Link href={'/articles'}>
                                    <li className="rounded-xs hover:text-l hover:bg-[#0A2B1B] hover:text-white transition">مقالات</li>
                                </Link>

                                <Link href={'/about'}>
                                    <li className="rounded-xs hover:text-l hover:bg-[#0A2B1B] hover:text-white transition">درباره ما</li>
                                </Link>

                            </ul>
                        </div>


                        <Link href={'https://www.linkedin.com/in/roccovia-architecture'}>
                            <Image
                                src="/img/logo/logo-png.png"
                                width={200}
                                height={200}
                                alt="Picture of the Logo"
                            />
                        </Link>

                    </div>
                </section>
            </footer>
        </>
    )
}


export default MyFooter

// text-[#2d230f]

// text-[#7e6229]
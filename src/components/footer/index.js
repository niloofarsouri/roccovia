import Image from "next/image"
import Link from "next/link"



function MyFooter() {

    return (
        <>
            <section className="w-full h-auto flex justify-center items-center bg-[#eee2cb] text-[#7e6229]">
                <div className="w-[80%] flex justify-between items-center border-t-1 md:p-2">

                    <Link href={'/'}>
                        <Image
                            src="/img/logo/logo-png.png"
                            width={200}
                            height={200}
                            alt="Picture of the Logo"
                        />
                    </Link>

                    <div className="flex-col justify-center items-center">
                        <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                            <p>Niloofar Souri</p>
                        </Link>

                        <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                            <p>Minoo Souri</p>
                        </Link>

                        <Link href={'https://mail.google.com/mail/u/0/#inbox?compose=new'}>
                            <p>Negin Souri</p>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}


export default MyFooter
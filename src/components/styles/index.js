import Link from "next/link"



function Styles() {

    return (
        <>
            <div className="w-full h-auto grid gap-15 grid-cols-2 md:grid-cols-5">
                <Link href={'/classic'}
                    className="bg-[#a1c3f6] text-white rounded-lg p-3 text-center"
                >Classical</Link>

                <Link href={'/neoClassic'}
                    className="bg-[#f1c1a6] text-white rounded-lg p-3 text-center"
                >Neo Classical</Link>

                <Link href={'/modern'}
                    className="bg-[#b7aaed] text-white rounded-lg p-3 text-center"
                >Modern</Link>

                <Link href={'/'}
                    className="bg-[#b4e3d8] text-white rounded-lg p-3 text-center"
                >Minimal</Link>

                <Link href={'/'}
                    className="bg-[#f5a2ba] text-white rounded-lg p-3 text-center"
                >Persian</Link>
            </div>
        </>
    )
}


export default Styles
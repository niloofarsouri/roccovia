import Styles from "@/components/styles";
import Image from "next/image";
import Link from "next/link";
import HomepageLighting from "@/components/homepage-lighting";
import HomepageLandscape from "@/components/homepage-landscape";
import HomepageArchitecturalStyles from "@/components/homepage-archStyle";
import HomepageProject from "@/components/homepage-project";



export default function Home() {
  return (
    <div className="bg-[url(/img/damaskPattern400.png)] bg-center bg-repeat bg-[#0A2B1B] text-[rgb(184,155,81)] flex-col items-center justify-center h-auto sm:p-20 overflow-y-hidden">

      <div className="flex justify-center items-center border-t-1 border-l-1 border-r-1">

        <Link href={'/'} className="pt-10">
          <div className="hidden lg:block">
            <Image
              src="/img/logo/logo-crown and col.png"
              width={300}
              height={300}
              alt="Picture of the Logo"
            />
          </div>

          <div className="block lg:hidden">
            <Image
              src="/img/logo/logo-crown and col.png"
              width={150}
              height={150}
              alt="Picture of the Logo"
            />
          </div>
        </Link>

      </div>

      <div className="flex justify-center items-center border-l-1 border-r-1">
        <div className="w-[70%] h-auto">
          <p className="text-justify text-[#eee2cb]">
            معماری، گفت‌وگویی میان زمان‌هاست. در ROCCOVIA ما به جست‌وجوی زبان جاودانه‌ی معماری می‌پردازیم، جایی که شکوه کلاسیک، نظم نئوکلاسیک و جسارت مدرن در کنار هم معنا می‌یابند. هدف ما بازتعریف زیبایی در فضاهای معاصر است؛ از ستون‌های مرمرین دوران باستان تا خطوط مینیمال دنیای امروز. اینجا بستری است برای کشف اندیشه، سبک‌شناسی و الهام، برای معمارانی که هنر را فراتر از ساختن می‌بینند.
          </p>
        </div>
      </div>


      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 border-1 mt-10">

        <div className="col-span-1 p-2 m-auto">
          <div className="flex-col items-center justify-center">
            <p className="text-3xl text-center font-serif text-[#eee2cb] p-3">Redefining Classical Architecture in The Contemprory World</p>
            <p className="text-l text-center text-[#eee2cb] p-3">"بازتعریف معماری کلاسیک در دنیای معاصر"</p>
          </div>
        </div>

        <div className="w-full col-span-1 p-2 hover:opacity-60">
          <Image
            src="/img/classic/classic4.jpg"
            width={600}
            height={600}
            alt="Picture of the Logo"
          />
        </div>

      </div>


      <section className="border-1 mt-10">
        <HomepageArchitecturalStyles />
      </section>


      <section className="border-1 mt-10">
        <HomepageLandscape />
      </section>



      <section className="border-1 mt-10">
        <HomepageLighting />
      </section>



      <section className="border-1 mt-10">
        <HomepageProject />
      </section>

    </div>
  );
}


// «چرا خانه‌های کلاسیک ارزش سرمایه‌گذاری بیشتری دارند؟»

// پاراگراف شروع:
// خانه کلاسیک فقط یک ملک نیست، یک اثر هنری است. همین ویژگی باعث می‌شود همیشه در بازار املاک، ارزش بیشتری پیدا کند و سریع‌تر خریدار پیدا کند.

// نکات کلیدی:

// کلاسیک هیچ وقت از مد نمی‌افتد → همیشه تقاضا دارد.

// مصالح سنگی و حجاری → ماندگاری بالا.

// ارتباط با سبک زندگی لوکس → مشتریان خاص.

// ارزش افزوده هنگام فروش (برخلاف نماهای مدرن پرریسک).
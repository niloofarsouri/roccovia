import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="bg-[url(/img/damask100.png)] bg-center bg-repeat bg-[#0A2B1B] text-[rgb(184,155,81)] items-center justify-items-center max-h-screen sm:p-20 overflow-y-hidden">

      {/* <div className="bg-green-950 text-[#957536] text-7xl">
        <h1>Roccovia</h1>
      </div> */}

      <div className="absolute top-0 left-0 hidden lg:block">
        <Image
          src="/img/curtain2.png"
          width={600}
          height={600}
        />
      </div>

      <div className="flex justify-center items-center">
        <Link href={'/'}>
          <Image
            src="/img/logo-crown and col.png"
            width={300}
            height={300}
            alt="Picture of the Logo"
          />
        </Link>
      </div>

      {/* <div className="grid grid-cols-3 gap-1">

        <div className="border-1 p-5 col-span-2">
          چرا خانه‌های کلاسیک ارزش سرمایه‌گذاری بیشتری دارند؟»
          پاراگراف شروع:
          خانه کلاسیک فقط یک ملک نیست، یک اثر هنری است. همین ویژگی باعث می‌شود همیشه در بازار املاک، ارزش بیشتری پیدا کند و سریع‌تر خریدار پیدا کند.

          نکات کلیدی:

          کلاسیک هیچ وقت از مد نمی‌افتد → همیشه تقاضا دارد.

          مصالح سنگی و حجاری → ماندگاری بالا.

          ارتباط با سبک زندگی لوکس → مشتریان خاص.

          ارزش افزوده هنگام فروش (برخلاف نماهای مدرن پرریسک).
        </div>

        <div className="border-1 p-2">col 2</div>

        <div className="border-1 p-2">
          «۵ عنصر طلایی در دکوراسیون داخلی کلاسیک»

          پاراگراف شروع:
          دکوراسیون کلاسیک مثل یک قطعه موسیقی فاخر است؛ هر جزئیات کوچک نقش مهمی در ایجاد هماهنگی و شکوه دارد. پنج عنصر کلیدی همیشه در طراحی داخلی کلاسیک دیده می‌شوند.

          نکات کلیدی:

          ستون‌ها و سرستون‌های تزئینی.

          سقف‌های گچ‌بری با نقوش ظریف.

          لوسترهای کریستالی یا طلایی.

          کف‌پوش سنگی (مرمر/گرانیت).

          مبلمان با جزئیات منبت و پارچه‌های فاخر.
        </div>

        <div className="border-1 p-5 col-span-2">
          «چرا معماری کلاسیک همیشه نماد شکوه است؟»

          پاراگراف شروع:
          معماری کلاسیک بیش از دوهزار سال است که الهام‌بخش بناهای باشکوه در سراسر جهان بوده. از ستون‌های عظیم یونانی گرفته تا کاخ‌های اروپایی و ویلاهای امروزی، این سبک همیشه یک پیام مشترک داشته: عظمت، تقارن و ماندگاری.

          نکات کلیدی:

          ریشه در یونان و روم باستان → نماد قدرت و نظم.

          استفاده از تناسبات طلایی → ایجاد هارمونی بصری.

          جزئیات لوکس (ستون‌ها، قوس‌ها، سنگ مرمر) → حس شکوه.

          چرا هنوز در ویلاها و پروژه‌های لاکچری ایران/دوبی محبوب است.
        </div>

        <div className="border-1 p-2 col-span-2">
          «راز تقارن در معماری فاخر»

          پاراگراف شروع:
          تقارن در معماری فقط یک اصل زیبایی‌شناسی نیست، بلکه راز ماندگاری و وقار ساختمان‌های کلاسیک است. وقتی چشم بیننده در یک نما الگوهای متقارن را دنبال می‌کند، ناخودآگاه حس تعادل و آرامش می‌گیرد.

          نکات کلیدی:

          تقارن در نما: ورودی مرکزی، ستون‌ها، پنجره‌ها.

          تأثیر روان‌شناسی تقارن (حس قدرت و استواری).

          مثال از کاخ‌ها و عمارت‌های کلاسیک.

          چطور در معماری امروز هم می‌توان تقارن را مدرن پیاده کرد.
        </div>

        <div className="border-1 p-2">
          «۵ اشتباه رایج در طراحی نمای کلاسیک»

          پاراگراف شروع:
          نمای کلاسیک اگر درست اجرا شود، یک ساختمان معمولی را به عمارتی فاخر تبدیل می‌کند. اما کافی است چند اشتباه رایج رخ دهد تا نتیجه مصنوعی و ناموزون به نظر برسد.

          نکات کلیدی:

          استفاده افراطی از جزئیات (گچ‌بری شلوغ بدون تناسب).

          ستون‌های بدون تناسب (خیلی باریک یا خیلی قطور).

          متریال نامناسب (سنگ بی‌کیفیت یا رنگ غیراصیل).

          عدم توجه به تقارن.

          نورپردازی ضعیف که شکوه کار را از بین می‌برد.
        </div>

      </div> */}

      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}

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
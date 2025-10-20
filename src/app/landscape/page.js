import Image from "next/image"


export const metadata = {
    title: "Roccovia — نور و لندسکیپ | مقاله ژورنالی",
    description: "",
}


function Landscape() {

    return (
        <>
            <section className="bg-[#0A2B1B] text-[#eee2cb]">
                <header class="bg-[#eee2cb] text-[#2d230f] border-t border-b shadow-sm">
                    <div class="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-white font-bold">R</div>
                            <div>
                                <h1 class="text-lg font-semibold">Roccovia — نور و لندسکیپ</h1>
                                <p class="text-sm">مقاله‌ای ژورنالی، فنی و زیباشناسانه دربارهٔ طراحی لندسکیپ و نورپردازی</p>
                            </div>
                        </div>
                        <nav class="text-sm grid grid-cols-2 md:grid-cols-8">
                            <a></a>
                            <a></a>
                            <a></a>
                            <a></a>
                            <a class="px-3 py-1 hover:text-gray-900" href="#intro">مقدمه</a>
                            <a class="px-3 py-1 hover:text-gray-900" href="#history">تاریخچه</a>
                            <a class="px-3 py-1 hover:text-gray-900" href="#classic-vs-modern">کلاسیک در برابر مدرن</a>
                            <a class="px-3 py-1 hover:text-gray-900" href="#lighting">نورپردازی</a>
                        </nav>
                    </div>
                </header>

                <main class="max-w-6xl mx-auto px-6 py-12 bg-[#0A2B1B] text-[#eee2cb]">
                    {/* <!-- Hero --> */}
                    <section id="intro" class="mb-10">
                        <div class="grid lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 class="text-3xl lg:text-4xl font-extrabold leading-tight">طراحی لندسکیپ: معماری میان زمین و روح</h2>
                                <p class="mt-4 text-gray-600 leading-relaxed">طراحی لندسکیپ گفت‌وگویی بلند با طبیعت است؛ جایی که سنگ، گیاه و آب در سکوتی محاسبه‌شده روایت فضایی می‌سازند. این مقاله یک بررسی ژورنالی و فنی است از سابقه، تفاوت‌های سبک‌ها و نقش کلیدی نور در خلق هویت محوطه و نما.</p>
                                <div class="mt-6 flex gap-3">
                                    <a href="#history" class="inline-flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-lg shadow">ورق بزنید</a>
                                    <a href="#lighting" class="inline-flex items-center gap-2 border border-amber-500 text-amber-600 px-4 py-2 rounded-lg">نورپردازی</a>
                                </div>
                            </div>
                            <div class="rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/img/landscape/IMG_1989.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the Logo"
                                />
                                {/* <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="landscape" class="w-full h-64 object-cover"/> */}
                            </div>
                        </div>
                    </section>

                    {/* <!-- History --> */}
                    <section id="history" class="prose prose-lg prose-amber mx-auto mb-12">
                        <h3>تاریخچهٔ فضا‌سازی</h3>
                        <p>ریشه‌های فضا‌سازی به نخستین تمدن‌های بشری بازمی‌گردد، وقتی انسان طبیعت را نه می‌ساخت بلکه با آن گفتگو می‌کرد. باغ‌های آیینی، محوطه‌های مقدس و باغ‌های سلطنتی، هریک روایتی از نظم اجتماعی، اعتقادات و نسبت انسان با طبیعت را بازگو می‌کنند.</p>
                        <p>در ایران، باغِ ایرانی با محورهای چهاربخشی و اهمیت آب، بیانگر نظم کیهانی بود. در ژاپن، باغ‌های ذن به واسطهٔ سنگ‌ها و فضای خالی، مفاهیمی فلسفی را منتقل کردند. رنسانس اروپا هندسه و تسلط انسان بر طبیعت را برجسته ساخت؛ در حالی که جنبش رمانتیک انگلیسی طبیعت را آزاد کرد و به نقش احساس در طراحی بها داد.</p>
                        <p class="mt-4">قرن بیستم همراه با مدرنیسم، تمرکز را به عملکرد، مصالح و تجربهٔ انسانی منتقل کرد و لندسکیپ مدرن گفتگویی تازه با مواد و سازه آغاز نمود.</p>
                    </section>

                    {/* <!-- Classic vs Modern --> */}
                    <section id="classic-vs-modern" class="mb-12">
                        <h3 class="text-2xl font-semibold mb-4">لندسکیپ کلاسیک در برابر مدرن</h3>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="text-[#0A2B1B] bg-[#eee2cb] p-6 rounded-2xl shadow">
                                <h4 class="font-bold mb-2">لندسکیپ کلاسیک</h4>
                                <ul class="list-disc mr-5">
                                    <li>بر اساس تقارن، محور مرکزی و هندسهٔ منظم</li>
                                    <li>استفاده از المان‌های تزئینی مانند فواره و مجسمه</li>
                                    <li>حس باشکوه و آیینی، تمرکز بر نمایش و نظم</li>
                                </ul>
                            </div>
                            <div class="text-[#0A2B1B] bg-[#eee2cb] p-6 rounded-2xl shadow">
                                <h4 class="font-bold mb-2">لندسکیپ مدرن</h4>
                                <ul class="list-disc mr-5">
                                    <li>تأکید بر سادگی، مینیمالیسم و هماهنگی با اقلیم</li>
                                    <li>ترکیب مصالح طبیعی مانند بتن، چوب و گیاهان بومی</li>
                                    <li>فضاهای تجربه‌محور، انعطاف‌پذیر و عملکردگرا</li>
                                </ul>
                            </div>
                        </div>

                        <div class="mt-8 text-[#0A2B1B] bg-[#eee2cb] p-6 rounded-2xl shadow">
                            <h5 class="font-semibold mb-3">ترکیب دو رویکرد</h5>
                            <p>در پروژه‌های معاصر، اغلب تلفیقی از نظم کلاسیک و حس مدرن دیده می‌شود — ساختارها و محورها در کنار مصالح خام و گیاهان بومی ترکیبی پخته و معاصر می‌سازند.</p>
                        </div>
                    </section>

                    {/* <!-- Elements and Principles --> */}
                    <section class="mb-12">
                        <h3 class="text-2xl font-semibold mb-4">عناصر کلیدی در طراحی لندسکیپ مدرن</h3>
                        <div class="grid lg:grid-cols-3 gap-6">
                            <article class="text-[#0A2B1B] bg-[#eee2cb] p-6 rounded-2xl shadow">
                                <h6 class="font-bold mb-2">نورپردازی هدفمند</h6>
                                <p>نور تنها برای دید نیست؛ برای درک و هدایت تجربهٔ فضایی نیز هست. طراحی نور باید با بافت، حرکت و نوع استفادهٔ فضا همخوانی داشته باشد.</p>
                            </article>
                            <article class="text-[#0A2B1B] bg-[#eee2cb] p-6 rounded-2xl shadow">
                                <h6 class="font-bold mb-2">آب و حرکت</h6>
                                <p>آب نقش صوتی و بصری دارد؛ می‌تواند نقطهٔ محوری فضا باشد یا به‌صورت ملایم حرکت و ریتم تولید کند.</p>
                            </article>
                            <article class="text-[#0A2B1B] bg-[#eee2cb] p-6 rounded-2xl shadow">
                                <h6 class="font-bold mb-2">گیاهان بومی و پایداری</h6>
                                <p>انتخاب گونه‌های محلی به پایداری زیستی کمک می‌کند و هویت اقلیمی پروژه را تقویت می‌نماید.</p>
                            </article>
                        </div>
                    </section>

                    {/* <!-- Lighting Section --> */}
                    <section id="lighting" class="mb-12">
                        <h3 class="text-2xl font-semibold mb-4">نورپردازی؛ معماریِ در شب</h3>
                        <p>در پروژه‌های معاصر، نورپردازی نما و محوطه نقشی کلیدی در شکل‌دهی هویت بصری و تجربهٔ کاربر دارد. این بخش به جنبه‌های فنی و لوکس نورپردازی می‌پردازد: میزان روشنایی (لوکس)، دمای رنگ (کلوین)، شاخص بازتولید رنگ و شیوه‌های حرفه‌ای اجرا.</p>

                        <div class="mt-6 text-[#0A2B1B] bg-[#eee2cb] p-6 rounded-2xl shadow">
                            <h4 class="font-bold mb-3">شدت روشنایی و دمای رنگ</h4>
                            <p>برای طراحی حرفه‌ای لازم است اعداد و مقادیر استاندارد را در نظر گرفت تا هم عملکرد و هم احساس فضا بهینه شوند.</p>

                            <div class="overflow-x-auto mt-4">
                                <table class="w-full text-right table-auto border-collapse">
                                    <thead>
                                        <tr class="bg-gray-100">
                                            <th class="p-3 text-sm font-medium">نوع فضا</th>
                                            <th class="p-3 text-sm font-medium">شدت روشنایی (لوکس)</th>
                                            <th class="p-3 text-sm font-medium">دمای رنگ (کلوین)</th>
                                            <th class="p-3 text-sm font-medium">حس فضایی</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-t">
                                            <td class="p-3">فضاهای عمومی (لابی، گالری)</td>
                                            <td class="p-3">200–400 lx</td>
                                            <td class="p-3">3000–4000 K</td>
                                            <td class="p-3">گرم، دعوت‌کننده</td>
                                        </tr>
                                        <tr class="border-t bg-gray-50">
                                            <td class="p-3">فضاهای کاری / اداری</td>
                                            <td class="p-3">400–600 lx</td>
                                            <td class="p-3">4000–5000 K</td>
                                            <td class="p-3">تمرکز، شفافیت</td>
                                        </tr>
                                        <tr class="border-t">
                                            <td class="p-3">مسکونی (نشیمن، خواب)</td>
                                            <td class="p-3">100–300 lx</td>
                                            <td class="p-3">2700–3500 K</td>
                                            <td class="p-3">آرام، صمیمی</td>
                                        </tr>
                                        <tr class="border-t bg-gray-50">
                                            <td class="p-3">آشپزخانه / سرویس‌ها</td>
                                            <td class="p-3">300–500 lx</td>
                                            <td class="p-3">4000–5000 K</td>
                                            <td class="p-3">دقت، پاکیزگی</td>
                                        </tr>
                                        <tr class="border-t">
                                            <td class="p-3">نما و محوطه (نمای ساختمان)</td>
                                            <td class="p-3">50–150 lx (نما)</td>
                                            <td class="p-3">2700–6000 K</td>
                                            <td class="p-3">دراماتیک، هویتی</td>
                                        </tr>
                                        <tr class="border-t bg-gray-50">
                                            <td class="p-3">محوطه و مسیرها</td>
                                            <td class="p-3">10–50 lx</td>
                                            <td class="p-3">3000–4500 K</td>
                                            <td class="p-3">هدایت، امنیت</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="mt-6">
                                <h5 class="font-semibold mb-2">شاخص‌های فنی مهم</h5>
                                <ul class="list-disc mr-5">
                                    <li><strong>CRI (Color Rendering Index)</strong>: برای پروژه‌های لوکس توصیه می‌شود CRI بالای 90 انتخاب شود تا متریال و رنگ‌ها به‌درستی بازتولید شوند.</li>
                                    <li><strong>Luminous efficacy</strong>: بهره‌وری نوری LEDها بر حسب لومن بر وات، در انتخاب منابع کم‌مصرف و پرنور اهمیت دارد.</li>
                                    <li><strong>Beam angle و Glare control</strong>: انتخاب زاویه پرتو و کنترل خیرگی برای تجربهٔ بصری بدون ناراحتی ضروری است.</li>
                                </ul>
                            </div>

                            <div class="mt-6">
                                <h5 class="font-semibold mb-2">فناوری و هوشمندی</h5>
                                <p>در پروژه‌های سطح بالا، استفاده از پروتکل‌های کنترل نور مانند <span class="inline-code">DALI</span> و <span class="inline-code">KNX</span> و سیستم‌های سنسور محور (Presence, Daylight sensors) سبب صرفه‌جویی و خلق سناریوهای نوری منعطف می‌شود.</p>
                            </div>

                        </div>
                    </section>

                    {/* <!-- Importance of lighting for facade and landscape --> */}
                    <section class="mb-12">
                        <h3 class="text-2xl font-semibold mb-4">اهمیت نورپردازی در نما و محوطه</h3>
                        <div class="text-[#0A2B1B] bg-[#eee2cb] p-6 rounded-2xl shadow">
                            <p>نورپردازی نما و محوطه بیش از زیبایی ظاهری است: این نور است که در شب، هویت پروژه را بازتاب می‌دهد، مسیرها را امن می‌سازد و تجربهٔ نخستین کاربر را شکل می‌دهد. در طراحی لوکس، نور می‌تواند متریال را برجسته کند، عمق بصری ایجاد کند و روایت شبانهٔ پروژه را تعریف نماید.</p>

                            <ol class="list-decimal mt-4 mr-4">
                                <li class="mb-3"><strong>هویت شبانه:</strong> نمای روشن شده می‌تواند لوگو، مصالح شاخص یا خطوط طراحی را به زبان بصری برند تبدیل کند.</li>
                                <li class="mb-3"><strong>هدایت و امنیت:</strong> نورپردازی مسیرها و نقاط تصمیم‌گیری (nodes) حرکت را امن و شهودی می‌کند.</li>
                                <li class="mb-3"><strong>تمرکز بر مصالح:</strong> با نور تاکیدی می‌توان بافت سنگ، شیارهای بتن یا جلوهٔ فلز را نمایان ساخت.</li>
                                <li class="mb-3"><strong>اقتصاد و پایداری:</strong> طراحی صحیح نورپزدازی هزینه‌های انرژی را کاهش می‌دهد و با کنترل هوشمند و LEDهای بهینه، پایداری را افزایش می‌دهد.</li>
                            </ol>

                            <p class="mt-4">در پروژه‌های شاخص، نورپردازی نما می‌تواند به‌عنوان یک سرمایه‌گذاری بازگشت‌پذیر دیده شود — زیرا تصویر برند و تجربهٔ کاربری را به‌طور مستقیم تحت تأثیر قرار می‌دهد.</p>
                        </div>
                    </section>

                    {/* <!-- Practical tips --> */}
                    <section class="mb-12">
                        <h3 class="text-2xl font-semibold mb-4">نکات عملی برای طراحی حرفه‌ای</h3>
                        <div class="text-[#0A2B1B] bg-[#eee2cb] p-6 rounded-2xl shadow">
                            <ul class="list-disc mr-5">
                                <li>همکاری میان معمار منظر و طراح نور از مراحل اولیه پروژه حیاتی است.</li>
                                <li>از گیاهان بومی برای کاهش نگهداری و مصرف آب استفاده کنید.</li>
                                <li>برای نما، ترکیب نور خطی و تاکیدی عمق بیشتری نسبت به منابع یکنواخت ایجاد می‌کند.</li>
                                <li>خیرگی را با شیلدها و زاویه‌دهی کنترل کنید؛ نور نباید چشم را ناراحت کند.</li>
                                <li>سیستم‌های کنترل و سناریو نوری (روز/شب/رویداد) را برای تجربهٔ منعطف طراحی کنید.</li>
                            </ul>
                        </div>
                    </section>

                </main>
            </section>
        </>
    )
}


export default Landscape
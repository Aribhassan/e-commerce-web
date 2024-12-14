import Image from "next/image";

export default function HotProduct() {
  return (
    <header className=" container mx-auto px-4 py-12 lg:py-16">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] items-center">
        {/* Vertical text */}
        <div className="relative top-8 md:text-[12px] sm:transform sm:-translate-y-1/2 sm:-rotate-90 lg:transform lg:-translate-y-1/2 lg:-rotate-90 writing-mode-vertical hidden md:block lg:text-xl font-medium tracking-wider text-zinc-900 md:pt-6 ">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Mobile text version */}
        <div className="text-xl text-center font-medium tracking-wider text-zinc-900 md:hidden">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Images section */}
        <div className="flex flex-col md:flex-row md:gap-8 items-center">
          {/* Orange chair (left side) */}
          <div className="w-full md:w-[48%] aspect-square">
            <Image
              src="/03.jpg"
              alt="Orange modern chair"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Other chairs (right side) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square ">
              <Image
                src="/04.jpg"
                alt="White tufted chair"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/01.jpg"
                alt="Gray upholstered chair"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/06.jpg"
                alt="Vintage white chair"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/01.jpg"
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

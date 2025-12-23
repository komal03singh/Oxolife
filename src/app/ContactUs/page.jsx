import ContactContent from "@/Components/ContactContent";
import Image from "next/image"

export default function Contact() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <section className="relative flex justify-between items-center h-[200px] lg:h-[390px] w-[90%] rounded-l-2xl ">
        {/* Background Image */}
        <Image
          src="/contact2.jpeg"
          alt="sleeping"
          width={700}
          height={400}
          className="object-cover w-full h-full rounded-l-2xl"
        />

        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0077b6]/40 to-transparent z-10 rounded-l-2xl"></div>

        {/* Text Content */}
        <div className="absolute z-20 px-4 lg:px-8">
          <div className="flex flex-col gap-2 lg:gap-4 text-white">
            <h2 className="text-2xl lg:text-6xl font-semibold">Contact Us</h2>
            <p className="text-base lg:text-lg font-medium w-full">
              Still Confused? Reach out to us
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContactContent />
      </div>
    </div>
  );
}

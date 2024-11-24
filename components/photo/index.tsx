import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="xd:w-[298px] xd:h-[298px] w-[498px] h-[498px] overflow-hidden rounded-full bg-white relative">
        <Image
          src="/images/profile.png"
          priority
          quality={100}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
}

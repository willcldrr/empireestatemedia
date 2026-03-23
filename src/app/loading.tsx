import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <Image
          src="/eemlogofull.png"
          alt="Empire Estate Media"
          width={200}
          height={200}
          className="w-48 h-auto object-contain animate-pulse"
          priority
        />
      </div>
    </div>
  );
}

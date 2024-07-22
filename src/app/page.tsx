import Image from "next/image";
import homeImage from "../../public/logos/rick_morty_wallpaper.jpg"

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">

        <Image src={homeImage} alt="Home Wallpaper" width={800} height={800}/>
      </div>
    </>
  );
}

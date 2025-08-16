import bluesky from '@/assets/images/icon-bluesky.svg';
import instagram from '@/assets/images/icon-instagram.svg';
import tiktok from '@/assets/images/icon-tiktok.svg';

export default function Footer() {
  return (
    <div className="flex flex-col-reverse items-center gap-6 py-8 lg:flex-row lg:justify-between lg:gap-0 lg:py-10">
      <p>Made with ❤️ and 🥑</p>
      <ul className="flex gap-6">
        <li>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={bluesky} alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={tiktok} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}

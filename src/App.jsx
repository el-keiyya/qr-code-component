import QRCode from "../src/images/image-qr-code.png";

export default function App() {
  return (
    <main className="bg-white p-4 flex flex-col space-y-3 text-center w-[320px] rounded-lg">
      <img src={QRCode} alt="QR Code" className="w-full rounded-lg" />
      <div className="space-y-3 p-2">
        <h1 className="font-bold text-xl text-slate-900">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-slate-500">
          Scan the QR code to visit frontend mentor and take your coding skills
          to the next level.
        </p>
      </div>
    </main>
  );
}

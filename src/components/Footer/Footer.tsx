import Igs from '../../assets/igs.png'
import Face from '../../assets/facee.png'
import Twiter from '../../assets/t.png'
export default function Footer() {
  return (
    <footer className="bg-[#b5dedb] text-white">
      {/* CTA Banner */}
      <div className="bg-[#33a9a4] w-full py-6 px-10 flex flex-col md:flex-row items-center justify-between rounded-b-md">
        <h2 className="text-2xl font-semibold mb-4 md:mb-0">Ready to get started?</h2>
        <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#33a9a4] transition">
          Contact Us
        </button>
      </div>

      {/* Footer Content */}
      <div className="py-16 px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Socials */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">PyBot</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl bg-white p-2 rounded-full text-blue-600">
              <img src={Igs}></img>
            </a>
            <a href="#" className="text-2xl bg-white p-2 rounded-full text-pink-500">
              <img src={Face}></img>
            </a>
            <a href="#" className="text-2xl bg-white p-2 rounded-full text-sky-500">
              <img src={Twiter}></img>
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold text-lg mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>camping</li>
            <li>Resin</li>
          </ul>
        </div>

        {/* Designs */}
        <div>
          <h4 className="font-bold text-lg mb-3">Designs</h4>
          <ul className="space-y-2 text-sm">
            <li>Desing debility</li>
            <li>Program life</li>
            <li>camping source</li>
            <li>Louc</li>
            <li>Princing</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold text-lg mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Desing debility</li>
            <li>Bring</li>
            <li>camping source</li>
            <li>Louc</li>
            <li>Princing</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

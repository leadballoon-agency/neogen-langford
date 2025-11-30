export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1">
            <img
              src="https://cdn.prod.website-files.com/654790227e1c0eb91511c6e3/65d0a39436a42cbf42c62ed8_the-langford-skin-clinic-logo.svg"
              alt="The Langford Skin Clinic"
              className="h-10 sm:h-12 mb-3 sm:mb-4"
            />
            <p className="text-sm sm:text-base text-gray-400">
              Expert Neogen Plasma treatments. Doctor-led clinic with 30 years of expertise.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="https://wa.me/447812044712" className="hover:text-white flex items-center">
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  07812 044712
                </a>
              </li>
              <li>
                <a href="mailto:louiselangford5@gmail.com" className="hover:text-white break-all">
                  louiselangford5@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#treatments" className="hover:text-white">Treatments</a></li>
              <li><a href="#results" className="hover:text-white">Results</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm mb-2">&copy; 2024 The Langford Skin Clinic. All rights reserved.</p>
          <p className="text-xs text-gray-500 mb-2">
            This site may use Meta tracking technologies to improve user experience and analyze site performance.
          </p>
          <p className="text-xs text-gray-500">
            <a href="/privacy-policy" className="hover:text-gray-300 underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

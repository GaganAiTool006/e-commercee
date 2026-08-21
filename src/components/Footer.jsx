export default function Footer() {
  return (
    <footer className="bg-[#1c1c1e] text-white mt-8 pt-8 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 border-b border-gray-700 pb-8">
          
          <div className="flex flex-col gap-2 text-xs">
            <h4 className="text-gray-500 mb-2">ABOUT</h4>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Flipkart Stories</a>
            <a href="#" className="hover:underline">Press</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </div>

          <div className="flex flex-col gap-2 text-xs">
            <h4 className="text-gray-500 mb-2">GROUP COMPANIES</h4>
            <a href="#" className="hover:underline">Myntra</a>
            <a href="#" className="hover:underline">Cleartrip</a>
            <a href="#" className="hover:underline">Shopsy</a>
          </div>

          <div className="flex flex-col gap-2 text-xs">
            <h4 className="text-gray-500 mb-2">HELP</h4>
            <a href="#" className="hover:underline">Payments</a>
            <a href="#" className="hover:underline">Shipping</a>
            <a href="#" className="hover:underline">Cancellation & Returns</a>
            <a href="#" className="hover:underline">FAQ</a>
          </div>

          <div className="flex flex-col gap-2 text-xs">
            <h4 className="text-gray-500 mb-2">CONSUMER POLICY</h4>
            <a href="#" className="hover:underline">Cancellation & Returns</a>
            <a href="#" className="hover:underline">Terms Of Use</a>
            <a href="#" className="hover:underline">Security</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Grievance Redressal</a>
            <a href="#" className="hover:underline">EPR Compliance</a>
          </div>

          <div className="flex flex-col gap-2 text-xs border-l border-gray-700 pl-4 lg:col-span-1">
            <h4 className="text-gray-500 mb-2">Mail Us:</h4>
            <p className="text-gray-300 mb-4">
              Flipkart Internet Private Limited,<br/>
              Buildings Alyssa, Begonia &<br/>
              Clove Embassy Tech Village,<br/>
              Outer Ring Road, Devarabeesanahalli Village,<br/>
              Bengaluru, 560103,<br/>
              Karnataka, India
            </p>
            <h4 className="text-gray-500 mb-2">Registered Office Address:</h4>
            <p className="text-gray-300">
              Flipkart Internet Private Limited,<br/>
              Buildings Alyssa, Begonia &<br/>
              Clove Embassy Tech Village,<br/>
              Outer Ring Road, Devarabeesanahalli Village,<br/>
              Bengaluru, 560103,<br/>
              Karnataka, India<br/>
              CIN : U51109KA2012PTC066107<br/>
              Telephone: <a href="tel:044-45614700" className="text-blue-500">044-45614700</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

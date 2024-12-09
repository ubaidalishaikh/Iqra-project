


import React from "react";
import Image from "next/image";
import trophee from "../../public/trophy 1.png";
import guarantee from "../../public/guarantee.png";
import shipping from "../../public/shipping.png";
import help from "../../public/customer-support.png";

function Badge() {
  return (
    <div className="bg-[#faf3ea] py-14 px-6 md:px-14">
      {/* Badges Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
        {/* Badge 1 - High Quality */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-4 p-4 border border-gray-200 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <Image src={trophee} alt="Trophy image" className="w-12 h-12" />
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              High Quality
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Crafted from top materials
            </p>
          </div>
        </div>

        {/* Badge 2 - Warranty Protection */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-4 p-4 border border-gray-200 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <Image src={guarantee} alt="Guarantee badge image" className="w-12 h-12" />
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Warranty Protection
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Badge 3 - Free Shipping */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-4 p-4 border border-gray-200 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <Image src={shipping} alt="Shipping image" className="w-12 h-12" />
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Free Shipping
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Order over $150
            </p>
          </div>
        </div>

        {/* Badge 4 - Customer Support */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-4 p-4 border border-gray-200 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
          <Image src={help} alt="Support image" className="w-12 h-12" />
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              24 / 7 Support
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Dedicated Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Badge;

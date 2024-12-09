



import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { BsCalendarDateFill } from "react-icons/bs";
import { TbLabelFilled } from "react-icons/tb";
import Link from "next/link";

interface BlogProps {
  image: StaticImageData;
  title: string;
  content: string;
}

function BlogCard({ image, title, content }: BlogProps) {
  return (
    <div className="flex flex-col justify-start gap-6 w-full sm:w-[480px] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Blog Image */}
      <div className="w-full h-52">
        <Image
          src={image}
          alt="Blog Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Meta Information */}
      <div className="px-4">
        <ul className="flex flex-wrap justify-start items-center gap-4 text-xs sm:text-sm text-gray-500">
          <li className="flex items-center gap-2">
            <CgProfile className="text-lg text-gray-700" />
            <span>Admin</span>
          </li>
          <li className="flex items-center gap-2">
            <BsCalendarDateFill className="text-lg text-gray-700" />
            <span>19-Oct-2022</span>
          </li>
          <li className="flex items-center gap-2">
            <TbLabelFilled className="text-lg text-gray-700" />
            <span>Wood</span>
          </li>
        </ul>
      </div>

      {/* Blog Content */}
      <div className="px-4 flex flex-col gap-4">
        {/* Blog Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          {title}
        </h2>

        {/* Blog Summary */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {content}
        </p>

        {/* Read More Link */}
        <div>
          <Link
            href="/"
            className="text-sm sm:text-base text-blue-600 font-medium border-b-2 border-blue-600 pb-1 hover:text-blue-500 hover:border-blue-500 transition-colors duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

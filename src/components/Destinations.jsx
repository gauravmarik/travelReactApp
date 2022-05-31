import React from "react";
import BoraBora from "../assets/borabora.jpeg";
import BoraBora2 from "../assets/borabora2.jpeg";
import Maldives from "../assets/maldives.jpeg";
import Maldives2 from "../assets/maldives2.jpeg";
import KeyWest from "../assets/keywest.jpeg";

const Destinations = () => {
	return (
		<div className="max-w-[1240] mx-auto py-16 px-4 text-center">
			<h1>All-inclusive Resorts</h1>
			<p className="py-4">On the Caribbean's Best Beaches</p>
			<div className="grid grid-rows-none md:grid-cols-5 gap-2 md:gap-4">
				<img
					className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
					src={BoraBora}
					alt="/"
				/>
				<img className="w-full h-full object-cover" src={BoraBora2} alt="/" />
				<img className="w-full h-full object-cover" src={Maldives} alt="/" />
				<img className="w-full h-full object-cover" src={Maldives2} alt="/" />
				<img className="w-full h-full object-cover" src={KeyWest} alt="/" />
			</div>
		</div>
	);
};

export default Destinations;

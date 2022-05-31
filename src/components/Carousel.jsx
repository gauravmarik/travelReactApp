import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData = [
	{
		url: "https://images.unsplash.com/photo-1580742314608-23d8db11fa60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
	},
	{
		url: "https://images.unsplash.com/photo-1580742558984-e642387cf7e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
	},
	{
		url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
	},
];

const Carousel = () => {
	const [slide, setSlide] = useState(0);
	const length = sliderData.length;

	const prevSlide = () => {
		setSlide(slide === length - 1 ? 0 : slide + 1);
	};

	const nextSlide = () => {
		setSlide(slide === 0 ? length - 1 : slide - 1);
	};

	return (
		<div>
			<div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
				<BsArrowLeftSquareFill
					onClick={prevSlide}
					className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
				/>
				<BsArrowRightSquareFill
					onClick={nextSlide}
					className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
				/>
				{sliderData.map((item, index) => (
					<div className={index === slide ? "opacity-100" : "opacity-0"}>
						{index === slide && (
							<img className="w-full rounded-md" src={item.url} alt="/" />
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;

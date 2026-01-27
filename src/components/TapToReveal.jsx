'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function TapToReveal({ onReveal, TOGETHER_DATE }) {
	const [isAnimating, setIsAnimating] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const handleReveal = (e) => {
		e.preventDefault();
		console.log(e.target.date.value);

		const inputDate = e.target.date.value + 'T00:00:00';
		console.log(inputDate);

		if (inputDate == TOGETHER_DATE) {
			setErrorMessage(null);
			setIsAnimating(true);

			// Delay the reveal to allow animations to play
			setTimeout(() => {
				onReveal();
				confetti({
					particleCount: 250,
					spread: 100,
					origin: { y: 0.6 },
					colors: ['#ff80ab', '#ea80fc', '#8c9eff', '#ff8a80'],
				});
			}, 1000);
		} else {
			setErrorMessage(
				"Really?? You don't know our anniversary date? Try again!",
			);
		}
	};

	return (
		<motion.div
			className='fixed inset-0 flex items-center justify-center z-50 overflow-hidden'
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
		>
			<motion.div
				className='relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 max-w-xl cursor-pointer mx-4'
				animate={
					isAnimating
						? {
								scale: [1, 1.2, 0],
								opacity: [1, 1, 0],
								rotate: [0, 5, 0, -5, 0],
							}
						: {}
				}
				transition={
					isAnimating
						? {
								duration: 1,
								ease: 'easeInOut',
							}
						: {}
				}
			>
				<motion.div
					className='absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden'
					animate={isAnimating ? { scale: 1.5, opacity: 0 } : {}}
					transition={{ duration: 1 }}
				>
					<div className='absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50' />
				</motion.div>

				<div className='relative z-10 space-y-8'>
					<motion.div
						className='text-7xl md:text-8xl'
						animate={{
							scale: [1, 1.2, 1],
							rotate: [0, 5, 0, -5, 0],
						}}
						transition={{
							duration: 2,
							repeat: Number.POSITIVE_INFINITY,
							ease: 'easeInOut',
						}}
					>
						💝
					</motion.div>

					<motion.h2 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-gradient'>
						Your Anniversary Surprise Awaits!
					</motion.h2>

					<div className='flex items-center justify-center space-x-2 text-lg md:text-xl text-pink-600 font-medium'>
						<span>Enter our anniversary date</span>
						<motion.span
							animate={{
								opacity: [0, 1, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								ease: 'easeInOut',
							}}
						>
							✨
						</motion.span>
					</div>
					<div>
						{errorMessage && <span className='text-black'>{errorMessage}</span>}
					</div>
					<form
						className='text-black flex flex-col items-center gap-3'
						onSubmit={handleReveal}
					>
						<input type='date' name='date' id='date' />
						<button
							className='bg-pink-200 rounded-lg px-2 pt-2 pb-1 hover:bg-pink-300'
							type='submit'
						>
							Reveal
						</button>
					</form>
				</div>
			</motion.div>
		</motion.div>
	);
}

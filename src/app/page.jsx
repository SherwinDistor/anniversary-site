'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '@/components/Loader';
import Countdown from '@/components/Countdown';
import DaysTogether from '@/components/DaysTogether';
import PhotoGallery from '@/components/PhotoGallery';
import Message from '@/components/Message';
import MusicPlayer from '@/components/MusicPlayer'; // Uncomment this if you want to add a background song
import FloatingElements from '@/components/FloatingElements';
import TapToReveal from '@/components/TapToReveal';

// Change this to your anniversary date
const ANNIVERSARY_DATE = '2026-01-29T00:00:00';
// Change this to the date you got together
const TOGETHER_DATE = '2021-01-29T00:00:00';

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [showContent, setShowContent] = useState(false);
	const [showTapToReveal, setShowTapToReveal] = useState(false);
	const [playSong, setPlaySong] = useState(false); // Uncomment this if you want to add a background song

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 4000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		// Check if the anniversary date has passed
		const now = new Date();
		const anniversary = new Date(ANNIVERSARY_DATE);
		if (now >= anniversary) {
			setShowContent(true);
			setShowTapToReveal(true);
		}
	}, []);

	const handleCountdownComplete = () => {
		setShowContent(true);
		setShowTapToReveal(true);
	};

	const handleReveal = () => {
		setShowTapToReveal(false);
		setShowContent(true);

		// Uncomment this if you want to add a background song
		setTimeout(() => {
			setPlaySong(true);
		}, 1000);
	};

	// Add your photos here
	const photos = [
		{ src: '/image.png', alt: 'Growing old together' },
		{ src: '/image2.png', alt: 'Never letting go' },
		{ src: '/image3.png', alt: 'Lucky charm' },
		{ src: '/image4.png', alt: 'Peace and love' },
		{ src: '/image5.png', alt: 'My yellow💛' },
		{ src: '/image6.png', alt: 'Winning at life with you by my side' },
		{ src: '/image7.png', alt: 'Mom and dad' },
		{ src: '/image8.png', alt: 'My smart cookie' },
		{ src: '/image9.png', alt: 'Win or lose' },
		{ src: '/image10.png', alt: 'Adventure awaits' },
		{ src: '/image11.png', alt: 'Young, dumb, and in love' },
		{ src: '/image12.png', alt: 'Sweeping you off your feet' },
		{ src: '/image13.png', alt: 'Pure joy' },
		{ src: '/image14.png', alt: 'Travel partner' },
		{ src: '/image15.png', alt: "Where'd all the time go?" },
		{ src: '/image16.png', alt: 'Always laughing' },
		{ src: '/image17.png', alt: 'Love' },
		{ src: '/image18.png', alt: 'Certified baddie' },
		{ src: '/image19.png', alt: '愛しています' },
		{ src: '/image20.png', alt: 'Mom and dad pt.2' },
		{ src: '/image21.png', alt: 'Rowing my boat into your heart' },
		{ src: '/image22.png', alt: 'Another birthday with the best' },
		{ src: '/image23.png', alt: 'My girl' },
		{ src: '/image24.png', alt: 'The wall says it all' },
		{ src: '/image25.png', alt: 'My big back partner' },
		{ src: '/image26.png', alt: 'Nap time in Florida' },
		{ src: '/image27.png', alt: 'GBR!' },
		{ src: '/image28.png', alt: 'Mom and dad pt.3' },
		{ src: '/image29.jpg', alt: 'Yeah we are cute' },
		{ src: '/image30.png', alt: 'Sorry tri-delta...' },
		{ src: '/image31.png', alt: 'Self care' },
		{ src: '/image32.png', alt: 'First time camping and floating' },
		{ src: '/image33.png', alt: 'Remember when?' },
		{ src: '/image34.png', alt: 'I love you' },
		{ src: '/image35.png', alt: 'When we survived a tornado' },
		{ src: '/image36.png', alt: 'The brail with my fav' },
		{ src: '/image37.png', alt: 'Blurry nights' },
		{ src: '/image38.png', alt: 'Take me back' },
		{ src: '/image39.jpg', alt: 'Endless kisses' },
	];

	// Change this message according to you
	const message = `Dear Katie,
A few days ago, you threw me a birthday party with all my people and I felt so loved at that moment. But throughout the night, I just kept thinking how lucky I am to have you in my life and I don't think I tell you enough. So thank you. Thank you for pushing me out of my comfort zone, for always being there when I need it the most, and for being someone I can trust wholeheartedly.
These past 5 years have been the best time of my life. Not because of the things we did or the places we went, but because you were by my side every step of the way. I think the moment I knew you were special was a impromptu study session where you bombed your physics exam. I had the biggest crush on you and we weren't doing anything special but simply talking and joking around. Probably why the exam didn't go well because there was not much studying going on but I saw someone who was smart, motivated, and funny enough that I could spend the rest of my life with them without getting bored.
Another moment that I love, and I know I talked about it before, was when we were watching fireworks in Okoboji. I don't think we have any pictures from that night but I just remember how beautiful you looked and how warm you felt in my arms. At that moment, nothing else mattered and I felt at peace, every worry or anxiety melting away because you became my safe space. 
It's very hard right now, for the both of us. Distance is not easy. Im sorry I can't get you the nicest things or buy you a house right now. It is so easy to compare, especially with the people around us, but I promise you I am trying my best everyday so we can find the life we love together. But I am sorry it is taking longer than planned. I appreciate you sticking by me through the good times and the bad. I love you and happy anniversary!
With all my heart,
Sherwin`;

	return (
		<main className='min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100'>
			<FloatingElements />

			<AnimatePresence mode='wait'>
				{loading ? (
					<Loader key='loader' />
				) : !showContent ? (
					<motion.div
						key='countdown-container'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='flex flex-col items-center justify-center min-h-screen p-4 relative'
					>
						<motion.div
							className='absolute top-0 left-0 w-full h-full pointer-events-none'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
						>
							<div
								className='absolute bottom-1/4 left-1/4 w-20 h-20 text-5xl animate-bounce'
								style={{ animationDelay: '1.5s' }}
							>
								💝
							</div>
						</motion.div>

						<motion.div
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 100,
								delay: 0.2,
							}}
							className='text-center mb-12 relative'
						>
							<div className='absolute -top-16 -left-16 w-32 h-32 text-5xl animate-float'>
								🌸
							</div>
							<div className='absolute -bottom-28 -right-14 w-32 h-32 text-5xl animate-float-delay'>
								🌺
							</div>

							<h1 className='text-4xl md:text-5xl py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-4 animate-gradient'>
								Our Anniversary is Coming!
							</h1>
							<p className='text-xl text-purple-700 font-medium'>
								The countdown to our special day 💛
							</p>
						</motion.div>

						<Countdown
							targetDate={ANNIVERSARY_DATE}
							onComplete={handleCountdownComplete}
						/>
					</motion.div>
				) : showTapToReveal ? (
					<TapToReveal
						key='tap-to-reveal'
						onReveal={handleReveal}
						TOGETHER_DATE={TOGETHER_DATE}
					/>
				) : (
					<>
						{/* Uncomment this if you want to add a background song */}
						<MusicPlayer playSong={playSong} />
						<motion.div
							key='content'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className='container mx-auto px-4 py-8'
						>
							<motion.div
								initial={{ y: 50, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{
									type: 'spring',
									stiffness: 100,
									delay: 0.3,
								}}
								className='text-center mb-12 relative'
							>
								<div className='absolute -top-2 -left-5 md:-left-10 text-5xl md:text-6xl animate-float'>
									🎉
								</div>
								<div className='absolute -bottom-10 -right-5 md:-bottom-14 md:-right-10 text-5xl md:text-6xl animate-float-delay'>
									🎊
								</div>

								<h1 className='text-4xl md:text-6xl py-1 md:py-2 px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-3 animate-gradient'>
									Happy Anniversary Katie!
								</h1>
								<p className='text-xl text-purple-700 font-medium'>
									Remembering every moment with you from the past 5 years 💛
								</p>
							</motion.div>

							<DaysTogether startDate={TOGETHER_DATE} animationDuration={3} />

							<PhotoGallery photos={photos} />

							<Message message={message} />

							<motion.footer
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.5 }}
								className='text-center mt-16 mb-8 text-pink-600'
							>
								<p className='text-lg font-medium'>Made with 💛 by @sherwin</p>
							</motion.footer>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</main>
	);
}

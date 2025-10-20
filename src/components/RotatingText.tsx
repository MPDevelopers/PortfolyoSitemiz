import type React from 'react';
import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import './RotatingText.css';

function cn(...classes: Array<string | undefined | null | false>) {
	return classes.filter(Boolean).join(' ');
}

export type RotatingTextHandle = {
	next: () => void;
	previous: () => void;
	jumpTo: (index: number) => void;
	reset: () => void;
};

export type RotatingTextProps = {
	texts: string[];
	transition?: any;
	initial?: any;
	animate?: any;
	exit?: any;
	animatePresenceMode?: 'sync' | 'popLayout' | 'wait';
	animatePresenceInitial?: boolean;
	rotationInterval?: number;
	staggerDuration?: number;
	staggerFrom?: 'first' | 'last' | 'center' | 'random' | number;
	loop?: boolean;
	auto?: boolean;
	splitBy?: 'characters' | 'words' | 'lines' | string;
	onNext?: (nextIndex: number) => void;
	mainClassName?: string;
	splitLevelClassName?: string;
	elementLevelClassName?: string;
	lockWidth?: boolean; // when true, sets width to longest text to avoid layout shift
} & React.ComponentProps<'span'>;

const RotatingText = forwardRef((props: RotatingTextProps, ref: React.Ref<RotatingTextHandle>) => {
	const {
		texts,
		transition = { type: 'spring', damping: 25, stiffness: 300 },
		initial = { y: '100%', opacity: 0 },
		animate = { y: 0, opacity: 1 },
		exit = { y: '-120%', opacity: 0 },
		animatePresenceMode = 'wait',
		animatePresenceInitial = false,
		rotationInterval = 2000,
		staggerDuration = 0,
		staggerFrom = 'first',
		loop = true,
		auto = true,
		splitBy = 'characters',
		onNext,
		mainClassName,
		splitLevelClassName,
		elementLevelClassName,
		lockWidth = false,
		...rest
	} = props;

	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [lockedWidthPx, setLockedWidthPx] = useState<number | undefined>(undefined);
	const measureRef = useRef<HTMLSpanElement | null>(null);

	const splitIntoCharacters = (text: string) => {
		if (typeof Intl !== 'undefined' && (Intl as any).Segmenter) {
			const segmenter = new (Intl as any).Segmenter('en', { granularity: 'grapheme' });
			return Array.from(segmenter.segment(text), (segment: any) => segment.segment);
		}
		return Array.from(text);
	};

	const elements = useMemo(() => {
		const currentText = texts[currentTextIndex] ?? '';
		if (splitBy === 'characters') {
			const words = currentText.split(' ');
			return words.map((word, i) => ({
				characters: splitIntoCharacters(word),
				needsSpace: i !== words.length - 1
			}));
		}
		if (splitBy === 'words') {
			return currentText.split(' ').map((word, i, arr) => ({
				characters: [word],
				needsSpace: i !== arr.length - 1
			}));
		}
		if (splitBy === 'lines') {
			return currentText.split('\n').map((line, i, arr) => ({
				characters: [line],
				needsSpace: i !== arr.length - 1
			}));
		}

		return currentText.split(splitBy as string).map((part, i, arr) => ({
			characters: [part],
			needsSpace: i !== arr.length - 1
		}));
	}, [texts, currentTextIndex, splitBy]);

	const getStaggerDelay = useCallback(
		(index: number, totalChars: number) => {
			const total = totalChars;
			if (staggerFrom === 'first') return index * staggerDuration;
			if (staggerFrom === 'last') return (total - 1 - index) * staggerDuration;
			if (staggerFrom === 'center') {
				const center = Math.floor(total / 2);
				return Math.abs(center - index) * staggerDuration;
			}
			if (staggerFrom === 'random') {
				const randomIndex = Math.floor(Math.random() * total);
				return Math.abs(randomIndex - index) * staggerDuration;
			}
			return Math.abs((staggerFrom as number) - index) * staggerDuration;
		},
		[staggerFrom, staggerDuration]
	);

	const handleIndexChange = useCallback(
		(newIndex: number) => {
			setCurrentTextIndex(newIndex);
			if (onNext) onNext(newIndex);
		},
		[onNext]
	);

	const next = useCallback(() => {
		const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
		if (nextIndex !== currentTextIndex) {
			handleIndexChange(nextIndex);
		}
	}, [currentTextIndex, texts.length, loop, handleIndexChange]);

	const previous = useCallback(() => {
		const prevIndex = currentTextIndex === 0 ? (loop ? texts.length - 1 : currentTextIndex) : currentTextIndex - 1;
		if (prevIndex !== currentTextIndex) {
			handleIndexChange(prevIndex);
		}
	}, [currentTextIndex, texts.length, loop, handleIndexChange]);

	const jumpTo = useCallback(
		(index: number) => {
			const validIndex = Math.max(0, Math.min(index, texts.length - 1));
			if (validIndex !== currentTextIndex) {
				handleIndexChange(validIndex);
			}
		},
		[texts.length, currentTextIndex, handleIndexChange]
	);

	const reset = useCallback(() => {
		if (currentTextIndex !== 0) {
			handleIndexChange(0);
		}
	}, [currentTextIndex, handleIndexChange]);

	useImperativeHandle(
		ref,
		() => ({
			next,
			previous,
			jumpTo,
			reset
		}),
		[next, previous, jumpTo, reset]
	);

	useEffect(() => {
		if (!auto) return;
		const intervalId = setInterval(next, rotationInterval);
		return () => clearInterval(intervalId);
	}, [next, rotationInterval, auto]);

	// Measure the widest text and lock width if requested
	useEffect(() => {
		if (!lockWidth || !measureRef.current) return;
		let maxWidth = 0;
		const el = measureRef.current;
		for (const text of texts) {
			el.textContent = text;
			maxWidth = Math.max(maxWidth, el.offsetWidth);
		}
		setLockedWidthPx(maxWidth);
	}, [texts, lockWidth]);

	return (
		<span style={lockWidth && lockedWidthPx ? { width: lockedWidthPx } : undefined} className={cn('inline-flex')}>
			{/* hidden measurer to compute the widest width; inherits font styles */}
			{lockWidth && (
				<span
					ref={measureRef}
					className="text-rotate-measure"
					aria-hidden="true"
				/>
			)}
			<motion.span className={cn('text-rotate', mainClassName)} {...rest} layout transition={transition}>
				<span className="text-rotate-sr-only">{texts[currentTextIndex]}</span>
				<AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
					<motion.span
						key={currentTextIndex}
						className={cn(splitBy === 'lines' ? 'text-rotate-lines' : 'text-rotate')}
						layout
						aria-hidden="true"
					>
						{elements.map((wordObj, wordIndex, array) => {
							const previousCharsCount = array.slice(0, wordIndex).reduce((sum, word) => sum + word.characters.length, 0);
							return (
								<span key={wordIndex} className={cn('text-rotate-word', splitLevelClassName)}>
									{wordObj.characters.map((char: string, charIndex: number) => (
										<motion.span
											key={charIndex}
											initial={initial}
											animate={animate}
											exit={exit}
											transition={{
												...transition,
												delay: getStaggerDelay(
													previousCharsCount + charIndex,
													array.reduce((sum, word) => sum + word.characters.length, 0)
												)
											}}
											className={cn('text-rotate-element', elementLevelClassName)}
										>
											{char}
										</motion.span>
									))}
									{wordObj.needsSpace && <span className="text-rotate-space"> </span>}
								</span>
							);
						})}
					</motion.span>
				</AnimatePresence>
			</motion.span>
		</span>
	);
}) as React.ForwardRefExoticComponent<RotatingTextProps & React.RefAttributes<RotatingTextHandle>>;

RotatingText.displayName = 'RotatingText';
export default RotatingText;

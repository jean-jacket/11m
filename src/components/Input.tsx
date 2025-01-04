import { useState, useRef, useEffect } from "react";
import { useThreadStore } from "../stores/thread";

function Input() {
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const genResponse = useThreadStore((state) => state.gen);
	const [text, setText] = useState("");

	useEffect(() => {
		if (textAreaRef.current) {
			textAreaRef.current.focus();
		}
	});

	return (
		<textarea
			ref={textAreaRef}
			onKeyDown={(e) => {
				if ((e.code === "Enter" || e.code === "NumpadEnter") && !e.shiftKey) {
					e.preventDefault();

					if (text.trim()) {
						genResponse(text.trim());
					}

					setText("");
				}
			}}
			onChange={(e) => {
				setText(e.target.value);
			}}
			value={text}
			className="absolute bottom-5 w-full h-20 max-h-[20dvh] resize-none bg-gray-200 rounded-lg p-3"
			placeholder="Message AI"
		/>
	);
}

export default Input;

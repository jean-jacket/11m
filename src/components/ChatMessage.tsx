import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Message } from "../types";

interface ChatMessageProps {
	message: Message;
}

function ChatMessage({ message }: ChatMessageProps) {
	if (message.role === "user") {
		return (
			<div className="py-6 flex flex-col items-end w-full h-8">
				<div className="p-2 py-1  bg-gray-200 rounded-md">
					{message.content}
				</div>
			</div>
		);
	}

	return (
		<div className="py-8">
			<Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
		</div>
	);
}

export default ChatMessage;

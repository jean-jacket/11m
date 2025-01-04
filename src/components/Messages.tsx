import { useThreadStore } from "../stores/thread";
import ChatMessage from "./ChatMessage";

function ChatMessages() {
	const messages = useThreadStore((state) => state.messages);

	return (
		<div className="flex flex-col text-base py-2">
			{messages.map((msg, index) => {
				return <ChatMessage key={index} message={msg} />;
			})}
		</div>
	);
}

export default ChatMessages;

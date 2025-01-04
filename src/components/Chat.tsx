import Input from "./Input";
import Messages from "./Messages";

function Chat() {
	return (
		<div className="h-screen relative max-w-xl mx-auto">
			<Messages />
			<Input />
		</div>
	);
}

export default Chat;

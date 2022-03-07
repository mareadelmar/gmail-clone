import { Container } from "./style.js";
import EmailIcons from "./EmailIcons";
import EmailTabs from "./EmailTabs";
import EmailList from "./EmailList";

const EmailsContainer = () => {
	return (
		<Container>
			<EmailIcons />
			<EmailTabs />
			<EmailList />
		</Container>
	);
};

export default EmailsContainer;

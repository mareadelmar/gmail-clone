import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Checkbox, IconButton } from "@mui/material";
import {
	Container,
	Email,
	EmailSubject,
	EmailContent,
	EmailTitle,
	EmailMessage,
} from "./style";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const EMAIL_LIST = [
	{
		id: 1,
		sender: "Curly",
		title: "Urgente",
		message: "Llamen a Moe, que Larry está en cualquiera",
	},
	{
		id: 2,
		sender: "LinkedIn",
		title: "Han visto tu solicitud para Frontend Developer",
		message: "Han visto tu solicitud para Frontend Developer",
	},
	{
		id: 3,
		sender: "Codewars",
		title: "Your Weekly Codewars Kata",
		message: "Check out this week's featured kata",
	},
	{
		id: 4,
		sender: "yo, Román",
		title: "React Developer Jr",
		message:
			"Hola! Hemos recibido su solicitud. Nos pondremos en contacto en caso de que tu perfil sea compatible con los requerimentos del puesto.",
	},
	{
		id: 5,
		sender: "Curly",
		title: "Urgente",
		message: "Llamen a Moe, que Larry está en cualquiera",
	},
	{
		id: 6,
		sender: "LinkedIn",
		title: "Han visto tu solicitud para React.js Developer",
		message: "Han visto tu solicitud para Frontend Developer",
	},
	{
		id: 7,
		sender: "Codewars",
		title: "Your Weekly Codewars Kata",
		message: "Check out this week's featured kata",
	},
	{
		id: 8,
		sender: "Hiring Room",
		title: "Su postulación ha sido procesada",
		message:
			"Postulación realizada correctamente Hola, hemos recibido tu postulación",
	},
	{
		id: 9,
		sender: "Codewars",
		title: "Your Weekly Codewars Kata",
		message: "Check out this week's featured kata",
	},
	{
		id: 10,
		sender: "yo, Gisela",
		title: "Frontend Developer Jr",
		message:
			"Hola! Nos pondremos en contacto en caso de que tu perfil sea compatible con los requerimentos del puesto.",
	},
	{
		id: 11,
		sender: "LinkedIn",
		title: "Han visto tu solicitud para Frontend Developer",
		message: "Han visto tu solicitud para Frontend Developer",
	},
	{
		id: 12,
		sender: "LinkedIn",
		title: "Han visto tu solicitud para Frontend Developer",
		message: "Han visto tu solicitud para Frontend Developer",
	},
];

const EmailItem = ({
	sender,
	title,
	message,
}: {
	sender: string;
	title: string;
	message: string;
}) => {
	return (
		<Email>
			<div>
				<IconButton>
					<Checkbox />
				</IconButton>
				<IconButton>
					<StarBorderIcon />
				</IconButton>
				<DoubleArrowIcon sx={{ fontSize: "12px" }} />
			</div>
			<EmailSubject>
				<span>{sender}</span>
			</EmailSubject>
			<EmailContent>
				<EmailTitle>{title}</EmailTitle>
				<EmailMessage>- {message}</EmailMessage>
			</EmailContent>
		</Email>
	);
};

const EmailList = () => {
	return (
		<Container>
			{EMAIL_LIST.map(item => (
				<EmailItem
					sender={item.sender}
					title={item.title}
					message={item.message}
					key={item.id}
				/>
			))}
		</Container>
	);
};

export default EmailList;

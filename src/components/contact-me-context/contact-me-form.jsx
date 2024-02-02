import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
    Textarea,
    Spinner,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollReveal from "scrollreveal";
import "./contact-me-context.css";
import emailjs from "emailjs-com";
import {
    sendEmailError,
    sendEmailStart,
    sendEmailSuccses,
} from "../../reducer/email-send";
import {
    alertMassageError,
    alertMassageSuccses,
} from "../../reducer/alert-massage";

function ContactMeForm() {
    const { dark } = useSelector((state) => state.dark);
    const { language } = useSelector((state) => state.language);
    const { loading } = useSelector((state) => state.emailSend);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendEmailStart());

        emailjs
            .send(
                "service_lq7nn2i",
                "template_7mv9h4r",
                formData,
                "Y7khz-fNfdtppT2lq"
            )
            .then((response) => {
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
                dispatch(sendEmailSuccses());
                dispatch(
                    alertMassageSuccses({
                        title: language
                            ? "Xabar muvaffaqiyatli yuborildi"
                            : "Message sent successfully",
                        color: "green",
                    })
                );
            })
            .catch((error) => {
                dispatch(sendEmailError());
                dispatch(
                    alertMassageError({
                        title: language
                            ? "Xabar yuborishda xatolik"
                            : "Error sending message",
                        color: "red",
                    })
                );
            });
    };

    useEffect(() => {
        ScrollReveal().reveal(`.contact-me-form`, {
            duration: 800,
            delay: 200,
            distance: "60px",
            origin: "right",
            easing: "ease-out",
        });
    }, []);

    return (
        <Card className="w-[95%] mx-auto sm:mx-0 sm:w-96 contact-me-form">
            <CardHeader
                variant="gradient"
                color={`${dark ? "gray" : "blue"}`}
                className="mb-4 grid h-16 md:h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                    {language ? "Menga yozing" : " Message me"}
                </Typography>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        label={language ? "Ism" : "Name"}
                        size="lg"
                        className="my-box-shadow"
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Email"
                        size="lg"
                        className="my-box-shadow"
                        required
                    />
                    <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        label={language ? "Xabar" : "Massage"}
                        className="my-box-shadow"
                    />
                    <Button
                        className="button-send mx-auto"
                        color={`${dark ? "gray" : "blue"}`}
                        variant="gradient"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <Spinner color={!dark && "blue"} />
                        ) : (
                            <>
                                <div className="svg-wrapper-1">
                                    <div className="svg-wrapper">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                        >
                                            <path
                                                fill="none"
                                                d="M0 0h24v24H0z"
                                            ></path>
                                            <path
                                                fill="currentColor"
                                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>Send</span>
                            </>
                        )}
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
}

export default ContactMeForm;

import { ContactMeContent, ContactMeForm } from "../../components";

function ContactMe() {
    return (
        <div className="my-container min-h-screen pt-8 md:pt-0 flex gap-10 flex-col md:flex-row md:justify-between lg:justify-around items-center">
            <ContactMeContent />
            <ContactMeForm />
        </div>
    );
}

export default ContactMe;

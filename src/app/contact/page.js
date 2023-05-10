import styles from "@/app/styles/contact.module.css"
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const page = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact us</h1>
                <ContactCard />
                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span>from you</span></h2>
                    <ContactForm />
                </section>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60891.06671984749!2d78.27382894442917!3d17.474465579448264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92c669f5354f%3A0x8bc6f68f0f90ef21!2sSerilingampalle%20(M)%2C%20Telangana!5e0!3m2!1sen!2sin!4v1683719231783!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
            </div>
        </>
    );
};

export default page;
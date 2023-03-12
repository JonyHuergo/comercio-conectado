import { useState, useEffect, useRef } from "react";
import { submitReview } from "../services";
import styles from '/styles/ReviewsForm.module.css';

const ReviewsForm = ({ slug }) => {
    const [error, setError] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const contentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();

    useEffect(() => {
            nameEl.current.value = window.localStorage.getItem("name");
            emailEl.current.value = window.localStorage.getItem("email");
    }, [])

    const handleReviewSubmission = () => {
        setError(false);
        const { value: content } = contentEl.current
        const { value: name } = nameEl.current
        const { value: email } = emailEl.current

        if (!name || !email || !content) {
        setError(true);
        return;
        }

        const reviewObj = {
            name,
            email,
            content,
            slug,
        };

        if (storeData) {
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.removeItem('name');
            window.localStorage.removeItem('email');
        }

        submitReview(reviewObj)
            .then((res) => {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000);
            })
    }

    return (
        <div className={styles.reviewsFormContainer}>
            <h3 className={styles.reviewsFormTitle}>Añadir comentario</h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea
                    ref={contentEl}
                    className={styles.content}
                    name="content"
                    placeholder="Content"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    ref={nameEl}
                    className={styles.name}
                    placeholder="Name"
                    name="name"
                />
                <input
                    type="email"
                    ref={emailEl}
                    className={styles.email}
                    placeholder="Email"
                    name="email"
                />
            </div>
            {error && <p className="text-xs text-red-500">Se necesita completar todos los campos</p>}
            <div className="mt-8 w-32 mx-auto lg:w-auto">
                <button
                    type="button"
                    onClick={handleReviewSubmission}
                    className={styles.publish}
                >
                    Publicar
                </button>
                {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comentario enviado y en espera de revisión</span>}
            </div>
        </div>
    );
}
 
export default ReviewsForm;
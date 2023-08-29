import { Formik, Form, Field } from 'formik';
import styles from './Switcher.module.css';

export const Switcher = () => {
    return (
        <div className={styles.form}>
            <Formik
                initialValues={{ switchOption: 'yes' }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form className={styles.switchField}>
                        <Field
                            type="radio"
                            id="radio-one"
                            name="switchOption"
                            value="yes"
                            className={styles.switchFieldInput}
                        />
                        <label
                            htmlFor="radio-one"
                            className={`${styles.switchFieldLabel} ${styles.firstLabel}`}
                        >
                            Все объекты
                        </label>
                        <Field
                            type="radio"
                            id="radio-two"
                            name="switchOption"
                            value="no"
                            className={styles.switchFieldInput}
                        />
                        <label
                            htmlFor="radio-two"
                            className={`${styles.switchFieldLabel} ${styles.lastLabel}`}
                        >
                            Объекты с риском
                        </label>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

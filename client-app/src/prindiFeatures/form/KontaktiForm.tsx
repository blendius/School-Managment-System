import { Formik, Form } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import * as Yup from 'yup';
import MyTextInput from '../../app/common/form/MyTextInput';
import { Kontakti } from '../../app/models/kontakti';
import { useStore } from '../../app/stores/store';




export default observer(function KontaktiForm() {

    const { kontaktiStore } = useStore();
    const { selectedKontakti, closeForm, loading, createKontakti } = kontaktiStore;

    const initialState = selectedKontakti ?? {
        kontaktiId: '',
        profEmail: '',
        subjekti: '',
        mesazhi: '',
        dataEDergimit:''
    }
    const validationSchema = Yup.object({
        subjekti: Yup.string().required('Subjekti duhet te plotesohet !'),
        mesazhi: Yup.string().required('Mesazhi duhet te plotesohet!'),
        dataEDergimit: Yup.string().required('Data duhet te plotesohet!'),
        profEmail: Yup.string().email('Shkruani nje email valide')
    })

    const [kontakti, setKontakti] = useState(initialState);

    function handleFormSubmit(kontakti: Kontakti) {
         createKontakti(kontakti);
    }

    return (
        <Segment clearing>
            <Formik validationSchema={validationSchema}
                enableReinitialize initialValues={kontakti}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MyTextInput type='text' name='profEmail' placeholder='Email e profesorit'></MyTextInput>
                        <MyTextInput type='text' placeholder='Subjekti' name='subjekti' />
                        <MyTextInput type='text' placeholder='Mesazhi' name='mesazhi' />
                        <MyTextInput type='date' placeholder='Data e Dergimit' name='dataEDergimit'  />
                        <Button disabled={isSubmitting || !dirty || !isValid}
                            loading={loading} floated='right' positive type='submit' content='Submit' />
                        <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>

        </Segment>
    )

})
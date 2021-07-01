import { Formik, Form } from 'formik';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import * as Yup from 'yup';
import MySelectInput from '../../app/common/form/MySelectInput';
import MyTextInput from '../../app/common/form/MyTextInput';
import { gjysemvjetoriOpt } from '../../app/common/form/options';
import { Vleresimi } from '../../app/models/Vleresimi';
import { useStore } from '../../app/stores/store';



export default observer(function VlersimiForm() {

    const { vleresimiStore, lendaStore, nxenesiStore, profesoriStore } = useStore();
    const { selectedVlersimi, closeForm, loading, updateVlersimi, createVlersimi } = vleresimiStore;
    const { lendaRegistry, lendetByDate } = lendaStore;
    const { nxenesiRegistry, nxenesitByDate } = nxenesiStore;
    const { professorRegistry, profesoretByDate } = profesoriStore;

    useEffect(() => {
        profesoriStore.loadProfesoret();
    }, [profesoriStore])

    useEffect(() => {
        nxenesiStore.loadNxenesit();
    }, [nxenesiStore])
    useEffect(() => {
        lendaStore.loadLendet();
    }, [lendaStore])

    const initialState = selectedVlersimi ?? {
        vleresimiId: '',
        profId: '',
        nxenesiId: '',
        nota: '',
        gjysemvjetori: '',
        viti: '',
        lenda: '',
        dataRegjistrimit: ''
    }
    const validationSchema = Yup.object({
        nota: Yup.string().required('Emri duhet te plotesohet !'),
        gjysemvjetori: Yup.string().required('Lenda duhet te plotesohet!'),
        viti: Yup.string().required('Fjalkalimi duhet te plotesohet!'),
        lenda: Yup.string().required('GradaAkademike duhet te plotesohet!'),
        dataRegjistrimit: Yup.string().required('Data duhet te plotesohet!'),
    })

    const [vlersimi, setVlersimi] = useState(initialState);

    function handleFormSubmit(vlersimi: Vleresimi) {
        vlersimi.vleresimiId ? updateVlersimi(vlersimi, vlersimi.profId, vlersimi.nxenesiId) : createVlersimi(vlersimi, vlersimi.profId, vlersimi.nxenesiId);
    }
    console.log(nxenesitByDate)

    return (
        <Segment clearing>
            <Formik validationSchema={validationSchema}
                enableReinitialize initialValues={vlersimi}
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <MySelectInput options=
                            {
                                lendetByDate.map(lenda => (
                                    {
                                        key: lenda.lendaId,
                                        text: lenda.emriLendes,
                                        value: lenda.emriLendes,

                                    }
                                ))
                            } placeholder='Lenda' name='lenda' />
                        <MySelectInput options=
                            {
                                nxenesitByDate.map(nxensi => (
                                    {
                                        key: nxensi.id,
                                        text: nxensi.fullName,
                                        value: nxensi.id
                                    }
                                ))
                            } placeholder='Nxenesi' name='nxenesiId' />
                        <MySelectInput options=
                            {
                                profesoretByDate.map(prof => (
                                    {
                                        key: prof.id,
                                        text: prof.displayName,
                                        value: prof.id
                                    }
                                ))
                            } placeholder='Prof' name='profId' />

                        <MySelectInput options={gjysemvjetoriOpt} placeholder='Nota' name='nota' />
                        <MySelectInput options={gjysemvjetoriOpt} placeholder='Gjysemvjetori' name='gjysemvjetori' />
                        <MySelectInput options={gjysemvjetoriOpt} placeholder='Viti' name='viti' />
                        <MyTextInput type='date' placeholder='Data e Regjistrimit' name='dataRegjistrimit' />
                        <Button disabled={isSubmitting || !dirty || !isValid}
                            loading={loading} floated='right' positive type='submit' content='Submit' />
                        <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>

        </Segment>
    )

})
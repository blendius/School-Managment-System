import { ErrorMessage, Form, Formik} from 'formik';
import M from 'minimatch';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Header, Label } from 'semantic-ui-react';
import MyTextInput from '../../../app/common/form/MyTextInput';
import { useStore } from '../../../app/stores/store';

export default observer (function LoginFormNxenesi() {
    const {nxenesiStore} = useStore();
    return (
        <Formik
            initialValues = {{email: '', password: '', error: null}}
            onSubmit = {(values, {setErrors}) => nxenesiStore.loginNxenesi(values).catch(error => 
                setErrors({error: 'Invalid email or password'}))}
        >
            {({handleSubmit, isSubmitting, errors}) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Kyçu si nxenesi' color='teal' textAlign='center'/>
                    <MyTextInput name='email' placeholder='Email'/>
                    <MyTextInput name='password' placeholder='Password' type='password'/>
                    <ErrorMessage 
                        name='error' render={() =>
                            <Label style={{marginBottom: 10}} basic color ='red' content={errors.error}/>}
                    />
                    <Button loading={isSubmitting} positive content="Login" type='submit' fluid/>
                </Form>
            )}
        </Formik>
    )
})
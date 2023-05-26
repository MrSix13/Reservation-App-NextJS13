'use client';
import { useCallback, useState } from 'react'
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';

//ojo con esta importacion puede dar error en produccion, si da error cambiar @ por ..
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';
import Heading from '../Heading';
import Input from '../Input';
import { toast } from 'react-hot-toast';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/regsiter', data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                console.log('error')
                toast.error(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    const bodyContent = (
        <div className=" flex flex-col gap-4">
            <Heading
                title="Welcome to Reservation App"
                subtitle='Create an account!'
            />
            <Input
                id="email"
                label="Email"
                type='email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Name"
                type='text'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                type='password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}

        />
    )
}

export default RegisterModal
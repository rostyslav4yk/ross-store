import React from 'react';
import { useForm } from 'react-hook-form';
import styled from "styled-components";

const Button = styled.button`
    padding: 10px 25px;
    border: 1px solid rebeccapurple;
    color: rebeccapurple;
    border-radius: 5px;
    font-size: 16px;

    &:hover {
        background: rebeccapurple;
        color: #fff;
    }
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Form = styled.form`
    & > div {
        margin-bottom: 15px;
    }
`

const Label = styled.label`
    display: block;
`

const Input = styled.input`
    padding: 10px 25px;
    border: 1px solid rebeccapurple;
    color: rebeccapurple;
    border-radius: 5px;
    width: 100%;
`

const TextArea = styled.input`
    padding: 10px 25px;
    border: 1px solid rebeccapurple;
    color: rebeccapurple;
    border-radius: 5px;
    width: 100%;
    resize: none;
    height: 300px;
`

export function ContactForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <FormWrapper key="form-wrapper">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label htmlFor="name">
                        Name:
                    </Label>
                    <Input {...register("name", { required: true })} />
                    
                    {errors.name && <span>This field is required</span>}
                </div>

                <div>
                    <Label htmlFor="email">
                        Email:
                    </Label>
                    <Input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                    {
                        errors.email && errors.email.type === "required" && <span>This field is required</span>
                    }

                    {
                        errors.email && errors.email.type === "pattern" && <span>Invalid email address</span>
                    }
                </div>

                <div>
                    <Label htmlFor="message">
                        Message:
                    </Label>

                    <TextArea {...register("message", { required: true })} />

                    {
                        errors.message && <span>This field is required</span>
                    }
                </div>

                <Button type="submit" title="Submit">Submit</Button>
            </Form>
        </FormWrapper>
    );
}
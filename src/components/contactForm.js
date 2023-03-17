import React from 'react';
import { useForm } from 'react-hook-form';

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className='form-wrapper'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input {...register("name", { required: true })} />
                
                {errors.name && <span>This field is required</span>}
            </div>

            <div>
                <label htmlFor="email">
                    Email:
                </label>
                <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                {
                    errors.email && errors.email.type === "required" && <span>This field is required</span>
                }

                {
                    errors.email && errors.email.type === "pattern" && <span>Invalid email address</span>
                }
            </div>

            <div>
                <label htmlFor="message">
                    Message:
                </label>

                <textarea {...register("message", { required: true })} />

                {
                    errors.message && <span>This field is required</span>
                }
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
  );
}
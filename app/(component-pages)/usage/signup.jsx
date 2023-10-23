import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Signup = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_brq917p', 'template_drom70y', form.current, '3ddP1axhkwOzIVKBf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className="p-8">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-xl font-bold text-fuchsia-500 md:text-2xl">
                    New components coming soon!
                </h2>
                <p className="text-gray-400 sm:mt-4 sm:block">
                    This first style is retro, with more in development. We will be releasing new themes with a unique style for each component. Users will be able to select the theme they prefer and plug the components directly into their project!
                </p>
            </div>
        </section>
    )
}

export default Signup
import emailjs from 'emailjs-com';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("emailjs-com", emailjs);
  });  
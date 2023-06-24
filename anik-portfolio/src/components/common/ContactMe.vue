<template>
    <div class="bg-[#161616] py-[120px]">
        <div class="container mx-auto my-auto">
            <CommonPageHeading textOne="Contact" textTwo="Me" />
            <!-- From Section  -->
            <div class="flex flex-col px-2 md:px-80 justify-center">
                <input v-model="name" class="my-2 py-4 px-2 rounded-lg" type="text" id="name" name="name"
                    placeholder="Your Name" />
                <input v-model="email" class="my-2 py-4 px-2 rounded-lg" type="email" id="email" name="email"
                    placeholder="Your Email Address" />
                <input v-model="phone" class="my-2 py-4 px-2 rounded-lg" type="phone" id="phone" name="phone"
                    placeholder="Your Phone Number" />
                <textarea class="my-2 text-start pt-2 px-2 rounded-lg" rows="4" cols="70" v-model="message" id="message" placeholder="Your Message"
                    required></textarea>
            </div>
            <div class="text-center pt-8">
                <button @click="submitContactData"
                    class="text-[14px] md:text-[18px] capitalize text-[#468dfc] hover:text-white border-2 border-[#468dfc] hover:bg-[#468dfc] to-pink-500 p-2 md:p-2 rounded-lg">Submit</button>
            </div>
        </div>
    </div>
</template> 

<script setup>
import emailjs from 'emailjs-com';

const contactData = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
})



const submitContactData = () => {
    const fromData = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }
    emailjs.send('service_qr5d0mi', 'template_bkavvk2', fromData, 'GjFU8_AGyYtnNHsiL')
        .then(response => {
            console.log('Email sent:', response);
            alert('Your information send to Anik Chandra Email')
        })
        .catch(error => {
            console.error('Error sending email:', error);
        });
    console.log(fromData)
}



</script>
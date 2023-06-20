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
                <textarea class="my-2 text-start pt-2 px-2 rounded-lg" v-model="message" placeholder="Your Message"
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
const contactData = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const submitContactData = () => {
    const fromData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
    }
    this.$emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', fromData)
        .then(response => {
            console.log('Email sent:', response);
            this.name = '';
            this.email = '';
            this.phone = '';
            this.message = '';
        })
        .catch(error => {
            console.error('Error sending email:', error);
        });
    console.log(fromData)
}


</script>
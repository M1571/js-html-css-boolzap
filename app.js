// console.log('prova');

// ---------------------------------------------
// START

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Donaldo',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '09/03/2022 11:30:59',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '09/03/2022 11:31:34',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '09/03/2022 14:23:24',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Michele',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '09/03/2022 16:30:59',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '09/03/2022 16:43:12',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '09/03/2022 16:50:36',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
        ],
        selectedContact: null,
        newMessage: '',
        search: '',
    },
    mounted() {
        this.selectedContact = this.contacts[0]
    },

    // ---------------------------------------------
    // MILESTONE 2

    methods: {
        getAvatarPhoto(contact) {
            if (contact == null) {
                return '';
            }
            return 'img/avatar' + contact.avatar + '.jpg'
        },


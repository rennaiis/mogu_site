export const content = {
    header: {
        logo: {
            img: '/images/logo.svg',
            href: '#main'
        },
        navlinks: [
            {
                name: 'О нас', 
                href: '#about'
            }, 
            {
                name: 'Кейсы', 
                href: '#cases'
            }, 
            {
                name: 'Обратная связь', 
                href: '#feedback'
            }
        ], 
        enter_button: {
            type: 'button', 
            text: 'Войти',
            className: 'black'
        }
    },
    mainScreen: {
        mainHeader: 'Таск-трекер для креативных команд', 
        description: 'Создавайте доски, приглашайте коллег и партнеров, работайте совместно над задачами!',
        features: [
            {
                text: 'Бесплатно'
            },
            {
                text: 'Без привязки карты'
            },
            {
                text: '2000+ пользователей'
            },
        ],
        emailForm: {
            input: {
                type: 'e-mail', 
                placeholder: 'Электронная почта', 
            },
            startButton: {
                type: 'link', 
                href: '', 
                icon: '/images/green-arrow', 
                className: 'blue'
            }
        },
        coworkCard: {
            tag: "Совместная работа", 
            image: {
                desk: '/images/pen.png',
                mobile: '/images/pen-mobile.png'
            },
            accounts: [
                {
                    image: {
                        desk: '/images/avatars/avatar1.png',
                        mobile: '/images/avatars/avatar1.png'
                    },
                    dialog_tag: 'А это вы', 
                },
                {
                    image: {
                        desk: '/images/avatars/avatar2.png',
                        mobile: '/images/avatars/avatar2.png'
                    }, 
                },
                {
                    image: {
                        desk: '/images/avatars/avatar3.png',
                        mobile: '/images/avatars/avatar3.png'
                    }, 
                    dialog_tag: 'Это ваш милейший коллега'
                },
                {
                    image: {
                        desk: '/images/avatars/avatar4.png',
                        mobile: '/images/avatars/avatar4.png'
                    },
                },
                {
                    image: 'plus.svg'
                }
            ]
        },
        arrow: {
            href: '#bottom' 
        }
    }, 
    people: [
        {
            letter: 'm', 
            images: ['/images/people/m']
        },
        {
            letter: 'o', 
            images: ['/images/people/o']
        },
        {
            letter: 'g', 
            images: ['/images/people/g']
        },
        {
            letter: 'u', 
            images: ['/images/people/u']
        }
    ],
    aboutCards: [
        {
            background: '#FBEAEF',
            textColor: '#3C711E',
            header: 'Вся информация как на ладони', 
            text: 'единая строка поиска для всех проектов - где бы ни была задача, вы быстро ее найдете', 
            images: [{
                desk: '/images/cards/iMac.png',
                mobile: '/images/cards/hands-mobile.png'
            }]
        }, 
        {
            background: '#000000',
            textColor: '#C3C3C3',
            headerColor: '#FFFFFF',
            header: 'Ничто не мешает полету мысли',
            text: 'фиксируйте новые идеи в один клик, прикрепляйте файлы и подробные описания сути задач',
            images: [{
                desk: '/images/cards/arms.png',
                mobile: '/images/cards/arms-mobile.png'
            }]
        }, 
        {
            background: '#4F23AE',
            textColor: '#72BDF8',
            header: 'Порядок в подарок',
            text: ' задачи удобно структурировать с помощью чек-листов, меток и пользовательских полей',
            actions: [
                {
                    type: 'action',
                    text: 'обновляйте статус задачи', 
                    icon: '/images/white-arrow'
                }, 
                {
                    type: 'action',
                    text: 'следите за сроками дедлайнов', 
                    icon: '/images/white-arrow'
                }, 
                {
                    type: 'action',
                    text: 'отправляйте завершенные задачи в архив', 
                },
            ],
            images: [{
                desk: '/images/cards/folder.png',
                mobile: '/images/cards/folder-mobile.png'
            }]
        }, 
        {
            background: '#F7FF8F',
            textColor: '#000000',
            header: 'Совместная работа на одной доске ',
            text: 'приглашайте коллег, бизнес-партнеров и заказчиков',
        },
        {
            background: '#000000',
            images: [{
                desk: '/images/cards/hands.png',
                mobile: '/images/cards/hands-mobile.png'
            }]
        },  
        {
            background: '#DDEFD5',
            textColor: '#DF6741',
            header: 'Настройка под вас',
            text: 'устанавливайте персональный фон для каждого проекта'
        },
    ],
    separtorImage:{
        desk: 'images/separator.png',
        mobile: 'images/separator-mobile.png',
    },
    casesScreen: [
        {
            button: 'Product marketing', 
            header: 'Создание лендинга', 
            text: 'Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям',
            image: '/Camera,',
            caption: 'Скрин системы',
        },
        {
            button: 'Growth marketing',
            header: 'Создание лендинга 2', 
            text: '22 Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям',
            image: '/Camera.svg',
            caption: 'Скрин системы',
        },
        {
            button: 'Creative',
            header: 'Создание лендинга 2', 
            text: '22 Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям',
            image: '/Camera.svg',
            caption: 'Скрин системы',
        },
        {
            button: 'Marketing',
            header: 'Создание лендинга 2', 
            text: '22 Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям',
            image: '/Camera.svg',
            caption: 'Скрин системы',
            disabled: true,
        }, 
        {
            button: 'PR',
            header: 'Создание лендинга 2', 
            text: '22 Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям',
            image: '/Camera.svg',
            caption: 'Скрин системы',
            disabled: true,
        }
        
    ],
    feedbackForm: {
        header: 'Обратная связь',
        fields: [
            {
                type: 'input',
               
                attr: {
                     placeholder: 'Электронная почта',
                     type: 'email'
                }
            },
            {
                type: 'textarea',
                attr: {
                    placeholder: 'О чем хотите расссказать?',
                }
               
            }
        ],
        button: {
            type: 'submit', 
            icon: '/images/white-arrow',
            text: 'Отправить', 
            color: '#000000'
        }, 
        logo: ['/cat.svg', '/eye.svg']
    }
}
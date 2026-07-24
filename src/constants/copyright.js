const mobile = 600;

export const content = {
    header: {
        logo: {
            img: '/images/logo.svg',
            href: '#main'
        },
        mobile_menu: {
            menu: '/images/menu.svg',
            cross: '/images/cross.svg'
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
                text: 'Hачать',
                type: 'link', 
                href: '', 
                icon: '/images/green_arrow.svg', 
                className: 'blue'
            }
        },
        coworkCard: {
            tag: "Совместная работа", 
            image: {
                sources: [
                    {
                        srcSet: '/images/pen-mobile.png',
                        media: `(max-width: ${mobile}px)`
                    }
                    
                ],
                imgAttrs: {
                    src: '/images/pen.png', 
                    className: 'main__pen-img' 
                }
            },
            accounts: [
                {
                   image: {
                        sources: [
                            {
                                srcSet: '/images/avatars/avatar1-mobile.png',
                                media: `(max-width: ${mobile}px)`
                            }
                            
                        ],
                        imgAttrs: {
                            src: '/images/avatars/avatar1.png',
                            className: 'main__avatar-img' 
                        }
                    },
                    dialog_tag: 'А это вы', 
                },
                {
                    image: {
                        sources: [
                            {
                                srcSet: '/images/avatars/avatar2-mobile.png',
                                media: `(max-width: ${mobile}px)`
                            }
                            
                        ],
                        imgAttrs: {
                            src: '/images/avatars/avatar2.png', 
                            className: 'main__avatar-img'
                        }
                    },
                },
                {
                    image: {
                        sources: [
                            {
                                srcSet: '/images/avatars/avatar3-mobile.png',
                                media: `(max-width: ${mobile}px)`
                            }
                            
                        ],
                        imgAttrs: {
                            src: '/images/avatars/avatar3.png', 
                            className: 'main__avatar-img'
                        }
                    },
                    dialog_tag: 'Это ваш милейший коллега'
                },
                {
                    image: {
                        sources: [
                            {
                                srcSet: '/images/avatars/avatar4-mobile.png',
                                media: `(max-width: ${mobile}px)`
                            }
                            
                        ],
                        imgAttrs: {
                            src: '/images/avatars/avatar4.png',
                            className: 'main__avatar-img' 
                        }
                    },
                },
                {
                    image: '/images/plus.svg'
                }
            ]
        },
        arrow: {
            image: '/images/arrow-blue.svg',
            href: '#people' 
        }
    }, 
    people: [
        {
            letter: 'm', 
            images: ['/images/people/m.svg']
        },
        {
            letter: 'o', 
            images: ['/images/people/o.svg']
        },
        {
            letter: 'g', 
            images: ['/images/people/g.svg']
        },
        {
            letter: 'u', 
            images: ['/images/people/u.svg']
        }
    ],
    aboutCards: [
        {
            header: 'Вся информация как на ладони', 
            text: 'единая строка поиска для всех проектов - где бы ни была задача, вы быстро ее найдете', 
            images: [
                {
                    sources: [
                        {
                            srcSet: '/images/cards/iMac-mobile.png',
                            media: `(max-width: ${mobile}px)`
                        }
                        
                    ],
                    imgAttrs: {
                        src: '/images/cards/iMac.png', 
                        className: 'card__image--1'
                    }
                }]
        }, 
        {
            header: 'Ничто не мешает полету мысли',
            text: 'фиксируйте новые идеи в один клик, прикрепляйте файлы и подробные описания сути задач',
            images: [
                {
                    sources: [
                        {
                            srcSet: '/images/cards/arms-mobile.png',
                            media: `(max-width: ${mobile}px)`
                        }
                        
                    ],
                    imgAttrs: {
                        src: '/images/cards/arms.png', 
                        className: 'card__image--2'
                    }
                }],

        }, 
        {
            
            header: 'Порядок в подарок',
            text: ' задачи удобно структурировать с помощью чек-листов, меток и пользовательских полей',
            actions: [
                {
                    type: 'action',
                    text: 'обновляйте статус задачи', 
                    icon: '/images/white_arrow.svg'
                }, 
                {
                    type: 'action',
                    text: 'следите за сроками дедлайнов', 
                    icon: '/images/white_arrow.svg'
                }, 
                {
                    type: 'action',
                    text: 'отправляйте завершенные задачи в архив', 
                },
            ],
            images: [
                {
                    sources: [
                        {
                            srcSet: '/images/cards/folder-mobile.png',
                            media: `(max-width: ${mobile}px)`
                        }
                        
                    ],
                    imgAttrs: {
                        src: '/images/cards/folder.png', 
                        className: 'card__image--3'
                    }
                }],
        }, 
        {

            header: 'Совместная работа на одной доске ',
            text: 'приглашайте коллег, бизнес-партнеров и заказчиков',
        },
        {
            images: [{
                    sources: [
                        {
                            srcSet: '/images/cards/hand-left-mobile.png',
                            media: `(max-width: ${mobile}px)`
                        }
                        
                    ],
                    imgAttrs: {
                        src: '/images/cards/hand-left.png', 
                        className: 'card__image--arm'
                    }
                }, 
            {
                sources: [
                        {
                            srcSet: '/images/cards/hand-right-mobile.png',
                            media: `(max-width: ${mobile}px)`
                        }
                        
                    ],
                    imgAttrs: {
                        src: '/images/cards/hand-right.png', 
                        className: 'card__image--arm'
                    }
            }]
        },  
        {
            header: 'Настройка под вас',
            text: 'устанавливайте персональный фон для каждого проекта'
        },
    ],
    separtorImage:{
        sources: [
            {
                srcSet: '/images/separator-mobile.png',
                media: `(max-width: ${mobile}px)`
            }
            
        ],
        imgAttrs: {
            src: '/images/separator.png', 
            className: "line"
        }
    },
    casesScreen: [
        {
            id: 0,
            button: 'Product marketing', 
            header: 'Создание лендинга', 
            text: 'Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям',
            image: {
                sources: [
                    {
                        srcSet: '/images/camera-mobile.png',
                        media: `(max-width: ${mobile}px)`
                    }
                    
                ],
                imgAttrs: {
                    src: '/images/camera.png', 
                    className: 'cases__screen animate-fade'
                }
            },
        },
        {
            id: 1,
            button: 'Growth marketing',
            header: 'Маркетинг', 
            text: ' текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг  текст про маркетинг ',
             image: {
                sources: [
                    {
                        srcSet: '/images/camera-mobile.png',
                        media: `(max-width: ${mobile}px)`
                    }
                    
                ],
                imgAttrs: {
                    src: '/images/camera.png', 
                    className: 'cases__screen animate-fade'
                }
            },
        },
        {
            id: 2,
            button: 'Creative',
            header: 'Креатив', 
            text: ' текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив  текст про креатив ',
             image: {
                sources: [
                    {
                        srcSet: '/images/camera-mobile.png',
                        media: `(max-width: ${mobile}px)`
                    }
                    
                ],
                imgAttrs: {
                    src: '/images/camera.png', 
                    className: 'cases__screen animate-fade'
                }
            },
            
        },
        {
            id: 3,
            button: 'Marketing',
            header: 'Маркетинг', 
            text: 'текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг текст про маркетинг ',
             image: {
                sources: [
                    {
                        srcSet: '/images/camera-mobile.png',
                        media: `(max-width: ${mobile}px)`
                    }
                    
                ],
                imgAttrs: {
                    src: '/images/camera.png', 
                    className: 'cases__screen animate-fade'
                }
            },
            disabled: true,
        }, 
        {
            id: 4,
            button: 'PR',
            header: 'Создание лендинга 2', 
            text: '22 Заведите доску, пригласите дизайнера, верстальщика и маркетолога, проведите брейншторм и зафиксируйте все идеи на доске, в колонке «Бэклог», приоритизируйте идеи - с помощью меток или отдельных колонок, наиболее приоритетным - назначьте дедлайны и передайте в работу исполнителям',
            image: {
                sources: [
                    {
                        srcSet: '/images/camera-mobile.png',
                        media: `(max-width: ${mobile}px)`
                    }
                    
                ],
                imgAttrs: {
                    src: '/images/camera.png', 
                    className: 'cases__screen animate-fade'
                }
            },
            disabled: true,
        }
        
    ],
    feedbackForm: {
        header: 'Обратная связь',
        fields: [
            {
                type: 'Input',
                attr: {
                     placeholder: 'Электронная почта',
                     type: 'email'
                }
            },
            {
                type: 'Textarea',
                attr: {
                    placeholder: 'О чем хотите расссказать?',
                }
               
            }
        ],
        button: {
            icon: '/images/white_arrow.svg',
            text: 'Отправить', 
            className: 'black-feedback'
        }, 
        logo: {
            image: '/images/cat.svg',
            eyes: '/images/eyes.svg'
        }
    }
}
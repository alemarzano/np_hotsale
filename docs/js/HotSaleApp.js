angular.module('HotSaleApp', [])
    .controller('HotSaleController', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.maquinaVisible = 0;
        $scope.colorSeleccionado = 0;
        $scope.colorSeleccionadoModal = 0;
        $scope.listCapsulas = [];
        $scope.modalProducto = {
            tipoProducto: 'Máquinas',
            nombreProducto: ' ',
            coloresDisponibles: [],
            descripcion: '',
            tipoCafe: '',
            intensidad: 0,
            cuotas: 0,
            credito: '',
            precioAnterior: 0,
            precioProducto: 0.0,
            precioSup: 0,
            fotos: [],
            codigoCTA: 'C30-AR-BK-NE',
            esCapsula: true
        }
        $scope.maquinas = [{
                id: 0,
                nombre: "Essenza Mini C",
                valorMaquina: 6894.00,
                credito: "$1.300",
                precioAnterior: 11490.00,
                cantCuotas: 6,
                textoDescripcion: "Combina facilidad de uso, belleza minimalista y una calidad incomparable para crear siempre la taza de café perfecta.",
                colores: [{
                        nombreColor: "ec-black",
                        ctaCode: 'C30-AR-BK-NE',
                        fotos: [{
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370807619614/essenza-mini-c-blackmatt-perspectiva.jpg?',
                                altFoto: 'Vista 1',
                                esPortada: true
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370807685150/essenza-mini-c-blackmatt-frontal.jpg?',
                                altFoto: 'Vista 2',
                                esPortada: false
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370807750686/essenza-mini-c-blackmatt-lateral.jpg?',
                                altFoto: 'Vista 3',
                                esPortada: false
                            }
                        ]
                    },
                    {
                        nombreColor: "ec-white",
                        ctaCode: 'C30-AR-WH-NE',
                        fotos: [{
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808143902/essenza-mini-c-white-perspectiva.jpg?',
                                altFoto: 'Vista 1',
                                esPortada: true
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808078366/essenza-mini-c-white-frontal.jpg?',
                                altFoto: 'Vista 2',
                                esPortada: false
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808209438/essenza-mini-c-white-lateral.jpg?',
                                altFoto: 'Vista 3',
                                esPortada: false
                            }
                        ]
                    }

                ]
            },
            {
                id: 1,
                nombre: "Essenza Mini D",
                valorMaquina: 6894.00,
                credito: "$1.300",
                precioAnterior: 11490.00,
                cantCuotas: 6,
                textoDescripcion: "Compacta, con una calidad imcomparable y su belleza minimalista, te permite crear de una manera muy fácil, tu taza de café perfecta.",
                colores: [{
                        nombreColor: "ec-red",
                        ctaCode: 'D30-AR-RE-NE',
                        fotos: [{
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808471582/essenza-mini-d-red-perspectiva.jpg?',
                                altFoto: 'Vista 1',
                                esPortada: true
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808406046/essenza-mini-d-red-frontal.jpg?',
                                altFoto: 'Vista 2',
                                esPortada: false
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808537118/essenza-mini-d-red-lateral.jpg?',
                                altFoto: 'Vista 3',
                                esPortada: false
                            }
                        ]
                    },
                    
                    {
                        nombreColor: "ec-black",
                        ctaCode: 'D30-AR-BK-NE',
                        fotos: [{
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808668190/essenza-mini-d-black-perspectiva.jpg?',
                                altFoto: 'Vista 1',
                                esPortada: true
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370808602654/essenza-mini-d-black-frontal.jpg?',
                                altFoto: 'Vista 2',
                                esPortada: false
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370809389086/essenza-mini-d-black-lateral.jpg?',
                                altFoto: 'Vista 3',
                                esPortada: false
                            }
                        ]
                    }
                    // {
                    //     nombreColor: "ec-blackmatte",
                    //     ctaCode: 'D30-AR-MB-NE',
                    //     fotos: [{
                    //             urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370809782302/essenza-mini-d-blackmatt-perspectiva.jpg?',
                    //             altFoto: 'Vista 1',
                    //             esPortada: true
                    //         },
                    //         {
                    //             urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370809454622/essenza-mini-d-blackmatt-frontal.jpg?',
                    //             altFoto: 'Vista 2',
                    //             esPortada: false
                    //         },
                    //         {
                    //             urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370810077214/essenza-mini-d-blackmatt-lateral.jpg?',
                    //             altFoto: 'Vista 3',
                    //             esPortada: false
                    //         }
                    //     ]
                    // }
                ]
            },
            {
                id: 2,
                nombre: "Pack Essenza Mini C",
                valorMaquina: 9174.00,
                credito: "$1.300",
                precioAnterior: 15790.00,
                cantCuotas: 6,
                textoDescripcion: "Combina facilidad de uso, belleza minimalista y una calidad incomparable para crear siempre la taza de café perfecta. Incluye el  Aeroccino Black 3 que te permite crear recetas de café con leche.",
                colores: [{
                        nombreColor: "ec-white",
                        ctaCode: 'A3C30-AR-WH-NE',
                        fotos: [{
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370810601502/pack-essenza-mini-c-white-perspectiva.jpg?',
                                altFoto: 'Vista 1',
                                esPortada: true
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12385967276062/pack-essenza-mini-c-white-frontal.jpg?',
                                altFoto: 'Vista 2',
                                esPortada: false
                            }
                        ]
                    },
                    {
                        nombreColor: "ec-black",
                        ctaCode: 'A3C30-AR-BK-NE',
                        fotos: [{
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12373062123550/pack-essenza-mini-c-black-perspectiva.jpg?',
                                altFoto: 'Vista 1',
                                esPortada: true
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12385967144990/pack-essenza-mini-c-black-frontal.jpg?',
                                altFoto: 'Vista 2',
                                esPortada: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                nombre: "Pack Essenza Mini D",
                valorMaquina: 9174.00,
                credito: "$1.300",
                precioAnterior: 15790.00,
                cantCuotas: 6,
                textoDescripcion: "Compacta, con una calidad incomparable y su belleza minimalista, te permite crear de una manera muy fácil, tu taza de café perfecta. Incluye el  Aeroccino Black 3 que te permite crear recetas de café con leche.",
                colores: [{
                        nombreColor: "ec-black",
                        ctaCode: 'A3KD30-AR-BK-NE',
                        fotos: [{
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370810732574/pack-essenza-mini-d-black.jpg?',
                                altFoto: 'Vista 1',
                                esPortada: true
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12385967603742/pack-essenza-mini-d-black-frontal.jpg?',
                                altFoto: 'Vista 2',
                                esPortada: false
                            },
                        ]
                    },

                    {
                        nombreColor: "ec-red",
                        ctaCode: 'A3D30-AR-RE-NE',
                        fotos: [{
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370813648926/pack-essenza-mini-d-red-perspectiva-.jpg?',
                                altFoto: 'Vista 1',
                                esPortada: true
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12385967669278/pack-essenza-mini-d-red-frontal.jpg?',
                                altFoto: 'Vista 2',
                                esPortada: false
                            },
                        ]
                    }                   
                ]
            },
            {
                id: 4,
                nombre: "Pixie",
                valorMaquina: 9294.00,
                credito: "$1.300",
                precioAnterior: 15490.00,
                cantCuotas: 6,
                textoDescripcion: "Ecológica y tecnológicamente avanzada, puede prepararle un café en tiempo récord. Gracias a su sistema Thermoblock, alcanza su temperatura de calentamiento en 25 segundos.",
                colores: [{
                    nombreColor: "ec-aluminium",
                    ctaCode: 'D61-AR-AL-NE',
                    fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370813845534/pixie-aliminium-perspectiva.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370813779998/pixie-aluminium-frontal.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370813911070/pixie-aliminium-lateral.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                }]
            },
            {
                id: 5,
                nombre: "Pixie Pack",
                valorMaquina: 11574.00,
                credito: "$1.300",
                precioAnterior: 19290.00,
                cantCuotas: 6,
                textoDescripcion: "Ecológica y tecnológicamente avanzada, puede prepararle un café en tiempo récord. Gracias a su sistema Thermoblock, alcanza su temperatura de calentamiento en 25 segundos. Incluye el  Aeroccino Black 3, que te permite crear recetas de café con leche.",
                colores: [{
                    nombreColor: "ec-aluminium",
                    ctaCode: 'A3D61-AR-AL-NE',
                    fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370815352862/pixie-aluminium-eroccino-perspectiva-v2.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12385968291870/pixie-aluminium-eroccino-frontal.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false,
                        }
                    ]
                }]
            },
            {
                id: 6,
                nombre: "Lattissima One",
                valorMaquina: 17454.00,
                credito: "$1.300",
                precioAnterior: 29090.00,
                cantCuotas: 6,
                textoDescripcion: "Lattissima One te permitirá disfrutar de un Cappuccino y Latte Macchiato de alta calidad en la comodidad de tu casa. Esta máquina de café Nespresso está equipada con un nuevo e innovador sistema de leche fresca que simplifica la manera de preparar tu café favorito con leche.",
                colores: [{
                        nombreColor: "ec-white",
                        ctaCode: 'F111-AR-WH-NE',
                        fotos: [{
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370817384478/latissimaone-white-perspectiva.jpg?',
                                altFoto: 'Vista 1',
                                esPortada: true
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12370816696350/lattissimaone-white-frontal.jpg?',
                                altFoto: 'Vista 2',
                                esPortada: false
                            }
                        ]
                    }
                ]
            },
            {
                id: 7,
                nombre: "Lattissima Touch",
                valorMaquina: 15395.00,
                credito: "$1.300",
                precioAnterior: 30790.00,
                cantCuotas: 6,
                textoDescripcion: "Ofrece infinitas posibilidades en preparaciones, incluidas aquellas con su propio toque. Elegí entre seis selecciones de café y recetas con leche usando el panel de control táctil.",
                colores: [{
                        nombreColor: "ec-black",
                        ctaCode: 'F521-AR-BK-NE',
                        fotos: [{
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371049775134/lattisima-touch-black-perspectiva.jpg?',
                                altFoto: 'Vista 1',
                                esPortada: true
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371049447454/lattisima-touch-black-frontal.jpg?',
                                altFoto: 'Vista 2',
                                esPortada: false
                            },
                            {
                                urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371049840670/lattisima-touch-black-lateral.jpg?',
                                altFoto: 'Vista 3',
                                esPortada: false
                            }
                        ]
                    }
                    
                ]
            },
            
            {
                id: 8,
                nombre: "Lattissima Pro",
                valorMaquina: 25134.00,
                credito: "$1.300",
                precioAnterior: 41890.00,
                cantCuotas: 6,
                textoDescripcion: "Inspirada en la calidad de las máquinas profesionales pero fácil de usar gracias a su tecnología avanzada y su intuitiva pantalla táctil.",
                colores: [{
                    nombreColor: "ec-silver",
                    ctaCode: 'F456-AR-PR-NE',
                    fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371051708446/lattisima-pro-perspectiva.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371051249694/lattisima-pro-frontal.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12371051773982/lattisima-pro-cenital.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: false
                        }
                    ]
                }]
            },
            {
                id: 9,
                nombre: "Creatista Plus",
                valorMaquina: 26934.00,
                credito: "$1.300",
                precioAnterior: 44890.00,
                cantCuotas: 6,
                textoDescripcion: "Personalizá tu propio estilo Barista en tu casa y creá un Latte Art sin igual con la máquina de café Nespresso Creatista Plus. Esto, gracias a ocho tipos de recetas de café, diferentes calidades de espuma y hasta 11 configuraciones de temperatura para la leche. La pantalla y dial digitales te permiten desplazarte por las diferentes configuraciones para seleccionar exactamente la receta de café que más quieras para poder crear tu propio Latte Art. Y dejate encantar por el refinado acabado en acero inoxidable pulido. Además, si estas apurado, apreciarás el tiempo de calentamiento de tres segundos y el fácil mantenimiento, ya que el tubo de vapor es autolimpiante.",
                colores: [{
                    nombreColor: "ec-silver",
                    ctaCode: 'J520-AR-ME-NE',
                    fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12717683867678/CreatistaPersp-351x405.jpg?',
                            altFoto: 'Vista 1',
                            esPortada: true
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12717683703838/CreatistaFrente-351x405.jpg?',
                            altFoto: 'Vista 2',
                            esPortada: false
                        },
                        {
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12717683998750/CreatistaLateral-351x405.jpg?',
                            altFoto: 'Vista 3',
                            esPortada: false
                        }
                    ]
                }]
            }
        ];
        $scope.variedadVisible = '';
        $scope.variedades = [

            {
                nombreVariedad: 'Master Origin',
                capsulas: [{
                        nombre: 'India',
                        tipoCafe: 'Café Intenso y Aromático.',
                        intensidad: 11,
                        precio: 54,
                        precioSup: 0,
                        descripcion: 'India con Robusta Monzónica obtiene sus aromas intensos, amaderados y especiados de las Robusta Monzónica y las Arábicas de India. Los cafés monzónicos son exclusivos de la costa sudoeste de la India. Meses de vientos monzónicos hinchan y secan repetidamente los granos de café.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372597342238/india-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7712.10',
                    },
                    {
                        nombre: 'Indonesia',
                        tipoCafe: 'Café rico y amaderado.',
                        intensidad: 8,
                        precio: 54,
                        precioSup: 00,
                        descripcion: 'Indonesia es un café que corre una carrera contra la lluvia. Los granjeros de Sumatra descascaran el pergamino cuando el café está suave y húmedo porque los granos expuestos se secan más rápido. El método de descascarado en húmedo es único para ellos y produce el clásico sabor indonesio: notas aterciopeladas, espesas, tremendamente aromáticas, de tabaco curado.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372600193054/indonesia-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7711.10',
                    },
                    {
                        nombre: 'Colombia',
                        tipoCafe: 'Café Frutal y Vibrante.',
                        intensidad: 6,
                        precio: 54,
                        precioSup: 0,
                        descripcion: 'Colombia con arábica de cosecha tardía utiliza solo arábica colombiana procesada, lavada y de alto crecimiento. ¿Podés sentir la acidez viva y el estallido de los aromas de frutos rojos vinosos? Eso proviene de los productores de café que se atrevieron a esperar más tiempo antes de cosechar sus cerezas de café.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372604551198/colombia-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7715.10',
                    },
                    {
                        nombre: 'Ethiopia',
                        tipoCafe: 'Café floral y exuberante.',
                        intensidad: 4,
                        precio: 54,
                        precioSup: 00,
                        descripcion: 'Arábica Etíope en su máxima expresión: decadente y aromático. Tiene un aroma de azahar, pero las notas de mermelada de fruta provienen del café secado al sol en Etiopía. Continuamente girada a mano, la cereza de café se seca uniformemente. Los agricultores etíopes han usado el método de procesado en seco por más tiempo que cualquiera.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372607729694/ethiopia-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7714.10',
                    },
                    {
                        nombre: 'Nicaragua',
                        tipoCafe: 'Café dulce y armonioso.',
                        intensidad: 5,
                        precio: 54,
                        precioSup: 0,
                        descripcion: 'Si el procesamiento de Miel Negra fuera el camino fácil hacia un café nectarioso, todos lo harían. Pero solo unos pocos granjeros se atreven. Es un proceso raro porque requiere una supervisión meticulosa. Nicaragua con Arábica procesada de Miel Negra posee una suave textura melosa y dulces notas de cereal.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372612710430/nicaragua-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7713.10',
                    }
                ],
                hash: '#origin'
            },
            {
                nombreVariedad: 'Ispirazione Italiana',
                capsulas: [{
                        nombre: 'Ispirazione Palermo Kazaar ',
                        tipoCafe: 'Café excepcionalmente intenso.',
                        intensidad: 12,
                        precio: 47,
                        precioSup: 0,
                        descripcion: 'Ispirazione Palermo Kazaar captura la esencia de estas influencias para brindar un tueste oscuro intenso del sur que resalta el carácter salvaje y especiado de este blend. Este café deleita con su intensidad excepcional, su amargor audaz y las notas a pimienta que brotan a través del cuerpo espeso y almibarado.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372616085534/kazaar-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7694.10',
                    },
                    {
                        nombre: 'Ispirazione Venezia ',
                        tipoCafe: 'Café armoniosamente equilibrado y robusto',
                        intensidad: 12,
                        precio: 47,
                        precioSup: 0,
                        descripcion: 'Al unirse el Imperio Otomano a Europa Occidental, Venecia tiene una larga historia de importar los cafés del mundo y tostarlos, de manera experta, para equilibrar su diversidad. La musa de nuestra taza de café: delicadamente aromática, todos los elementos equilibrados armoniosamente, notas a caramelo y cuerpo robusto.',
                        fotos: [{
                            urlFoto: 'images/caps/ispirazione-venezia.png',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7694.10',
                    },
                    {
                        nombre: 'Ispirazione Napoli',
                        tipoCafe: 'Café excepcionalmente oscuro y cremoso.',
                        intensidad: 12,
                        precio: 47,
                        precioSup: 0,
                        descripcion: 'Realzado con Robusta, el resultado es una taza de café Nespresso aterciopelada y cremosa con un cuerpo extremadamente robusto y un retrogusto agradable y amargo. Un homenaje a la capacidad de tueste de la capital italiana del café.',
                        fotos: [{
                            urlFoto: 'images/caps/ispirazione-napoli.png',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7694.10',
                    },
                    
                    
                    {
                        nombre: 'Ispirazione Ristretto Italiano ',
                        tipoCafe: 'Café poderoso y contrastante.',
                        intensidad: 10,
                        precio: 47,
                        precioSup: 00,
                        descripcion: 'Una gota de exquisitez: la esencia de la tradición icónica de beber café de Italia. Esta es nuestra propia versión del embajador de todos los cafés italianos. No es reflejo de ninguna ciudad; es Italia.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372623360030/ristretto-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7704.10',
                    },
                    {
                        nombre: 'Ispirazione Firenze Arpeggio ',
                        tipoCafe: 'Café Intenso y cremoso.',
                        intensidad: 9,
                        precio: 47,
                        precioSup: 00,
                        descripcion: 'Esta exquisita combinación es un fiel reflejo del significado cultural de Florencia: un centro intelectual en el corazón de Italia, que atrae influencias de todo el país. El estilo tostado de Ispirazione Firenze Arpeggio combina estas influencias combinando notas frutales que se encuentran tradicionalmente en el norte de Italia con notas a cacao del sur, que culminan en una taza de café aterciopelada, densa y cremosa.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372627128350/arpeggio-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7691.10',
                    },
                    {
                        nombre: 'Ispirazione Roma ',
                        tipoCafe: 'Café complejo y equilibrado.',
                        intensidad: 8,
                        precio: 47,
                        precioSup: 00,
                        descripcion: 'Con Ispirazione Roma, analizamos esta complejidad para crear una de nuestros blends más ligeros e intensos, combinando notas tostadas tradicionales con un toque de elegancia moderna representada por su acidez.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372629323806/roma-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7439.10',
                    },
                    {
                        nombre: ' Ispirazione Genova Livanto ',
                        tipoCafe: 'Café redondo y equilibrado.',
                        intensidad: 6,
                        precio: 47,
                        precioSup: 00,
                        descripcion: 'Fiel al carácter del café del norte de Italia, Ispirazione Genova Livanto es un blend centrado en Arábicas con una complejidad de gustos. Comenzamos con Arábica brasileña, un café accesible y suave. Sobre esta base mezclamos Arábicas de renombre y alto crecimiento de América Central y del Sur con perfiles a malta y fruta que se desarrollan maravillosamente durante el tueste.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372631584798/livanto-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7692.10',
                    },
                ],
                hash: '#intenso'
            },
            {
                nombreVariedad: 'Espresso',
                capsulas: [
                    {
                        nombre: 'Capriccio',
                        tipoCafe: 'Café intenso y singular.',
                        intensidad: 5,
                        precio: 47,
                        precioSup: 00,
                        descripcion: 'Capriccio es un café mezcla de Arábicas de América del Sur con un toque de Robusta que ofrece un espresso de aroma intenso en el que predomina una nota de cereales.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372634533918/capriccio-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7413.10',
                    },
                    {
                        nombre: 'Volluto',
                        tipoCafe: 'Café dulce y ligero.',
                        intensidad: 4,
                        precio: 47,
                        precioSup: 00,
                        descripcion: 'Volluto es un café puro Arábica de América del Sur ligeramente tostado revela dulces notas de galleta realzadas por un punto de acidez y una nota afrutada.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372638203934/volluto-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7435.10',
                    },
                    {
                        nombre: 'Cosi',
                        tipoCafe: 'Café dulce y delicadamente tostado',
                        intensidad: 4,
                        precio: 47,
                        precioSup: 00,
                        descripcion: 'Puros Arábicas del este de África, de América Central y del Sur se armonizan en una mezcla delicada y equilibrada con notas a cereales ligeramente tostadas, potenciadas por sutiles notas afrutadas.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372644560926/cosi-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7642.10',
                    },
                ],
                hash: '#espresso'
            },
            {
                nombreVariedad: 'Lungo',
                capsulas: [{
                        nombre: 'Envivo Lungo',
                        tipoCafe: 'Café potente y caramelizado.',
                        intensidad: 9,
                        precio: 50,
                        precioSup: 00,
                        descripcion: 'Envivo Lungo revela un cuerpo poderoso y un nivel admirable de intensidad (9). Para lograrlo, este café de tueste prolongado es una mezcla de una exclusiva Robusta de Veracruz, México; combinada con una distintiva Arábica de la India procesada de forma especial. El resultado es un potente y refinado perfil que resalta notas tostadas y esencias únicas que evocan a maderas aromáticas y pan de jengibre.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372648394782/envivolungo-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7654.10',
                    },
                    {
                        nombre: 'Fortissio Lungo',
                        tipoCafe: 'Café intenso y con mucho cuerpo.',
                        intensidad: 8,
                        precio: 50,
                        precioSup: 00,
                        descripcion: 'Al igual que en la época de los barcos de vela, los granos de Arábica de la región de Malabar, situada al oeste de la India, se exponen a los vientos del monzón después de ser recolectados para revelar un perfil aromático inconfundible, rico en notas de cereales. Posteriormente mezclamos esta variedad con los granos de Arábica procedentes de América Central y del Sur para crear un Lungo con un carácter verdaderamente intenso.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372651507742/fortissiolungo-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7834.10',
                    },
                    {
                        nombre: 'Vivalto Lungo',
                        tipoCafe: 'Café complejo y equilibrado.',
                        intensidad: 4,
                        precio: 50,
                        precioSup: 00,
                        descripcion: 'Este blend complejo de Arábicas de América del Sur y del este de África tostados por separado es un café equilibrado que combina aromas tostados con sutiles notas florales.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372655013918/vivaltolungo-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7810.10',
                    },
                    {
                        nombre: 'Linizio Lungo',
                        tipoCafe: 'Café redondo y suave.',
                        intensidad: 4,
                        precio: 50,
                        precioSup: 00,
                        descripcion: 'Linizio Lungo es una mezcla de Arábicas selectos que realza las notas de malta y cereales y que es suave y redonda en el paladar.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372657307678/liniziolungo-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7622.10',
                    },
                ],
                hash: '#lungo'
            },
            {
                nombreVariedad: 'Decaffeinato',
                capsulas: [{
                        nombre: 'Ispirazione Ristretto Italiano Decaffeinato',
                        tipoCafe: 'Café poderoso y contrastante',
                        intensidad: 10,
                        precio: 50,
                        precioSup: 00,
                        descripcion: 'Una gota de exquisitez: la esencia de la tradición icónica de beber café de Italia. Esta es nuestra propia versión del embajador de todos los cafés italianos. No es reflejo de ninguna ciudad; es Italia.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372661403678/decaffeinato-ristretto-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7702.10',
                    },
                    {
                        nombre: 'Ispirazione Firenze Arpeggio Decaffeinato',
                        tipoCafe: 'Café intenso y cremoso',
                        intensidad: 9,
                        precio: 50,
                        precioSup: 00,
                        descripcion: 'Esta exquisita combinación es un fiel reflejo del significado cultural de Florencia: un centro intelectual en el corazón de Italia, que atrae influencias de todo el país. El estilo tostado de Ispirazione Firenze Arpeggio combina estas influencias combinando notas frutales que se encuentran tradicionalmente en el norte de Italia con notas a cacao del sur, que culminan en una taza de café aterciopelada, densa y cremosa.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372663435294/decaffeinato-arpegio-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7697.10',
                    },
                    {
                        nombre: 'Volluto Decaffeinato',
                        tipoCafe: 'Café dulce y ligero',
                        intensidad: 4,
                        precio: 50,
                        precioSup: 00,
                        descripcion: 'Volluto es un café puro Arábica de América del Sur ligeramente tostado revela dulces notas de galleta realzadas por un punto de acidez y una nota afrutada.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372667924510/decaffeinato-voluto-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7645.10',
                    },
                    {
                        nombre: 'Vivalto Lungo Decaffeinato',
                        tipoCafe: 'Café complejo y equilibrado.',
                        intensidad: 4,
                        precio: 50,
                        precioSup: 00,
                        descripcion: 'Este blend complejo de Arábicas de América del Sur y del este de África tostados por separado es un café equilibrado que combina aromas tostados con sutiles notas florales.',
                        fotos: [{
                            urlFoto: 'https://www.nespresso.com/ecom/medias/sys_master/public/12372665303070/decaffeinato-vivaltolunfo-frontal.jpg?',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7646.10',
                    },
                ],
                hash: '#decaffeinato'
            },
            {
                nombreVariedad: 'Barista Creations',
                capsulas: [{
                        nombre: 'Barista Caramel Crème',
                        tipoCafe: 'Café con aroma a caramelo.',
                        intensidad: 6,
                        precio: 52,
                        precioSup: 00,
                        descripcion: 'El cálido sabor del caramelo suaviza las notas tostadas de nuestro espresso más equilibrado y suave, dejándonos una sensación exquisita de DULZURA. Del café BARISTA CREATIONS Caramel Créme Brulee afloran notas cremosas a caramelo, coco y vainilla. La base de este café aromatizado consiste en algunos de los mejores Arábicas de América del Sur. Mezclamos granos de Bourbon brasileños con café colombiano lavado y los tostamos por separado para combinarlos en una perfecta armonía.',
                        fotos: [{
                            urlFoto: 'images/caps/caramel-creme-brulee.png',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7699.10',
                    },
                    {
                        nombre: 'Barista Vanilla Éclair',
                        tipoCafe: 'Café con aroma a vainilla.',
                        intensidad: 6,
                        precio: 52,
                        precioSup: 00,
                        descripcion: 'El sabor de BARISTA CREATIONS Vanilla Éclair se fusiona en perfecta armonía con un espresso suave y equilibrado, ofreciendo una agradable COMPAÑÍA. Elaborado con Arábicas de América Central y del Sur, su base ha sido creada a partir de Arábicas brasileños y colombianos, es famosa por su sabor suave y sus notas a cereales malteados.',
                        fotos: [{
                            urlFoto: 'images/caps/vanilla-eclair.png',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7698.10',
                    },
                    {
                        nombre: 'Barista Cocoa Truffle',
                        tipoCafe: 'Café con aroma a cacao amargo',
                        intensidad: 6,
                        precio: 52,
                        precioSup: 00,
                        descripcion: 'El sabor a cacao negro se une a las notas a cereales malteados del Espresso base del BARISTA CREATIONS Cocoa Truffle. Es una unión AFECTIVA que nos recuerda a las trufas de chocolate negro. El Espresso utilizado como base consiste en una mezcla de los mejores Arábicas de América del Sur: dulces granos de Bourbon de Brasil en armonía con café colombiano lavado.',
                        fotos: [{
                            urlFoto: 'images/caps/cocoa-truffle.png',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7700.10',
                    },
                    {
                        nombre: 'Chiaro',
                        tipoCafe: 'Para un indulgente cappuccino dulce',
                        intensidad: 0,
                        precio: 52,
                        precioSup: 00,
                        descripcion: 'Inspirados en los baristas de Brooklyn, quienes valoran la dulzura natural del café y aplican un tueste ligero para protegerla, seleccionamos con cuidado variedades de cafés arábicas de Kenia e Indonesia para desarrollar esta suave mezcla que revela sus notas a galleta y caramelo al combinarse con la leche.',
                        fotos: [{
                            urlFoto: 'images/caps/chiaro.png',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7547.10',
                    },
                    {
                        nombre: 'Scuro',
                        tipoCafe: 'Para un poderoso Espresso Macchiato',
                        intensidad: 0,
                        precio: 52,
                        precioSup: 00,
                        descripcion: 'Basándonos en el estilo de los baristas de Melbourne –maestros en los sabores intensos, aunque perfectamente balanceados – elegimos variedades arábicas de cafés de Colombia y Etiopía y las tostamos por separado con un gran contraste para crear un sabor intenso de café tostado que combina a la perfección con la leche.',
                        fotos: [{
                            urlFoto: 'images/caps/scuro.png',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7716.10',
                    },
                    {
                        nombre: 'Corto',
                        tipoCafe: 'Para un increíble ristretto negro',
                        intensidad: 0,
                        precio: 52,
                        precioSup: 00,
                        descripcion: 'Inspirados en los sabores de los tuestes oscuros y en las texturas gruesas que consiguen los expertos baristas de España, seleccionamos una mezcla de variedades de cafés arábicas y robustas africanas a las que les dimos un tueste largo y oscuro para crear un sabor potente y de gran cuerpo que se suaviza y torna más cremoso con un toque de leche. Su perfil aromático es intensamente tostado con notas ahumadas y especiadas.',
                        fotos: [{
                            urlFoto: 'images/caps/corto.png',
                            fotoAlt: 'Vista 1',
                        }],
                        ctaCode: '7546.10',
                    }
                ],
                hash: '#variations'
            }
        ];

        $scope.loadingSkeleton = function () {
            var mostrar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!mostrar) {
                $('#skeleton_capsulas').css({
                    'opacity': '0',
                    'z-index': 10000,
                    'display': 'none'
                });
            } else {
                $('#skeleton_capsulas').css({
                    'opacity': '1',
                    'z-index': 10000,
                    'position': 'relative',
                    'display': 'block'
                });
            }
        };

        $scope.mostrarModal = function (idProducto, esCapsula, idxVariedad) {
            console.log(idProducto)
            if (esCapsula) {
                $scope.modalProducto.esCapsula = true;
                $scope.modalProducto.tipoProducto = 'Cápsulas';
                /*$scope.modalProducto.nombreProducto = $scope.variedades[idxVariedad].capsulas[idProducto].nombre;
                $scope.modalProducto.tipoCafe = $scope.variedades[idxVariedad].capsulas[idProducto].tipoCafe;
                $scope.modalProducto.intensidad = $scope.variedades[idxVariedad].capsulas[idProducto].intensidad;
                $scope.modalProducto.descripcion = $scope.variedades[idxVariedad].capsulas[idProducto].descripcion;
                $scope.modalProducto.precioProducto = $scope.variedades[idxVariedad].capsulas[idProducto].precio;
                $scope.modalProducto.precioSup = $scope.variedades[idxVariedad].capsulas[idProducto].precioSup;
                $scope.modalProducto.fotos = $scope.variedades[idxVariedad].capsulas[idProducto].fotos;
                $('#modal-add-to-bag').html('');
                $('#modal-add-to-bag').html('<div class="add-to-bag" data-product-id="' + $scope.variedades[idxVariedad].capsulas[idProducto].ctaCode + '" data-button-size="medium" id="btn-add-to-bag-modal">Agregar al carrito</div>');*/
                $scope.modalProducto.nombreProducto = $scope.listCapsulas[idProducto].nombre;
                $scope.modalProducto.tipoCafe = $scope.listCapsulas[idProducto].tipoCafe;
                $scope.modalProducto.intensidad = $scope.listCapsulas[idProducto].intensidad;
                $scope.modalProducto.descripcion = $scope.listCapsulas[idProducto].descripcion;
                $scope.modalProducto.precioProducto = $scope.listCapsulas[idProducto].precio;
                $scope.modalProducto.precioSup = $scope.listCapsulas[idProducto].precioSup;
                $scope.modalProducto.fotos = $scope.listCapsulas[idProducto].fotos;
                $('#modal-add-to-bag').html('');
                $('#modal-add-to-bag').html('<div class="add-to-bag" data-product-id="' + $scope.listCapsulas[idProducto].ctaCode + '" data-button-size="small" id="btn-add-to-bag-modal">Agregar al carrito</div>');
                $scope.reiniciarBotonesDeCompra('modal-add-to-bag');
            } else {
                $scope.modalProducto.esCapsula = false;
                $scope.modalProducto.tipoProducto = 'Máquinas';
                $scope.modalProducto.nombreProducto = $scope.maquinas[idProducto].nombre;
                $scope.modalProducto.descripcion = $scope.maquinas[idProducto].textoDescripcion;
                $scope.modalProducto.credito = $scope.maquinas[idProducto].credito;
                $scope.modalProducto.cuotas = $scope.calcularCuotas($scope.maquinas[idProducto].valorMaquina, $scope.maquinas[idProducto].cantCuotas);
                $scope.modalProducto.precioAnterior = $scope.maquinas[idProducto].precioAnterior;
                $scope.modalProducto.precioProducto = $scope.maquinas[idProducto].valorMaquina;
                $scope.modalProducto.colores = $scope.maquinas[idProducto].colores;
                $scope.modalProducto.fotos = $scope.maquinas[idProducto].colores[$scope.colorSeleccionado].fotos;
                $('#modal-add-to-bag').html('');
                $('#modal-add-to-bag').html('<div class="add-to-bag" data-product-id="' + $scope.maquinas[idProducto].colores[$scope.colorSeleccionado].ctaCode + '" data-button-size="medium" id="btn-add-to-bag-modal">Agregar al carrito</div>');
                $scope.reiniciarBotonesDeCompra('modal-add-to-bag');
                $scope.maquinaActiva = idProducto;
            }
            $('#modalProducto').modal('show');
        }
        $scope.calcularCuotas = function (paraPrecio, enCuotas) {
            return (paraPrecio / enCuotas).toFixed(2);
        }
        $scope.mostrarMaquina = function (cualMaquina) {
            $scope.colorSeleccionado = 0;
            $scope.maquinaVisible = cualMaquina;
            $('#botones_maquinas_' + cualMaquina).html('');
            $('#botones_maquinas_' + cualMaquina).html('<div class="add-to-bag" data-product-id="' + $scope.maquinas[$scope.maquinaVisible].colores[0].ctaCode + '" data-button-size="medium" id="btn-add-to-bag-maquinas">Agregar Máquina</div>');
            // mosaic.initializeAllFreeHTMLModules(document.getElementById('botones_maquinas_' + cualMaquina));
            $('.owl-maquinas').trigger("to.owl.carousel", [cualMaquina, 250]);

        }


        $scope.elegirColor = function (cual, idMaqui) {
            $scope.colorSeleccionado = cual;
            $scope.colorSeleccionadoModal = cual;
            $scope.maquinaOn = idMaqui;
            $('#botones_maquinas_' + idMaqui).html('');
            $('#botones_maquinas_' + idMaqui).html('<div class="add-to-bag" data-product-id="' + $scope.maquinas[$scope.maquinaOn].colores[cual].ctaCode + '" data-button-size="medium" id="btn-add-to-bag-maquinas">Agregar Máquina </div>');
            // mosaic.initializeAllFreeHTMLModules(document.getElementById('botones_maquinas_' + idMaqui));
        }
        $scope.elegirColorModal = function (cual) {
            $scope.modalProducto.fotos = $scope.maquinas[$scope.maquinaActiva].colores[cual].fotos;
            $scope.colorSeleccionadoModal = cual;
            $('#btn-add-to-bag-modal').data('product-id', $scope.maquinas[$scope.maquinaActiva].colores[cual].ctaCode);
            $('#modal-add-to-bag').html('');
            $('#modal-add-to-bag').html('<div class="add-to-bag" data-product-id="' + $scope.maquinas[$scope.maquinaActiva].colores[cual].ctaCode + '" data-button-size="medium" id="btn-add-to-bag-modal">Agregar al carrito</div>');
            // mosaic.initializeAllFreeHTMLModules(document.getElementById('modal-add-to-bag'));
        }
        $scope.formatearNumero = function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
        $scope.getFotoDePortada = function (queMaquina) {
            try {
                for (i = 0; i < $scope.maquinas[queMaquina].colores[$scope.colorSeleccionado].fotos.length; i++) {
                    if ($scope.maquinas[queMaquina].colores[$scope.colorSeleccionado].fotos[i].esPortada) {
                        return $scope.maquinas[queMaquina].colores[$scope.colorSeleccionado].fotos[i];
                        break;
                    }
                }
            } catch (e) {}
        }
        $scope.formatearDecimales = function (number, digits) {
            return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
        }
        $scope.reiniciarBotonesDeCompra = function (paraId) {
            // mosaic.initializeAllFreeHTMLModules(document.getElementById(paraId));
        }

        $scope.generarListadoCapsulas = function () {
            var tempArray = [];
            for (i = 0; i < $scope.variedades.length; i++) {
                for (j = 0; j < $scope.variedades[i].capsulas.length; j++) {
                    nuevoElemento = $scope.variedades[i].capsulas[j];
                    nuevoElemento.idVariedad = i;
                    nuevoElemento['hash'] = $scope.variedades[i].nombreVariedad;
                    tempArray.push(nuevoElemento);
                }
            }

            $scope.listCapsulas = tempArray;


        }
        $scope.generarListadoCapsulas();



        $scope.centrarEnCapsulaz = function (deVariedad) {
            var capsulas = $('.owlx-capsulaz .ec-item');
            var array = [];
            for (i = 0; i < capsulas.length; i++) {
                if ($(capsulas[i]).data('variedad') == deVariedad) {
                    array.push(capsulas[i]);
                    console.log(array);
                    $('.owl-capsulaz').trigger("to.owl.carousel", [i, 250]);
                    // $(capsulas[i]).addClass('active center');
                    break;
                }
            }
        }


        function agregarFondo(value) {
            var arrayCapsulas = $('.ec-item');
            for (var c = 0; c <= arrayCapsulas.length; c++) {
                if ($(arrayCapsulas[c]).data('variedad') != undefined) {
                    hash = $(arrayCapsulas[c]).data('variedad');
                    if (hash == value) {
                        $(arrayCapsulas[c]).css({
                            'border-bottom-color': '#f47737',
                            // 'filter':'blur(0) grayscale(0)',
                            'opacity': '1',
                            WebkitTransition: '.2s ease-in-out',
                            MozTransition: '.2s ease-in-out',
                            MsTransition: '.2s ease-in-out',
                            OTransition: '.2s ease-in-out',
                            transition: '.2s ease-in-out'
                        });
                    } else {
                        $(arrayCapsulas[c]).css({
                            // 'filter':'blur(1px) grayscale(.4)',
                            'opacity': '.5',
                            'border-bottom-color': 'transparent'
                        });
                    }

                }

            }
        }

        $('.owl-capsulaz').on('initialized.owl.carousel', function (e) {
            elementoActivo = $('.owl-capsulaz .owl-item')[e.item.index];
            variedadCap = $(elementoActivo).children('.ec-item').data('variedad');
            // $scope.variedadVisible = variedadCap;
            agregarFondo(variedadCap);
            menu = $('.nav-link.categorias');
            $(menu).each(function (index, value) {
                var variedadMenu = $(value).data('variedad');
                if (variedadCap == variedadMenu) {
                    $(this).addClass('active');
                } else {
                    $(value).removeClass('active');
                }
            });

        });

        $('.owl-capsulaz').on('translated.owl.carousel', function (e) {
            elementoActivo = $('.owl-capsulaz .owl-item')[e.item.index];
            elementoActivo = $(elementoActivo).children('.ec-item').data('variedad');
            variedadCap = elementoActivo.trim();
            $scope.variedadVisible = variedadCap;
            $scope.$apply();
            menu = $('.nav-link.categorias');
            $(menu).each(function (index, value) {
                var variedadMenu = $(value).data('variedad');

                if (variedadCap == variedadMenu) {
                    $(this).addClass('active');
                    agregarFondo(variedadCap);
                } else {
                    $(value).removeClass('active');
                }
            });

        });

        $scope.centrarEnCapsulas = function (deVariedad) {
            for (i = 0; i < $scope.listCapsulas.length; i++) {
                if ($scope.listCapsulas[i].hash == deVariedad) {
                    $scope.variedadVisible = deVariedad;
                    $('.owl-capsulaz').trigger("to.owl.carousel", [i, 250]);

                    break;
                }
            }
        }

        /* Select Capsulas */
        $scope.selectedItemChanged = function () {
            var variedadSelected = $scope.variedadVisible
            for (i = 0; i < $scope.listCapsulas.length; i++) {
                if ($scope.listCapsulas[i].hash == variedadSelected) {
                    // console.log(deVariedad);
                    $('.owl-capsulaz').trigger("to.owl.carousel", [i, 250]);
                    break;
                }
            }
        }

        /* Eventos Maquina*/

        $('.owl-maquinas').on('translated.owl.carousel', function (e) {
            activeMachine = $('.owl-maquinas .owl-item')[e.item.index];
            activeMachineNav = $(activeMachine).children('#maquinas').data('index');
            activeMachineSelect = $(activeMachine).children('#maquinas').data('nombremaquina');
            $scope.maquinaCarouselVisible = activeMachineSelect;
            $scope.$apply();
            $('.nav-link.maquinaz').each(function (index, value) {
                var variedadMenu = $(value).data('nombremaquina');
                if (activeMachineNav == variedadMenu) {
                    $(this).addClass('active');
                } else {
                    $(value).removeClass('active');
                }
            });
        });

        $scope.selectedMachineChanged = function () {
            var maquinaSelected = $scope.maquinaCarouselVisible
            // console.log(maquinaSelected)
            for (i = 0; i < $scope.maquinas.length; i++) {
                if ($scope.maquinas[i].nombre == maquinaSelected) {
                    // console.log(deVariedad);
                    $('.owl-maquinas').trigger("to.owl.carousel", [i, 250]);
                    break;
                }
            }
        }

    
       


        $scope.loadingSkeleton(false);
        $scope.variedadVisible = $scope.variedades[0].nombreVariedad;
        $scope.maquinaCarouselVisible = $scope.maquinas[0].nombre;
    }])
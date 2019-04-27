module.exports = {
    title: 'Protingas Blogas',
    description: 'Programavimo pamokos',
    themeConfig: {
        nav: [
            { text: 'Pradžia', link: '/' },
            { text: 'Mokomoji medžiaga', link: '/kursai/' },
            { text: 'Straipsniai', link: '/straipsniai/' },
            { text: 'Naudinga', link: '/naudinga/' },
            { text: 'Naujienos', link: '/naujienos/' },
            { text: 'Apie mus', link: '/apie-mus/' },
            { text: 'Kontaktai', link: '/kontaktai/' },
        ],
        sidebar: {
            '/kursai/cpp/': [
                '',
            ],
            '/kursai/csharp/': [
                '',
            ],
        },
        lastUpdated: 'Paskutinis atnaujinimas',
    },
}

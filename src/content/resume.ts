interface resumeContentProps {
    webTitle: string
    list: { key: string, listText: string, }[]
    experience: { firstDate: string, lastDate?: string,title: string, content: string | string[], }[]
    toolsInfo: { subtitle: string, title: string, }[]
    education: { firstDate: string, lastDate?: string, title: string ,content: string }[]
    hobbies: { subtitle: string, title: string, }[]
}

const resumeContent: resumeContentProps = {
    webTitle: "Resume",
    list: [
        {
            key: 'experience',
            listText: "EXPERIENCE",
        },
        {
            key: 'tools of choice',
            listText: "TOOLS OF CHOICE",
        },
        {
            key: 'education',
            listText: "EDUCATION",
        },
        {
            key: 'hobbies',
            listText: "HOBBIES",
        }
    ],
    experience: [
        {
            firstDate: '2022/3',
            title: 'E-commerce Personnel',
            content: [
                'Completed picking, packing, and shipping processes.',
                'Handled customer service forms and reverse logistics.'
            ],
        },
        {
            firstDate: '2021/09',
            lastDate: '2022/01',
            title: 'Administrative Assistant',
            content: [
                'Assisted students with course-related issues.',
                'Helped organize the office.',
                'Assisted with office-related tasks.',
                'Answered and managed phone calls.'
            ]
        },
        {
            firstDate: '2021/01',
            lastDate: '2021/02',
            title: 'Winter Vacation Intern',
            content: [
                'Received and inspected logistics goods, performed inventory counts.',
                'Engaged in logistics goods reorganization and packaging.',
                'Maintained and cleaned the workspace.',
                'Handled goods storage, delivery scheduling, and shipment tasks.',
                'Managed retail inventory control.'
            ]
        }
    ],
    toolsInfo:[
        {
            subtitle:'Development',
            title:'HTML'
        },
        {
            subtitle:'Development',
            title:'CSS'
        },
        {
            subtitle:'Development',
            title:'SASS'
        },
        {
            subtitle:'Development',
            title:'JavaScript'
        },
        {
            subtitle:'Development',
            title:'TypeScript'
        },
        {
            subtitle:'Development',
            title:'React'
        }
    ],
    education:[
        {
            firstDate: '2021/09',
            title: 'Chien Hsin University of Science and Technology',
            content: 'Department of Information Management',
        },
        {
            firstDate: '2018/09',
            lastDate: '2021/06',
            title: 'Private Yangde High School',
            content: 'Department of E-commerce',
        }
    ],
    hobbies:[
        {
            subtitle:'Hobbies',
            title:'Coding'
        },
        {
            subtitle:'Hobbies',
            title:'Reading Books'
        },
        {
            subtitle:'Hobbies',
            title:'Watching Movies'
        },
        {
            subtitle:'Hobbies',
            title:'Playing Games'
        },
        {
            subtitle:'Hobbies',
            title:'Traveling'
        }
    ]
}

export default resumeContent
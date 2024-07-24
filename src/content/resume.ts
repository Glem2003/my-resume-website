interface resumeContentProps {
    webTitle: string
    list: { key: string, listText: string, }[]
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
        },
        {
            key: 'references',
            listText: "REFERENCES",
        },
    ],
}

export default resumeContent
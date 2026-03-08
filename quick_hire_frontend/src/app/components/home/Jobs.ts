export type Job = {
    id: number
    company: string
    role: string
    location: string
    description: string
    tags: string[]
    type: string
    logo: string
}

export const jobs: Job[] = [
    {
        id: 1,
        company: "Revolut",
        role: "Email Marketing",
        location: "Madrid, Spain",
        description: "Revolut is looking for Email Marketing to help team ma ...",
        tags: ["Marketing", "Design"],
        type: "Full Time",
        logo: "https://img.freepik.com/free-vector/vector-bright-splashes_2065-436.jpg",
    },
    {
        id: 2,
        company: "Dropbox",
        role: "Brand Designer",
        location: "San Francisco, US",
        description: "Dropbox is looking for Brand Designer to help the team t ...",
        tags: ["Design", "Business"],
        type: "Full Time",
        logo: "https://img.freepik.com/free-vector/vector-bright-splashes_2065-436.jpg",
    },
    {
        id: 3,
        company: "Pitch",
        role: "Email Marketing",
        location: "Berlin, Germany",
        description: "Pitch is looking for Customer Manager to join marketing t ...",
        tags: ["Marketing"],
        type: "Full Time",
        logo: "https://img.freepik.com/free-vector/vector-bright-splashes_2065-436.jpg",
    },
    {
        id: 4,
        company: "Blinklist",
        role: "Visual Designer",
        location: "Granada, Spain",
        description: "Blinkist is looking for Visual Designer to help team desi ...",
        tags: ["Design"],
        type: "Full Time",
        logo: "https://img.freepik.com/free-vector/vector-bright-splashes_2065-436.jpg",
    },
    {
        id: 5,
        company: "ClassPass",
        role: "Product Designer",
        location: "Manchester, UK",
        description: "ClassPass is looking for Product Designer to help us...",
        tags: ["Marketing", "Design"],
        type: "Full Time",
        logo: "https://img.freepik.com/free-vector/vector-bright-splashes_2065-436.jpg",
    },
    {
        id: 6,
        company: "Canva",
        role: "Lead Designer",
        location: "Ontario, Canada",
        description: "Canva is looking for Lead Engineer to help develop n ...",
        tags: ["Design", "Business"],
        type: "Full Time",
        logo: "https://img.freepik.com/free-vector/vector-bright-splashes_2065-436.jpg",
    },
    {
        id: 7,
        company: "GoDaddy",
        role: "Brand Strategist",
        location: "Marseille, France",
        description: "GoDaddy is looking for Brand Strategist to join the team...",
        tags: ["Marketing"],
        type: "Full Time",
        logo: "https://img.freepik.com/free-vector/vector-bright-splashes_2065-436.jpg",
    },
    {
        id: 8,
        company: "Twitter",
        role: "Data Analyst",
        location: "San Diego, US",
        description: "Twitter is looking for Data Analyst to help team desi ...",
        tags: ["Technology"],
        type: "Full Time",
        logo: "https://img.freepik.com/free-vector/vector-bright-splashes_2065-436.jpg",
    },
]
import './Myexp.css'
import google from '../../assets/images/google.svg'
import apple from '../../assets/images/apple.svg'
import youtube from '../../assets/images/youtube.svg'




function Myexp() {
    const data=[
        {
            id: 'google',
            icon: google,
            title: 'Lead Software Engineer at Google',
            startDate: 'Nov 2019',
            endDate: 'Present',
            description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google'score search algorithms. Collaborating with a dynamic team of engineersI contributed to the enhancement of search accuracy and efficiency optimizing user experiences for millions of users worldwide."
        },
        {
            id: 'youtube',
            icon: youtube,
            title: 'Software Engineer at Youtube',
            startDate: 'Nov 2019',
            endDate: 'Present',
            description: "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
        },
        {
            id: 'apple',
            icon: apple,
            title: 'Junior Software Engineer at Apple',
            startDate: 'Nov 2019',
            endDate: 'Present',
            description: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team."
        },
    ]


    return (

        <>
        <section className='myexperience'>
            <div className="container">
                <h2 className='Myexph2'>My <span>Experience</span></h2>
                <div className="article-wrapper">
                    {
                        data.map(articleData =>{
                            return (
                                <article key={articleData.id}>
                                    <div className="article-header">
                                        <div>
                                            <img src={articleData.icon} alt={articleData.title} />
                                            <h3>{articleData.title}</h3>
                                        </div>
                                        <p>{articleData.startDate} - {articleData.endDate}</p>
                                    </div>
                                    <div>
                                        <p>{articleData.description}</p>
                                    </div>
                                </article>
                            )
                            
                        })
                    }
                </div>
            </div>
        </section>

        </>
    )
}



export default Myexp
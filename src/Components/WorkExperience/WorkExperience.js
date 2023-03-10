import 'materialize-css/dist/css/materialize.min.css'

function WorkExperience({ data }) {
    return (
        <div className='section row'>
            <div className='col left-align s12'>
                <h6 className='sectionHead'>WORK EXPERIENCE</h6>
                {data.map(job =>
                        <div key={job.position + job.name} className='col left-align s12'>
                            <div className='col s8'><h6 className='inline jobTitle'>{job.position}</h6><h6 className='inline jobCompany'>|&nbsp; {job.name}</h6></div>
                            <div className='col s4 right-align'><h6 className='jobDates'>{job.startDate} - {job.endDate}</h6></div>

                            <div className='col left-align s12 valign-wrapper'>
                                <i className="tiny material-icons icon">open_in_new</i>
                                <a>{job.url}</a>
                            </div>

                            <p className='col s12'>{job.summary}</p>
                            
                            {job.highlights.map(e =><div key={e} className="col skill-card grey lighten-2"><p className="card-content">{e}</p></div>)}
                        </div>
                )}
            </div>
        </div>
    )
}

export default WorkExperience

const FeatureItem = ({ title, description}: {title: string, description: string}) => {
  return (
    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
      <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
          <g strokeWidth="2">
            <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
            <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
            <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
            <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
          </g>
        </g>
      </svg>
      <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{title}</h4>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  )
}

const FEATURES = [
  {title: 'Full Mock Interviews', description: 'Our AI-based interview coach provides personalized interview preparation based on your skills, experience, and the job you are applying for. Repeated interview conversations ensure you are fully prepared for the big day.'},
  {title: 'Instant Feedback', description: '(Coming Soon) Our AI-based interview coach provides instant feedback on your interview performance. It analyzes your responses and provides you with feedback on your body language, tone, and content to help you improve your interview skills.'},
  {title: 'Speech to Text', description: 'Automatic dictation so you can speak your answers without having to type and get a realistic interview experience'},
]

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-12">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Features</h2>
            <p className="text-xl text-gray-600">We are quickly improving Interviewly AI to give you the most comprehensive interview preparation experience</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {FEATURES.map((f, index) => (
              <FeatureItem
                key={index}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
import Icon from '@/components/ui/AppIcon';

const Education = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
            Education & Credentials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strong academic foundation in computer science with continuous professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Degree Card */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3182ce] to-[#2c5282] rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name="AcademicCapIcon" size={40} variant="solid" className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-[#1a365d] mb-2">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-xl text-[#3182ce] font-semibold mb-4">
                  University of Batangas
                </p>
                <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                  <span className="flex items-center gap-2">
                    <Icon name="CalendarIcon" size={18} variant="outline" />
                    2012 - 2016
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon name="MapPinIcon" size={18} variant="outline" />
                    Batangas, Philippines
                  </span>
                </div>
                
                {/* Relevant Coursework */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-[#1a365d] mb-3">Relevant Coursework</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Data Structures & Algorithms',
                      'Software Engineering',
                      'Database Management Systems',
                      'Web Development',
                      'Object-Oriented Programming',
                      'Computer Networks',
                      'Operating Systems',
                      'Mobile Application Development'
                    ]?.map((course) => (
                      <div key={course} className="flex items-center gap-2">
                        <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-green-500" />
                        <span className="text-gray-700">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Achievements */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-[#1a365d] mb-2">Academic Highlights</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Icon name="StarIcon" size={18} variant="solid" className="text-yellow-500 flex-shrink-0 mt-1" />
                      <span>Dean's List - 6 consecutive semesters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="StarIcon" size={18} variant="solid" className="text-yellow-500 flex-shrink-0 mt-1" />
                      <span>Best Capstone Project Award - E-commerce Platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="StarIcon" size={18} variant="solid" className="text-yellow-500 flex-shrink-0 mt-1" />
                      <span>Programming Competition Winner - Regional Level</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Icon name="ShieldCheckIcon" size={32} variant="solid" className="text-[#3182ce]" />
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'AWS Certified Solutions Architect',
                  issuer: 'Amazon Web Services',
                  year: '2023'
                },
                {
                  name: 'Microsoft Certified: Azure Developer',
                  issuer: 'Microsoft',
                  year: '2022'
                },
                {
                  name: 'Certified Blockchain Developer',
                  issuer: 'Blockchain Council',
                  year: '2021'
                },
                {
                  name: 'Oracle Certified Java Programmer',
                  issuer: 'Oracle',
                  year: '2020'
                }
              ]?.map((cert) => (
                <div key={cert?.name} className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors duration-300">
                  <h4 className="text-lg font-bold mb-2">{cert?.name}</h4>
                  <p className="text-gray-300 text-sm mb-1">{cert?.issuer}</p>
                  <p className="text-[#3182ce] font-semibold">{cert?.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;